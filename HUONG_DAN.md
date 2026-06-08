# HƯỚNG DẪN CẤU TRÚC CÂU HỎI – TẠO BỘ ĐỀ TOÁN

Tài liệu này giải thích cách tạo hoặc chỉnh sửa bộ câu hỏi cho ứng dụng Ôn tập Toán (hỗ trợ lớp 3, 4, 5). Bạn không cần biết lập trình nặng, chỉ cần làm theo đúng cấu trúc dữ liệu.

## 🗂️ Vị trí lưu bộ đề

Mỗi khối lớp có một thư mục riêng trong `data/`:

```
data/
  lop3/
    topics.json
    questions.js
  lop4/
    topics.json
    questions.js
  lop5/
    topics.json
    questions.js
```

- **topics.json**: danh sách chủ đề của khối đó.
- **questions.js**: chứa toàn bộ câu hỏi (dùng JavaScript để có thể gọi hàm vẽ hình).

## 1. Tập tin `topics.json`

Là một mảng các đối tượng, mỗi đối tượng mô tả một chủ đề.

### Cấu trúc một chủ đề

```json
{
  "id": "so_tu_nhien",
  "name": "Số tự nhiên",
  "icon": "🔢"
}
```

- `id` (bắt buộc): chuỗi viết thường, không dấu, dùng để liên kết với câu hỏi.
- `name` (bắt buộc): tên hiển thị của chủ đề.
- `icon` (không bắt buộc): emoji hoặc ký tự đại diện.

### Ví dụ topics.json cho lớp 5

```json
[
  { "id": "so_tu_nhien", "name": "Số tự nhiên", "icon": "🔢" },
  { "id": "phan_so", "name": "Phân số", "icon": "🍕" },
  { "id": "so_thap_phan", "name": "Số thập phân", "icon": "🔡" },
  { "id": "hinh_hoc", "name": "Hình học", "icon": "📐" },
  { "id": "do_luong", "name": "Đo lường", "icon": "📏" }
]
```

## 2. Tập tin `questions.js`

Chứa một mảng với tên biến **QUESTINGS** (viết hoa). Mỗi phần tử là một câu hỏi.

### Cấu trúc chung của một câu hỏi

| Trường | Bắt buộc | Kiểu | Mô tả |
|--------|----------|------|-------|
| `id` | Có | số | Mã số của câu hỏi (duy nhất trong cùng một chủ đề, nhưng có thể trùng với chủ đề khác). |
| `topic` | Có | chuỗi | Phải trùng với `id` của một chủ đề trong `topics.json`. |
| `topicName` | Có | chuỗi | Tên chủ đề hiển thị (có thể giống `topics.name`). |
| `type` | Có | chuỗi | `"mc"` (trắc nghiệm) hoặc `"fill"` (điền đáp án). |
| `q` | Có | chuỗi | Nội dung câu hỏi. Có thể chứa HTML hoặc gọi hàm `Shapes.*` để vẽ hình. |
| `answer` | Nếu `type="fill"` | chuỗi | Đáp án đúng (không phân biệt hoa thường, bỏ qua khoảng trắng). |
| `answers` | Nếu `type="mc"` | mảng | Danh sách 4 đáp án (có thể là số hoặc văn bản). |
| `correct` | Nếu `type="mc"` | số | Chỉ số của đáp án đúng trong mảng `answers` (bắt đầu từ 0). |
| `hint` | Không | chuỗi | Gợi ý hướng dẫn giải (không được chứa đáp án số). |
| `level` | Không | chuỗi | Mức độ: `"easy"`, `"medium"`, `"hard"`. Mặc định là `"medium"`. |
| `tags` | Không | mảng | Các thẻ phân loại thêm, ví dụ `["hinh_hoc", "dien_tich"]`. |

### Ví dụ câu hỏi trắc nghiệm (mc)

```javascript
{
  id: 1,
  topic: "so_tu_nhien",
  topicName: "Số tự nhiên",
  type: "mc",
  q: "Số tự nhiên lớn nhất có 5 chữ số là:",
  answers: ["99999", "100000", "9999", "999999"],
  correct: 0,
  hint: "Số có 5 chữ số nằm trong khoảng từ 10000 đến 99999.",
  level: "easy",
  tags: ["so_lon_nhat", "so_co_nam_chu_so"]
}
```

### Ví dụ câu hỏi điền đáp án (fill)

```javascript
{
  id: 2,
  topic: "hinh_hoc",
  topicName: "Hình học",
  type: "fill",
  q: Shapes.square(40, "4") + " Hình vuông có cạnh 4 cm. Chu vi là ? cm.",
  answer: "16",
  hint: "Muốn tính chu vi hình vuông, lấy cạnh nhân với 4. Hãy tính 4 × 4.",
  level: "easy"
}
```

## 3. Sử dụng hình ảnh SVG (hàm Shapes)

Thư viện `shapes.js` cung cấp các hàm tạo SVG. Bạn gọi chúng trong trường `q`. Các hàm có sẵn:

- `Shapes.square(cạnh, nhãn, đơn_vị)` – hình vuông
- `Shapes.rectangle(chiều_dài, chiều_rộng, nhãn_dài, nhãn_rộng, đơn_vị)` – hình chữ nhật
- `Shapes.triangle(đáy, cạnh_trái, cạnh_phải, chiều_cao, nhãn_đáy, nhãn_trái, nhãn_phải, nhãn_cao, đơn_vị)` – tam giác (có thể bỏ qua cạnh bên bằng 0)
- `Shapes.trapezoid(đáy_lớn, đáy_bé, chiều_cao, nhãn_đáy_lớn, nhãn_đáy_bé, nhãn_cao, đơn_vị)` – hình thang
- `Shapes.circle(bán_kính, nhãn_bán_kính, nhãn_đường_kính, đơn_vị)` – hình tròn
- `Shapes.box(chiều_dài, chiều_rộng, chiều_cao, nhãn_dài, nhãn_rộng, nhãn_cao, đơn_vị)` – hình hộp chữ nhật 3D
- `Shapes.cube(cạnh, nhãn, đơn_vị)` – hình lập phương
- `Shapes.line(chiều_dài, nhãn, đơn_vị, hiển_thị_thước, nhãn_đầu, nhãn_cuối)` – đoạn thẳng

**Lưu ý:** Không dùng các hàm `Shapes` trong trường `hint`, chỉ dùng trong `q`.

Ví dụ kết hợp nhiều hình:

```javascript
q: Shapes.square(40, "4") + " và " + Shapes.rectangle(60, 30, "6", "3") + " Hãy tính tổng diện tích."
```

## 4. Hướng dẫn thêm câu hỏi mới

### Cách 1: Dùng công cụ `admin.html` (sinh hàng loạt)
- Mở `admin.html`, chọn chủ đề, số lượng câu.
- Nhấn "Tạo và tải xuống questions.json".
- **Chuyển đổi file JSON thành JS**: Copy nội dung JSON, đặt vào `const QUESTIONS = [ ... ];` trong `questions.js`.

### Cách 2: Tự viết tay câu hỏi
Mở `questions.js` bằng trình soạn thảo văn bản, thêm một đối tượng mới vào cuối mảng, chú ý dấu phẩy.

**Ví dụ thêm một câu dễ:**

```javascript
// Thêm vào cuối mảng QUESTIONS
{
  id: 101,
  topic: "so_tu_nhien",
  topicName: "Số tự nhiên",
  type: "fill",
  q: "Tính: 25 + 37 = ?",
  answer: "62",
  hint: "Cộng hàng đơn vị: 5+7=12 viết 2 nhớ 1; hàng chục: 2+3+1=6. Kết quả 62.",
  level: "easy"
}
```

## 5. Mẹo khi tạo câu hỏi

- **ID** nên đánh theo từng chủ đề (ví dụ hình học từ 1-100, số tự nhiên từ 101-200) để dễ quản lý.
- **Gợi ý (hint)**: không được chứa đáp án cụ thể, chỉ hướng dẫn phương pháp.
- **Mức độ (level)**: hãy gán cho mỗi câu một trong ba mức, để học sinh có thể lọc.
- **Tags**: hữu ích khi muốn lọc theo dạng bài (ví dụ "dien_tich", "chu_vi").
- Kiểm tra lại cú pháp: mỗi câu hỏi kết thúc bằng dấu phẩy (trừ câu cuối cùng không có dấu phẩy).

## 6. Lưu ý khi phân phối bộ đề

- Đảm bảo file `topics.json` có đầy đủ các chủ đề mà câu hỏi tham chiếu.
- Nếu thêm chủ đề mới, nhớ thêm cả vào `topics.json`.
- Khi thay đổi bộ đề, nếu ID câu hỏi thay đổi, lịch sử làm bài cũ có thể bị ảnh hưởng. Nên tạo bộ đề mới khi bắt đầu một đợt ôn tập mới.
- Để kiểm tra lỗi, mở ứng dụng, nhấn F12 và xem Console. Lỗi thường gặp: thiếu dấu phẩy, sai tên `topic`, thiếu `answers` khi `type="mc"`.

Với hướng dẫn này, bạn hoàn toàn có thể tự tạo bộ đề phù hợp với từng khối lớp, từng nội dung mình mong muốn. Chúc bạn thành công!