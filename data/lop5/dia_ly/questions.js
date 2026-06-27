const QUESTIONS = [
  {
    id: 1, topic: "da_nang", topicName: "Thành phố Đà Nẵng", type: "mc",
    q: "Thành phố Đà Nẵng thuộc vùng nào của Việt Nam?",
    answers: ["Miền Trung", "Miền Bắc", "Miền Nam", "Tây Nguyên"], correct: 0,
    hint: "Đà Nẵng nằm ở duyên hải miền Trung.",
    level: "easy"
    , tags: ["sgk", "mien_trung"]
  },
  {
    id: 2, topic: "da_nang", topicName: "Thành phố Đà Nẵng", type: "mc",
    q: "Bán đảo Sơn Trà thuộc thành phố nào?",
    answers: ["Đà Nẵng", "Huế", "Quy Nhơn", "Nha Trang"], correct: 0,
    hint: "Sơn Trà là điểm du lịch nổi tiếng của Đà Nẵng.",
    level: "easy"
    , tags: ["sgk", "dia_danh"]
  },
  {
    id: 3, topic: "da_nang", topicName: "Thành phố Đà Nẵng", type: "mc",
    q: "Ngũ Hành Sơn nằm ở tỉnh/thành phố nào?",
    answers: ["Đà Nẵng", "Quảng Nam", "Quảng Ngãi", "Huế"], correct: 0,
    hint: "Ngũ Hành Sơn gồm 5 ngọn núi đá vôi.",
    level: "medium"
    , tags: ["sgk"]
  },
  {
    id: 4, topic: "da_nang", topicName: "Thành phố Đà Nẵng", type: "fill",
    q: "Cầu Rồng là biểu tượng của thành phố ?.",
    answer: "Đà Nẵng",
    hint: "Cầu Rồng phun lửa vào cuối tuần.",
    level: "easy"
    , tags: ["sgk"]
  },
  {
    id: 5, topic: "da_nang", topicName: "Thành phố Đà Nẵng", type: "mc",
    q: "Từ ngày 1/7/2025, thành phố Đà Nẵng được hình thành từ sáp nhập tỉnh nào?",
    answers: ["Quảng Nam và Đà Nẵng", "Quảng Ngãi và Đà Nẵng", "Thừa Thiên Huế và Đà Nẵng", "Quảng Bình và Quảng Trị"], correct: 0,
    hint: "Theo Nghị quyết sáp nhập đơn vị hành chính 2025.",
    level: "hard"
    , tags: ["sgk", "2025"]
  },
  {
    id: 6, topic: "hue", topicName: "Thành phố Huế", type: "mc",
    q: "Sông Hương chảy qua thành phố nào?",
    answers: ["Huế", "Đà Nẵng", "Hà Nội", "Cần Thơ"], correct: 0,
    hint: "Sông Hương là biểu tượng của cố đô Huế.",
    level: "easy"
    , tags: ["sgk"]
  },
  {
    id: 7, topic: "hue", topicName: "Thành phố Huế", type: "mc",
    q: "Quần thể di tích Cố đô Huế được UNESCO công nhận là di sản nào?",
    answers: ["Di sản Văn hóa Thế giới", "Di sản Thiên nhiên Thế giới", "Di sản địa chất", "Di sản phi vật thể"], correct: 0,
    hint: "Công nhận năm 1993.",
    level: "medium"
    , tags: ["sgk", "unesco"]
  },
  {
    id: 8, topic: "hue", topicName: "Thành phố Huế", type: "mc",
    q: "Huế thuộc vùng địa lý nào?",
    answers: ["Bắc Trung Bộ", "Nam Trung Bộ", "Đông Bằng Bắc Bộ", "Tây Nam Bộ"], correct: 0,
    hint: "Cùng với Thanh Hóa, Nghệ An, Hà Tinh, Quảng Trị.",
    level: "medium"
    , tags: ["sgk", "vung"]
  },
  {
    id: 9, topic: "hue", topicName: "Thành phố Huế", type: "fill",
    q: "Kinh thành Huế được xây dưới triều đại ?.",
    answer: "Nguyễn",
    hint: "Triều Nguyễn (1802-1945).",
    level: "medium"
    , tags: ["sgk"]
  },
  {
    id: 10, topic: "hue", topicName: "Thành phố Huế", type: "mc",
    q: "Lăng Tẩm các vua Nguyễn nằm ở tỉnh/thành phố nào?",
    answers: ["Huế", "Đà Nẵng", "Quảng Nam", "Quảng Bình"], correct: 0,
    hint: "Dọc theo dòng Hương Giang.",
    level: "easy"
    , tags: ["sgk"]
  },
  {
    id: 11, topic: "ho_chi_minh", topicName: "TP. Hồ Chí Minh", type: "mc",
    q: "Thành phố Hồ Chí Minh thuộc vùng nào?",
    answers: ["Miền Nam", "Miền Trung", "Miền Bắc", "Tây Nguyên"], correct: 0,
    hint: "TP.HCM là trung tâm kinh tế lớn nhất miền Nam.",
    level: "easy"
    , tags: ["sgk"]
  },
  {
    id: 12, topic: "ho_chi_minh", topicName: "TP. Hồ Chí Minh", type: "mc",
    q: "Chợ Bình Tây nằm ở quận nào của TP.HCM?",
    answers: ["Quận 6", "Quận 1", "Quận 7", "Quận Bình Thạnh"], correct: 0,
    hint: "Chợ Bình Tây ở khu vực Chợ Lớn.",
    level: "hard"
    , tags: ["sgk"]
  },
  {
    id: 13, topic: "ho_chi_minh", topicName: "TP. Hồ Chí Minh", type: "mc",
    q: "Cầu Phú Mỹ bắc qua sông nào?",
    answers: ["Sông Sài Gòn", "Sông Đồng Nai", "Sông Cửu Long", "Sông Hương"], correct: 0,
    hint: "Cầu dây văng nối Quận 2 và Quận 7.",
    level: "medium"
    , tags: ["sgk"]
  },
  {
    id: 14, topic: "ho_chi_minh", topicName: "TP. Hồ Chí Minh", type: "fill",
    q: "Từ 1/7/2025, TP.HCM mới hình thành từ sáp nhập Bình Dương, Bà Rịa-Vũng Tàu và thành phố Hồ Chí Minh cũ. Sáp nhập tạo thành phố có diện tích khoảng ? km² (làm tròn: 6773).",
    answer: "6773",
    hint: "Hoặc Hồ Chí Minh — thành phố cũ.",
    level: "hard"
    , tags: ["sgk", "2025"]
  },
  {
    id: 15, topic: "ho_chi_minh", topicName: "TP. Hồ Chí Minh", type: "mc",
    q: "Dinh Độc Lập (Hội trường Thống Nhất) nằm ở quận nào?",
    answers: ["Quận 1", "Quận 3", "Quận 5", "Thủ Đức"], correct: 0,
    hint: "Trung tâm quận 1, TP.HCM.",
    level: "easy"
    , tags: ["sgk", "di_tich"]
  },
  {
    id: 16, topic: "ho_chi_minh", topicName: "TP. Hồ Chí Minh", type: "mc",
    q: "TP.HCM có khí hậu gì?",
    answers: ["Nhiệt đới gió mùa", "Nhiệt đới lục địa", "Ôn đới", "Cận nhiệt đới"], correct: 0,
    hint: "Hai mùa rõ rệt: mùa mưa và mùa khô.",
    level: "medium"
    , tags: ["sgk", "khi_hau"]
  },
  {
    id: 17, topic: "vung_mien", topicName: "Vùng miền Việt Nam", type: "mc",
    q: "Vùng Đông Bằng Bắc Bộ gồm mấy tỉnh, thành phố (theo cẩm nang)?",
    answers: ["6", "5", "4", "8"], correct: 0,
    hint: "Bắc Ninh, Quảng Ninh, Hà Nội, Hải Phòng, Hưng Yên, Ninh Bình.",
    level: "hard"
    , tags: ["sgk", "vung"]
  },
  {
    id: 18, topic: "vung_mien", topicName: "Vùng miền Việt Nam", type: "mc",
    q: "Vùng Tây Nam Bộ gồm những tỉnh/thành phố nào?",
    answers: ["Đồng Tháp, An Giang, Vĩnh Long, Cần Thơ, Cà Mau", "Hà Nội, Hải Phòng, Quảng Ninh", "Đà Nẵng, Huế, Quảng Nam", "Lâm Đồng, Đắk Lắk, Gia Lai"], correct: 0,
    hint: "Vùng cuối cùng ở cực Nam.",
    level: "hard"
    , tags: ["sgk", "vung"]
  },
  {
    id: 19, topic: "vung_mien", topicName: "Vùng miền Việt Nam", type: "mc",
    q: "Vịnh Hạ Long thuộc tỉnh nào?",
    answers: ["Quảng Ninh", "Hải Phòng", "Thái Bình", "Nam Định"], correct: 0,
    hint: "Di sản thiên nhiên thế giới UNESCO.",
    level: "easy"
    , tags: ["unesco"]
  },
  {
    id: 20, topic: "vung_mien", topicName: "Vùng miền Việt Nam", type: "mc",
    q: "Phong Nha - Kẻ Bàng thuộc tỉnh nào?",
    answers: ["Quảng Bình", "Quảng Trị", "Quảng Nam", "Nghệ An"], correct: 0,
    hint: "Hang động đá vôi nổi tiếng miền Trung.",
    level: "medium"
    , tags: ["unesco"]
  },
  {
    id: 21, topic: "vung_mien", topicName: "Vùng miền Việt Nam", type: "fill",
    q: "Việt Nam có ? miền địa lý chính.",
    answer: "3",
    hint: "Bắc, Trung, Nam.",
    level: "easy"
    , tags: ["co_ban"]
  }
];