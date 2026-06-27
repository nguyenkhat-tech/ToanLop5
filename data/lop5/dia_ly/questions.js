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
    hint: "Cầu bắc qua sông Sài Gòn, nối TP.HCM với các khu vực phía đông.",
    level: "medium"
    , tags: ["sgk"]
  },
  {
    id: 14, topic: "ho_chi_minh", topicName: "TP. Hồ Chí Minh", type: "fill",
    q: "Diện tích TP.HCM sau sáp nhập 1/7/2025 khoảng ? km² (làm tròn).",
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
  },
  {
    id: 22, topic: "ho_chi_minh", topicName: "TP. Hồ Chí Minh", type: "fill",
    q: "Sau sáp nhập 1/7/2025, TP.HCM có ? đơn vị hành chính cấp xã.",
    answer: "168",
    hint: "Gồm 113 phường, 54 xã và 1 đặc khu.",
    level: "medium"
    , tags: ["ocr", "cam_nang", "tp_hcm"]
  },
  {
    id: 24, topic: "ho_chi_minh", topicName: "TP. Hồ Chí Minh", type: "mc",
    q: "TP.HCM được hình thành từ sáp nhập những địa phương nào (1/7/2025)?",
    answers: ["TP.HCM + Bình Dương + Bà Rịa - Vũng Tàu", "TP.HCM + Đồng Nai + Bình Phước", "TP.HCM + Long An + Tiền Giang", "Chỉ TP.HCM cũ"], correct: 0,
    hint: "Theo phần 3 cẩm nang địa lý.",
    level: "easy"
    , tags: ["ocr", "cam_nang", "tp_hcm"]
  },
  {
    id: 25, topic: "sap_nhap_2025", topicName: "Sáp nhập tỉnh 2025", type: "mc",
    q: "Sau sáp nhập 2025, Ninh Bình thuộc vùng nào?",
    answers: ["Bắc Bộ", "Đông bằng sông Hồng", "Tây Nguyên", "Miền Bắc"], correct: 0,
    hint: "Hình thành từ: Hà Nam + Ninh Bình + Nam Định.",
    level: "hard"
    , tags: ["ocr", "cam_nang", "sap_nhap"]
  },
  {
    id: 27, topic: "sap_nhap_2025", topicName: "Sáp nhập tỉnh 2025", type: "mc",
    q: "Sau sáp nhập 2025, Thanh Hóa thuộc vùng nào?",
    answers: ["Bắc Trung Bộ", "Bắc Bộ", "Tây Nguyên", "Miền Bắc"], correct: 0,
    hint: "Hình thành từ: Không thay đổi.",
    level: "hard"
    , tags: ["ocr", "cam_nang", "sap_nhap"]
  },
  {
    id: 28, topic: "sap_nhap_2025", topicName: "Sáp nhập tỉnh 2025", type: "mc",
    q: "Sau sáp nhập 2025, Nghệ An thuộc vùng nào?",
    answers: ["Bắc Trung Bộ", "Bắc Bộ", "Tây Nguyên", "Miền Bắc"], correct: 0,
    hint: "Hình thành từ: Không thay đổi.",
    level: "hard"
    , tags: ["ocr", "cam_nang", "sap_nhap"]
  },
  {
    id: 29, topic: "sap_nhap_2025", topicName: "Sáp nhập tỉnh 2025", type: "mc",
    q: "Sau sáp nhập 2025, TP. Đà Nẵng thuộc vùng nào?",
    answers: ["Nam Trung Bộ", "Bắc Bộ", "Tây Nguyên", "Miền Bắc"], correct: 0,
    hint: "Hình thành từ: Quảng Nam + Đà Nẵng.",
    level: "hard"
    , tags: ["ocr", "cam_nang", "sap_nhap"]
  },
  {
    id: 30, topic: "sap_nhap_2025", topicName: "Sáp nhập tỉnh 2025", type: "mc",
    q: "Sau sáp nhập 2025, Gia Lai thuộc vùng nào?",
    answers: ["Nam Trung Bộ", "Bắc Bộ", "Tây Nguyên", "Miền Bắc"], correct: 0,
    hint: "Hình thành từ: Gia Lai + Bình Định.",
    level: "hard"
    , tags: ["ocr", "cam_nang", "sap_nhap"]
  },
  {
    id: 31, topic: "sap_nhap_2025", topicName: "Sáp nhập tỉnh 2025", type: "mc",
    q: "Sau sáp nhập 2025, Đắk Lắk thuộc vùng nào?",
    answers: ["Nam Trung Bộ", "Bắc Bộ", "Tây Nguyên", "Miền Bắc"], correct: 0,
    hint: "Hình thành từ: Phú Yên + Đắk Lắk.",
    level: "hard"
    , tags: ["ocr", "cam_nang", "sap_nhap"]
  },
  {
    id: 32, topic: "sap_nhap_2025", topicName: "Sáp nhập tỉnh 2025", type: "mc",
    q: "Sau sáp nhập 2025, Khánh Hòa thuộc vùng nào?",
    answers: ["Nam Trung Bộ", "Bắc Bộ", "Tây Nguyên", "Miền Bắc"], correct: 0,
    hint: "Hình thành từ: Khánh Hòa + Ninh Thuận.",
    level: "hard"
    , tags: ["ocr", "cam_nang", "sap_nhap"]
  },
  {
    id: 33, topic: "sap_nhap_2025", topicName: "Sáp nhập tỉnh 2025", type: "mc",
    q: "Sau sáp nhập 2025, Lâm Đồng thuộc vùng nào?",
    answers: ["Nam Trung Bộ", "Bắc Bộ", "Tây Nguyên", "Miền Bắc"], correct: 0,
    hint: "Hình thành từ: Đắk Nông + Lâm Đồng + Bình Thuận.",
    level: "hard"
    , tags: ["ocr", "cam_nang", "sap_nhap"]
  },
  {
    id: 34, topic: "sap_nhap_2025", topicName: "Sáp nhập tỉnh 2025", type: "mc",
    q: "Sau sáp nhập 2025, Đông Nai thuộc vùng nào?",
    answers: ["Đông Nam Bộ", "Bắc Bộ", "Tây Nguyên", "Miền Bắc"], correct: 0,
    hint: "Hình thành từ: Bình Phước + Đông Nai.",
    level: "hard"
    , tags: ["ocr", "cam_nang", "sap_nhap"]
  },
  {
    id: 35, topic: "sap_nhap_2025", topicName: "Sáp nhập tỉnh 2025", type: "mc",
    q: "Sau sáp nhập 2025, Tây Ninh thuộc vùng nào?",
    answers: ["Đông Nam Bộ", "Bắc Bộ", "Tây Nguyên", "Miền Bắc"], correct: 0,
    hint: "Hình thành từ: Long An + Tây Ninh.",
    level: "hard"
    , tags: ["ocr", "cam_nang", "sap_nhap"]
  },
  {
    id: 36, topic: "sap_nhap_2025", topicName: "Sáp nhập tỉnh 2025", type: "mc",
    q: "Sau sáp nhập 2025, TP. Hồ Chí Minh thuộc vùng nào?",
    answers: ["Đông Nam Bộ", "Bắc Bộ", "Tây Nguyên", "Miền Bắc"], correct: 0,
    hint: "Hình thành từ: Bình Dương + TPHCM + Bà Rịa - Vũng Tàu.",
    level: "hard"
    , tags: ["ocr", "cam_nang", "sap_nhap"]
  },
  {
    id: 37, topic: "sap_nhap_2025", topicName: "Sáp nhập tỉnh 2025", type: "mc",
    q: "Sau sáp nhập 2025, TP. Cần Thơ thuộc vùng nào?",
    answers: ["Đồng bằng sông Cửu Long", "Bắc Bộ", "Tây Nguyên", "Miền Bắc"], correct: 0,
    hint: "Hình thành từ: Sóc Trăng + Hậu Giang + Cần Thơ.",
    level: "hard"
    , tags: ["ocr", "cam_nang", "sap_nhap"]
  },
  {
    id: 38, topic: "dia_ly_the_gioi", topicName: "Địa lý thế giới", type: "mc",
    q: "Vạn Lý Trường Thành thuộc quốc gia (vùng) nào?",
    answers: ["Ấn Độ", "Trung Quốc", "Ai Cập", "Pháp"], correct: 1,
    hint: "Theo phần địa lý thế giới cẩm nang.",
    level: "easy"
    , tags: ["ocr", "cam_nang", "the_gioi"]
  },
  {
    id: 39, topic: "dia_ly_the_gioi", topicName: "Địa lý thế giới", type: "mc",
    q: "Taj Mahal thuộc quốc gia (vùng) nào?",
    answers: ["Ai Cập", "Ấn Độ", "Pháp", "Trung Quốc"], correct: 1,
    hint: "Theo phần địa lý thế giới cẩm nang.",
    level: "easy"
    , tags: ["ocr", "cam_nang", "the_gioi"]
  },
  {
    id: 40, topic: "dia_ly_the_gioi", topicName: "Địa lý thế giới", type: "mc",
    q: "Angkor Wat thuộc quốc gia (vùng) nào?",
    answers: ["Campuchia", "Trung Quốc", "Ấn Độ", "Ai Cập"], correct: 0,
    hint: "Theo phần địa lý thế giới cẩm nang.",
    level: "easy"
    , tags: ["ocr", "cam_nang", "the_gioi"]
  },
  {
    id: 41, topic: "dia_ly_the_gioi", topicName: "Địa lý thế giới", type: "mc",
    q: "Tháp Eiffel thuộc quốc gia (vùng) nào?",
    answers: ["Pháp", "Ai Cập", "Trung Quốc", "Ấn Độ"], correct: 0,
    hint: "Theo phần địa lý thế giới cẩm nang.",
    level: "easy"
    , tags: ["ocr", "cam_nang", "the_gioi"]
  },
  {
    id: 42, topic: "dia_ly_the_gioi", topicName: "Địa lý thế giới", type: "mc",
    q: "Buckingham Palace thuộc quốc gia (vùng) nào?",
    answers: ["Trung Quốc", "Ai Cập", "Ấn Độ", "Anh"], correct: 3,
    hint: "Theo phần địa lý thế giới cẩm nang.",
    level: "easy"
    , tags: ["ocr", "cam_nang", "the_gioi"]
  },
  {
    id: 43, topic: "dia_ly_the_gioi", topicName: "Địa lý thế giới", type: "mc",
    q: "Kim tự tháp Giza thuộc quốc gia (vùng) nào?",
    answers: ["Pháp", "Trung Quốc", "Ấn Độ", "Ai Cập"], correct: 3,
    hint: "Theo phần địa lý thế giới cẩm nang.",
    level: "easy"
    , tags: ["ocr", "cam_nang", "the_gioi"]
  },
  {
    id: 44, topic: "dia_ly_the_gioi", topicName: "Địa lý thế giới", type: "mc",
    q: "Núi Kilimanjaro thuộc quốc gia (vùng) nào?",
    answers: ["Tanzania", "Ấn Độ", "Ai Cập", "Trung Quốc"], correct: 0,
    hint: "Theo phần địa lý thế giới cẩm nang.",
    level: "easy"
    , tags: ["ocr", "cam_nang", "the_gioi"]
  },
  {
    id: 45, topic: "dia_ly_the_gioi", topicName: "Địa lý thế giới", type: "mc",
    q: "Thác Victoria thuộc quốc gia (vùng) nào?",
    answers: ["Zambia/Zimbabwe", "Ai Cập", "Trung Quốc", "Ấn Độ"], correct: 0,
    hint: "Theo phần địa lý thế giới cẩm nang.",
    level: "easy"
    , tags: ["ocr", "cam_nang", "the_gioi"]
  }
];
