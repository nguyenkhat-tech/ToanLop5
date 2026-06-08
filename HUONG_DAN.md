Dưới đây là nội dung file `HUONG_DAN.md` – tài liệu hướng dẫn đầy đủ cách tạo bộ đề và sử dụng các hàm hình ảnh trong ứng dụng Ôn tập Toán lớp 5. Bạn chỉ cần copy nội dung dưới đây, paste vào file `HUONG_DAN.md` (đặt cùng thư mục với `index.html`).

```markdown
# Hướng dẫn tạo và quản lý bộ đề Ôn tập Toán lớp 5

## Mục lục
1. [Cấu trúc bộ đề](#1-cấu-trúc-bộ-đề)
2. [Các dạng câu hỏi](#2-các-dạng-câu-hỏi)
3. [Sử dụng hình ảnh SVG (hàm Shapes)](#3-sử-dụng-hình-ảnh-svg-hàm-shapes)
4. [Cách thêm câu hỏi mới](#4-cách-thêm-câu-hỏi-mới)
5. [Kiểm tra lỗi](#5-kiểm-tra-lỗi)
6. [Cập nhật bộ đề lên GitHub](#6-cập-nhật-bộ-đề-lên-github)

---

## 1. Cấu trúc bộ đề

Bộ đề được lưu trong file `data/questions.json` với định dạng JSON. Mỗi câu hỏi là một đối tượng (object) có các trường sau:

| Trường | Bắt buộc | Kiểu | Mô tả |
|--------|----------|------|-------|
| `id` | Có | số | Mã câu hỏi (không cần duy nhất tuyệt đối vì đã kết hợp với `topic`) |
| `topic` | Có | chuỗi | Mã chủ đề (phải khớp với `id` trong `data/topics.js`) |
| `topicName` | Có | chuỗi | Tên chủ đề hiển thị (ví dụ "Số tự nhiên") |
| `type` | Có | chuỗi | `"mc"` (trắc nghiệm) hoặc `"fill"` (điền đáp án) |
| `q` | Có | chuỗi | Nội dung câu hỏi (có thể chứa HTML hoặc gọi hàm `Shapes`) |
| `answers` | Nếu `type="mc"` | mảng | 4 đáp án lựa chọn |
| `correct` | Nếu `type="mc"` | số | Chỉ số của đáp án đúng (0,1,2,3) |
| `answer` | Nếu `type="fill"` | chuỗi | Đáp án đúng (không phân biệt hoa thường, bỏ qua khoảng trắng) |
| `hint` | Không | chuỗi | Gợi ý hướng dẫn giải (có thể dùng HTML) |
| `level` | Không | chuỗi | Mức độ: `"easy"`, `"medium"`, `"hard"` |
| `tags` | Không | mảng | Danh sách thẻ phân loại (ví dụ: `["hinh_hoc","dien_tich"]`) |

**Ví dụ một câu hỏi hoàn chỉnh:**

```json
{
  "id": 1,
  "topic": "so_tu_nhien",
  "topicName": "Số tự nhiên",
  "type": "mc",
  "q": "Số tự nhiên lớn nhất có 5 chữ số là:",
  "answers": ["99999", "100000", "9999", "999999"],
  "correct": 0,
  "hint": "Số có 5 chữ số nằm trong khoảng từ 10000 đến 99999.",
  "level": "easy",
  "tags": ["so_tu_nhien", "so_lon_nhat"]
}
```

---

## 2. Các dạng câu hỏi

### Dạng trắc nghiệm (`type: "mc"`)
```json
{
  "type": "mc",
  "answers": ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
  "correct": 0
}
```

### Dạng điền đáp án (`type: "fill"`)
```json
{
  "type": "fill",
  "answer": "Đáp án đúng"
}
```

---

## 3. Sử dụng hình ảnh SVG (hàm Shapes)

Thư viện `shapes.js` cung cấp các hàm tạo SVG nhúng trực tiếp vào câu hỏi. Bạn chỉ cần gọi hàm trong trường `q`. Tất cả các hàm đều trả về chuỗi HTML `<svg>`.

### 3.1 Hình vuông

```
Shapes.square(cạnh, nhãn, đơn_vị)
```

Ví dụ: `Shapes.square(40, "4", "cm")` → hình vuông cạnh 4 cm, hiển thị nhãn "4cm".

### 3.2 Hình chữ nhật

```
Shapes.rectangle(chiều_dài, chiều_rộng, nhãn_dài, nhãn_rộng, đơn_vị)
```

Ví dụ: `Shapes.rectangle(80, 50, "8", "5")` → hình chữ nhật 8×5 cm.

### 3.3 Hình tam giác (cân, đáy nằm ngang)

```
Shapes.triangle(đáy, cạnh_trái, cạnh_phải, chiều_cao, nhãn_đáy, nhãn_trái, nhãn_phải, nhãn_cao, đơn_vị)
```

Chỉ cần nhập đáy, chiều cao và các nhãn cần hiển thị; có thể bỏ qua cạnh bên bằng 0.  
Ví dụ: `Shapes.triangle(80, 0, 0, 60, "8cm", "", "", "6cm")`

### 3.4 Hình thang (đáy lớn dưới, đáy bé trên)

```
Shapes.trapezoid(đáy_lớn, đáy_bé, chiều_cao, nhãn_đáy_lớn, nhãn_đáy_bé, nhãn_cao, đơn_vị)
```

Ví dụ: `Shapes.trapezoid(120, 80, 50, "12cm", "8cm", "5cm")`

### 3.5 Hình bình hành

```
Shapes.parallelogram(đáy, cạnh_bên, chiều_cao, nhãn_đáy, nhãn_cạnh_bên, nhãn_cao, đơn_vị)
```

Ví dụ: `Shapes.parallelogram(80, 50, 40, "8cm", "5cm", "4cm")`

### 3.6 Hình thoi

```
Shapes.rhombus(đường_chéo_1, đường_chéo_2, nhãn_chéo1, nhãn_chéo2, đơn_vị)
```

Ví dụ: `Shapes.rhombus(80, 60, "8cm", "6cm")`

### 3.7 Hình tròn

```
Shapes.circle(bán_kính, nhãn_bán_kính, nhãn_đường_kính, đơn_vị)
```

Ví dụ: `Shapes.circle(35, "3.5cm", "7cm")`

### 3.8 Hình hộp chữ nhật (3D)

```
Shapes.box(chiều_dài, chiều_rộng, chiều_cao, nhãn_dài, nhãn_rộng, nhãn_cao, đơn_vị)
```

Ví dụ: `Shapes.box(50, 40, 30, "5", "4", "3")`

### 3.9 Hình lập phương

```
Shapes.cube(cạnh, nhãn, đơn_vị)
```

Ví dụ: `Shapes.cube(40, "4")`

### 3.10 Đoạn thẳng (có thước hoặc không)

```
Shapes.line(chiều_dài, nhãn, đơn_vị, hiển_thị_thước, nhãn_đầu, nhãn_cuối)
```

- `hiển_thị_thước` là `true` hoặc `false` (bật/tắt vạch cm).
- `nhãn_đầu`, `nhãn_cuối` để đặt chữ A, B ở hai đầu.

Ví dụ: `Shapes.line(80, "8 cm", "cm", true, "A", "B")`

### ❗ Lưu ý khi dùng Shapes trong câu hỏi

- Các hàm `Shapes` **chỉ hoạt động trong trường `q`**, không dùng được trong `hint`.
- Bạn **không cần nhúng thêm thẻ `<svg>` thủ công**, chỉ cần gọi hàm.
- Để ghép nhiều hình, bạn dùng phép cộng chuỗi: `Shapes.square(40,"4") + " Tính diện tích?"`

---

## 4. Cách thêm câu hỏi mới

### Cách 1: Dùng công cụ `admin.html` (tự động sinh hàng loạt)
- Mở `admin.html`, chọn chủ đề, số lượng, nhấn "Tạo và tải xuống questions.json".
- Copy file `questions.json` vào thư mục `data/`, ghi đè file cũ.

### Cách 2: Thêm thủ công vào file JSON
1. Mở `data/questions.json` bằng trình soạn thảo văn bản.
2. Thêm một đối tượng mới vào cuối mảng (trước dấu `]`).
3. Đảm bảo đủ các trường bắt buộc (xem mục 1).
4. Lưu file.

**Ví dụ thêm một câu trắc nghiệm đơn giản:**

```json
,
{
  "id": 999,
  "topic": "so_tu_nhien",
  "topicName": "Số tự nhiên",
  "type": "mc",
  "q": "1 + 1 = ?",
  "answers": ["2", "1", "3", "0"],
  "correct": 0,
  "hint": "Đếm ngón tay: một thêm một là hai."
}
```

> Chú ý: Phải có dấu phẩy ở cuối đối tượng phía trước.

---

## 5. Kiểm tra lỗi

- Nhấn **F12** trong trình duyệt → tab **Console**.
- Nếu có lỗi JSON, nó sẽ báo dòng số và vị trí.
- Dùng công cụ [JSONLint](https://jsonlint.com/) để kiểm tra cú pháp.

Lỗi thường gặp:
- Thiếu dấu phẩy giữa các câu hỏi.
- Thừa dấu phẩy ở cuối mảng.
- Không đóng ngoặc `}` hoặc `]`.
- Sử dụng nhầm tên `topic` (phân biệt chữ thường / underscore).

---

## 6. Cập nhật bộ đề lên GitHub

Nếu bạn dùng GitHub Pages, sau khi sửa file `questions.json`, mở terminal tại thư mục dự án và chạy:

```bash
git add data/questions.json
git commit -m "Cập nhật bộ đề mới"
git push origin main
```

Sau 1-2 phút, trang web sẽ tự động cập nhật.

---

## 📚 Tài liệu tham khảo

- File cấu hình chủ đề: `data/topics.js`
- Thư viện hình ảnh: `data/shapes.js`
- Ứng dụng chính: `index.html` và `app.js`

---

*Chúc bạn tạo được bộ đề ưng ý và học sinh đạt kết quả cao!*
```

Bạn có thể lưu nội dung trên thành file `HUONG_DAN.md` và đặt trong cùng thư mục với `index.html`. Nếu cần bổ sung hoặc chỉnh sửa gì, hãy cho tôi biết.
