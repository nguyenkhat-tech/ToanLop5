// data/index.js
// Gộp tất cả câu hỏi từ các chủ đề
const QUESTIONS = [
  ...SO_TU_NHIEN,
  ...PHAN_SO,
  ...SO_THAP_PHAN,
  ...HINH_HOC,
  ...THONG_KE,
  ...DO_LUONG,
  ...TOAN_VAN
];

// (Tuỳ chọn) Kiểm tra trùng ID – nếu muốn an toàn có thể gán lại id duy nhất
// Nhưng hiện tại các id đã là duy nhất từ 1..58