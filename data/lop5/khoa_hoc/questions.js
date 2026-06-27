const QUESTIONS = [
  {
    id: 1, topic: "con_nguoi", topicName: "Con người và sức khỏe", type: "mc",
    q: "Cơ quan nào bơm máu đi khắp cơ thể?",
    answers: ["Tim", "Phổi", "Gan", "Dạ dày"], correct: 0,
    hint: "Tim co bóp đẩy máu qua mạch máu.",
    level: "easy"
    , tags: ["co_quan"]
  },
  {
    id: 2, topic: "con_nguoi", topicName: "Con người và sức khỏe", type: "mc",
    q: "Cơ quan hô hấp chính của con người là gì?",
    answers: ["Phổi", "Tim", "Thận", "Ruột"], correct: 0,
    hint: "Phổi trao đổi khí O2 và CO2.",
    level: "easy"
    , tags: ["co_quan"]
  },
  {
    id: 3, topic: "con_nguoi", topicName: "Con người và sức khỏe", type: "fill",
    q: "Xương sống bảo vệ bộ phận nào? (tên tiếng Việt: ?)",
    answer: "tủy sống",
    hint: "Tủy sống nằm trong ống sống.",
    level: "medium"
    , tags: ["co_quan"]
  },
  {
    id: 4, topic: "con_nguoi", topicName: "Con người và sức khỏe", type: "mc",
    q: "Để phòng bệnh sốt xuất huyết, ta nên làm gì?",
    answers: ["Diệt lăng quăng, bọ gậy", "Uống nhiều nước ngọt", "Ăn nhiều đạm", "Ngủ muộn"], correct: 0,
    hint: "Muỗi vằn truyền bệnh sốt xuất huyết.",
    level: "easy"
    , tags: ["suc_khoe"]
  },
  {
    id: 5, topic: "con_nguoi", topicName: "Con người và sức khỏe", type: "mc",
    q: "Thiếu chất nào gây bệnh còi xương?",
    answers: ["Canxi (Can-xi)", "Sắt", "I-ốt", "Vitamin C"], correct: 0,
    hint: "Canxi cần cho xương và răng chắc khỏe.",
    level: "medium"
    , tags: ["dinh_duong"]
  },
  {
    id: 6, topic: "vat_chat", topicName: "Vật chất và năng lượng", type: "mc",
    q: "Nước sôi ở nhiệt độ bao nhiêu độ C (ở áp suất bình thường)?",
    answers: ["100°C", "0°C", "50°C", "200°C"], correct: 0,
    hint: "100°C là điểm sôi của nước tinh khiết.",
    level: "easy"
    , tags: ["nhiet"]
  },
  {
    id: 7, topic: "vat_chat", topicName: "Vật chất và năng lượng", type: "mc",
    q: "Điện năng có thể chuyển thành dạng năng lượng nào?",
    answers: ["Nhiệt, ánh sáng, chuyển động", "Chỉ nhiệt", "Chỉ ánh sáng", "Không chuyển được"], correct: 0,
    hint: "Bóng đèn: điện → ánh sáng + nhiệt.",
    level: "medium"
    , tags: ["nang_luong"]
  },
  {
    id: 8, topic: "vat_chat", topicName: "Vật chất và năng lượng", type: "fill",
    q: "Kim loại như đồng, nhôm có khả năng gì với dòng điện?",
    answer: "dẫn điện",
    hint: "Chất dẫn điện — hoặc 'kim loại' cũng đúng về mặt vật lý.",
    level: "hard"
    , tags: ["dien"]
  },
  {
    id: 9, topic: "vat_chat", topicName: "Vật chất và năng lượng", type: "mc",
    q: "Mặt trời cung cấp cho Trái Đất chủ yếu dạng năng lượng nào?",
    answers: ["Nhiệt và ánh sáng", "Điện", "Cơ học", "Hóa học"], correct: 0,
    hint: "Năng lượng mặt trời nuôi sống sinh vật.",
    level: "easy"
    , tags: ["nang_luong"]
  },
  {
    id: 10, topic: "vat_chat", topicName: "Vật chất và năng lượng", type: "mc",
    q: "Khi đun nước, nước chuyển từ thể lỏng sang thể gì?",
    answers: ["Hơi (thể khí)", "Rắn", "Plasma", "Không đổi"], correct: 0,
    hint: "Quá trình bay hơi / sôi.",
    level: "easy"
    , tags: ["vat_ly"]
  },
  {
    id: 11, topic: "sinh_vat", topicName: "Thực vật và động vật", type: "mc",
    q: "Quá trình thực vật tạo ra oxy và hấp thụ CO2 gọi là gì?",
    answers: ["Quang hợp", "Hô hấp", "Tiêu hóa", "Bài tiết"], correct: 0,
    hint: "Diễn ra ở lá, cần ánh sáng mặt trời.",
    level: "easy"
    , tags: ["thuc_vat"]
  },
  {
    id: 12, topic: "sinh_vat", topicName: "Thực vật và động vật", type: "mc",
    q: "Động vật có xương sống được gọi là động vật gì?",
    answers: ["Động vật có xương sống", "Động vật không xương sống", "Thực vật", "Vi sinh vật"], correct: 0,
    hint: "Ngược lại với động vật không xương sống (côn trùng, giun...).",
    level: "easy"
    , tags: ["dong_vat"]
  },
  {
    id: 13, topic: "sinh_vat", topicName: "Thực vật và động vật", type: "fill",
    q: "Rễ cây hấp thụ nước và ? từ đất.",
    answer: "muối khoáng",
    hint: "Muối khoáng (chất khoáng) nuôi cây.",
    level: "medium"
    , tags: ["thuc_vat"]
  },
  {
    id: 14, topic: "sinh_vat", topicName: "Thực vật và động vật", type: "mc",
    q: "Chuỗi thức ăn bắt đầu từ sinh vật nào?",
    answers: ["Sinh vật tự tạo (thực vật)", "Động vật ăn thịt", "Vi khuẩn phân hủy", "Con người"], correct: 0,
    hint: "Thực vật quang hợp tạo chất hữu cơ.",
    level: "medium"
    , tags: ["sinh_thai"]
  },
  {
    id: 15, topic: "sinh_vat", topicName: "Thực vật và động vật", type: "mc",
    q: "Côn trùng có bao nhiêu chân?",
    answers: ["6", "8", "4", "10"], correct: 0,
    hint: "Đặc điểm của lớp Insecta.",
    level: "easy"
    , tags: ["dong_vat"]
  },
  {
    id: 16, topic: "moi_truong", topicName: "Môi trường và tài nguyên", type: "mc",
    q: "Rác thải nhựa khó phân hủy nên xử lý bằng cách nào tốt nhất?",
    answers: ["Tái chế, hạn chế sử dụng túi nilon", "Đốt bỏ tự do", "Chôn lấp không phân loại", "Xả xuống sông"], correct: 0,
    hint: "3R: Reduce, Reuse, Recycle.",
    level: "easy"
    , tags: ["rac_thai"]
  },
  {
    id: 17, topic: "moi_truong", topicName: "Môi trường và tài nguyên", type: "mc",
    q: "Nguồn năng lượng tái tạo nào sau đây phổ biến ở Việt Nam?",
    answers: ["Năng lượng mặt trời", "Than đá", "Dầu mỏ", "Urani"], correct: 0,
    hint: "Việt Nam có nhiều nắng, phù hợp pin mặt trời.",
    level: "easy"
    , tags: ["nang_luong"]
  },
  {
    id: 18, topic: "moi_truong", topicName: "Môi trường và tài nguyên", type: "fill",
    q: "Khí ? là khí nhà kính chính do con người thải ra từ đốt nhiên liệu hóa thạch.",
    answer: "CO2",
    hint: "Các-bô-nic (CO2).",
    level: "medium"
    , tags: ["khi_hau"]
  },
  {
    id: 19, topic: "moi_truong", topicName: "Môi trường và tài nguyên", type: "mc",
    q: "Rừng có vai trò gì đối với môi trường?",
    answers: ["Giữ nước, tạo oxy, bảo vệ đất", "Gây ô nhiễm", "Làm cạn kiệt tài nguyên", "Không có vai trò"], correct: 0,
    hint: "Rừng là lá phổi xanh của Trái Đất.",
    level: "easy"
    , tags: ["rung"]
  },
  {
    id: 20, topic: "moi_truong", topicName: "Môi trường và tài nguyên", type: "mc",
    q: "Nước sạch chiếm khoảng bao nhiêu % nước trên Trái Đất?",
    answers: ["Rất ít (khoảng 2-3%)", "50%", "70%", "90%"], correct: 0,
    hint: "Phần lớn là nước mặn ở đại dương.",
    level: "medium"
    , tags: ["nuoc"]
  }
];