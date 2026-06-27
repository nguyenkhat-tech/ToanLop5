#!/usr/bin/env python3
"""
Post-OCR curation: merge hand-curated base + OCR-verified additions.
Applies QA fixes from agent review.
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OCR_LS = ROOT / "scripts/ocr_extracted/lich_su_pages.json"
OCR_DL = ROOT / "scripts/ocr_extracted/dia_ly_pages.json"

# Hand-curated base (from git before raw OCR overwrite)
MANUAL_LS = Path("/tmp/lich_su_manual.js")
MANUAL_DL = Path("/tmp/dia_ly_manual.js")


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
            parts.append(f'    answer: "{js_escape(str(q["answer"]))}",')
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


def parse_manual_js(path: Path) -> list[dict]:
    """Extract question dicts from existing questions.js via regex (no eval)."""
    text = path.read_text(encoding="utf-8")
    questions = []
    blocks = re.findall(r"\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}", text, re.S)
    for block in blocks:
        if "topic:" not in block:
            continue
        q = {}
        for key in ["topic", "topicName", "type", "q", "answer", "hint", "level"]:
            m = re.search(rf'{key}:\s*"([^"]*)"', block)
            if m:
                q[key] = m.group(1)
        m = re.search(r"correct:\s*(\d+)", block)
        if m:
            q["correct"] = int(m.group(1))
        m = re.search(r"answers:\s*\[(.*?)\]", block, re.S)
        if m:
            q["answers"] = re.findall(r'"([^"]*)"', m.group(1))
        m = re.search(r"tags:\s*\[(.*?)\]", block, re.S)
        if m:
            q["tags"] = re.findall(r'"([^"]*)"', m.group(1))
        if "q" in q:
            questions.append(q)
    return questions


def ocr_verified_additions_ls() -> list[dict]:
    """New questions from OCR niên biểu + nhân vật (QA-approved)."""
    return [
        {
            "topic": "nien_bieu", "topicName": "Niên biểu lịch sử", "type": "mc",
            "q": "Theo niên biểu, khởi nghĩa Hai Bà Trưng diễn ra vào năm nào?",
            "answers": ["Năm 40", "Năm 248", "Năm 542", "Năm 938"], "correct": 0,
            "hint": "Khởi nghĩa ở Mê Linh (Hà Nội).", "level": "medium",
            "tags": ["ocr", "cam_nang", "nien_bieu"],
        },
        {
            "topic": "nien_bieu", "topicName": "Niên biểu lịch sử", "type": "mc",
            "q": "Lý Bí lên ngôi vua, lập nước Vạn Xuân vào năm nào?",
            "answers": ["Năm 544", "Năm 542", "Năm 550", "Năm 905"], "correct": 0,
            "hint": "Khởi nghĩa Lý Bí năm 542.", "level": "hard",
            "tags": ["ocr", "cam_nang", "nien_bieu"],
        },
        {
            "topic": "nien_bieu", "topicName": "Niên biểu lịch sử", "type": "mc",
            "q": "Đinh Bộ Lĩnh xưng hoàng, đặt tên nước là Đại Cồ Việt vào năm nào?",
            "answers": ["Năm 968", "Năm 981", "Năm 1009", "Năm 938"], "correct": 0,
            "hint": "Sau khi dẹp loạn 12 sứ quân.", "level": "medium",
            "tags": ["ocr", "cam_nang", "nien_bieu"],
        },
        {
            "topic": "nien_bieu", "topicName": "Niên biểu lịch sử", "type": "mc",
            "q": "Lý Thái Tổ dời đô về Thăng Long vào năm nào?",
            "answers": ["Năm 1010", "Năm 1009", "Năm 1077", "Năm 1225"], "correct": 0,
            "hint": "Lập kinh đô Thăng Long (Hà Nội).", "level": "medium",
            "tags": ["ocr", "cam_nang", "nien_bieu"],
        },
        {
            "topic": "nhan_vat", "topicName": "Nhân vật lịch sử", "type": "fill",
            "q": "Trần Quốc Toản sinh năm ? (mất năm 1285).",
            "answer": "1267",
            "hint": "Ông viết trên lá cờ: Phá cường địch, báo hoàng ân.", "level": "hard",
            "tags": ["ocr", "cam_nang", "nhan_vat"],
        },
        {
            "topic": "nhan_vat", "topicName": "Nhân vật lịch sử", "type": "mc",
            "q": "Trần Quốc Toản viết trên lá cờ sáu chữ gì?",
            "answers": ["Phá cường địch, báo hoàng ân", "Phá cường địch, bao hoàng gia", "Quyết chiến quyết thắng", "Đại Việt sử ký"],
            "correct": 0,
            "hint": "Theo cẩm nang trang nhân vật nhà Trần.", "level": "hard",
            "tags": ["ocr", "cam_nang", "nhan_vat"],
        },
        {
            "topic": "nhan_vat", "topicName": "Nhân vật lịch sử", "type": "fill",
            "q": "Hồ Chí Minh sinh năm ? (mất năm 1969).",
            "answer": "1890",
            "hint": "Người đọc Bản Tuyên ngôn Độc lập 2/9/1945.", "level": "easy",
            "tags": ["ocr", "cam_nang", "nhan_vat"],
        },
        {
            "topic": "nhan_vat", "topicName": "Nhân vật lịch sử", "type": "fill",
            "q": "Võ Nguyên Giáp sinh năm ? (mất năm 2013).",
            "answer": "1911",
            "hint": "Đại tướng, Tổng tư lệnh chiến dịch Điện Biên Phủ.", "level": "medium",
            "tags": ["ocr", "cam_nang", "nhan_vat"],
        },
        {
            "topic": "khang_chien", "topicName": "Kháng chiến bảo vệ Tổ quốc", "type": "mc",
            "q": "Chiến dịch Điện Biên Phủ diễn ra trong khoảng thời gian nào?",
            "answers": ["13/3 – 7/5/1954", "19/12/1946 – 1954", "2/9/1945", "30/4/1975"], "correct": 0,
            "hint": "Chiến thắng lớn chống Pháp.", "level": "medium",
            "tags": ["ocr", "cam_nang", "khang_chien"],
        },
        {
            "topic": "khang_chien", "topicName": "Kháng chiến bảo vệ Tổ quốc", "type": "mc",
            "q": "Giải phóng miền Nam, thống nhất đất nước vào ngày nào?",
            "answers": ["30/4/1975", "2/9/1945", "27/1/1973", "21/7/1954"], "correct": 0,
            "hint": "Chiến dịch Hồ Chí Minh.", "level": "easy",
            "tags": ["ocr", "cam_nang", "khang_chien"],
        },
    ]


def ocr_verified_additions_dl() -> list[dict]:
    """OCR-verified địa lý questions."""
    merge_rows = [
        ("Ninh Bình", "Bắc Bộ", "Hà Nam + Ninh Bình + Nam Định"),
        ("Thanh Hóa", "Bắc Trung Bộ", "Không thay đổi"),
        ("Nghệ An", "Bắc Trung Bộ", "Không thay đổi"),
        ("TP. Đà Nẵng", "Nam Trung Bộ", "Quảng Nam + Đà Nẵng"),
        ("Gia Lai", "Nam Trung Bộ", "Gia Lai + Bình Định"),
        ("Đắk Lắk", "Nam Trung Bộ", "Phú Yên + Đắk Lắk"),
        ("Khánh Hòa", "Nam Trung Bộ", "Khánh Hòa + Ninh Thuận"),
        ("Lâm Đồng", "Nam Trung Bộ", "Đắk Nông + Lâm Đồng + Bình Thuận"),
        ("Đông Nai", "Đông Nam Bộ", "Bình Phước + Đông Nai"),
        ("Tây Ninh", "Đông Nam Bộ", "Long An + Tây Ninh"),
        ("TP. Hồ Chí Minh", "Đông Nam Bộ", "Bình Dương + TPHCM + Bà Rịa - Vũng Tàu"),
        ("TP. Cần Thơ", "Đồng bằng sông Cửu Long", "Sóc Trăng + Hậu Giang + Cần Thơ"),
    ]
    qs = [
        {
            "topic": "tp_hcm", "topicName": "Địa lý TP. Hồ Chí Minh", "type": "fill",
            "q": "Sau sáp nhập 1/7/2025, TP.HCM có ? đơn vị hành chính cấp xã.",
            "answer": "168",
            "hint": "Gồm 113 phường, 54 xã và 1 đặc khu.", "level": "medium",
            "tags": ["ocr", "cam_nang", "tp_hcm"],
        },
        {
            "topic": "tp_hcm", "topicName": "Địa lý TP. Hồ Chí Minh", "type": "fill",
            "q": "Diện tích TP.HCM sau sáp nhập 2025 khoảng ? km² (làm tròn).",
            "answer": "6773",
            "hint": "OCR ghi 6.772,6 km².", "level": "hard",
            "tags": ["ocr", "cam_nang", "tp_hcm"],
        },
        {
            "topic": "tp_hcm", "topicName": "Địa lý TP. Hồ Chí Minh", "type": "mc",
            "q": "TP.HCM được hình thành từ sáp nhập những địa phương nào (1/7/2025)?",
            "answers": [
                "TP.HCM + Bình Dương + Bà Rịa - Vũng Tàu",
                "TP.HCM + Đồng Nai + Bình Phước",
                "TP.HCM + Long An + Tiền Giang",
                "Chỉ TP.HCM cũ",
            ],
            "correct": 0,
            "hint": "Theo phần 3 cẩm nang địa lý.", "level": "easy",
            "tags": ["ocr", "cam_nang", "tp_hcm"],
        },
        {
            "topic": "vung_mien", "topicName": "Vùng miền Việt Nam", "type": "mc",
            "q": "Vùng Đông Bằng Bắc Bộ gồm bao nhiêu tỉnh, thành phố?",
            "answers": ["6", "5", "7", "4"], "correct": 0,
            "hint": "Bắc Ninh, Quảng Ninh, Hà Nội, Hải Phòng, Hưng Yên, Ninh Bình.", "level": "medium",
            "tags": ["ocr", "cam_nang", "vung_mien"],
        },
    ]
    for prov, region, merge_from in merge_rows:
        qs.append({
            "topic": "sap_nhap_2025", "topicName": "Sáp nhập tỉnh 2025", "type": "mc",
            "q": f"Sau sáp nhập 2025, {prov} thuộc vùng nào?",
            "answers": [region, "Bắc Bộ", "Tây Nguyên", "Miền Bắc"],
            "correct": 0,
            "hint": f"Hình thành từ: {merge_from}.", "level": "hard",
            "tags": ["ocr", "cam_nang", "sap_nhap"],
        })
    landmarks = [
        ("Vạn Lý Trường Thành", "Trung Quốc"),
        ("Taj Mahal", "Ấn Độ"),
        ("Angkor Wat", "Campuchia"),
        ("Tháp Eiffel", "Pháp"),
        ("Buckingham Palace", "Anh"),
        ("Kim tự tháp Giza", "Ai Cập"),
        ("Núi Kilimanjaro", "Tanzania"),
        ("Thác Victoria", "Zambia/Zimbabwe"),
    ]
    for name, country in landmarks:
        wrong = [c for c in ["Trung Quốc", "Ấn Độ", "Ai Cập", "Pháp", "Anh", "Peru"] if c != country][:3]
        answers = wrong + [country]
        import random
        random.seed(hash(name) % 2**32)
        random.shuffle(answers)
        qs.append({
            "topic": "dia_ly_the_gioi", "topicName": "Địa lý thế giới", "type": "mc",
            "q": f"{name} thuộc quốc gia (vùng) nào?",
            "answers": answers, "correct": answers.index(country),
            "hint": "Theo phần địa lý thế giới cẩm nang.", "level": "easy",
            "tags": ["ocr", "cam_nang", "the_gioi"],
        })
    return qs


def dedupe(questions: list[dict]) -> list[dict]:
    seen = set()
    out = []
    for q in questions:
        key = re.sub(r"\s+", " ", q["q"].lower())[:80]
        if key in seen:
            continue
        seen.add(key)
        out.append(q)
    return out


def fix_manual_questions(questions: list[dict]) -> list[dict]:
    """Apply QA fixes to hand-curated questions."""
    for q in questions:
        # LS-9 hint fix
        if "Nguyễn Huệ" in q.get("q", "") and "anh cả" in q.get("hint", ""):
            q["hint"] = "Nguyễn Huệ là em của Nguyễn Nhạc, lãnh tụ quân sự Tây Sơn."
        # LS-11: Ngọc Hồi → Thăng Long
        if "Ngọc Hồi" in q.get("q", "") and q.get("type") == "fill":
            q["q"] = q["q"].replace("Ngọc Hồi", "Thăng Long")
            if q.get("answer") == "Ngọc Hồi":
                q["answer"] = "Thăng Long"
        if "Ngọc Hồi" in q.get("answers", []):
            idx = q["answers"].index("Ngọc Hồi")
            q["answers"][idx] = "Thăng Long"
            if q.get("correct") == idx:
                pass  # still correct index
        # LS-19 quote fix
        if "hoàng gia" in q.get("answers", []):
            idx = q["answers"].index("Phá cường địch, bao hoàng gia") if "Phá cường địch, bao hoàng gia" in q["answers"] else -1
            if idx >= 0:
                q["answers"][idx] = "Phá cường địch, báo hoàng ân"
                if q.get("correct") == idx:
                    q["correct"] = idx
            # fix correct answer
            for i, a in enumerate(q.get("answers", [])):
                if "báo hoàng ân" in a or "bao hoàng ân" in a:
                    q["correct"] = i
                    q["answers"][i] = "Phá cường địch, báo hoàng ân"
        # DL-13 hint update
        if "Cầu Phú Mỹ" in q.get("q", ""):
            q["hint"] = "Cầu bắc qua sông Sài Gòn, nối TP.HCM với các khu vực phía đông."
        # DL-14 shorten
        if "6773" in q.get("answer", "") and len(q.get("q", "")) > 80:
            q["q"] = "Diện tích TP.HCM sau sáp nhập 1/7/2025 khoảng ? km² (làm tròn)."
    return questions


def main():
    manual_ls = fix_manual_questions(parse_manual_js(MANUAL_LS))
    manual_dl = fix_manual_questions(parse_manual_js(MANUAL_DL))

    merged_ls = dedupe(manual_ls + ocr_verified_additions_ls())
    merged_dl = dedupe(manual_dl + ocr_verified_additions_dl())

    write_questions_js(ROOT / "data/lop5/lich_su/questions.js", merged_ls)
    write_questions_js(ROOT / "data/lop5/dia_ly/questions.js", merged_dl)

    # Update topics
    topics_ls = [
        {"id": "bach_dang", "name": "Chiến thắng Bạch Đằng", "icon": "⚔️"},
        {"id": "quang_trung", "name": "Quang Trung đại phá quân Thanh", "icon": "🏛️"},
        {"id": "nien_bieu", "name": "Niên biểu lịch sử", "icon": "📅"},
        {"id": "nhan_vat", "name": "Nhân vật lịch sử", "icon": "👤"},
        {"id": "khang_chien", "name": "Kháng chiến bảo vệ Tổ quốc", "icon": "🕊️"},
        {"id": "lich_su_viet_nam", "name": "Dòng lịch sử Việt Nam", "icon": "📜"},
    ]
    topics_dl = [
        {"id": "da_nang", "name": "Địa lý Đà Nẵng", "icon": "🏖️"},
        {"id": "hue", "name": "Địa lý Huế", "icon": "🏯"},
        {"id": "tp_hcm", "name": "Địa lý TP. Hồ Chí Minh", "icon": "🏙️"},
        {"id": "vung_mien", "name": "Vùng miền Việt Nam", "icon": "🗺️"},
        {"id": "sap_nhap_2025", "name": "Sáp nhập tỉnh 2025", "icon": "🔄"},
        {"id": "dia_ly_the_gioi", "name": "Địa lý thế giới", "icon": "🌍"},
    ]
    (ROOT / "data/lop5/lich_su/topics.json").write_text(
        json.dumps(topics_ls, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    (ROOT / "data/lop5/dia_ly/topics.json").write_text(
        json.dumps(topics_dl, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )

    report = {
        "lich_su_total": len(merged_ls),
        "dia_ly_total": len(merged_dl),
        "lich_su_manual": len(manual_ls),
        "lich_su_ocr_added": len(merged_ls) - len(manual_ls),
        "dia_ly_manual": len(manual_dl),
        "dia_ly_ocr_added": len(merged_dl) - len(manual_dl),
    }
    (ROOT / "scripts/ocr_extracted/curation_report.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
