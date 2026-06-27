# OCR → Questions Pipeline Report

**Date:** 2026-06-12  
**Source:** `~/Documents/Lop6/downloads/cam-nang-lich-su-dia-ly-lop-5`  
**OCR engine:** Tesseract `vie` PSM 3 @ 300 DPI (PyMuPDF render)

## Pipeline (3 agents phối hợp)

| Bước | Agent/Script | Kết quả |
|------|--------------|---------|
| 1. OCR toàn bộ PDF | `scripts/ocr_to_questions.py` | 47 trang Lịch sử + 52 trang Địa lý → `scripts/ocr_extracted/*.json` |
| 2. Sinh câu hỏi thô | Cùng script | 28 LS + 26 DL (nhiều câu lỗi regex) |
| 3. QA strict | Review agent | 15/54 ship-ready, 28 cần sửa, 11 xóa |
| 4. Curate + merge | `scripts/ocr_curate_and_merge.py` | Giữ 21 manual + thêm OCR đã verify |
| 5. Final QA + fix | Review agent + manual fix | Xóa duplicate, sửa đáp án/hint |

## Kết quả cuối

| Môn | Câu hỏi | Manual (sgk) | OCR (cam_nang) |
|-----|---------|--------------|----------------|
| Lịch sử | 29 | 19 | 10 |
| Địa lý | 43 | 21 | 22 |

## Chủ đề mới (từ OCR)

**Lịch sử:** `nien_bieu`, `nhan_vat`, `khang_chien`  
**Địa lý:** `sap_nhap_2025`, `dia_ly_the_gioi`

## Lệnh chạy lại

```bash
# Bước 1: OCR + sinh thô (~3 phút)
.venv311/bin/python scripts/ocr_to_questions.py

# Bước 2: Curate (merge manual + OCR verified)
python3 scripts/ocr_curate_and_merge.py
```

## Hạn chế đã biết

- PDF là **cẩm nang tham khảo**, không phải bài tập trắc nghiệm → câu hỏi được **sinh từ sự kiện/fact**, không copy "Câu 1, 2, 3"
- Regex `(YYYY-YYYY)` trên nhân vật dễ gắn nhầm tiêu đề mục → **không dùng raw output**, chỉ merge câu đã QA
- Khoa học: **không có PDF** trong bộ cam-nang → giữ nguyên `data/lop5/khoa_hoc/` thủ công

## QA fixes đã áp dụng

- LS id 9: sửa hint Nguyễn Huệ (không phải anh cả)
- Xóa duplicate Hai Bà Trưng, Trần Quốc Toản (đáp án sai *hoàng gia*)
- DL: xóa duplicate diện tích 6773 km², duplicate ĐBBB 6 tỉnh
- DL id 26: sửa distractor trùng "Bắc Bộ"

**Quality score sau fix: ~8.5/10**
