#!/usr/bin/env python3
"""Benchmark OCR engines on cam-nang PDF (Vietnamese scan) only."""
import json
import os
import re
import subprocess
import sys
import time
from pathlib import Path

import fitz

os.environ.setdefault("PADDLE_PDX_DISABLE_MODEL_SOURCE_CHECK", "True")

PDF_DIR = Path("/Users/nktam/Documents/Lop6/downloads/cam-nang-lich-su-dia-ly-lop-5")
OUT_DIR = Path(__file__).resolve().parent / "ocr_benchmark_output"
DPI = 300

# Pages with dense Vietnamese text (from Paddle scan of this PDF set)
TEST_PAGES = [
    ("SECTION 1 - CONTENT.pdf", 1, "Niên biểu — Bắc thuộc"),
    ("SECTION 1 - CONTENT.pdf", 11, "Nhà Nguyễn — vua"),
    ("SECTION 2 - CONTENT 1.pdf", 2, "Ngô Quyền / Bạch Đằng"),
    ("SECTION 2 - CONTENT 1.pdf", 11, "Quang Trung"),
    ("SECTION 3 - CONTENT.pdf", 0, "Địa lý TP.HCM — giới thiệu"),
    ("SECTION 4 - CONTENT 1.pdf", 1, "Sáp nhập tỉnh 2025"),
    ("SECTION 5 - CONTENT.pdf", 0, "Địa lý thế giới — Châu Á"),
]

VI_CHARS = re.compile(
    r"[àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ"
    r"ÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ]"
)
QUIZ_KW = re.compile(
    r"C[âa]u\s*\d|Luy[eê]n\s*t[aâ]p|M[ÔO]N\s*H[ỌO]C|Ng[ôo]\s*Quy[eê]n|Quang\s*Trung|"
    r"B[aạ]ch\s*[ĐD]ằng|[ĐD][àa]\s*N[ẵa]ng|Hu[ếe]|H[ồo]\s*Ch[íi]\s*Minh",
    re.I,
)


def render_page(pdf_name: str, page_idx: int) -> Path:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    doc = fitz.open(PDF_DIR / pdf_name)
    page = doc[page_idx]
    mat = fitz.Matrix(DPI / 72, DPI / 72)
    pix = page.get_pixmap(matrix=mat, alpha=False)
    out = OUT_DIR / f"{pdf_name.replace(' ', '_')}_p{page_idx + 1}.png"
    pix.save(str(out))
    return out


def score_text(text: str) -> dict:
    t = text or ""
    vi = len(VI_CHARS.findall(t))
    kw = len(QUIZ_KW.findall(t))
    mc = len(re.findall(r"^\s*[A-D][\.\)]\s", t, re.M))
    words = len(re.findall(r"\S+", t))
    return {
        "chars": len(t),
        "words": words,
        "vietnamese_diacritics": vi,
        "quiz_keywords": kw,
        "mc_options": mc,
        "score": vi * 3 + kw * 15 + mc * 8 + min(words, 200),
    }


def ocr_tesseract(img: Path, lang: str, psm: str = "6") -> tuple[str, float]:
    t0 = time.perf_counter()
    r = subprocess.run(
        ["tesseract", str(img), "stdout", "-l", lang, "--psm", psm],
        capture_output=True,
    )
    text = r.stdout.decode("utf-8", errors="replace")
    return text, time.perf_counter() - t0


def ocr_easyocr(img: Path, reader) -> tuple[str, float]:
    t0 = time.perf_counter()
    results = reader.readtext(str(img), detail=0, paragraph=True)
    return "\n".join(results), time.perf_counter() - t0


def ocr_rapidocr(img: Path, engine) -> tuple[str, float]:
    t0 = time.perf_counter()
    result, _ = engine(str(img))
    lines = [item[1] for item in (result or [])]
    return "\n".join(lines), time.perf_counter() - t0


def ocr_paddleocr(img: Path, engine) -> tuple[str, float]:
    t0 = time.perf_counter()
    res = engine.predict(str(img))
    texts = []
    if res:
        item = res[0]
        texts = item.get("rec_texts") or []
    return "\n".join(texts), time.perf_counter() - t0


def ocr_vncv(img: Path) -> tuple[str, float]:
    import vncv

    t0 = time.perf_counter()
    out = vncv.extract_text(str(img), lang="vi", return_dict=True)
    if isinstance(out, dict):
        lines = [x.get("text", "") for x in out.get("results", [])]
    elif isinstance(out, list):
        lines = [x.get("text", "") if isinstance(x, dict) else str(x) for x in out]
    else:
        lines = [str(out)]
    return "\n".join(lines), time.perf_counter() - t0


def init_engines():
    engines: dict = {}

    for lang in ["vie", "eng", "vie+eng"]:
        for psm in ["3", "6"]:
            name = f"tesseract_{lang.replace('+', '_')}_psm{psm}"
            engines[name] = ("tesseract", lang, psm)

    try:
        import easyocr

        reader = easyocr.Reader(["vi", "en"], gpu=False, verbose=False)
        engines["easyocr_vi_en"] = ("easyocr", reader)
        print("Loaded EasyOCR", file=sys.stderr)
    except Exception as e:
        print(f"EasyOCR skip: {e}", file=sys.stderr)

    try:
        from rapidocr_onnxruntime import RapidOCR

        engines["rapidocr_onnx_default"] = ("rapidocr", RapidOCR())
        print("Loaded RapidOCR", file=sys.stderr)
    except Exception as e:
        print(f"RapidOCR skip: {e}", file=sys.stderr)

    try:
        from paddleocr import PaddleOCR

        engines["paddleocr_vi_ppocrv6"] = ("paddleocr", PaddleOCR(lang="vi"))
        print("Loaded PaddleOCR vi", file=sys.stderr)
    except Exception as e:
        print(f"PaddleOCR skip: {e}", file=sys.stderr)

    try:
        import vncv  # noqa: F401

        engines["vncv_vi"] = ("vncv", None)
        print("Loaded VNCV", file=sys.stderr)
    except Exception as e:
        print(f"VNCV skip: {e}", file=sys.stderr)

    return engines


def run_engine(kind, obj, img: Path, extra=None) -> tuple[str, float]:
    if kind == "tesseract":
        lang, psm = obj, extra
        return ocr_tesseract(img, lang, psm)
    if kind == "easyocr":
        return ocr_easyocr(img, obj)
    if kind == "rapidocr":
        return ocr_rapidocr(img, obj)
    if kind == "paddleocr":
        return ocr_paddleocr(img, obj)
    if kind == "vncv":
        return ocr_vncv(img)
    raise ValueError(kind)


def main():
    if not PDF_DIR.exists():
        print(f"Missing PDF dir: {PDF_DIR}", file=sys.stderr)
        sys.exit(1)

    print(f"Source: {PDF_DIR}", file=sys.stderr)
    engines = init_engines()
    all_results = []
    summary: dict = {}

    for pdf_name, page_idx, label in TEST_PAGES:
        img = render_page(pdf_name, page_idx)
        page_result = {
            "pdf": pdf_name,
            "page": page_idx + 1,
            "label": label,
            "image": str(img),
            "engines": {},
        }
        print(f"Page: {pdf_name} p{page_idx + 1}", file=sys.stderr)

        for name, spec in engines.items():
            kind = spec[0]
            try:
                if kind == "tesseract":
                    text, elapsed = run_engine(kind, spec[1], img, spec[2])
                else:
                    text, elapsed = run_engine(kind, spec[1], img)
                metrics = score_text(text)
                page_result["engines"][name] = {
                    "time_sec": round(elapsed, 2),
                    "metrics": metrics,
                    "text_preview": (text or "")[:1000],
                }
                summary.setdefault(name, {"total_score": 0, "total_time": 0, "pages": 0})
                summary[name]["total_score"] += metrics["score"]
                summary[name]["total_time"] += elapsed
                summary[name]["pages"] += 1
            except Exception as e:
                page_result["engines"][name] = {"error": str(e)}

        all_results.append(page_result)

    ranked = sorted(
        summary.items(),
        key=lambda x: (x[1]["total_score"], -x[1]["total_time"]),
        reverse=True,
    )

    report = {
        "source": str(PDF_DIR),
        "dpi": DPI,
        "test_pages": len(TEST_PAGES),
        "engines_tested": list(engines.keys()),
        "ranking": [
            {
                "engine": k,
                "total_score": v["total_score"],
                "avg_time_sec": round(v["total_time"] / max(v["pages"], 1), 2),
                "pages_ok": v["pages"],
            }
            for k, v in ranked
        ],
        "pages": all_results,
        "notes": {
            "pdf_type": "image-only scan (no text layer)",
            "paddle_version": "PP-OCRv6 via PaddleOCR 3.x predict()",
            "score_formula": "vi_diacritics*3 + quiz_kw*15 + mc_options*8 + min(words,200)",
        },
    }

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    report_path = OUT_DIR / "benchmark_report.json"
    with open(report_path, "w", encoding="utf-8") as f:
        json.dump(report, f, ensure_ascii=False, indent=2)

    md_path = OUT_DIR / "benchmark_report.md"
    with open(md_path, "w", encoding="utf-8") as f:
        f.write("# OCR Benchmark — Cẩm nang Lịch sử Địa lý Lớp 5\n\n")
        f.write(f"**Nguồn duy nhất:** `{PDF_DIR}`\n\n")
        f.write("PDF dạng **ảnh scan** (không có text layer).\n\n")
        f.write("## Xếp hạng\n\n")
        f.write("| # | Engine | Điểm | TG/trang | Trang OK |\n")
        f.write("|---|--------|------|----------|----------|\n")
        for i, row in enumerate(report["ranking"], 1):
            f.write(
                f"| {i} | `{row['engine']}` | {row['total_score']} | "
                f"{row['avg_time_sec']}s | {row['pages_ok']} |\n"
            )
        if report["ranking"]:
            best = report["ranking"][0]["engine"]
            f.write(f"\n## Mẫu output engine tốt nhất: `{best}`\n\n")
            for p in all_results:
                eng = p["engines"].get(best, {})
                preview = eng.get("text_preview", eng.get("error", ""))
                f.write(f"### {p['pdf']} — trang {p['page']} ({p['label']})\n\n")
                f.write(f"```\n{preview}\n```\n\n")

    print("\n=== RANKING ===")
    for i, row in enumerate(report["ranking"], 1):
        print(f"{i}. {row['engine']}: score={row['total_score']} avg={row['avg_time_sec']}s")
    print(f"\nJSON: {report_path}")
    print(f"MD:   {md_path}")


if __name__ == "__main__":
    main()
