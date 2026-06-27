#!/usr/bin/env python3
"""
OCR cam-nang PDF (Tesseract vie) → generate questions.js for lich_su & dia_ly.
Source ONLY: ~/Documents/Lop6/downloads/cam-nang-lich-su-dia-ly-lop-5
"""
import json
import re
import subprocess
import tempfile
from pathlib import Path

import fitz

PDF_DIR = Path("/Users/nktam/Documents/Lop6/downloads/cam-nang-lich-su-dia-ly-lop-5")
OUT_DIR = Path(__file__).resolve().parent / "ocr_extracted"
DATA_DIR = Path(__file__).resolve().parent.parent / "data" / "lop5"
DPI = 300

LICH_SU_FILES = [
    "SECTION 1 - CONTENT.pdf",
    "SECTION 2 - CONTENT 1.pdf",
    "SECTION 2 - CONTENT 2.pdf",
]
DIA_LY_FILES = [
    "SECTION 3 - CONTENT.pdf",
    "SECTION 4 - CONTENT 1.pdf",
    "SECTION 4 - CONTENT 2.pdf",
    "SECTION 5 - CONTENT.pdf",
]

TOPICS_LS = {
    "nien_bieu": "Niên biểu lịch sử",
    "nhan_vat": "Nhân vật lịch sử",
    "quang_trung": "Quang Trung & Tây Sơn",
    "bach_dang": "Chiến thắng Bạch Đằng",
    "khang_chien": "Kháng chiến bảo vệ Tổ quốc",
}
TOPICS_DL = {
    "tp_hcm": "Địa lý TP. Hồ Chí Minh",
    "vung_mien": "Vùng miền Việt Nam",
    "sap_nhap_2025": "Sáp nhập tỉnh 2025",
    "dia_ly_the_gioi": "Địa lý thế giới",
}

# Known OCR fixes for common errors in this PDF set
OCR_FIXES = [
    (r"\bNg Quyên\b", "Ngô Quyền"),
    (r"\bNgô Quyên\b", "Ngô Quyền"),
    (r"\bNam Han\b", "Nam Hán"),
    (r"\bBach Dang\b", "Bạch Đằng"),
    (r"\bQuang Trung\b", "Quang Trung"),
    (r"\bH Chí Minh\b", "Hồ Chí Minh"),
    (r"\bHồ Chí Minh\b", "Hồ Chí Minh"),
    (r"\bĐi Vit\b", "Đại Việt"),
    (r"\bđô hộ\b", "đô hộ"),
    (r"\bTCN\b", "TCN"),
    (r"\s+", " "),
]

YEAR_EVENT = re.compile(
    r"(?:(\d{1,4})\s*(?:TCN|tCN)?(?:\s*[-–—]\s*(\d{1,4}))?\s*:\s*)(.{15,180}?)(?:\n|$)",
    re.MULTILINE,
)
YEAR_ONLY = re.compile(r"^(\d{3,4})(?:\s*TCN)?(?:\s*[-–—]\s*(\d{1,4}))?\s*:")


def fix_text(t: str) -> str:
    for pat, rep in OCR_FIXES:
        t = re.sub(pat, rep, t)
    return t.strip()


def ocr_page(pdf_path: Path, page_idx: int) -> str:
    doc = fitz.open(pdf_path)
    page = doc[page_idx]
    pix = page.get_pixmap(matrix=fitz.Matrix(DPI / 72, DPI / 72), alpha=False)
    with tempfile.NamedTemporaryFile(suffix=".png", delete=False) as f:
        tmp = f.name
        pix.save(tmp)
    r = subprocess.run(
        ["tesseract", tmp, "stdout", "-l", "vie", "--psm", "3"],
        capture_output=True,
    )
    Path(tmp).unlink(missing_ok=True)
    return fix_text(r.stdout.decode("utf-8", errors="replace"))


def ocr_pdf(filename: str) -> list[dict]:
    path = PDF_DIR / filename
    doc = fitz.open(path)
    pages = []
    for i in range(doc.page_count):
        text = ocr_page(path, i)
        pages.append({"file": filename, "page": i + 1, "text": text})
        print(f"  OCR {filename} p{i+1}/{doc.page_count}")
    return pages


def classify_topic_ls(text: str, filename: str) -> str:
    t = text.lower()
    if "quang trung" in t or "tây sơn" in t or "1789" in t:
        return "quang_trung"
    if "bạch đằng" in t or "ngô quyền" in t or "938" in t:
        return "bach_dang"
    if "kháng chiến" in t or "1945" in t or "điện biên phủ" in t or "1975" in t:
        return "khang_chien"
    if "tượng" in t or "ông là" in t or "bà " in t:
        return "nhan_vat"
    return "nien_bieu"


def classify_topic_dl(text: str, filename: str) -> str:
    t = text.lower()
    if "thế giới" in t or "châu á" in t or "châu mỹ" in t or "châu âu" in t:
        return "dia_ly_the_gioi"
    if "sáp nhập" in t or "không thay đổi" in t or re.search(r"\d{2}\s+\w+\s+\w+", text):
        if "2025" in text or "ninh bình" in t or "thanh hóa" in t:
            return "sap_nhap_2025"
    if "hồ chí minh" in t or "sài gòn" in t or "tp.hcm" in t or "phần 3" in t:
        return "tp_hcm"
    return "vung_mien"


def extract_year_events(text: str) -> list[dict]:
    facts = []
    for m in YEAR_EVENT.finditer(text):
        y1, y2, event = m.group(1), m.group(2), m.group(3).strip()
        event = re.sub(r"\s{2,}", " ", event)
        if len(event) < 12 or event.count(" ") < 2:
            continue
        if re.search(r"(Page|Stemhouse|stemhouse)", event, re.I):
            continue
        year = y1 if not y2 else f"{y1}-{y2}"
        facts.append({"year": year, "event": event[:160]})
    return facts


def extract_geo_facts(text: str) -> list[dict]:
    facts = []
    # Diện tích / dân số TP.HCM
    m = re.search(
        r"diện tích khoảng\s*([\d.,]+)\s*km.*?dân số khoảng\s*([\d.,]+)\s*người",
        text,
        re.I | re.S,
    )
    if m:
        facts.append({"type": "hcm_area", "area": m.group(1).replace(",", "."), "pop": m.group(2).replace(",", ".")})
    m = re.search(r"(\d+)\s*đơn vị hành chính cấp xã", text, re.I)
    if m:
        facts.append({"type": "hcm_units", "count": m.group(1)})
    # Sáp nhập tỉnh rows: "21 TP. Đà Nẵng Quảng Nam + Đà Nẵng Nam Trung Bộ"
    for m in re.finditer(
        r"(\d{1,2})\s+([\w.\s]+?)\s+([\w\s\+]+?)\s+(Bắc Bộ|Bắc Trung Bộ|Nam Trung Bộ|Đông Nam Bộ|Nam Bộ|Tây Nguyên|Đông bằng sông)",
        text,
    ):
        facts.append({
            "type": "merge",
            "stt": m.group(1),
            "province": m.group(2).strip(),
            "merge_from": m.group(3).strip(),
            "region": m.group(4).strip(),
        })
    # World landmarks "1. Vạn Lý Trường Thành (Trung Quốc)"
    for m in re.finditer(r"(\d+)\.\s+([^(]+)\(([^)]+)\)", text):
        name, country = m.group(2).strip(), m.group(3).strip()
        if len(name) > 4 and len(country) > 2:
            facts.append({"type": "landmark", "name": name, "country": country})
    return facts


def extract_person_facts(text: str) -> list[dict]:
    facts = []
    for m in re.finditer(
        r"([A-ZÀÁẠẢÃÂĂÊÔƠƯĐ][^\n(]{4,40})\s*\((\d{3,4})\s*[-–—]\s*(\d{3,4})?\)",
        text,
    ):
        name = m.group(1).strip()
        if any(x in name.lower() for x in ["page", "stemhouse", "nhà"]):
            continue
        facts.append({"type": "person", "name": name, "born": m.group(2), "died": m.group(3) or ""})
    return facts


def make_mc_question(q, answers, correct_idx, topic, topic_name, level="medium", tags=None):
    return {
        "topic": topic,
        "topicName": topic_name,
        "type": "mc",
        "q": q,
        "answers": answers,
        "correct": correct_idx,
        "hint": "Dựa vào nội dung cẩm nang Lịch sử - Địa lý lớp 5.",
        "level": level,
        "tags": tags or ["ocr", "cam_nang"],
    }


def make_fill_question(q, answer, topic, topic_name, level="medium", tags=None):
    return {
        "topic": topic,
        "topicName": topic_name,
        "type": "fill",
        "q": q,
        "answer": str(answer),
        "hint": "Dựa vào nội dung cẩm nang Lịch sử - Địa lý lớp 5.",
        "level": level,
        "tags": tags or ["ocr", "cam_nang"],
    }


def wrong_years(correct: str, pool: list[str], n=3) -> list[str]:
    try:
        base = int(re.sub(r"\D", "", correct)[:4])
    except ValueError:
        return []
    opts = {correct}
    for d in [50, 100, 200, 19, 37, 89, 150, 300]:
        opts.add(str(base + d))
        opts.add(str(base - d))
    for p in pool:
        opts.add(p)
    opts.discard(correct)
    result = [correct]
    for o in sorted(opts, key=lambda x: abs(int(re.sub(r"\D", "", x) or "0") - base)):
        if o not in result and re.match(r"\d{3,4}", o):
            result.append(o)
        if len(result) >= 4:
            break
    while len(result) < 4:
        result.append(str(base + len(result) * 17))
    # shuffle keeping correct at index 0 then shuffle
    import random
    random.seed(hash(correct) % 2**32)
    correct_val = result[0]
    rest = result[1:4]
    random.shuffle(rest)
    idx = random.randint(0, 3)
    answers = rest[:idx] + [correct_val] + rest[idx:]
    answers = answers[:4]
    return answers, answers.index(correct_val)


def build_lich_su_questions(pages: list[dict]) -> list[dict]:
    questions = []
    seen = set()
    year_pool = []

    for pg in pages:
        text = pg["text"]
        topic = classify_topic_ls(text, pg["file"])
        topic_name = TOPICS_LS[topic]

        for fact in extract_year_events(text):
            year_pool.append(fact["year"])
            key = (fact["year"], fact["event"][:40])
            if key in seen:
                continue
            seen.add(key)
            event_short = fact["event"][:100] + ("..." if len(fact["event"]) > 100 else "")
            answers, correct = wrong_years(fact["year"], year_pool)
            questions.append(make_mc_question(
                f"Theo niên biểu, sự kiện \"{event_short}\" diễn ra vào năm nào?",
                answers, correct, topic, topic_name,
                tags=["ocr", "nien_bieu", f"nam_{fact['year']}"],
            ))

        for pf in extract_person_facts(text):
            key = pf["name"]
            if key in seen:
                continue
            seen.add(key)
            if pf["died"]:
                questions.append(make_fill_question(
                    f"{pf['name']} sống từ năm ? đến năm {pf['died']}.",
                    pf["born"], topic, topic_name, tags=["ocr", "nhan_vat"],
                ))
            else:
                questions.append(make_fill_question(
                    f"{pf['name']} sinh năm ?.",
                    pf["born"], topic, topic_name, tags=["ocr", "nhan_vat"],
                ))

        # Keyword-based from OCR
        if "ngô quyền" in text.lower() and "938" in text:
            k = "ngo_quyen_938"
            if k not in seen:
                seen.add(k)
                questions.append(make_mc_question(
                    "Ngô Quyền đánh bại quân nước nào trên sông Bạch Đằng năm 938?",
                    ["Nam Hán", "Tống", "Nguyên", "Thanh"], 0,
                    "bach_dang", TOPICS_LS["bach_dang"], "easy",
                    tags=["ocr", "bach_dang"],
                ))
        if "quang trung" in text.lower() and "1789" in text:
            k = "qt_1789"
            if k not in seen:
                seen.add(k)
                questions.append(make_mc_question(
                    "Quang Trung đại phá quân Thanh diễn ra vào năm nào?",
                    ["1789", "1771", "1802", "1858"], 0,
                    "quang_trung", TOPICS_LS["quang_trung"], "easy",
                    tags=["ocr", "quang_trung"],
                ))
        if "02/09/1945" in text or "2/9/1945" in text:
            k = "doclap_1945"
            if k not in seen:
                seen.add(k)
                questions.append(make_mc_question(
                    "Bản Tuyên ngôn Độc lập được đọc vào ngày nào?",
                    ["2/9/1945", "19/12/1946", "30/4/1975", "27/1/1973"], 0,
                    "khang_chien", TOPICS_LS["khang_chien"], "easy",
                    tags=["ocr", "doc_lap"],
                ))

    return questions[:80]  # cap


def build_dia_ly_questions(pages: list[dict]) -> list[dict]:
    questions = []
    seen = set()

    for pg in pages:
        text = pg["text"]
        topic = classify_topic_dl(text, pg["file"])
        topic_name = TOPICS_DL[topic]

        for gf in extract_geo_facts(text):
            if gf["type"] == "hcm_area":
                k = "hcm_area"
                if k not in seen:
                    seen.add(k)
                    questions.append(make_fill_question(
                        "Theo cẩm nang, diện tích TP.HCM mới (sau sáp nhập 2025) khoảng ? km².",
                        gf["area"].replace(".", "").split(".")[0] if "." in gf["area"] else gf["area"],
                        "tp_hcm", TOPICS_DL["tp_hcm"], "hard",
                        tags=["ocr", "tp_hcm", "2025"],
                    ))
            elif gf["type"] == "hcm_units":
                k = "hcm_units"
                if k not in seen:
                    seen.add(k)
                    questions.append(make_fill_question(
                        "Sau sáp nhập 2025, TP.HCM có ? đơn vị hành chính cấp xã.",
                        gf["count"], "tp_hcm", TOPICS_DL["tp_hcm"], "medium",
                        tags=["ocr", "tp_hcm"],
                    ))
            elif gf["type"] == "merge":
                prov = gf["province"]
                if prov in seen:
                    continue
                seen.add(prov)
                questions.append(make_mc_question(
                    f"Tỉnh/thành \"{prov}\" sau sáp nhập thuộc vùng nào?",
                    [gf["region"], "Miền Bắc", "Tây Nguyên", "Đông Bắc Bộ"],
                    0, "sap_nhap_2025", TOPICS_DL["sap_nhap_2025"], "hard",
                    tags=["ocr", "sap_nhap"],
                ))
            elif gf["type"] == "landmark":
                k = gf["name"]
                if k in seen:
                    continue
                seen.add(k)
                wrong = ["Ấn Độ", "Trung Quốc", "Ai Cập", "Pháp", "Peru", "Úc"]
                wrong = [c for c in wrong if c.lower() != gf["country"].lower()][:3]
                answers = wrong + [gf["country"]]
                import random
                random.seed(hash(k) % 2**32)
                random.shuffle(answers)
                questions.append(make_mc_question(
                    f"{gf['name']} thuộc quốc gia nào?",
                    answers, answers.index(gf["country"]),
                    "dia_ly_the_gioi", TOPICS_DL["dia_ly_the_gioi"], "easy",
                    tags=["ocr", "the_gioi"],
                ))

        if "nhiệt đới gió mùa" in text.lower() or "nhiệt đới" in text.lower():
            k = "hcm_climate"
            if k not in seen and topic == "tp_hcm":
                seen.add(k)
                questions.append(make_mc_question(
                    "TP.HCM có khí hậu gì?",
                    ["Nhiệt đới gió mùa", "Nhiệt đới lục địa", "Ôn đới", "Cận nhiệt đới"],
                    0, "tp_hcm", TOPICS_DL["tp_hcm"], "easy", tags=["ocr", "khi_hau"],
                ))

    return questions[:60]


def js_escape(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", " ")


def write_questions_js(path: Path, questions: list[dict]):
    lines = ["const QUESTIONS = ["]
    for i, q in enumerate(questions):
        q["id"] = i + 1
        parts = [
            "  {",
            f'    id: {q["id"]}, topic: "{q["topic"]}", topicName: "{q["topicName"]}", type: "{q["type"]}",',
            f'    q: "{js_escape(q["q"])}",',
        ]
        if q["type"] == "fill":
            parts.append(f'    answer: "{js_escape(q["answer"])}",')
        else:
            ans = ", ".join(f'"{js_escape(a)}"' for a in q["answers"])
            parts.append(f"    answers: [{ans}], correct: {q['correct']},")
        parts.append(f'    hint: "{js_escape(q.get("hint", ""))}",')
        parts.append(f'    level: "{q.get("level", "medium")}"')
        if q.get("tags"):
            tags = ", ".join(f'"{t}"' for t in q["tags"])
            parts.append(f"    , tags: [{tags}]")
        comma = "," if i < len(questions) - 1 else ""
        lines.append("\n".join(parts) + f"\n  }}{comma}")
    lines.append("];")
    path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def write_topics(path: Path, topics_map: dict):
    if path.parent.name == "lich_su":
        data = [
            {"id": "nien_bieu", "name": TOPICS_LS["nien_bieu"], "icon": "📅"},
            {"id": "bach_dang", "name": TOPICS_LS["bach_dang"], "icon": "⚔️"},
            {"id": "quang_trung", "name": TOPICS_LS["quang_trung"], "icon": "🏛️"},
            {"id": "nhan_vat", "name": TOPICS_LS["nhan_vat"], "icon": "👤"},
            {"id": "khang_chien", "name": TOPICS_LS["khang_chien"], "icon": "🕊️"},
        ]
    else:
        data = [
            {"id": "tp_hcm", "name": TOPICS_DL["tp_hcm"], "icon": "🏙️"},
            {"id": "vung_mien", "name": TOPICS_DL["vung_mien"], "icon": "🗺️"},
            {"id": "sap_nhap_2025", "name": TOPICS_DL["sap_nhap_2025"], "icon": "🔄"},
            {"id": "dia_ly_the_gioi", "name": TOPICS_DL["dia_ly_the_gioi"], "icon": "🌍"},
        ]
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    print("=== OCR Lịch sử ===")
    ls_pages = []
    for f in LICH_SU_FILES:
        ls_pages.extend(ocr_pdf(f))
    (OUT_DIR / "lich_su_pages.json").write_text(
        json.dumps(ls_pages, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    print("\n=== OCR Địa lý ===")
    dl_pages = []
    for f in DIA_LY_FILES:
        dl_pages.extend(ocr_pdf(f))
    (OUT_DIR / "dia_ly_pages.json").write_text(
        json.dumps(dl_pages, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    ls_q = build_lich_su_questions(ls_pages)
    dl_q = build_dia_ly_questions(dl_pages)

    write_topics(DATA_DIR / "lich_su" / "topics.json", TOPICS_LS)
    write_topics(DATA_DIR / "dia_ly" / "topics.json", TOPICS_DL)
    write_questions_js(DATA_DIR / "lich_su" / "questions.js", ls_q)
    write_questions_js(DATA_DIR / "dia_ly" / "questions.js", dl_q)

    review = {
        "lich_su_count": len(ls_q),
        "dia_ly_count": len(dl_q),
        "lich_su_by_topic": {},
        "dia_ly_by_topic": {},
        "source": str(PDF_DIR),
        "ocr_engine": "tesseract vie psm3 dpi300",
    }
    for q in ls_q:
        review["lich_su_by_topic"][q["topic"]] = review["lich_su_by_topic"].get(q["topic"], 0) + 1
    for q in dl_q:
        review["dia_ly_by_topic"][q["topic"]] = review["dia_ly_by_topic"].get(q["topic"], 0) + 1

    (OUT_DIR / "generation_summary.json").write_text(
        json.dumps(review, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"\nDone: lich_su={len(ls_q)} dia_ly={len(dl_q)}")
    print(json.dumps(review, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
