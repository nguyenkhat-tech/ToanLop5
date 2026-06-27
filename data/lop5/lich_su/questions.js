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
    hint: "Nguyễn Huệ là anh cả trong anh em nhà Tây Sơn.",
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
    id: 15, topic: "lich_su_viet_nam", topicName: "Dòng lịch sử Việt Nam", type: "mc",
    q: "Khởi nghĩa Hai Bà Trưng diễn ra năm nào?",
    answers: ["40", "938", "1789", "1945"], correct: 0,
    hint: "Hai Bà Trưng khởi nghĩa chống nhà Hán.",
    level: "medium"
    , tags: ["timeline"]
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
    id: 19, topic: "lich_su_viet_nam", topicName: "Dòng lịch sử Việt Nam", type: "mc",
    q: "Trần Quốc Toản từng viết lên vai mình câu gì?",
    answers: ["Phá cường địch, bao hoàng gia", "Giữ nước giữ dân", "Độc lập tự do", "Không có gì quý hơn độc lập"], correct: 0,
    hint: "Trần Quốc Toản là thiếu niên anh hùng thời Trần.",
    level: "hard"
    , tags: ["nhan_vat"]
  },
  {
    id: 20, topic: "lich_su_viet_nam", topicName: "Dòng lịch sử Việt Nam", type: "mc",
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
  }
];