const QUESTIONS = [
  {
    id: 1, topic: "bach_dang", topicName: "Chiến thắng Bạch Đằng", type: "mc",
    q: "Chiến thắng Bạch Đằng diễn ra vào năm nào?",
    answers: ["Năm 938", "Năm 981", "Năm 1077", "Năm 1427"], correct: 0,
    hint: "Ngô Quyền đánh bại quân Nam Hán trên sông Bạch Đằng.",
    level: "easy"
    , tags: ["sgk", "nam_938"]
  },
  {
    id: 2, topic: "bach_dang", topicName: "Chiến thắng Bạch Đằng", type: "mc",
    q: "Ngô Quyền là vị vua như thế nào của nước ta?",
    answers: ["Vua đầu tiên sau thời kỳ Bắc thuộc", "Vua cuối cùng của nhà Lý", "Vua nhà Trần", "Vua nhà Lê"], correct: 0,
    hint: "Ngô Quyền lên ngôi năm 939, mở đầu thời kỳ độc lập lâu dài.",
    level: "easy"
    , tags: ["sgk", "ngo_quyen"]
  },
  {
    id: 3, topic: "bach_dang", topicName: "Chiến thắng Bạch Đằng", type: "mc",
    q: "Ngô Quyền đánh bại quân đội nước nào trong trận Bạch Đằng?",
    answers: ["Nam Hán", "Tống", "Nguyên", "Thanh"], correct: 0,
    hint: "Quân Nam Hán do Kiều Công Tiễn chỉ huy.",
    level: "medium"
    , tags: ["sgk"]
  },
  {
    id: 4, topic: "bach_dang", topicName: "Chiến thắng Bạch Đằng", type: "fill",
    q: "Chiến thắng Bạch Đằng kết thúc hơn ? năm Bắc thuộc.",
    answer: "1000",
    hint: "Từ 179 TCN đến 938.",
    level: "medium"
    , tags: ["sgk"]
  },
  {
    id: 5, topic: "bach_dang", topicName: "Chiến thắng Bạch Đằng", type: "mc",
    q: "Ngô Quyền dùng chiến thuật gì trên sông Bạch Đằng?",
    answers: ["Cắm cọc gỗ nhọn dưới lòng sông", "Đào hào vây quanh thành", "Dùng voi chiến", "Đốt lửa đánh đêm"], correct: 0,
    hint: "Khi thủy triều lên, thuyền giặc mắc cọc và vỡ tan.",
    level: "medium"
    , tags: ["sgk", "chien_thuat"]
  },
  {
    id: 6, topic: "bach_dang", topicName: "Chiến thắng Bạch Đằng", type: "mc",
    q: "Khu di tích lịch sử quốc gia Bạch Đằng Giang nằm ở tỉnh/thành phố nào?",
    answers: ["Hải Phòng", "Hà Nội", "Quảng Ninh", "Thái Bình"], correct: 0,
    hint: "Thuộc huyện Thủy Nguyên, thành phố Hải Phòng.",
    level: "hard"
    , tags: ["sgk", "di_tich"]
  },
  {
    id: 7, topic: "bach_dang", topicName: "Chiến thắng Bạch Đằng", type: "fill",
    q: "Ngô Quyền đóng đô tại ? sau khi lên ngôi.",
    answer: "Cổ Loa",
    hint: "Cổ Loa là kinh đô thời Âu Lạc.",
    level: "medium"
    , tags: ["sgk"]
  },
  {
    id: 8, topic: "quang_trung", topicName: "Quang Trung đại phá quân Thanh", type: "mc",
    q: "Quang Trung đại phá quân Thanh diễn ra vào năm nào?",
    answers: ["Năm 1789", "Năm 1771", "Năm 1802", "Năm 1858"], correct: 0,
    hint: "Chiến thắng vào dịp Tết Kỷ Dậu.",
    level: "easy"
    , tags: ["sgk", "nam_1789"]
  },
  {
    id: 9, topic: "quang_trung", topicName: "Quang Trung đại phá quân Thanh", type: "mc",
    q: "Tên thật của vua Quang Trung là gì?",
    answers: ["Nguyễn Huệ", "Nguyễn Nhạc", "Nguyễn Lữ", "Nguyễn Ánh"], correct: 0,
    hint: "Nguyễn Huệ là em của Nguyễn Nhạc, lãnh tụ quân sự Tây Sơn.",
    level: "easy"
    , tags: ["sgk"]
  },
  {
    id: 10, topic: "quang_trung", topicName: "Quang Trung đại phá quân Thanh", type: "mc",
    q: "Quang Trung lên ngôi hoàng đế tại đâu?",
    answers: ["Phú Xuân (Huế)", "Thăng Long", "Gia Định", "Quy Nhơn"], correct: 0,
    hint: "Phú Xuân là kinh đô nhà Nguyễn trước khi Tây Sơn chiếm.",
    level: "medium"
    , tags: ["sgk"]
  },
  {
    id: 11, topic: "quang_trung", topicName: "Quang Trung đại phá quân Thanh", type: "fill",
    q: "Quang Trung đánh tan quân Thanh tại ? (Thăng Long).",
    answer: "Ngọc Hồi",
    hint: "Trận Ngọc Hồi - Đống Đa là trận then chốt.",
    level: "medium"
    , tags: ["sgk"]
  },
  {
    id: 12, topic: "quang_trung", topicName: "Quang Trung đại phá quân Thanh", type: "mc",
    q: "Khởi nghĩa Tây Sơn bùng nổ vào năm nào?",
    answers: ["1771", "1789", "1802", "1858"], correct: 0,
    hint: "Ba anh em Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ.",
    level: "medium"
    , tags: ["sgk"]
  },
  {
    id: 13, topic: "quang_trung", topicName: "Quang Trung đại phá quân Thanh", type: "mc",
    q: "Quang Trung qua đời năm nào?",
    answers: ["1792", "1789", "1802", "1777"], correct: 0,
    hint: "Sau đó triều Tây Sơn suy yếu dần.",
    level: "hard"
    , tags: ["sgk"]
  },
  {
    id: 14, topic: "quang_trung", topicName: "Quang Trung đại phá quân Thanh", type: "mc",
    q: "Bảo tàng Quang Trung nằm ở thành phố nào?",
    answers: ["Quy Nhơn", "Huế", "Đà Nẵng", "Hà Nội"], correct: 0,
    hint: "Quy Nhơn, tỉnh Bình Định — quê hương Tây Sơn.",
    level: "hard"
    , tags: ["sgk", "di_tich"]
  },
  {
    id: 16, topic: "lich_su_viet_nam", topicName: "Dòng lịch sử Việt Nam", type: "mc",
    q: "Bản Tuyên ngôn Độc lập được đọc vào ngày nào?",
    answers: ["2/9/1945", "19/12/1946", "30/4/1975", "27/1/1973"], correct: 0,
    hint: "Tại Quảng trường Ba Đình, Hà Nội.",
    level: "easy"
    , tags: ["timeline", "doc_lap"]
  },
  {
    id: 17, topic: "lich_su_viet_nam", topicName: "Dòng lịch sử Việt Nam", type: "fill",
    q: "Cách mạng tháng Tám thành công năm ?.",
    answer: "1945",
    hint: "Tháng 8/1945.",
    level: "easy"
    , tags: ["timeline"]
  },
  {
    id: 18, topic: "lich_su_viet_nam", topicName: "Dòng lịch sử Việt Nam", type: "mc",
    q: "Ai là người đọc Tuyên ngôn Độc lập?",
    answers: ["Hồ Chí Minh", "Võ Nguyên Giáp", "Phạm Văn Đồng", "Trường Chinh"], correct: 0,
    hint: "Chủ tịch Hồ Chí Minh.",
    level: "easy"
    , tags: ["timeline"]
  },
  {
    id: 18, topic: "lich_su_viet_nam", topicName: "Dòng lịch sử Việt Nam", type: "mc",
    q: "Nguyễn Trãi là tác giả của tác phẩm nào?",
    answers: ["Bình Ngô đại cáo", "Truyện Kiều", "Chinh phụ ngâm", "Lục Vân Tiên"], correct: 0,
    hint: "Bình Ngô đại cáo ca ngợi chiến thắng Lam Sơn.",
    level: "medium"
    , tags: ["nhan_vat"]
  },
  {
    id: 21, topic: "lich_su_viet_nam", topicName: "Dòng lịch sử Việt Nam", type: "mc",
    q: "Phong trào Cần Vương nổ ra vào thời gian nào?",
    answers: ["1885-1896", "1945-1954", "1858-1884", "1975-1976"], correct: 0,
    hint: "Tôn Thất Thuyết và vua Hàm Nghi.",
    level: "hard"
    , tags: ["timeline", "khang_chien"]
  },
  {
    id: 22, topic: "nien_bieu", topicName: "Niên biểu lịch sử", type: "mc",
    q: "Theo niên biểu, khởi nghĩa Hai Bà Trưng diễn ra vào năm nào?",
    answers: ["Năm 40", "Năm 248", "Năm 542", "Năm 938"], correct: 0,
    hint: "Khởi nghĩa ở Mê Linh (Hà Nội).",
    level: "medium"
    , tags: ["ocr", "cam_nang", "nien_bieu"]
  },
  {
    id: 23, topic: "nien_bieu", topicName: "Niên biểu lịch sử", type: "mc",
    q: "Lý Bí lên ngôi vua, lập nước Vạn Xuân vào năm nào?",
    answers: ["Năm 544", "Năm 542", "Năm 550", "Năm 905"], correct: 0,
    hint: "Khởi nghĩa Lý Bí năm 542.",
    level: "hard"
    , tags: ["ocr", "cam_nang", "nien_bieu"]
  },
  {
    id: 24, topic: "nien_bieu", topicName: "Niên biểu lịch sử", type: "mc",
    q: "Đinh Bộ Lĩnh xưng hoàng, đặt tên nước là Đại Cồ Việt vào năm nào?",
    answers: ["Năm 968", "Năm 981", "Năm 1009", "Năm 938"], correct: 0,
    hint: "Sau khi dẹp loạn 12 sứ quân.",
    level: "medium"
    , tags: ["ocr", "cam_nang", "nien_bieu"]
  },
  {
    id: 25, topic: "nien_bieu", topicName: "Niên biểu lịch sử", type: "mc",
    q: "Lý Thái Tổ dời đô về Thăng Long vào năm nào?",
    answers: ["Năm 1010", "Năm 1009", "Năm 1077", "Năm 1225"], correct: 0,
    hint: "Lập kinh đô Thăng Long (Hà Nội).",
    level: "medium"
    , tags: ["ocr", "cam_nang", "nien_bieu"]
  },
  {
    id: 26, topic: "nhan_vat", topicName: "Nhân vật lịch sử", type: "fill",
    q: "Trần Quốc Toản sinh năm ? (mất năm 1285).",
    answer: "1267",
    hint: "Ông viết trên lá cờ: Phá cường địch, báo hoàng ân.",
    level: "hard"
    , tags: ["ocr", "cam_nang", "nhan_vat"]
  },
  {
    id: 27, topic: "nhan_vat", topicName: "Nhân vật lịch sử", type: "mc",
    q: "Trần Quốc Toản viết trên lá cờ sáu chữ gì?",
    answers: ["Phá cường địch, báo hoàng ân", "Phá cường địch, bao hoàng gia", "Quyết chiến quyết thắng", "Đại Việt sử ký"], correct: 0,
    hint: "Theo cẩm nang trang nhân vật nhà Trần.",
    level: "hard"
    , tags: ["ocr", "cam_nang", "nhan_vat"]
  },
  {
    id: 28, topic: "nhan_vat", topicName: "Nhân vật lịch sử", type: "fill",
    q: "Hồ Chí Minh sinh năm ? (mất năm 1969).",
    answer: "1890",
    hint: "Người đọc Bản Tuyên ngôn Độc lập 2/9/1945.",
    level: "easy"
    , tags: ["ocr", "cam_nang", "nhan_vat"]
  },
  {
    id: 29, topic: "nhan_vat", topicName: "Nhân vật lịch sử", type: "fill",
    q: "Võ Nguyên Giáp sinh năm ? (mất năm 2013).",
    answer: "1911",
    hint: "Đại tướng, Tổng tư lệnh chiến dịch Điện Biên Phủ.",
    level: "medium"
    , tags: ["ocr", "cam_nang", "nhan_vat"]
  },
  {
    id: 30, topic: "khang_chien", topicName: "Kháng chiến bảo vệ Tổ quốc", type: "mc",
    q: "Chiến dịch Điện Biên Phủ diễn ra trong khoảng thời gian nào?",
    answers: ["13/3 – 7/5/1954", "19/12/1946 – 1954", "2/9/1945", "30/4/1975"], correct: 0,
    hint: "Chiến thắng lớn chống Pháp.",
    level: "medium"
    , tags: ["ocr", "cam_nang", "khang_chien"]
  },
  {
    id: 31, topic: "khang_chien", topicName: "Kháng chiến bảo vệ Tổ quốc", type: "mc",
    q: "Giải phóng miền Nam, thống nhất đất nước vào ngày nào?",
    answers: ["30/4/1975", "2/9/1945", "27/1/1973", "21/7/1954"], correct: 0,
    hint: "Chiến dịch Hồ Chí Minh.",
    level: "easy"
    , tags: ["ocr", "cam_nang", "khang_chien"]
  }
];
