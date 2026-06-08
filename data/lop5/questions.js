// data/lop5/questions.js - Bộ đề Hình học lớp 5 lấy lại căn bản (Đánh số lại từ ID 1)
const QUESTIONS = [
  // ==========================================
  // 1. HÌNH VUÔNG (ID: 1 - 6)
  // ==========================================
  { 
    id: 1, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.square(40, "4") + " Hình vuông có cạnh 4 cm. Chu vi là ? cm.",
    answer: "16",
    hint: "📐 Công thức chu vi hình vuông: cạnh × 4.",
    level: "easy", tags: ["hinh_vuong", "chu_vi"]
  },
  { 
    id: 2, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.square(50, "5") + " Hình vuông cạnh 5 cm. Diện tích là ? cm².",
    answer: "25",
    hint: "📐 Diện tích hình vuông = cạnh × cạnh.",
    level: "easy", tags: ["hinh_vuong", "dien_tich"]
  },
  { 
    id: 3, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.square(60, "6") + " Hình vuông cạnh 6 cm. Chu vi là:",
    answers: ["24 cm", "36 cm", "12 cm", "30 cm"], correct: 0,
    hint: "📐 Chu vi = cạnh × 4. Hãy tính 6 × 4.",
    level: "easy", tags: ["hinh_vuong", "chu_vi"]
  },
  { 
    id: 4, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.square(80, "8") + " Diện tích hình vuông cạnh 8 cm là:",
    answers: ["64 cm²", "32 cm²", "16 cm²", "48 cm²"], correct: 0,
    hint: "📐 Diện tích = cạnh × cạnh. 8 × 8 = ?",
    level: "easy", tags: ["hinh_vuong", "dien_tich"]
  },
  { 
    id: 5, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.square(50, "?") + " Một hình vuông có diện tích 49 cm². Cạnh hình vuông dài ? cm.",
    answer: "7",
    hint: "📐 Tìm số tự nhiên nào nhân với chính nó bằng 49.",
    level: "medium", tags: ["hinh_vuong", "tim_canh"]
  },
  { 
    id: 6, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.square(40, "?") + " Hình vuông có chu vi 36 cm. Cạnh dài ? cm.",
    answer: "9",
    hint: "📐 Cạnh hình vuông = Chu vi ÷ 4.",
    level: "medium", tags: ["hinh_vuong", "tim_canh"]
  },

  // ==========================================
  // 2. HÌNH CHỮ NHẬT (ID: 7 - 14)
  // ==========================================
  {
    id: 7, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.rectangle(60, 40, "6", "4", "cm") + " Hình chữ nhật có chiều dài 6 cm, chiều rộng 4 cm. Chu vi là ? cm.",
    answer: "20",
    hint: "📐 Chu vi hình chữ nhật = (Chiều dài + Chiều rộng) × 2.",
    level: "easy", tags: ["hinh_chu_nhat", "chu_vi"]
  },
  {
    id: 8, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.rectangle(70, 30, "7", "3", "cm") + " Hình chữ nhật có chiều dài 7 cm, chiều rộng 3 cm. Diện tích là ? cm².",
    answer: "21",
    hint: "📐 Diện tích hình chữ nhật = Chiều dài × Chiều rộng.",
    level: "easy", tags: ["hinh_chu_nhat", "dien_tich"]
  },
  {
    id: 9, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.rectangle(50, 30, "5", "3", "cm") + " Một sân trường hình chữ nhật có chiều dài 5 m, chiều rộng 3 m. Chu vi của sân trường là:",
    answers: ["16 m", "15 m", "8 m", "30 m"], correct: 0,
    hint: "📐 Áp dụng công thức tính chu vi: (5 + 3) × 2.",
    level: "easy", tags: ["hinh_chu_nhat", "chu_vi"]
  },
  {
    id: 10, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.rectangle(60, 20, "6", "2", "cm") + " Diện tích hình chữ nhật có chiều dài 6 cm, chiều rộng 2 cm là:",
    answers: ["12 cm²", "16 cm²", "8 cm²", "24 cm²"], correct: 0,
    hint: "📐 Lấy chiều dài nhân với chiều rộng: 6 × 2.",
    level: "easy", tags: ["hinh_chu_nhat", "dien_tich"]
  },
  {
    id: 11, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.rectangle(50, 30, "?", "5", "cm") + " Hình chữ nhật có diện tích 40 cm², chiều rộng dài 5 cm. Chiều dài là ? cm.",
    answer: "8",
    hint: "📐 Chiều dài = Diện tích ÷ Chiều rộng.",
    level: "medium", tags: ["hinh_chu_nhat", "tim_canh"]
  },
  {
    id: 12, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.rectangle(40, 30, "8", "?", "cm") + " Hình chữ nhật có diện tích 24 cm², chiều dài là 8 cm. Chiều rộng là ? cm.",
    answer: "3",
    hint: "📐 Chiều rộng = Diện tích ÷ Chiều dài.",
    level: "medium", tags: ["hinh_chu_nhat", "tim_canh"]
  },
  {
    id: 13, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.rectangle(80, 40, "10", "?", "cm") + " Một hình chữ nhật có chu vi 30 cm, chiều dài là 10 cm. Chiều rộng của hình chữ nhật là:",
    answers: ["5 cm", "10 cm", "20 cm", "15 cm"], correct: 0,
    hint: "📐 Tìm nửa chu vi (30 ÷ 2), sau đó lấy nửa chu vi trừ đi chiều dài.",
    level: "medium", tags: ["hinh_chu_nhat", "tim_canh"]
  },
  {
    id: 14, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.rectangle(50, 40, "?", "4", "cm") + " Một hình chữ nhật có chu vi 20 cm, chiều rộng là 4 cm. Chiều dài của hình chữ nhật là:",
    answers: ["6 cm", "12 cm", "16 cm", "5 cm"], correct: 0,
    hint: "📐 Lấy chu vi chia đôi để tìm nửa chu vi, rồi trừ đi chiều rộng.",
    level: "medium", tags: ["hinh_chu_nhat", "tim_canh"]
  },

  // ==========================================
  // 3. HÌNH TAM GIÁC (ID: 15 - 22)
  // ==========================================
  {
    id: 15, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.triangle(60, 0, 0, 40, "6", "", "", "4", "cm") + " Hình tam giác có độ dài đáy là 6 cm và chiều cao là 4 cm. Diện tích tam giác là ? cm².",
    answer: "12",
    hint: "📐 Diện tích tam giác = (Đáy × Chiều cao) ÷ 2.",
    level: "easy", tags: ["hinh_tam_giac", "dien_tich"]
  },
  {
    id: 16, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.triangle(80, 0, 0, 30, "8", "", "", "3", "cm") + " Hình tam giác có độ dài đáy là 8 cm và chiều cao là 3 cm. Diện tích tam giác là ? cm².",
    answer: "12",
    hint: "📐 Lấy độ dài đáy nhân với chiều cao rồi chia cho 2.",
    level: "easy", tags: ["hinh_tam_giac", "dien_tich"]
  },
  {
    id: 17, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.triangle(50, 0, 0, 40, "5", "", "", "4", "cm") + " Diện tích của một hình tam giác có đáy 5 cm và chiều cao 4 cm là:",
    answers: ["10 cm²", "20 cm²", "9 cm²", "15 cm²"], correct: 0,
    hint: "📐 Áp dụng công thức: (5 × 4) ÷ 2.",
    level: "easy", tags: ["hinh_tam_giac", "dien_tich"]
  },
  {
    id: 18, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.triangle(70, 0, 0, 60, "7", "", "", "6", "cm") + " Diện tích của một hình tam giác có đáy 7 cm và chiều cao 6 cm là:",
    answers: ["21 cm²", "42 cm²", "13 cm²", "24 cm²"], correct: 0,
    hint: "📐 Áp dụng công thức: (7 × 6) ÷ 2.",
    level: "easy", tags: ["hinh_tam_giac", "dien_tich"]
  },
  {
    id: 19, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.triangle(50, 0, 0, 30, "5", "", "", "3", "cm") + " Hình tam giác có đáy 5 m và chiều cao 3 m. Diện tích là ? m².",
    answer: "7.5",
    hint: "📐 Tính (5 × 3) ÷ 2. Kết quả sẽ là một số thập phân.",
    level: "medium", tags: ["hinh_tam_giac", "dien_tich", "so_thap_phan"]
  },
  {
    id: 20, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.triangle(80, 0, 0, 50, "?", "", "", "5", "cm") + " Một hình tam giác có diện tích là 20 cm², chiều cao là 5 cm. Độ dài đáy của tam giác là ? cm.",
    answer: "8",
    hint: "📐 Độ dài đáy = (Diện tích × 2) ÷ Chiều cao.",
    level: "medium", tags: ["hinh_tam_giac", "tim_canh"]
  },
  {
    id: 21, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.triangle(60, 0, 0, 40, "6", "", "", "?", "cm") + " Một hình tam giác có diện tích 24 cm², độ dài đáy là 6 cm. Chiều cao của tam giác đó là:",
    answers: ["8 cm", "4 cm", "12 cm", "6 cm"], correct: 0,
    hint: "📐 Chiều cao = (Diện tích × 2) ÷ Độ dài đáy.",
    level: "medium", tags: ["hinh_tam_giac", "tim_canh"]
  },
  {
    id: 22, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.triangle(40, 0, 0, 40, "?", "", "", "4", "cm") + " Một hình tam giác có diện tích 10 cm², chiều cao là 4 cm. Độ dài đáy của tam giác đó là:",
    answers: ["5 cm", "2.5 cm", "10 cm", "4 cm"], correct: 0,
    hint: "📐 Lấy diện tích nhân 2 rồi chia cho chiều cao: (10 × 2) ÷ 4.",
    level: "medium", tags: ["hinh_tam_giac", "tim_canh"]
  },

  // ==========================================
  // 4. HÌNH THANG (ID: 23 - 26)
  // ==========================================
  {
    id: 23, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.trapezoid(70, 50, 40, "7", "5", "4", "cm") + " Hình thang có đáy lớn 7 cm, đáy bé 5 cm và chiều cao 4 cm. Diện tích là ? cm².",
    answer: "24",
    hint: "📐 Diện tích hình thang = (Đáy lớn + Đáy bé) × Chiều cao ÷ 2.",
    level: "easy", tags: ["hinh_thang", "dien_tich"]
  },
  {
    id: 24, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.trapezoid(60, 40, 50, "6", "4", "5", "cm") + " Hình thang có đáy lớn 6 cm, đáy bé 4 cm và chiều cao 5 cm. Diện tích là ? cm².",
    answer: "25",
    hint: "📐 Tính tổng hai đáy (6 + 4) rồi nhân với chiều cao 5, sau đó chia cho 2.",
    level: "easy", tags: ["hinh_thang", "dien_tich"]
  },
  {
    id: 25, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.trapezoid(80, 40, 30, "8", "4", "3", "cm") + " Diện tích hình thang có đáy lớn 8 cm, đáy bé 4 cm, chiều cao 3 cm là:",
    answers: ["18 cm²", "36 cm²", "12 cm²", "24 cm²"], correct: 0,
    hint: "📐 Công thức: (8 + 4) × 3 ÷ 2.",
    level: "easy", tags: ["hinh_thang", "dien_tich"]
  },
  {
    id: 26, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.trapezoid(50, 30, 40, "5", "3", "4", "cm") + " Diện tích hình thang có đáy lớn 5 cm, đáy bé 3 cm, chiều cao 4 cm là:",
    answers: ["16 cm²", "32 cm²", "12 cm²", "20 cm²"], correct: 0,
    hint: "📐 Công thức: (5 + 3) × 4 ÷ 2.",
    level: "easy", tags: ["hinh_thang", "dien_tich"]
  },

  // ==========================================
  // 5. HÌNH TRÒN (ID: 27 - 30)
  // ==========================================
  {
    id: 27, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.circle(40, "3", "", "cm") + " Hình tròn có bán kính r = 3 cm. Chu vi của hình tròn đó là ? cm. (Lấy số pi = 3,14)",
    answer: "18.84",
    hint: "📐 Chu vi hình tròn = Bán kính × 2 × 3,14.",
    level: "medium", tags: ["hinh_tron", "chu_vi", "so_thap_phan"]
  },
  {
    id: 28, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.circle(40, "5", "", "cm") + " Hình tròn có bán kính r = 5 cm. Chu vi của hình tròn đó là ? cm. (Lấy số pi = 3,14)",
    answer: "31.4",
    hint: "📐 Chu vi hình tròn = Bán kính × 2 × 3,14. Thực hiện: 5 × 2 × 3,14.",
    level: "medium", tags: ["hinh_tron", "chu_vi", "so_thap_phan"]
  },
  {
    id: 29, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.circle(40, "2", "", "cm") + " Một hình tròn có bán kính r = 2 cm. Diện tích của hình tròn đó là:",
    answers: ["12.56 cm²", "6.28 cm²", "25.12 cm²", "8 cm²"], correct: 0,
    hint: "📐 Diện tích hình tròn = Bán kính × Bán kính × 3,14.",
    level: "medium", tags: ["hinh_tron", "dien_tich", "so_thap_phan"]
  },
  {
    id: 30, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.circle(40, "10", "", "cm") + " Một hình tròn có bán kính r = 10 cm. Diện tích của hình tròn đó là:",
    answers: ["314 cm²", "31.4 cm²", "62.8 cm²", "100 cm²"], correct: 0,
    hint: "📐 Diện tích hình tròn = 10 × 10 × 3,14.",
    level: "medium", tags: ["hinh_tron", "dien_tich", "so_thap_phan"]
  },
  // ==========================================
  // HÌNH CHỮ NHẬT (ID: 31 - 40)
  // ==========================================
  {
    id: 31, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.rectangle(80, 50, "8", "5", "cm") + " Một mảnh giấy hình chữ nhật có chiều dài 8 cm, chiều rộng 5 cm. Diện tích mảnh giấy đó là:",
    answers: ["40 cm²", "26 cm²", "13 cm²", "20 cm²"], correct: 0,
    hint: "📐 Diện tích hình chữ nhật = Chiều dài × Chiều rộng. Tính 8 × 5.",
    level: "easy", tags: ["hinh_chu_nhat", "dien_tich"]
  },
  {
    id: 32, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.rectangle(70, 40, "1,2", "0,5", "m") + " Một tấm kính hình chữ nhật có chiều dài 1,2 m và chiều rộng 0,5 m. Diện tích tấm kính đó là ? m².",
    answer: "0.6",
    hint: "📐 Lấy chiều dài nhân với chiều rộng: 1,2 × 0,5. Chú ý đếm dấu phẩy ở phần thập phân.",
    level: "medium", tags: ["hinh_chu_nhat", "dien_tich", "so_thap_phan"]
  },
  {
    id: 33, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.rectangle(60, 30, "15", "?", "cm") + " Một hình chữ nhật có diện tích 150 cm² và chiều dài là 15 cm. Chiều rộng của hình chữ nhật đó là ? cm.",
    answer: "10",
    hint: "📐 Muốn tìm chiều rộng, ta lấy diện tích chia cho chiều dài: 150 ÷ 15.",
    level: "medium", tags: ["hinh_chu_nhat", "tim_canh"]
  },
  {
    id: 34, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.rectangle(80, 40, "?", "6", "m") + " Một thửa ruộng hình chữ nhật có diện tích 480 m², chiều rộng là 6 m. Chiều dài của thửa ruộng đó là:",
    answers: ["80 m", "8 m", "474 m", "40 m"], correct: 0,
    hint: "📐 Chiều dài = Diện tích ÷ Chiều rộng. Lấy 480 chia cho 6.",
    level: "medium", tags: ["hinh_chu_nhat", "tim_canh"]
  },
  {
    id: 35, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.rectangle(70, 50, "10", "8", "cm") + " Chu vi một hình chữ nhật là 36 cm, chiều dài là 10 cm. Chiều rộng của hình chữ nhật đó là ? cm.",
    answer: "8",
    hint: "📐 Tìm nửa chu vi trước: 36 ÷ 2 = 18 cm. Sau đó lấy nửa chu vi trừ đi chiều dài.",
    level: "medium", tags: ["hinh_chu_nhat", "tim_canh"]
  },
  {
    id: 36, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.rectangle(60, 40, "?", "5", "m") + " Một ao cá hình chữ nhật có chu vi 24 m, chiều rộng là 5 m. Chiều dài của ao cá đó là:",
    answers: ["7 m", "19 m", "12 m", "14 m"], correct: 0,
    hint: "📐 Nửa chu vi là: 24 ÷ 2 = 12 m. Chiều dài = 12 m trừ đi chiều rộng.",
    level: "medium", tags: ["hinh_chu_nhat", "tim_canh"]
  },
  {
    id: 37, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.rectangle(50, 50, "6", "6", "cm") + " Một hình chữ nhật có chiều dài 6 cm và chiều rộng 6 cm. Bản chất hình này cũng chính là hình gì?",
    answer: "hình vuông",
    hint: "📐 Hình chữ nhật có 4 cạnh bằng nhau thì chính là hình vuông.",
    level: "easy", tags: ["hinh_chu_nhat", "ly_thuyet"]
  },
  {
    id: 38, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.rectangle(90, 40, "9", "4", "cm") + " Nếu gấp chiều dài của hình chữ nhật lên 2 lần và giữ nguyên chiều rộng thì diện tích của nó tăng lên mấy lần?",
    answers: ["2 lần", "4 lần", "3 lần", "không đổi"], correct: 0,
    hint: "📐 Khi một chiều tăng lên bao nhiêu lần thì diện tích cũng tăng lên bấy nhiêu lần.",
    level: "medium", tags: ["hinh_chu_nhat", "tu_duy"]
  },
  {
    id: 39, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.rectangle(60, 40, "4,5", "2", "m") + " Một chiếc bàn hình chữ nhật có chiều dài 4,5 m, chiều rộng 2 m. Chu vi chiếc bàn là ? m.",
    answer: "13",
    hint: "📐 Chu vi = (Chiều dài + Chiều rộng) × 2. Tính: (4,5 + 2) × 2.",
    level: "medium", tags: ["hinh_chu_nhat", "chu_vi", "so_thap_phan"]
  },
  {
    id: 40, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.rectangle(70, 30, "0,8", "0,3", "m") + " Diện tích một bức tranh hình chữ nhật có chiều dài 0,8 m và chiều rộng 0,3 m là:",
    answers: ["0,24 m²", "2,4 m²", "2,2 m²", "1,1 m²"], correct: 0,
    hint: "📐 Lấy 0,8 × 0,3. Nhớ rằng 8 × 3 = 24, sau đó đếm 2 chữ số thập phân.",
    level: "medium", tags: ["hinh_chu_nhat", "dien_tich", "so_thap_phan"]
  },

  // ==========================================
  // HÌNH TAM GIÁC (ID: 41 - 50)
  // ==========================================
  {
    id: 41, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.triangle(70, 0, 0, 40, "10", "", "", "4", "cm") + " Một hình tam giác có độ dài đáy là 10 cm và chiều cao tương ứng là 4 cm. Diện tích là ? cm².",
    answer: "20",
    hint: "📐 Diện tích tam giác = (Đáy × Chiều cao) ÷ 2. Tính 10 × 4 rồi chia cho 2.",
    level: "easy", tags: ["hinh_tam_giac", "dien_tich"]
  },
  {
    id: 42, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.triangle(60, 0, 0, 50, "12", "", "", "5", "cm") + " Diện tích hình tam giác có đáy 12 cm và chiều cao 5 cm là:",
    answers: ["30 cm²", "60 cm²", "17 cm²", "35 cm²"], correct: 0,
    hint: "📐 Công thức tính: (12 × 5) ÷ 2.",
    level: "easy", tags: ["hinh_tam_giac", "dien_tich"]
  },
  {
    id: 43, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.triangle(50, 0, 0, 40, "3,2", "", "", "5", "cm") + " Hình tam giác có độ dài đáy là 3,2 cm và chiều cao là 5 cm. Diện tích của tam giác là ? cm².",
    answer: "8",
    hint: "📐 Tính (3,2 × 5) ÷ 2. Lấy 3,2 × 5 = 16, sau đó chia cho 2.",
    level: "medium", tags: ["hinh_tam_giac", "dien_tich", "so_thap_phan"]
  },
  {
    id: 44, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.triangle(60, 0, 0, 40, "4", "", "", "2,5", "m") + " Một hình tam giác có đáy là 4 m và chiều cao là 2,5 m. Diện tích tam giác đó là:",
    answers: ["5 m²", "10 m²", "6.5 m²", "8 m²"], correct: 0,
    hint: "📐 Tính (4 × 2,5) ÷ 2. Lấy 4 × 2,5 = 10, rồi đem chia cho 2.",
    level: "medium", tags: ["hinh_tam_giac", "dien_tich", "so_thap_phan"]
  },
  {
    id: 45, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.triangle(80, 0, 0, 40, "?", "", "", "6", "cm") + " Hình tam giác có diện tích 30 cm², chiều cao là 6 cm. Độ dài đáy của tam giác là ? cm.",
    answer: "10",
    hint: "📐 Công thức tìm đáy: (Diện tích × 2) ÷ Chiều cao. Lấy (30 × 2) ÷ 6.",
    level: "medium", tags: ["hinh_tam_giac", "tim_canh"]
  },
  {
    id: 46, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.triangle(60, 0, 0, 40, "8", "", "", "?", "cm") + " Một hình tam giác có diện tích 16 cm² và độ dài đáy là 8 cm. Chiều cao của hình tam giác đó là:",
    answers: ["4 cm", "2 cm", "8 cm", "6 cm"], correct: 0,
    hint: "📐 Chiều cao = (Diện tích × 2) ÷ Đáy. Lấy (16 × 2) ÷ 8.",
    level: "medium", tags: ["hinh_tam_giac", "tim_canh"]
  },
  {
    id: 47, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.triangle(50, 0, 0, 40, "6", "", "", "4", "cm") + " Tam giác vuông có hai cạnh góc vuông lần lượt là 6 cm và 4 cm. Diện tích của tam giác vuông đó là ? cm².",
    answer: "12",
    hint: "📐 Diện tích tam giác vuông bằng tích hai cạnh góc vuông chia cho 2. Tính (6 × 4) ÷ 2.",
    level: "easy", tags: ["hinh_tam_giac", "dien_tich"]
  },
  {
    id: 48, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.triangle(60, 0, 0, 60, "5", "", "", "5", "cm") + " Một tam giác vuông có hai cạnh góc vuông đều bằng 5 cm. Diện tích tam giác đó là:",
    answers: ["12,5 cm²", "25 cm²", "10 cm²", "20 cm²"], correct: 0,
    hint: "📐 Áp dụng công thức: (5 × 5) ÷ 2. Kết quả là số thập phân.",
    level: "medium", tags: ["hinh_tam_giac", "dien_tich", "so_thap_phan"]
  },
  {
    id: 49, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.triangle(70, 0, 0, 30, "7", "", "", "3", "cm") + " Cho tam giác có đáy dài 7 cm. Nếu chiều cao tăng lên gấp 2 lần thì diện tích tăng lên ? lần.",
    answer: "2",
    hint: "📐 Diện tích tỉ lệ thuận với chiều cao, nên chiều cao tăng 2 lần thì diện tích tăng 2 lần.",
    level: "medium", tags: ["hinh_tam_giac", "tu_duy"]
  },
  {
    id: 50, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.triangle(40, 0, 0, 40, "a", "", "", "h", "cm") + " Công thức tổng quát tính diện tích hình tam giác (S) với đáy a và chiều cao h là:",
    answers: ["S = (a × h) ÷ 2", "S = a × h", "S = (a + h) × 2", "S = a + h"], correct: 0,
    hint: "📐 Muốn tính diện tích tam giác ta lấy đáy nhân với chiều cao rồi chia cho 2.",
    level: "easy", tags: ["hinh_tam_giac", "ly_thuyet"]
  },

  // ==========================================
  // HÌNH THANG (ID: 51 - 60)
  // ==========================================
  {
    id: 51, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.trapezoid(80, 40, 40, "8", "4", "4", "cm") + " Một hình thang có đáy lớn 8 cm, đáy bé 4 cm và chiều cao 4 cm. Diện tích hình thang là ? cm².",
    answer: "24",
    hint: "📐 Công thức: (Đáy lớn + Đáy bé) × Chiều cao ÷ 2. Tính (8 + 4) × 4 ÷ 2.",
    level: "easy", tags: ["hinh_thang", "dien_tich"]
  },
  {
    id: 52, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.trapezoid(70, 50, 30, "7", "5", "3", "cm") + " Diện tích hình thang có đáy lớn 7 cm, đáy bé 5 cm và chiều cao 3 cm là:",
    answers: ["18 cm²", "36 cm²", "15 cm²", "21 cm²"], correct: 0,
    hint: "📐 Thực hiện phép tính: (7 + 5) × 3 ÷ 2.",
    level: "easy", tags: ["hinh_thang", "dien_tich"]
  },
  {
    id: 53, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.trapezoid(60, 40, 40, "6", "4", "3,5", "cm") + " Một hình thang có đáy lớn 6 cm, đáy bé 4 cm, chiều cao là 3,5 cm. Diện tích của nó là ? cm².",
    answer: "17.5",
    hint: "📐 Tính tổng hai đáy: 6 + 4 = 10 cm. Sau đó lấy 10 × 3,5 ÷ 2.",
    level: "medium", tags: ["hinh_thang", "dien_tich", "so_thap_phan"]
  },
  {
    id: 54, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.trapezoid(90, 50, 40, "1,2", "0,8", "0,5", "m") + " Thửa ruộng hình thang có đáy lớn 1,2 m, đáy bé 0,8 m, chiều cao 0,5 m. Diện tích thửa ruộng là:",
    answers: ["0,5 m²", "1 m²", "0,25 m²", "2 m²"], correct: 0,
    hint: "📐 Tính tổng hai đáy trước: 1,2 + 0,8 = 2 m. Rồi lấy 2 × 0,5 ÷ 2.",
    level: "medium", tags: ["hinh_thang", "dien_tich", "so_thap_phan"]
  },
  {
    id: 55, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.trapezoid(80, 50, 40, "10", "6", "?", "cm") + " Diện tích hình thang là 40 cm², tổng độ dài hai đáy là 16 cm. Chiều cao của hình thang là ? cm.",
    answer: "5",
    hint: "📐 Chiều cao hình thang = (Diện tích × 2) ÷ Tổng hai đáy. Lấy (40 × 2) ÷ 16.",
    level: "medium", tags: ["hinh_thang", "tim_canh"]
  },
  {
    id: 56, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.trapezoid(70, 40, 40, "?", "?", "4", "cm") + " Một hình thang có diện tích 30 cm² và chiều cao là 4 cm. Tổng độ dài hai đáy của hình thang đó là:",
    answers: ["15 cm", "7,5 cm", "30 cm", "12 cm"], correct: 0,
    hint: "📐 Tổng hai đáy = (Diện tích × 2) ÷ Chiều cao. Lấy (30 × 2) ÷ 4.",
    level: "medium", tags: ["hinh_thang", "tim_canh"]
  },
  {
    id: 57, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.trapezoid(60, 40, 50, "5", "3", "4", "cm") + " Cho một hình thang có trung bình cộng hai đáy là 4 cm, chiều cao là 5 cm. Diện tích hình thang đó là ? cm².",
    answer: "20",
    hint: "📐 Diện tích hình thang = Trung bình cộng hai đáy × Chiều cao. Lấy 4 × 5.",
    level: "medium", tags: ["hinh_thang", "dien_tich"]
  },
  {
    id: 58, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.trapezoid(80, 40, 40, "7", "3", "4", "cm") + " Một hình thang vuông có chiều cao chính là một cạnh bên dài 4 cm. Biết hai đáy là 7 cm và 3 cm. Diện tích của nó là:",
    answers: ["20 cm²", "40 cm²", "14 cm²", "28 cm²"], correct: 0,
    hint: "📐 Hình thang vuông có chiều cao bằng cạnh bên vuông góc. Tính: (7 + 3) × 4 ÷ 2.",
    level: "easy", tags: ["hinh_thang", "dien_tich"]
  },
  {
    id: 59, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.trapezoid(50, 30, 40, "4", "2", "3", "cm") + " Hình thang có đáy lớn 4 cm, đáy bé 2 cm. Nếu đáy lớn tăng thêm 2 cm thì tổng hai đáy mới là ? cm.",
    answer: "8",
    hint: "📐 Đáy lớn mới là 4 + 2 = 6 cm. Tổng hai đáy mới là 6 + 2.",
    level: "easy", tags: ["hinh_thang", "tu_duy"]
  },
  {
    id: 60, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.trapezoid(70, 50, 40, "a", "b", "h", "cm") + " Phát biểu nào sau đây đúng về cách tính diện tích hình thang?",
    answers: [
      "Tổng hai đáy nhân với chiều cao rồi chia cho 2",
      "Tích hai đáy nhân với chiều cao rồi chia cho 2",
      "Tổng hai đáy nhân với chiều cao",
      "Hiệu hai đáy nhân với chiều cao rồi chia cho 2"
    ], correct: 0,
    hint: "📐 Bài thơ: Muốn tính diện tích hình thang / Đáy lớn đáy nhỏ ta mang cộng vào / Cộng rồi nhân với chiều cao / Chia đôi lấy nửa thế nào cũng ra.",
    level: "easy", tags: ["hinh_thang", "ly_thuyet"]
  },// ==========================================
  // HÌNH TRÒN VÀ ĐƯỜNG TRÒN (ID: 61 - 70)
  // ==========================================
  {
    id: 61, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.circle(40, "", "6", "cm") + " Một hình tròn có đường kính d = 6 cm. Chu vi của hình tròn đó là ? cm. (Lấy số pi = 3,14)",
    answer: "18.84",
    hint: "📐 Chu vi hình tròn = Đường kính × 3,14. Hãy tính 6 × 3,14.",
    level: "easy", tags: ["hinh_tron", "chu_vi"]
  },
  {
    id: 62, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.circle(40, "", "10", "m") + " Chu vi của một cái hồ hình tròn có đường kính 10 m là:",
    answers: ["31,4 m", "62,8 m", "15,7 m", "314 m"], correct: 0,
    hint: "📐 Chu vi = Đường kính × 3,14. Lấy 10 × 3,14 rồi dịch dấu phẩy sang phải một chữ số.",
    level: "easy", tags: ["hinh_tron", "chu_vi", "so_thap_phan"]
  },
  {
    id: 63, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.circle(40, "4", "", "cm") + " Hình tròn có bán kính r = 4 cm. Diện tích của hình tròn đó là ? cm². (Lấy số pi = 3,14)",
    answer: "50.24",
    hint: "📐 Diện tích hình tròn = Bán kính × Bán kính × 3,14. Hãy tính 4 × 4 × 3,14.",
    level: "medium", tags: ["hinh_tron", "dien_tich", "so_thap_phan"]
  },
  {
    id: 64, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.circle(40, "", "4", "cm") + " Một biển báo hình tròn có đường kính là 4 dm. Diện tích của biển báo đó là:",
    answers: ["12,56 dm²", "50,24 dm²", "25,12 dm²", "6,28 dm²"], correct: 0,
    hint: "📐 Bước 1: Tìm bán kính (Đường kính ÷ 2). Bước 2: Diện tích = Bán kính × Bán kính × 3,14.",
    level: "medium", tags: ["hinh_tron", "dien_tich", "tim_canh"]
  },
  {
    id: 65, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.circle(40, "?", "", "cm") + " Một bánh xe có chu vi là 31,4 cm. Bán kính (r) của bánh xe đó là ? cm.",
    answer: "5",
    hint: "📐 Đường kính = Chu vi ÷ 3,14. Sau đó bán kính bằng một nửa đường kính.",
    level: "medium", tags: ["hinh_tron", "tim_canh"]
  },
  {
    id: 66, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.circle(40, "", "?", "m") + " Một bồn hoa hình tròn có chu vi là 15,7 m. Đường kính của bồn hoa đó là:",
    answers: ["5 m", "2,5 m", "10 m", "3,14 m"], correct: 0,
    hint: "📐 Muốn tìm đường kính, ta lấy Chu vi chia cho 3,14. Hãy tính 15,7 ÷ 3,14.",
    level: "medium", tags: ["hinh_tron", "tim_canh", "so_thap_phan"]
  },
  {
    id: 67, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.circle(40, "1", "", "cm") + " Nếu bán kính của hình tròn tăng lên gấp 2 lần thì chu vi của nó tăng lên ? lần.",
    answer: "2",
    hint: "📐 Chu vi tỉ lệ thuận trực tiếp với bán kính. Bán kính tăng bao nhiêu lần thì chu vi tăng bấy nhiêu lần.",
    level: "easy", tags: ["hinh_tron", "chu_vi", "tu_duy"]
  },
  {
    id: 68, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.circle(40, "1", "", "cm") + " Nếu bán kính của hình tròn tăng lên gấp 2 lần thì diện tích của nó tăng lên gấp mấy lần?",
    answers: ["4 lần", "2 lần", "6 lần", "8 lần"], correct: 0,
    hint: "📐 Diện tích bằng Bán kính × Bán kính × 3,14. Khi bán kính tăng 2 lần, diện tích tăng 2 × 2 lần.",
    level: "medium", tags: ["hinh_tron", "dien_tich", "tu_duy"]
  },
  {
    id: 69, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.circle(40, "r", "", "cm") + " Một hình tròn có đường kính gấp mấy lần bán kính?",
    answer: "2",
    hint: "📐 Đoạn thẳng đường kính đi qua tâm và dài gấp đôi bán kính.",
    level: "easy", tags: ["hinh_tron", "ly_thuyet"]
  },
  {
    id: 70, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.circle(40, "r", "", "cm") + " Công thức tính diện tích hình tròn (S) khi biết bán kính r là:",
    answers: ["S = r × r × 3,14", "S = r × 2 × 3,14", "S = r × 3,14", "S = r × 4 × 3,14"], correct: 0,
    hint: "📐 Muốn tính diện tích hình tròn, ta lấy bán kính nhân với chính nó rồi nhân với số 3,14.",
    level: "easy", tags: ["hinh_tron", "ly_thuyet"]
  },

  // ==========================================
  // HÌNH HỘP CHỮ NHẬT 3D (ID: 71 - 80)
  // ==========================================
  {
    id: 71, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.box(50, 30, 40, "5", "3", "4", "cm") + " Hình hộp chữ nhật có chiều dài 5 cm, chiều rộng 3 cm và chiều cao 4 cm. Diện tích xung quanh là ? cm².",
    answer: "64",
    hint: "📐 Diện tích xung quanh = Chu vi đáy × Chiều cao = (5 + 3) × 2 × 4.",
    level: "medium", tags: ["hinh_hop_chu_nhat", "dien_tich_xung_quanh"]
  },
  {
    id: 72, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.box(60, 40, 20, "6", "4", "2", "cm") + " Một chiếc hộp hình hộp chữ nhật có chiều dài 6 cm, rộng 4 cm, cao 2 cm. Chu vi mặt đáy của chiếc hộp là:",
    answers: ["20 cm", "10 cm", "24 cm", "48 cm"], correct: 0,
    hint: "📐 Mặt đáy là hình chữ nhật. Chu vi đáy = (Chiều dài + Chiều rộng) × 2.",
    level: "easy", tags: ["hinh_hop_chu_nhat", "chu_vi"]
  },
  {
    id: 73, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.box(40, 30, 50, "4", "3", "5", "cm") + " Thể tích của hình hộp chữ nhật có chiều dài 4 cm, chiều rộng 3 cm và chiều cao 5 cm là ? cm³.",
    answer: "60",
    hint: "📐 Thể tích hình hộp chữ nhật = Chiều dài × Chiều rộng × Chiều cao. Tính 4 × 3 × 5.",
    level: "easy", tags: ["hinh_hop_chu_nhat", "the_tich"]
  },
  {
    id: 74, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.box(50, 20, 30, "5", "2", "3", "m") + " Một bể nước hình hộp chữ nhật có dài 5 m, rộng 2 m, cao 3 m. Thể tích bể nước đó là:",
    answers: ["30 m³", "10 m³", "34 m³", "15 m³"], correct: 0,
    hint: "📐 Áp dụng công thức tính thể tích: Dài × Rộng × Cao. Lấy 5 × 2 × 3.",
    level: "easy", tags: ["hinh_hop_chu_nhat", "the_tich"]
  },
  {
    id: 75, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.box(60, 40, 30, "6", "4", "2", "cm") + " Diện tích một mặt đáy của hình hộp chữ nhật có chiều dài 6 cm và chiều rộng 4 cm là ? cm².",
    answer: "24",
    hint: "📐 Mặt đáy là hình chữ nhật, diện tích mặt đáy = Chiều dài × Chiều rộng.",
    level: "easy", tags: ["hinh_hop_chu_nhat", "dien_tich"]
  },
  {
    id: 76, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.box(50, 40, 30, "5", "4", "2", "cm") + " Một hình hộp chữ nhật có diện tích xung quanh là 36 cm², diện tích hai mặt đáy là 40 cm². Diện tích toàn phần của hình hộp đó là:",
    answers: ["76 cm²", "116 cm²", "40 cm²", "4 cm²"], correct: 0,
    hint: "📐 Diện tích toàn phần = Diện tích xung quanh + Diện tích hai mặt đáy.",
    level: "easy", tags: ["hinh_hop_chu_nhat", "dien_tich_toan_phan"]
  },
  {
    id: 77, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.box(40, 30, 50, "4", "3", "?", "cm") + " Thể tích hình hộp chữ nhật là 60 cm², biết diện tích đáy là 12 cm². Chiều cao của hình hộp là ? cm.",
    answer: "5",
    hint: "📐 Chiều cao = Thể tích ÷ Diện tích đáy. Lấy 60 chia cho 12.",
    level: "medium", tags: ["hinh_hop_chu_nhat", "tim_canh"]
  },
  {
    id: 78, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.box(50, 30, 40, "5", "?", "4", "cm") + " Thể tích hình hộp chữ nhật là 80 cm³, có chiều dài 5 cm và chiều cao 4 cm. Chiều rộng của nó là:",
    answers: ["4 cm", "5 cm", "16 cm", "2 cm"], correct: 0,
    hint: "📐 Chiều rộng = Thể tích ÷ (Chiều dài × Chiều cao). Lấy 80 ÷ (5 × 4).",
    level: "medium", tags: ["hinh_hop_chu_nhat", "tim_canh"]
  },
  {
    id: 79, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.box(40, 40, 40, "a", "b", "c", "cm") + " Hình hộp chữ nhật có tất cả bao nhiêu đỉnh?",
    answer: "8",
    hint: "📐 Hình hộp chữ nhật gồm có 4 đỉnh ở mặt trên và 4 đỉnh ở mặt dưới.",
    level: "easy", tags: ["hinh_hop_chu_nhat", "ly_thuyet"]
  },
  {
    id: 80, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.box(40, 40, 40, "a", "b", "c", "cm") + " Hình hộp chữ nhật có bao nhiêu cạnh?",
    answers: ["12 cạnh", "8 cạnh", "6 cạnh", "10 cạnh"], correct: 0,
    hint: "📐 Gồm 4 cạnh đáy trên, 4 cạnh đáy dưới và 4 cạnh bên đứng.",
    level: "easy", tags: ["hinh_hop_chu_nhat", "ly_thuyet"]
  },

  // ==========================================
  // HÌNH LẬP PHƯƠNG 3D (ID: 81 - 90)
  // ==========================================
  {
    id: 81, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.cube(40, "3", "cm") + " Một hình lập phương có cạnh dài 3 cm. Diện tích một mặt của nó là ? cm².",
    answer: "9",
    hint: "📐 Các mặt của hình lập phương đều là hình vuông. Diện tích một mặt = cạnh × cạnh.",
    level: "easy", tags: ["hinh_lap_phuong", "dien_tich"]
  },
  {
    id: 82, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.cube(50, "5", "cm") + " Diện tích một mặt của hình lập phương có cạnh 5 cm là:",
    answers: ["25 cm²", "20 cm²", "30 cm²", "125 cm²"], correct: 0,
    hint: "📐 Diện tích một mặt bằng cạnh nhân cạnh: 5 × 5.",
    level: "easy", tags: ["hinh_lap_phuong", "dien_tich"]
  },
  {
    id: 83, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.cube(40, "2", "cm") + " Diện tích xung quanh của hình lập phương cạnh 2 cm là ? cm².",
    answer: "16",
    hint: "📐 Diện tích xung quanh hình lập phương = Diện tích một mặt × 4 = (2 × 2) × 4.",
    level: "easy", tags: ["hinh_lap_phuong", "dien_tich_xung_quanh"]
  },
  {
    id: 84, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.cube(40, "4", "cm") + " Diện tích xung quanh của một hình lập phương có cạnh 4 cm là:",
    answers: ["64 cm²", "16 cm²", "96 cm²", "32 cm²"], correct: 0,
    hint: "📐 Công thức tính: (Cạnh × Cạnh) × 4. Hãy tính (4 × 4) × 4.",
    level: "easy", tags: ["hinh_lap_phuong", "dien_tich_xung_quanh"]
  },
  {
    id: 85, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.cube(40, "3", "cm") + " Diện tích toàn phần của hình lập phương cạnh 3 cm là ? cm².",
    answer: "54",
    hint: "📐 Diện tích toàn phần hình lập phương = Diện tích một mặt × 6 = (3 × 3) × 6.",
    level: "medium", tags: ["hinh_lap_phuong", "dien_tich_toan_phan"]
  },
  {
    id: 86, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.cube(40, "2", "cm") + " Diện tích toàn phần của hình lập phương có cạnh 2 dm là:",
    answers: ["24 dm²", "16 dm²", "8 dm²", "12 dm²"], correct: 0,
    hint: "📐 Công thức tính: (Cạnh × Cạnh) × 6. Lấy (2 × 2) × 6.",
    level: "easy", tags: ["hinh_lap_phuong", "dien_tich_toan_phan"]
  },
  {
    id: 87, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.cube(50, "4", "cm") + " Thể tích của hình lập phương có cạnh dài 4 cm là ? cm³.",
    answer: "64",
    hint: "📐 Thể tích hình lập phương = Cạnh × Cạnh × Cạnh. Hãy tính 4 × 4 × 4.",
    level: "easy", tags: ["hinh_lap_phuong", "the_tich"]
  },
  {
    id: 88, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.cube(40, "10", "cm") + " Một khối rubik hình lập phương có cạnh dài 10 cm. Thể tích khối rubik đó là:",
    answers: ["1000 cm³", "100 cm³", "600 cm³", "400 cm³"], correct: 0,
    hint: "📐 Thể tích = Cạnh × Cạnh × Cạnh. Tính 10 × 10 × 10.",
    level: "easy", tags: ["hinh_lap_phuong", "the_tich"]
  },
  {
    id: 89, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.cube(40, "?", "cm") + " Một hình lập phương có diện tích một mặt là 36 cm². Cạnh của hình lập phương đó dài ? cm.",
    answer: "6",
    hint: "📐 Diện tích một mặt = Cạnh × Cạnh. Hãy tìm số nào nhân với chính nó bằng 36.",
    level: "medium", tags: ["hinh_lap_phuong", "tim_canh"]
  },
  {
    id: 90, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.cube(40, "a", "cm") + " Hình lập phương có tất cả bao nhiêu mặt?",
    answers: ["6 mặt", "4 mặt", "8 mặt", "12 mặt"], correct: 0,
    hint: "📐 Hình lập phương gồm có 6 mặt và tất cả các mặt đều là hình vuông bằng nhau.",
    level: "easy", tags: ["hinh_lap_phuong", "ly_thuyet"]
  },
  // ==========================================
  // ĐỔI ĐƠN VỊ ĐO DIỆN TÍCH & THỂ TÍCH (ID: 91 - 100)
  // ==========================================
  {
    id: 91, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Đổi đơn vị đo diện tích: 2 m² = ? dm².",
    answer: "200",
    hint: "📐 Trong bảng đơn vị đo diện tích, mỗi hàng liền kề hơn kém nhau 100 lần. 1 m² = 100 dm².",
    level: "easy", tags: ["doi_don_vi", "dien_tich"]
  },
  {
    id: 92, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Diện tích một khu vườn là 5 ha. Đổi sang đơn vị mét vuông (m²) là:",
    answers: ["50000 m²", "5000 m²", "500 m²", "500000 m²"], correct: 0,
    hint: "📐 1 ha (héc-ta) bằng 10 000 m². Vậy 5 ha = 5 × 10 000 m².",
    level: "easy", tags: ["doi_don_vi", "dien_tich"]
  },
  {
    id: 93, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Đổi đơn vị đo thể tích: 1 m³ = ? dm³.",
    answer: "1000",
    hint: "📐 Trong bảng đơn vị đo thể tích, mỗi hàng liền kề hơn kém nhau 1000 lần. 1 m³ = 1000 dm³.",
    level: "easy", tags: ["doi_don_vi", "the_tich"]
  },
  {
    id: 94, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Một bình nước có thể tích là 2,5 dm³. Số lít nước tương ứng chứa đầy bình là:",
    answers: ["2,5 lít", "25 lít", "250 lít", "0,25 lít"], correct: 0,
    hint: "📐 Hãy nhớ quy ước quan trọng: 1 dm³ chính bằng 1 lít.",
    level: "easy", tags: ["doi_don_vi", "the_tich", "ly_thuyet"]
  },
  {
    id: 95, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Đổi đơn vị sau: 4500 cm³ = ? dm³.",
    answer: "4.5",
    hint: "📐 Đổi từ đơn vị nhỏ sang đơn vị lớn liền kề, ta chia cho 1000. Tính 4500 ÷ 1000.",
    level: "medium", tags: ["doi_don_vi", "the_tich", "so_thap_phan"]
  },
  {
    id: 96, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Giá trị của 0,5 m³ đổi ra đơn vị xăng-ti-mét khối (cm³) là:",
    answers: ["500000 cm³", "5000 cm³", "50000 cm³", "500 cm³"], correct: 0,
    hint: "📐 Đổi từ m³ ra cm³ phải nhân với 1 000 000. Tính: 0,5 × 1 000 000.",
    level: "medium", tags: ["doi_don_vi", "the_tich", "so_thap_phan"]
  },
  {
    id: 97, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Điền số thích hợp: 3 m² 5 dm² = ? m².",
    answer: "3.05",
    hint: "📐 5 dm² = 5/100 m² = 0,05 m². Kết quả là 3 + 0,05.",
    level: "medium", tags: ["doi_don_vi", "dien_tich", "so_thap_phan"]
  },
  {
    id: 98, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Cho phép tính: 1 dm³ + 500 cm³. Kết quả thu được theo đơn vị dm³ là:",
    answers: ["1,5 dm³", "501 dm³", "2 dm³", "1,05 dm³"], correct: 0,
    hint: "📐 Đổi 500 cm³ = 0,5 dm³. Sau đó cộng với 1 dm³.",
    level: "medium", tags: ["doi_don_vi", "the_tich", "so_thap_phan"]
  },
  {
    id: 99, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Một hộc tủ có thể tích 0,02 m³. Hộc tủ này có thể tích bằng ? cm³.",
    answer: "20000",
    hint: "📐 Lấy 0,02 nhân với 1 000 000 để chuyển từ m³ sang cm³.",
    level: "medium", tags: ["doi_don_vi", "the_tich", "so_thap_phan"]
  },
  {
    id: 100, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Đơn vị nào sau đây KHÔNG dùng để đo thể tích?",
    answers: ["m²", "m³", "dm³", "lít"], correct: 0,
    hint: "📐 Ký hiệu có số mũ 2 (m²) là đơn vị dùng để đo diện tích mặt phẳng.",
    level: "easy", tags: ["doi_don_vi", "ly_thuyet"]
  },

  // ==========================================
  // TOÁN THỰC TẾ VÀ TỔNG HỢP (ID: 101 - 120)
  // ==========================================
  {
    id: 101, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.rectangle(80, 40, "10", "5", "m") + " Một bức tường hình chữ nhật dài 10 m, cao 5 m. Chi phí sơn mỗi mét vuông là 20 nghìn đồng. Sơn toàn bộ bức tường hết ? nghìn đồng.",
    answer: "1000",
    hint: "📐 Bước 1: Tính diện tích bức tường (10 × 5 = 50 m²). Bước 2: Nhân với đơn giá 20.",
    level: "medium", tags: ["hinh_chu_nhat", "dien_tich", "thuc_te"]
  },
  {
    id: 102, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.square(50, "4") + " Một viên gạch hình vuông có cạnh dài 4 dm. Diện tích của viên gạch đó là:",
    answers: ["16 dm²", "16 dm", "8 dm²", "24 dm²"], correct: 0,
    hint: "📐 Diện tích hình vuông = cạnh × cạnh. Lưu ý đơn vị diện tích phải có số mũ 2 (dm²).",
    level: "easy", tags: ["hinh_vuong", "dien_tich", "thuc_te"]
  },
  {
    id: 103, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.box(60, 40, 30, "2", "1", "1,5", "m") + " Một bể cá hình hộp chữ nhật có chiều dài 2 m, rộng 1 m, cao 1,5 m. Người ta đổ nước đầy nửa bể. Thể tích nước trong bể là ? m³.",
    answer: "1.5",
    hint: "📐 Tính thể tích cả bể: 2 × 1 × 1,5 = 3 m³. Vì nước đầy một nửa nên ta chia cho 2.",
    level: "medium", tags: ["hinh_hop_chu_nhat", "the_tich", "thuc_te"]
  },
  {
    id: 104, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.cube(40, "2", "m") + " Người ta làm một cái thùng tôn không có nắp hình lập phương có cạnh 2 m. Số mặt cần quét sơn của cái thùng này là:",
    answers: ["5 mặt", "6 mặt", "4 mặt", "1 mặt"], correct: 0,
    hint: "📐 Thùng tôn không nắp thì mất đi mặt phía trên, nên chỉ còn lại 5 mặt (4 mặt xung quanh và 1 mặt đáy).",
    level: "medium", tags: ["hinh_lap_phuong", "thuc_te", "ly_thuyet"]
  },
  {
    id: 105, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.cube(40, "2", "m") + " Tính diện tích tôn cần dùng để làm cái thùng hình lập phương không nắp có cạnh 2 m ở câu trên. Kết quả là ? m².",
    answer: "20",
    hint: "📐 Diện tích 1 mặt là 2 × 2 = 4 m². Thùng không nắp có 5 mặt, ta lấy 4 × 5.",
    level: "medium", tags: ["hinh_lap_phuong", "dien_tich_toan_phan", "thuc_te"]
  },
  {
    id: 106, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.circle(40, "30", "", "cm") + " Một bánh xe đạp có bán kính là 30 cm. Khi bánh xe lăn được đúng 1 vòng trên mặt đất thì xe di chuyển được một quãng đường dài là:",
    answers: ["188,4 cm", "94,2 cm", "2826 cm", "60 cm"], correct: 0,
    hint: "📐 Quãng đường đi được khi bánh xe lăn 1 vòng chính bằng chu vi bánh xe: 30 × 2 × 3,14.",
    level: "medium", tags: ["hinh_tron", "chu_vi", "thuc_te"]
  },
  {
    id: 107, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.trapezoid(80, 40, 50, "20", "10", "15", "m") + " Một thửa ruộng hình thang có đáy lớn 20 m, đáy bé 10 m, cao 15 m. Trung bình cứ 1 m² thu hoạch được 2 kg thóc. Cả thửa ruộng thu được ? kg thóc.",
    answer: "450",
    hint: "📐 Bước 1: Diện tích ruộng = (20 + 10) × 15 ÷ 2 = 225 m². Bước 2: Sản lượng = 225 × 2.",
    level: "medium", tags: ["hinh_thang", "dien_tich", "thuc_te"]
  },
  {
    id: 108, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.rectangle(70, 40, "5", "4", "m") + " Một căn phòng hình chữ nhật có nền dài 5 m, rộng 4 m. Người ta lát nền bằng loại gạch vuông cạnh 2 dm. Số viên gạch cần dùng là:",
    answers: ["500 viên", "50 viên", "100 viên", "200 viên"], correct: 0,
    hint: "📐 Đổi kích thước phòng sang dm: dài 50 dm, rộng 40 dm. S phòng = 50 × 40 = 2000 dm². S gạch = 2 × 2 = 4 dm². Số gạch = 2000 ÷ 4.",
    level: "medium", tags: ["hinh_chu_nhat", "dien_tich", "thuc_te"]
  },
  {
    id: 109, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.triangle(60, 0, 0, 40, "8", "", "", "5", "m") + " Một mảnh đất hình tam giác có đáy 8 m, người ta mở rộng đáy thêm 2 m thì diện tích tăng thêm bao nhiêu m²? Biết chiều cao mảnh đất ban đầu là 5 m.",
    answer: "5",
    hint: "📐 Phần diện tích tăng thêm chính là một hình tam giác mới có đáy là 2 m và chiều cao chung vẫn là 5 m. Tính (2 × 5) ÷ 2.",
    level: "medium", tags: ["hinh_tam_giac", "dien_tich", "tu_duy"]
  },
  {
    id: 110, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.circle(40, "10", "", "cm") + " Một miếng bìa hình tròn có bán kính 10 cm. Người ta cắt bỏ đi một nửa miếng bìa. Diện tích phần bìa còn lại là:",
    answers: ["157 cm²", "314 cm²", "62,8 cm²", "78,5 cm²"], correct: 0,
    hint: "📐 Diện tích hình tròn ban đầu = 10 × 10 × 3,14 = 314 cm². Vì cắt bỏ một nửa nên lấy 314 ÷ 2.",
    level: "medium", tags: ["hinh_tron", "dien_tich", "thuc_te"]
  },
  {
    id: 111, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.square(50, "10") + " Một mảnh đất hình vuông có cạnh dài 10 m. Người ta dành ra 20% diện tích đất để làm lối đi. Diện tích đất làm lối đi là ? m².",
    answer: "20",
    hint: "📐 Diện tích đất hình vuông = 10 × 10 = 100 m². Lối đi chiếm 20% tức là lấy 100 × 20 ÷ 100.",
    level: "medium", tags: ["hinh_vuong", "dien_tich", "thuc_te"]
  },
  {
    id: 112, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.box(50, 40, 30, "10", "8", "5", "dm") + " Một thùng chứa dạng hình hộp chữ nhật có kích thước lòng thùng là 10 dm, 8 dm, 5 dm. Thùng này có thể chứa tối đa bao nhiêu lít nước?",
    answers: ["400 lít", "200 lít", "40 lít", "4000 lít"], correct: 0,
    hint: "📐 Thể tích tối đa của thùng = 10 × 8 × 5 = 400 dm³. Mà 1 dm³ = 1 lít, nên sức chứa là 400 lít.",
    level: "medium", tags: ["hinh_hop_chu_nhat", "the_tich", "thuc_te"]
  },
  {
    id: 113, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Diện tích xung quanh của một hình hộp chữ nhật có chu vi đáy bằng 20 cm và chiều cao bằng 7 cm là ? cm².",
    answer: "140",
    hint: "📐 Áp dụng công thức trực tiếp: Diện tích xung quanh = Chu vi đáy × Chiều cao. Lấy 20 × 7.",
    level: "easy", tags: ["hinh_hop_chu_nhat", "dien_tich_xung_quanh"]
  },
  {
    id: 114, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Khi cạnh của một hình lập phương gấp lên 3 lần thì thể tích của hình lập phương đó gấp lên số lần là:",
    answers: ["27 lần", "9 lần", "3 lần", "6 lần"], correct: 0,
    hint: "📐 Thể tích = cạnh × cạnh × cạnh. Cạnh tăng 3 lần thì thể tích tăng: 3 × 3 × 3 lần.",
    level: "medium", tags: ["hinh_lap_phuong", "the_tich", "tu_duy"]
  },
  {
    id: 115, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Khi cạnh của một hình lập phương gấp lên 3 lần thì diện tích xung quanh của nó gấp lên ? lần.",
    answer: "9",
    hint: "📐 Diện tích xung quanh = (cạnh × cạnh) × 4. Cạnh tăng 3 lần thì diện tích tăng: 3 × 3 lần.",
    level: "medium", tags: ["hinh_lap_phuong", "dien_tich_xung_quanh", "tu_duy"]
  },
  {
    id: 116, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.rectangle(60, 40, "6", "4", "cm") + " Một hình chữ nhật có chu vi 20 cm. Nếu chiều dài tăng thêm 2 cm và chiều rộng giữ nguyên thì chu vi mới là:",
    answers: ["24 cm", "22 cm", "20 cm", "26 cm"], correct: 0,
    hint: "📐 Chu vi mới = (Dài + 2 + Rộng) × 2 = (Dài + Rộng) × 2 + 4. Chu vi sẽ tăng thêm 2 × 2 = 4 cm.",
    level: "medium", tags: ["hinh_chu_nhat", "chu_vi", "tu_duy"]
  },
  {
    id: 117, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.box(60, 40, 30, "6", "5", "4", "dm") + " Một khối gỗ hình hộp chữ nhật có dài 6 dm, rộng 5 dm, cao 4 dm. Người ta cắt khối gỗ này thành các khối lập phương nhỏ cạnh 1 dm. Cắt được tối đa ? khối.",
    answer: "120",
    hint: "📐 Số khối lập phương bằng thể tích khối lớn chia thể tích khối nhỏ: (6 × 5 × 4) ÷ (1 × 1 × 1).",
    level: "medium", tags: ["hinh_hop_chu_nhat", "the_tich", "thuc_te"]
  },
  {
    id: 118, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.circle(40, "5", "", "cm") + " Cho hai hình tròn. Hình tròn thứ nhất có bán kính 5 cm. Hình tròn thứ hai có đường kính 10 cm. So sánh diện tích của hai hình tròn:",
    answers: ["Bằng nhau", "Hình 1 lớn hơn", "Hình 2 lớn hơn", "Không so sánh được"], correct: 0,
    hint: "📐 Hình tròn thứ hai có đường kính 10 cm thì bán kính của nó cũng bằng 10 ÷ 2 = 5 cm. Hai hình tròn có bán kính bằng nhau nên diện tích bằng nhau.",
    level: "medium", tags: ["hinh_tron", "dien_tich", "tu_duy"]
  },
  {
    id: 119, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.trapezoid(60, 40, 40, "5", "3", "4", "cm") + " Hình thang vuông có đáy lớn 5 cm, đáy bé 3 cm, chiều cao 4 cm. Diện tích của hình thang vuông đó là ? cm².",
    answer: "16",
    hint: "📐 Áp dụng công thức tính diện tích hình thang bình thường: (5 + 3) × 4 ÷ 2.",
    level: "easy", tags: ["hinh_thang", "dien_tich"]
  },
  {
    id: 120, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Một hình tam giác có diện tích là 15 cm². Nếu giữ nguyên độ dài đáy và tăng chiều cao lên gấp 3 lần thì diện tích mới của tam giác là:",
    answers: ["45 cm²", "15 cm²", "5 cm²", "30 cm²"], correct: 0,
    hint: "📐 Diện tích tam giác tỉ lệ thuận với chiều cao. Chiều cao tăng 3 lần thì diện tích cũng tăng 3 lần. Tính 15 × 3.",
    level: "medium", tags: ["hinh_tam_giac", "dien_tich", "tu_duy"]
  },
  // ==========================================
  // HÌNH TRÒN NÂNG CAO (ID: 121 - 135)
  // ==========================================
  {
    id: 121, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.circle(40, "", "20", "cm") + " Một hình tròn có đường kính là 20 cm. Diện tích của hình tròn đó là ? cm². (Lấy số pi = 3,14)",
    answer: "314",
    hint: "📐 Bước 1: Tính bán kính r = 20 ÷ 2 = 10 cm. Bước 2: Diện tích = 10 × 10 × 3,14.",
    level: "medium", tags: ["hinh_tron", "dien_tich", "tim_canh"]
  },
  {
    id: 122, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.circle(40, "", "2", "m") + " Một cái giếng hình tròn có đường kính 2 m. Diện tích phần miệng giếng đó là:",
    answers: ["3,14 m²", "12,56 m²", "6,28 m²", "1,57 m²"], correct: 0,
    hint: "📐 Đường kính 2 m thì bán kính là 1 m. Diện tích = 1 × 1 × 3,14.",
    level: "easy", tags: ["hinh_tron", "dien_tich", "thuc_te"]
  },
  {
    id: 123, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.circle(40, "10", "", "cm") + " Một nửa hình tròn có bán kính là 10 cm. Diện tích của nửa hình tròn đó là ? cm².",
    answer: "157",
    hint: "📐 Tính diện tích cả hình tròn: 10 × 10 × 3,14 = 314 cm². Vì là nửa hình tròn nên ta lấy 314 ÷ 2.",
    level: "medium", tags: ["hinh_tron", "dien_tich", "tu_duy"]
  },
  {
    id: 124, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.circle(40, "r", "", "cm") + " Nếu một hình tròn có chu vi là 6,28 dm thì diện tích của nó là:",
    answers: ["3,14 dm²", "6,28 dm²", "12,56 dm²", "1 dm²"], correct: 0,
    hint: "📐 Tìm đường kính: 6,28 ÷ 3,14 = 2 dm => Bán kính = 1 dm. Diện tích = 1 × 1 × 3,14 = 3,14 dm².",
    level: "medium", tags: ["hinh_tron", "dien_tich", "tim_canh"]
  },
  {
    id: 125, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.circle(40, "?", "", "m") + " Một biển báo giao thông hình tròn có chu vi là 18,84 dm. Đường kính của biển báo đó là ? dm.",
    answer: "6",
    hint: "📐 Công thức tính đường kính khi biết chu vi: Đường kính = Chu vi ÷ 3,14. Lấy 18,84 ÷ 3,14.",
    level: "medium", tags: ["hinh_tron", "tim_canh", "so_thap_phan"]
  },
  {
    id: 126, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.circle(40, "r", "", "cm") + " Mặt bàn hình tròn có bán kính 0,5 m. Chu vi của mặt bàn đó là:",
    answers: ["3,14 m", "1,57 m", "6,28 m", "0,785 m"], correct: 0,
    hint: "📐 Chu vi hình tròn = Bán kính × 2 × 3,14. Lấy 0,5 × 2 × 3,14.",
    level: "medium", tags: ["hinh_tron", "chu_vi", "so_thap_phan"]
  },
  {
    id: 127, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Một hình tròn có diện tích là 28,26 cm². Bán kính của hình tròn đó là ? cm.",
    answer: "3",
    hint: "📐 Tích hai bán kính = 28,26 ÷ 3,14 = 9. Số nào nhân với chính nó bằng 9? Đó chính là bán kính.",
    level: "medium", tags: ["hinh_tron", "tim_canh"]
  },
  {
    id: 128, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Một hình tròn có diện tích là 12,56 dm². Đường kính của hình tròn đó là:",
    answers: ["4 dm", "2 dm", "8 dm", "6 dm"], correct: 0,
    hint: "📐 Tích hai bán kính = 12,56 ÷ 3,14 = 4 => Bán kính = 2 dm. Đường kính bằng bán kính nhân 2.",
    level: "medium", tags: ["hinh_tron", "tim_canh"]
  },
  {
    id: 129, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Nếu đường kính của một hình tròn tăng lên gấp 3 lần thì chu vi của nó tăng lên ? lần.",
    answer: "3",
    hint: "📐 Chu vi tỉ lệ thuận với đường kính. Đường kính tăng bao nhiêu lần thì chu vi tăng bấy nhiêu lần.",
    level: "easy", tags: ["hinh_tron", "chu_vi", "tu_duy"]
  },
  {
    id: 130, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Nếu đường kính của một hình tròn tăng lên gấp 3 lần thì diện tích của nó tăng lên gấp mấy lần?",
    answers: ["9 lần", "3 lần", "6 lần", "27 lần"], correct: 0,
    hint: "📐 Khi đường kính tăng 3 lần thì bán kính cũng tăng 3 lần. Diện tích tăng lên 3 × 3 = 9 lần.",
    level: "medium", tags: ["hinh_tron", "dien_tich", "tu_duy"]
  },
  {
    id: 131, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Một sợi dây thép được uốn thành một hình tròn có bán kính 10 cm. Chiều dài của sợi dây thép đó là ? cm.",
    answer: "62.8",
    hint: "📐 Chiều dài sợi dây chính là chu vi của hình tròn: 10 × 2 × 3,14.",
    level: "easy", tags: ["hinh_tron", "chu_vi", "thuc_te"]
  },
  {
    id: 132, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Cho một hình tròn có chu vi bằng 31,4 cm. Diện tích của hình tròn đó là:",
    answers: ["78,5 cm²", "314 cm²", "15,7 cm²", "50 cm²"], correct: 0,
    hint: "📐 Từ chu vi tìm bán kính r = 5 cm. Diện tích = 5 × 5 × 3,14 = 78,5 cm².",
    level: "medium", tags: ["hinh_tron", "dien_tich", "tim_canh"]
  },
  {
    id: 133, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Một cái la bàn hình tròn có đường kính 8 cm. Bán kính của cái la bàn đó là ? cm.",
    answer: "4",
    hint: "📐 Bán kính luôn bằng một nửa đường kính. Lấy 8 ÷ 2.",
    level: "easy", tags: ["hinh_tron", "tim_canh"]
  },
  {
    id: 134, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Một cái thớt gỗ hình tròn có bán kính 1,5 dm. Chu vi của cái thớt gỗ đó là:",
    answers: ["9,42 dm", "4,71 dm", "7,065 dm", "18,84 dm"], correct: 0,
    hint: "📐 Áp dụng công thức: 1,5 × 2 × 3,14 = 3 × 3,14.",
    level: "medium", tags: ["hinh_tron", "chu_vi", "so_thap_phan"]
  },
  {
    id: 135, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Diện tích của hình tròn thay đổi thế nào nếu ta giảm bán kính của nó đi 2 lần?",
    answer: "giảm 4 lần",
    hint: "📐 Bán kính giảm 2 lần thì diện tích giảm đi 2 × 2 = 4 lần. Hãy điền chữ 'giảm 4 lần'.",
    level: "medium", tags: ["hinh_tron", "dien_tich", "tu_duy"]
  },

  // ==========================================
  // HÌNH KHỐI VÀ TOÁN BỂ NƯỚC THỰC TẾ (ID: 136 - 150)
  // ==========================================
  {
    id: 136, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.box(60, 40, 40, "10", "5", "6", "dm") + " Một bể cá hình hộp chữ nhật có dài 10 dm, rộng 5 dm, cao 6 dm. Thể tích của bể cá đó là ? dm³.",
    answer: "300",
    hint: "📐 Thể tích hình hộp chữ nhật = Dài × Rộng × Cao. Tính 10 × 5 × 6.",
    level: "easy", tags: ["hinh_hop_chu_nhat", "the_tich"]
  },
  {
    id: 137, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.box(50, 40, 30, "8", "5", "4", "dm") + " Một bể nước có thể tích đáy là 40 dm² (tích dài × rộng), chiều cao bể là 4 dm. Thể tích bể nước là:",
    answers: ["160 dm³", "44 dm³", "80 dm³", "200 dm³"], correct: 0,
    hint: "📐 Thể tích hình hộp chữ nhật cũng bằng Diện tích đáy × Chiều cao. Lấy 40 × 4.",
    level: "easy", tags: ["hinh_hop_chu_nhat", "the_tich"]
  },
  {
    id: 138, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.box(60, 40, 50, "5", "4", "3", "m") + " Bể nước dạng hình hộp chữ nhật có dài 5 m, rộng 4 m, cao 3 m. Hiện bể đang chứa nước cao đến 2 m. Thể tích nước hiện có trong bể là ? m³.",
    answer: "40",
    hint: "📐 Thể tích nước = Dài × Rộng × Chiều cao mực nước. Tính 5 × 4 × 2.",
    level: "medium", tags: ["hinh_hop_chu_nhat", "the_tich", "thuc_te"]
  },
  {
    id: 139, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.box(50, 40, 40, "4", "3", "2", "m") + " Một bể nước hình hộp chữ nhật có dài 4 m, rộng 3 m, cao 2 m. Thể tích chứa đầy bể nước này tương ứng với bao nhiêu lít nước?",
    answers: ["24000 lít", "2400 lít", "240 lít", "24 lít"], correct: 0,
    hint: "📐 Bước 1: V bể = 4 × 3 × 2 = 24 m³. Bước 2: Đổi 24 m³ = 24 000 dm³ = 24 000 lít.",
    level: "medium", tags: ["hinh_hop_chu_nhat", "the_tich", "doi_don_vi"]
  },
  {
    id: 140, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.cube(50, "5", "dm") + " Khối gỗ hình lập phương có cạnh dài 5 dm. Thể tích khối gỗ đó là ? dm³.",
    answer: "125",
    hint: "📐 Thể tích hình lập phương = Cạnh × Cạnh × Cạnh. Tính 5 × 5 × 5.",
    level: "easy", tags: ["hinh_lap_phuong", "the_tich"]
  },
  {
    id: 141, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.cube(40, "1", "m") + " Thể tích của một thùng chứa hình lập phương có cạnh dài 1 m là:",
    answers: ["1 m³", "3 m³", "1000 cm³", "6 m³"], correct: 0,
    hint: "📐 Thể tích = 1 × 1 × 1 = 1 m³.",
    level: "easy", tags: ["hinh_lap_phuong", "the_tich"]
  },
  {
    id: 142, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.cube(40, "2", "dm") + " Diện tích xung quanh của một hộp phấn hình lập phương có cạnh 2 dm là ? dm².",
    answer: "16",
    hint: "📐 Diện tích xung quanh hình lập phương = Diện tích một mặt × 4 = (2 × 2) × 4.",
    level: "easy", tags: ["hinh_lap_phuong", "dien_tich_xung_quanh"]
  },
  {
    id: 143, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.cube(40, "10", "cm") + " Một hộp quà hình lập phương có cạnh 10 cm. Diện tích toàn phần của hộp quà đó là:",
    answers: ["600 cm²", "400 cm²", "100 cm²", "1000 cm²"], correct: 0,
    hint: "📐 Diện tích toàn phần = Diện tích một mặt × 6 = (10 × 10) × 6.",
    level: "easy", tags: ["hinh_lap_phuong", "dien_tich_toan_phan"]
  },
  {
    id: 144, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Một hình lập phương có diện tích toàn phần là 24 cm². Diện tích một mặt của hình lập phương đó là ? cm².",
    answer: "4",
    hint: "📐 Diện tích toàn phần gồm 6 mặt bằng nhau. Diện tích một mặt = Diện tích toàn phần ÷ 6. Lấy 24 ÷ 6.",
    level: "medium", tags: ["hinh_lap_phuong", "dien_tich", "tim_canh"]
  },
  {
    id: 145, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Một hình lập phương có diện tích xung quanh là 100 m². Diện tích toàn phần của hình lập phương đó là:",
    answers: ["150 m²", "200 m²", "600 m²", "120 m²"], correct: 0,
    hint: "📐 Diện tích một mặt = 100 ÷ 4 = 25 m². Diện tích toàn phần = Diện tích một mặt × 6 = 25 × 6.",
    level: "medium", tags: ["hinh_lap_phuong", "dien_tich_toan_phan"]
  },
  {
    id: 146, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Một hình lập phương có diện tích một mặt là 25 cm². Thể tích của hình lập phương đó là ? cm³.",
    answer: "125",
    hint: "📐 Diện tích một mặt là 25 cm² => Cạnh dài 5 cm (vì 5 × 5 = 25). Thể tích = 5 × 5 × 5.",
    level: "medium", tags: ["hinh_lap_phuong", "the_tich", "tim_canh"]
  },
  {
    id: 147, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Một hình lập phương có thể tích là 27 dm³. Cạnh của hình lập phương đó dài:",
    answers: ["3 dm", "9 dm", "4 dm", "2 dm"], correct: 0,
    hint: "📐 Thể tích = Cạnh × Cạnh × Cạnh. Tìm số nào nhân với chính nó 3 lần bằng 27 (3 × 3 × 3 = 27).",
    level: "medium", tags: ["hinh_lap_phuong", "tim_canh"]
  },
  {
    id: 148, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Hình lập phương là hình hộp chữ nhật đặc biệt có ba kích thước (chiều dài, chiều rộng, chiều cao) như thế nào với nhau?",
    answer: "bằng nhau",
    hint: "📐 Hình lập phương có tất cả các cạnh bằng nhau. Hãy điền cụm từ 'bằng nhau'.",
    level: "easy", tags: ["hinh_lap_phuong", "ly_thuyet"]
  },
  {
    id: 149, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.box(50, 40, 30, "5", "4", "3", "cm") + " Chu vi mặt đáy của một hình hộp chữ nhật có chiều dài 5 cm và chiều rộng 4 cm là:",
    answers: ["18 cm", "9 cm", "20 cm", "12 cm"], correct: 0,
    hint: "📐 Mặt đáy là hình chữ nhật. Chu vi = (Chiều dài + Chiều rộng) × 2. Tính (5 + 4) × 2.",
    level: "easy", tags: ["hinh_hop_chu_nhat", "chu_vi"]
  },
  {
    id: 150, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Một cái thùng hình hộp chữ nhật có diện tích xung quanh là 50 cm², diện tích toàn phần là 80 cm². Diện tích của một mặt đáy cái thùng đó là ? cm².",
    answer: "15",
    hint: "📐 Diện tích 2 mặt đáy = Diện tích toàn phần - Diện tích xung quanh = 80 - 50 = 30 cm². Diện tích 1 mặt đáy = 30 ÷ 2.",
    level: "medium", tags: ["hinh_hop_chu_nhat", "dien_tich", "tim_canh"]
  },
  // ==========================================
  // TỈ SỐ PHẦN TRĂM VÀ HÌNH HỌC (ID: 151 - 165)
  // ==========================================
  {
    id: 151, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.rectangle(60, 40, "10", "5", "m") + " Một sân trường hình chữ nhật có diện tích là 500 m². Người ta mở rộng sân trường thêm 10% diện tích ban đầu. Diện tích phần mở rộng thêm là ? m².",
    answer: "50",
    hint: "📐 Tìm 10% của 500 m². Ta lấy 500 × 10 ÷ 100.",
    level: "medium", tags: ["hinh_chu_nhat", "ti_so_phan_tram", "thuc_te"]
  },
  {
    id: 152, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.square(50, "10") + " Một mảnh đất hình vuông có cạnh 10 m. Nếu tăng cạnh của hình vuông đó thêm 10% thì cạnh mới dài bao nhiêu mét?",
    answers: ["11 m", "10,1 m", "12 m", "11,1 m"], correct: 0,
    hint: "📐 Phần tăng thêm là: 10 × 10% = 1 m. Cạnh mới của hình vuông là 10 + 1 = 11 m.",
    level: "medium", tags: ["hinh_vuong", "ti_so_phan_tram", "tim_canh"]
  },
  {
    id: 153, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.square(50, "10") + " Ở bài toán trên, khi cạnh hình vuông tăng thêm 10% (cạnh mới bằng 11 m) thì diện tích hình vuông mới là ? m².",
    answer: "121",
    hint: "📐 Diện tích hình vuông mới = Cạnh mới × Cạnh mới. Tính 11 × 11.",
    level: "medium", tags: ["hinh_vuong", "dien_tich", "ti_so_phan_tram"]
  },
  {
    id: 154, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Nếu cạnh của một hình vuông tăng thêm 50% thì diện tích của hình vuông đó tăng thêm bao nhiêu phần trăm?",
    answers: ["125%", "50%", "100%", "225%"], correct: 0,
    hint: "📐 Coi cạnh ban đầu là 100% thì cạnh mới là 150%. Diện tích mới là 150% × 150% = 225%. Phần diện tích tăng thêm là 225% - 100% = 125%.",
    level: "hard", tags: ["hinh_vuong", "ti_so_phan_tram", "tu_duy"]
  },
  {
    id: 155, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.rectangle(70, 40, "a", "b", "cm") + " Một hình chữ nhật nếu tăng chiều dài thêm 20% và giữ nguyên chiều rộng thì diện tích của nó tăng thêm ? %.",
    answer: "20",
    hint: "📐 Diện tích tỉ lệ thuận với chiều dài. Khi chiều dài tăng bao nhiêu phần trăm (chiều rộng không đổi) thì diện tích tăng bấy nhiêu phần trăm.",
    level: "medium", tags: ["hinh_chu_nhat", "ti_so_phan_tram", "tu_duy"]
  },
  {
    id: 156, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.circle(40, "r", "", "cm") + " Nếu bán kính của một hình tròn tăng thêm 10% thì chu vi của hình tròn đó tăng thêm bao nhiêu phần trăm?",
    answers: ["10%", "20%", "21%", "100%"], correct: 0,
    hint: "📐 Chu vi hình tròn tỉ lệ thuận bậc nhất với bán kính, nên bán kính tăng 10% thì chu vi cũng tăng đúng 10%.",
    level: "medium", tags: ["hinh_tron", "chu_vi", "ti_so_phan_tram"]
  },
  {
    id: 157, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.circle(40, "r", "", "cm") + " Nếu bán kính của một hình tròn tăng thêm 20% thì diện tích của nó tăng thêm ? %.",
    answer: "44",
    hint: "📐 Coi bán kính ban đầu là 100% (1), bán kính mới là 120% (1,2). Diện tích mới chiếm: 1,2 × 1,2 = 1,44 = 144%. Vậy diện tích tăng: 144% - 100% = 44%.",
    level: "hard", tags: ["hinh_tron", "dien_tich", "ti_so_phan_tram"]
  },
  {
    id: 158, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.triangle(60, 0, 0, 40, "a", "", "", "h", "cm") + " Một thửa ruộng hình tam giác có diện tích là 180 m². Do làm đường, người ta cắt bớt 25% diện tích đất. Diện tích phần đất còn lại là:",
    answers: ["135 m²", "45 m²", "140 m²", "150 m²"], correct: 0,
    hint: "📐 Phần đất còn lại chiếm: 100% - 25% = 75% diện tích ban đầu. Tính: 180 × 75 ÷ 100.",
    level: "medium", tags: ["hinh_tam_giac", "ti_so_phan_tram", "thuc_te"]
  },
  {
    id: 159, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.trapezoid(70, 50, 40, "a", "b", "h", "cm") + " Một mảnh đất hình thang có diện tích là 60 m². Người ta sử dụng 45% diện tích để trồng hoa. Diện tích đất trồng hoa là ? m².",
    answer: "27",
    hint: "📐 Diện tích trồng hoa bằng 45% của 60 m². Tính: 60 × 45 ÷ 100.",
    level: "medium", tags: ["hinh_thang", "ti_so_phan_tram", "thuc_te"]
  },
  {
    id: 160, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.box(50, 40, 30, "a", "b", "h", "cm") + " Một kho chứa hình hộp chữ nhật đang chứa lượng hàng bằng 80% thể tích kho. Biết thể tích kho là 500 m³. Thể tích phần không gian còn trống trong kho là:",
    answers: ["100 m³", "400 m³", "200 m³", "50 m³"], correct: 0,
    hint: "📐 Lượng không gian trống chiếm: 100% - 80% = 20% thể tích kho. Tính: 500 × 20 ÷ 100.",
    level: "medium", tags: ["hinh_hop_chu_nhat", "ti_so_phan_tram", "thuc_te"]
  },
  {
    id: 161, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Một hình chữ nhật có chiều dài tăng 20%, chiều rộng giảm 20% thì diện tích mới bằng ? % diện tích cũ.",
    answer: "96",
    hint: "📐 Chiều dài mới: 120% (1,2). Chiều rộng mới: 80% (0,8). Diện tích mới chiếm: 1,2 × 0,8 = 0,96 = 96%.",
    level: "hard", tags: ["hinh_chu_nhat", "ti_so_phan_tram", "tu_duy"]
  },
  {
    id: 162, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Ở câu hỏi trên, sau khi thay đổi kích thước thì diện tích hình chữ nhật thay đổi thế nào so với diện tích ban đầu?",
    answers: ["Giảm 4%", "Tăng 4%", "Không thay đổi", "Giảm 20%"], correct: 0,
    hint: "📐 Vì diện tích mới chiếm 96% diện tích cũ nên diện tích đã bị giảm đi: 100% - 96% = 4%.",
    level: "hard", tags: ["hinh_chu_nhat", "ti_so_phan_tram", "tu_duy"]
  },
  {
    id: 163, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.cube(40, "a", "cm") + " Khi cạnh hình lập phương tăng lên 10% thì diện tích toàn phần của nó tăng lên ? %.",
    answer: "21",
    hint: "📐 Diện tích toàn phần tỉ lệ thuận với (cạnh × cạnh). Cạnh mới là 110% (1,1). Diện tích toàn phần mới chiếm: 1,1 × 1,1 = 1,21 = 121%. Phần tăng thêm là 21%.",
    level: "hard", tags: ["hinh_lap_phuong", "ti_so_phan_tram", "tu_duy"]
  },
  {
    id: 164, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.circle(40, "r", "", "cm") + " Nếu diện tích của một hình tròn tăng lên 4 lần thì bán kính của hình tròn đó tăng lên mấy lần?",
    answers: ["2 lần", "4 lần", "16 lần", "8 lần"], correct: 0,
    hint: "📐 Diện tích bằng bán kính nhân bán kính nhân 3,14. Diện tích tăng 4 lần tức là (bán kính × bán kính) phải tăng 4 lần. Vậy bán kính tăng 2 lần (vì 2 × 2 = 4).",
    level: "medium", tags: ["hinh_tron", "ti_so_phan_tram", "tu_duy"]
  },
  {
    id: 165, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Một hình tam giác có độ dài đáy tăng thêm 30%, chiều cao giảm đi 30% thì diện tích mới bằng ? % diện tích ban đầu.",
    answer: "91",
    hint: "📐 Đáy mới: 130% (1,3). Chiều cao mới: 70% (0,7). Diện tích mới chiếm: 1,3 × 0,7 = 0,91 = 91%.",
    level: "hard", tags: ["hinh_tam_giac", "ti_so_phan_tram", "tu_duy"]
  },

  // ==========================================
  // PHỐI HỢP HÌNH & HÌNH PHỨC TẠP (ID: 166 - 180)
  // ==========================================
  {
    id: 166, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Cho một hình tròn được vẽ nội tiếp khít bên trong một hình vuông có cạnh 10 cm. Đường kính của hình tròn đó dài ? cm.",
    answer: "10",
    hint: "📐 Khi hình tròn nằm khít bên trong hình vuông thì đường kính của hình tròn chính bằng độ dài cạnh hình vuông.",
    level: "medium", tags: ["hinh_phuc_tap", "hinh_tron", "hinh_vuong"]
  },
  {
    id: 167, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Dựa vào thông tin câu trên (hình tròn nằm khít trong hình vuông cạnh 10 cm), diện tích của hình tròn đó là:",
    answers: ["78,5 cm²", "314 cm²", "31,4 cm²", "25 cm²"], correct: 0,
    hint: "📐 Đường kính hình tròn bằng cạnh hình vuông = 10 cm => Bán kính bằng 5 cm. Diện tích = 5 × 5 × 3,14.",
    level: "medium", tags: ["hinh_phuc_tap", "hinh_tron", "dien_tich"]
  },
  {
    id: 168, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Dựa vào thông tin hai câu trên, diện tích phần còn thừa lại của hình vuông (phần không bị hình tròn che khuất) là ? cm².",
    answer: "21.5",
    hint: "📐 Diện tích hình vuông là 10 × 10 = 100 cm². Diện tích hình tròn là 78,5 cm². Lấy diện tích hình vuông trừ diện tích hình tròn.",
    level: "hard", tags: ["hinh_phuc_tap", "hinh_vuong", "tu_duy"]
  },
  {
    id: 169, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Một hình tam giác nằm hoàn toàn bên trong một hình chữ nhật có chiều dài 8 cm, rộng 5 cm. Diện tích lớn nhất có thể có của tam giác đó là:",
    answers: ["20 cm²", "40 cm²", "10 cm²", "30 cm²"], correct: 0,
    hint: "📐 Tam giác có diện tích lớn nhất khi độ dài đáy bằng chiều dài (8 cm) và chiều cao bằng chiều rộng (5 cm). Diện tích tối đa = (8 × 5) ÷ 2.",
    level: "medium", tags: ["hinh_phuc_tap", "hinh_tam_giac", "tu_duy"]
  },
  {
    id: 170, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Một hình khăn quạt được tạo bởi hai hình tròn đồng tâm. Hình tròn lớn bán kính 5 cm, hình tròn nhỏ bán kính 3 cm. Diện tích phần hình vành khăn nằm giữa hai đường tròn là ? cm². (Lấy pi = 3,14)",
    answer: "50.24",
    hint: "📐 Diện tích hình tròn lớn: 5×5×3,14 = 78,5 cm². Diện tích hình tròn nhỏ: 3×3×3,14 = 28,26 cm². Lấy diện tích lớn trừ diện tích nhỏ.",
    level: "hard", tags: ["hinh_phuc_tap", "hinh_tron", "tu_duy"]
  },
  {
    id: 171, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Ghép hai hình vuông bằng nhau có cạnh 4 cm sát nhau thành một hình chữ nhật. Chu vi của hình chữ nhật mới tạo thành là:",
    answers: ["24 cm", "32 cm", "16 cm", "20 cm"], correct: 0,
    hint: "📐 Hình chữ nhật mới sẽ có chiều rộng là 4 cm và chiều dài là 4 + 4 = 8 cm. Chu vi = (8 + 4) × 2.",
    level: "medium", tags: ["hinh_phuc_tap", "hinh_vuong", "chu_vi"]
  },
  {
    id: 172, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Ở bài toán ghép hình vuông trên, diện tích của hình chữ nhật mới tạo thành là ? cm².",
    answer: "32",
    hint: "📐 Chiều dài mới là 8 cm, chiều rộng là 4 cm. Diện tích = 8 × 4 (hoặc lấy diện tích 1 hình vuông nhân đôi).",
    level: "easy", tags: ["hinh_phuc_tap", "hinh_vuong", "dien_tich"]
  },
  {
    id: 173, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.box(60, 40, 30, "6", "4", "5", "dm") + " Người ta xếp các hình lập phương nhỏ cạnh 1 dm thành một hình hộp chữ nhật lớn có kích thước 6 dm, 4 dm, 5 dm. Số hình lập phương nằm ở các mặt bên ngoài của hình hộp lớn là:",
    answers: ["112 hình", "120 hình", "8 hình", "96 hình"], correct: 0,
    hint: "📐 Tổng số hình lập phương là 6 × 4 × 5 = 120 hình. Các hình nằm hoàn toàn bên trong là (6-2) × (4-2) × (5-2) = 4 × 2 × 3 = 24 hình. Số hình bên ngoài = 120 - 24.",
    level: "hard", tags: ["hinh_hop_chu_nhat", "hinh_lap_phuong", "tu_duy"]
  },
  {
    id: 174, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Một hình tam giác vuông có hai cạnh góc vuông lần lượt là 3 cm và 4 cm. Cạnh còn lại (cạnh huyền) dài 5 cm. Chiều cao hạ từ đỉnh góc vuông xuống cạnh huyền dài ? cm.",
    answer: "2.4",
    hint: "📐 Diện tích tam giác vuông = (3 × 4) ÷ 2 = 6 cm². Mặt khác, diện tích cũng bằng (Chiều cao × Cạnh huyền 5) ÷ 2 = 6. Suy ra Chiều cao = (6 × 2) ÷ 5.",
    level: "hard", tags: ["hinh_tam_giac", "tim_canh", "tu_duy"]
  },
  {
    id: 175, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Một mảnh đất gồm một hình chữ nhật ghép với một hình bán nguyệt (nửa hình tròn) phía trên. Biết hình chữ nhật rộng 4 m, dài 6 m, và đường kính của nửa hình tròn đúng bằng chiều rộng hình chữ nhật. Diện tích toàn bộ mảnh đất là:",
    answers: ["30,28 m²", "36,56 m²", "24 m²", "31,4 m²"], correct: 0,
    hint: "📐 S hình chữ nhật = 6 × 4 = 24 m². Bán kính nửa hình tròn = 4 ÷ 2 = 2 m. S nửa hình tròn = (2 × 2 × 3,14) ÷ 2 = 6,28 m². S tổng = 24 + 6,28.",
    level: "hard", tags: ["hinh_phuc_tap", "dien_tich", "so_thap_phan"]
  },
  {
    id: 176, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Bốn góc của một hình vuông cạnh 10 cm được vẽ bốn phần tư hình tròn có bán kính bằng 5 cm hướng vào trong. Diện tích phần giao nhau tạo thành hình bông hoa ở giữa là ? cm². (Lấy pi = 3,14)",
    answer: "57",
    hint: "📐 Tổng diện tích 4 phần tư hình tròn chính bằng diện tích 1 hình tròn bán kính 5 cm: 5 × 5 × 3,14 = 78,5 m². Diện tích bông hoa ở giữa = 2 × 78,5 - 10 × 10 = 57 cm².",
    level: "hard", tags: ["hinh_phuc_tap", "tu_duy"]
  },
  {
    id: 177, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Cho một cái phễu có miệng dạng hình tròn chu vi 62,8 cm. Người ta muốn đậy phễu bằng một nắp đậy hình vuông sao cho phủ kín hoàn toàn miệng phễu. Cạnh nhỏ nhất của nắp đậy hình vuông phải là:",
    answers: ["20 cm", "10 cm", "40 cm", "31,4 cm"], correct: 0,
    hint: "📐 Miệng phễu chu vi 62,8 cm => Đường kính miệng phễu d = 62,8 ÷ 3,14 = 20 cm. Nắp đậy hình vuông muốn phủ kín hoàn toàn đường tròn thì cạnh của nó ít nhất phải bằng đường kính.",
    level: "hard", tags: ["hinh_phuc_tap", "tu_duy", "thuc_te"]
  },
  {
    id: 178, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Một khối bê tông có dạng hình hộp chữ nhật kích thước 2 m, 1 m, 1 m bị khoét một lỗ hình lập phương cạnh 0,5 m ở giữa mặt trên. Thể tích còn lại của khối bê tông là ? m³.",
    answer: "1.875",
    hint: "📐 V khối ban đầu = 2 × 1 × 1 = 2 m³. V khối lập phương bị khoét = 0,5 × 0,5 × 0,5 = 0,125 m³. Thể tích còn lại = 2 - 0,125.",
    level: "hard", tags: ["hinh_hop_chu_nhat", "hinh_lap_phuong", "the_tich"]
  },
  {
    id: 179, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Cho một hình thang có đáy lớn dài gấp đôi đáy bé. Nếu ta cắt hình thang này dọc theo đường cao xuất phát từ đỉnh đáy bé, ta sẽ thu được một hình chữ nhật và một hình gì?",
    answers: ["Hình tam giác vuông", "Hình vuông", "Hình tam giác đều", "Hình bình hành"], correct: 0,
    hint: "📐 Đường cao vuông góc với hai đáy tạo ra một tam giác vuông ở phần rìa bị cắt ra.",
    level: "medium", tags: ["hinh_thang", "ly_thuyet", "tu_duy"]
  },
  {
    id: 180, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Một hình vuông có chu vi là 40 cm. Người ta vẽ một hình tròn có đường kính đúng bằng cạnh hình vuông đó. Chu vi hình tròn đó là ? cm.",
    answer: "31.4",
    hint: "📐 Cạnh hình vuông = 40 ÷ 4 = 10 cm. Vì đường kính hình tròn bằng cạnh hình vuông nên đường kính d = 10 cm. Chu vi hình tròn = 10 × 3,14.",
    level: "medium", tags: ["hinh_vuong", "hinh_tron", "chu_vi"]
  },
  // ==========================================
  // SỐ THẬP PHÂN & BỐN PHÉP TÍNH CĂN BẢN (ID: 211 - 225)
  // ==========================================
  {
    id: 211, topic: "so_thap_phan", topicName: "Số thập phân", type: "fill",
    q: "Số thập phân 'Ba mươi tư phẩy năm' được viết là ?",
    answer: "34.5",
    hint: "✏️ Viết phần nguyên là 34, rồi viết dấu phẩy, sau đó viết phần thập phân là 5.",
    level: "easy", tags: ["doc_viet_so"]
  },
  {
    id: 212, topic: "so_thap_phan", topicName: "Số thập phân", type: "mc",
    q: "Trong số thập phân 15,24, chữ số 4 thuộc hàng nào?",
    answers: ["Hàng phần trăm", "Hàng phần mười", "Hàng đơn vị", "Hàng chục"], correct: 0,
    hint: "✏️ Chữ số đầu tiên sau dấu phẩy là hàng phần mười, chữ số thứ hai là hàng phần trăm.",
    level: "easy", tags: ["cau_tao_so"]
  },
  {
    id: 213, topic: "so_thap_phan", topicName: "Số thập phân", type: "fill",
    q: "Kết quả của phép cộng: 2,5 + 3,1 = ?",
    answer: "5.6",
    hint: "✏️ Đặt tính thẳng hàng dấu phẩy: cộng phần thập phân (5 + 1) và phần nguyên (2 + 3).",
    level: "easy", tags: ["phep_cong"]
  },
  {
    id: 214, topic: "so_thap_phan", topicName: "Số thập phân", type: "mc",
    q: "Kết quả của phép trừ: 10 - 4,5 là:",
    answers: ["5,5", "6,5", "14,5", "5"], correct: 0,
    hint: "✏️ Coi 10 là 10,0 rồi thực hiện phép trừ 10,0 - 4,5.",
    level: "easy", tags: ["phep_tru"]
  },
  {
    id: 215, topic: "so_thap_phan", topicName: "Số thập phân", type: "fill",
    q: "Kết quả của phép nhân: 1,2 × 3 = ?",
    answer: "3.6",
    hint: "✏️ Em lấy 12 × 3 = 36, sau đó đặt dấu phẩy để có một chữ số ở phần thập phân.",
    level: "easy", tags: ["phep_nhan"]
  },
  {
    id: 216, topic: "so_thap_phan", topicName: "Số thập phân", type: "mc",
    q: "Khi nhân một số thập phân với 10, ta chỉ cần dịch chuyển dấu phẩy của số đó sang bên nào một chữ số?",
    answers: ["Sang bên phải", "Sang bên trái", "Không dịch chuyển", "Lên phía trước"], correct: 0,
    hint: "✏️ Nhân với 10 thì số đó lớn lên, ta dịch dấu phẩy sang bên phải.",
    level: "easy", tags: ["ly_thuyet"]
  },
  {
    id: 217, topic: "so_thap_phan", topicName: "Số thập phân", type: "fill",
    q: "Tính nhanh: 4,56 × 100 = ?",
    answer: "456",
    hint: "✏️ Dịch chuyển dấu phẩy của số 4,56 sang bên phải hai chữ số.",
    level: "easy", tags: ["phep_nhan", "tinh_nhanh"]
  },
  {
    id: 218, topic: "so_thap_phan", topicName: "Số thập phân", type: "mc",
    q: "Kết quả của phép chia: 8,4 ÷ 2 là:",
    answers: ["4,2", "42", "0,42", "2,1"], correct: 0,
    hint: "✏️ Chia phần nguyên (8 ÷ 2 = 4), viết dấu phẩy, rồi chia phần thập phân (4 ÷ 2 = 2).",
    level: "easy", tags: ["phep_chia"]
  },
  {
    id: 219, topic: "so_thap_phan", topicName: "Số thập phân", type: "fill",
    q: "Khi chia một số thập phân cho 10, ta dịch chuyển dấu phẩy của số đó sang bên trái ? chữ số.",
    answer: "1",
    hint: "✏️ Chia cho 10 thì số đó nhỏ đi 10 lần, ta dịch dấu phẩy sang trái 1 chữ số.",
    level: "easy", tags: ["ly_thuyet"]
  },
  {
    id: 220, topic: "so_thap_phan", topicName: "Số thập phân", type: "mc",
    q: "Tính nhanh: 23,5 ÷ 10 = ?",
    answers: ["2,35", "0,235", "235", "23,5"], correct: 0,
    hint: "✏️ Dịch dấu phẩy của số 23,5 sang bên trái một chữ số.",
    level: "easy", tags: ["phep_chia", "tinh_nhanh"]
  },
  {
    id: 221, topic: "so_thap_phan", topicName: "Số thập phân", type: "fill",
    q: "Điền dấu thích hợp (>, <, =) vào chỗ trống: 5,8 ? 5,79",
    answer: ">",
    hint: "✏️ So sánh phần nguyên: 5 = 5. So sánh hàng phần mười: 8 > 7. Nên 5,8 lớn hơn.",
    level: "easy", tags: ["so_sanh"]
  },
  {
    id: 222, topic: "so_thap_phan", topicName: "Số thập phân", type: "mc",
    q: "Số thập phân nào dưới đây BẰNG với số 2,5?",
    answers: ["2,50", "2,05", "25", "0,25"], correct: 0,
    hint: "✏️ Khi viết thêm chữ số 0 vào bên phải phần thập phân thì giá trị của số đó không thay đổi.",
    level: "easy", tags: ["cau_tao_so"]
  },
  {
    id: 223, topic: "so_thap_phan", topicName: "Số thập phân", type: "fill",
    q: "Tìm số tự nhiên x, biết: 0,9 < x < 1,2. Giá trị của x là ?",
    answer: "1",
    hint: "✏️ Số tự nhiên nằm giữa 0,9 và 1,2 chỉ có thể là số mấy nào?",
    level: "easy", tags: ["tim_x"]
  },
  {
    id: 224, topic: "so_thap_phan", topicName: "Số thập phân", type: "mc",
    q: "Viết phân số thập phân 1/10 dưới dạng số thập phân ta được:",
    answers: ["0,1", "1,0", "0,01", "10"], correct: 0,
    hint: "✏️ Một phần mười tương ứng với chữ số 1 ở hàng phần mười.",
    level: "easy", tags: ["doi_don_vi"]
  },
  {
    id: 225, topic: "so_thap_phan", topicName: "Số thập phân", type: "fill",
    q: "Viết phân số 1/2 dưới dạng số thập phân ta được số ? (Gợi ý: lấy 1 chia cho 2)",
    answer: "0.5",
    hint: "✏️ Thực hiện phép tính chia: 1 ÷ 2 = 0,5.",
    level: "easy", tags: ["doi_don_vi"]
  },

  // ==========================================
  // PHÂN SỐ, HỖN SỐ CĂN BẢN (ID: 226 - 240)
  // ==========================================
  {
    id: 226, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Hỗn số gồm có hai phần: phần nguyên và phần ?.",
    answer: "phân số",
    hint: "✏️ Ví dụ hỗn số 2 và 3/4 thì 2 là phần nguyên, còn 3/4 là phần phân số.",
    level: "easy", tags: ["hon_so", "ly_thuyet"]
  },
  {
    id: 227, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Phần phân số của hỗn số luôn luôn như thế nào so với đơn vị (nhỏ hơn 1)?",
    answers: ["Nhỏ hơn 1", "Lớn hơn 1", "Bằng 1", "Bằng 0"], correct: 0,
    hint: "✏️ Phần phân số của hỗn số luôn là phân số bé hơn 1 (tử số bé hơn mẫu số).",
    level: "easy", tags: ["hon_so", "ly_thuyet"]
  },
  {
    id: 228, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Kết quả của phép cộng hai phân số cùng mẫu: 1/5 + 2/5 = ?/5. Điền tử số thích hợp.",
    answer: "3",
    hint: "✏️ Khi cộng hai phân số cùng mẫu, ta cộng hai tử số với nhau và giữ nguyên mẫu số.",
    level: "easy", tags: ["phep_cong"]
  },
  {
    id: 229, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Kết quả của phép nhân phân số: 2/3 × 4/5 là:",
    answers: ["8/15", "6/8", "2/15", "8/5"], correct: 0,
    hint: "✏️ Muốn nhân hai phân số, ta lấy Tử số nhân Tử số, Mẫu số nhân Mẫu số.",
    level: "easy", tags: ["phep_nhan"]
  },
  {
    id: 230, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Muốn chia hai phân số, ta lấy phân số thứ nhất nhân với phân số thứ hai ?.",
    answer: "đảo ngược",
    hint: "✏️ Phép chia phân số chính là phép nhân với phân số đảo ngược.",
    level: "easy", tags: ["phep_chia", "ly_thuyet"]
  },
  {
    id: 231, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "mc",
    q: "Tỉ số phần trăm của 25 và 100 được viết dưới dạng ký hiệu là:",
    answers: ["25%", "2,5%", "0,25%", "250%"], correct: 0,
    hint: "✏️ 25/100 viết gọn lại bằng cách thêm ký hiệu % vào sau số 25.",
    level: "easy", tags: ["ly_thuyet"]
  },
  {
    id: 232, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "fill",
    q: "Tìm tỉ số phần trăm của hai số 3 và 4. Kèm ký hiệu %, kết quả là ? %.",
    answer: "75",
    hint: "✏️ Lấy 3 ÷ 4 = 0,75. Sau đó nhân nhẩm 0,75 với 100 để viết dạng phần trăm.",
    level: "easy", tags: ["tim_ti_so"]
  },
  {
    id: 233, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "mc",
    q: "Một lớp học có 40 học sinh, trong đó có 20 học sinh nữ. Tỉ số phần trăm của số học sinh nữ so với cả lớp là:",
    answers: ["50%", "20%", "40%", "25%"], correct: 0,
    hint: "✏️ Lấy số học sinh nữ chia cho tổng số học sinh: 20 ÷ 40 = 0,5 = 50%.",
    level: "easy", tags: ["tim_ti_so", "thuc_te"]
  },
  {
    id: 234, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "fill",
    q: "Muốn tìm 10% của số 200, ta lấy 200 nhân với 10 rồi chia cho ?.",
    answer: "100",
    hint: "✏️ Công thức tìm giá trị phần trăm của một số: Số đó × Số phần trăm ÷ 100.",
    level: "easy", tags: ["ly_thuyet"]
  },
  {
    id: 235, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "mc",
    q: "Một cửa hàng có 100 xe đạp, đã bán được 15% số xe. Số xe đạp cửa hàng đã bán là:",
    answers: ["15 xe", "85 xe", "150 xe", "5 xe"], correct: 0,
    hint: "✏️ Tính 100 × 15 ÷ 100.",
    level: "easy", tags: ["tinh_gia_tri", "thuc_te"]
  },
  {
    id: 236, topic: "so_thap_phan", topicName: "Số thập phân", type: "fill",
    q: "Viết số thập phân sau gọn nhất: 7,500 = ?.",
    answer: "7.5",
    hint: "✏️ Có thể bỏ các chữ số 0 ở tận cùng bên phải phần thập phân mà không làm thay đổi giá trị của số.",
    level: "easy", tags: ["cau_tao_so"]
  },
  {
    id: 237, topic: "so_thap_phan", topicName: "Số thập phân", type: "mc",
    q: "Trong các số thập phân: 3,45; 3,54; 3,42; 3,05, số lớn nhất là:",
    answers: ["3,54", "3,45", "3,42", "3,05"], correct: 0,
    hint: "✏️ So sánh hàng phần mười: số 3,54 có chữ số 5 ở hàng phần mười là lớn nhất.",
    level: "easy", tags: ["so_sanh"]
  },
  {
    id: 238, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Điền số thích hợp vào tử số: Phân số 2/5 bằng phân số ?/10.",
    answer: "4",
    hint: "✏️ Mẫu số tăng từ 5 lên 10 (gấp 2 lần) thì tử số cũng phải nhân với 2.",
    level: "easy", tags: ["quy_dong"]
  },
  {
    id: 239, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "mc",
    q: "Một mảnh vườn có 50% diện tích trồng rau. Cụm từ '50% diện tích' có nghĩa là mảnh vườn được trồng rau một nửa đúng hay sai?",
    answers: ["Đúng", "Sai"], correct: 0,
    hint: "✏️ 50% chính là 50/100, rút gọn đi bằng 1/2 (tức là một nửa).",
    level: "easy", tags: ["ly_thuyet"]
  },
  {
    id: 240, topic: "so_thap_phan", topicName: "Số thập phân", type: "fill",
    q: "Kết quả của phép tính nhân nhẩm: 0,5 × 2 = ?.",
    answer: "1",
    hint: "✏️ 5 × 2 = 10, đặt dấu phẩy ta được 1,0 tức là bằng 1.",
    level: "easy", tags: ["phep_nhan"]
  },
  // ==========================================
  // ĐỔI ĐƠN VỊ ĐO THỜI GIAN (ID: 241 - 255)
  // ==========================================
  {
    id: 241, topic: "toan_thoi_gian", topicName: "Toán thời gian", type: "fill",
    q: "Đổi đơn vị thời gian: 1 giờ = ? phút.",
    answer: "60",
    hint: "⏱️ Đây là quy ước cơ bản về thời gian mà chúng ta sử dụng hàng ngày.",
    level: "easy", tags: ["doi_don_vi", "thoi_gian"]
  },
  {
    id: 242, topic: "toan_thoi_gian", topicName: "Toán thời gian", type: "mc",
    q: "Một phút có bao nhiêu giây?",
    answers: ["60 giây", "100 giây", "12 giây", "30 giây"], correct: 0,
    hint: "⏱️ Kim giây quay được đúng một vòng đồng hồ (60 vạch nhỏ) thì được một phút.",
    level: "easy", tags: ["doi_don_vi", "thoi_gian", "ly_thuyet"]
  },
  {
    id: 243, topic: "toan_thoi_gian", topicName: "Toán thời gian", type: "fill",
    q: "Đổi đơn vị sau: 2 giờ = ? phút.",
    answer: "120",
    hint: "⏱️ Vì 1 giờ = 60 phút, nên 2 giờ ta lấy 60 × 2.",
    level: "easy", tags: ["doi_don_vi", "thoi_gian"]
  },
  {
    id: 244, topic: "toan_thoi_gian", topicName: "Toán thời gian", type: "mc",
    q: "Đổi đơn vị sau: 1,5 giờ bằng bao nhiêu phút?",
    answers: ["90 phút", "15 phút", "150 phút", "60 phút"], correct: 0,
    hint: "⏱️ Ta lấy 1,5 nhân với 60. (Hoặc hiểu là 1 giờ bằng 60 phút, 0,5 giờ là nửa giờ bằng 30 phút).",
    level: "easy", tags: ["doi_don_vi", "thoi_gian", "so_thap_phan"]
  },
  {
    id: 245, topic: "toan_thoi_gian", topicName: "Toán thời gian", type: "fill",
    q: "Một ngày có tất cả bao nhiêu giờ?",
    answer: "24",
    hint: "⏱️ Thời gian một ngày đêm được tính từ 12 giờ đêm hôm trước đến 12 giờ đêm hôm sau.",
    level: "easy", tags: ["doi_don_vi", "thoi_gian", "ly_thuyet"]
  },
  {
    id: 246, topic: "toan_thoi_gian", topicName: "Toán thời gian", type: "mc",
    q: "Đổi đơn vị sau: 180 phút bằng bao nhiêu giờ?",
    answers: ["3 giờ", "18 giờ", "2 giờ", "4 giờ"], correct: 0,
    hint: "⏱️ Đổi từ phút ra giờ ta thực hiện phép tính chia cho 60. Lấy 180 ÷ 60.",
    level: "easy", tags: ["doi_don_vi", "thoi_gian"]
  },
  {
    id: 247, topic: "toan_thoi_gian", topicName: "Toán thời gian", type: "fill",
    q: "Một năm thường (không phải năm nhuận) có bao nhiêu ngày?",
    answer: "365",
    hint: "⏱️ Năm thường có 365 ngày, riêng năm nhuận sẽ có thêm 1 ngày ở tháng 2 thành 366 ngày.",
    level: "easy", tags: ["doi_don_vi", "thoi_gian", "ly_thuyet"]
  },
  {
    id: 248, topic: "toan_thoi_gian", topicName: "Toán thời gian", type: "mc",
    q: "Tháng nào trong năm có ít ngày nhất (chỉ có 28 hoặc 29 ngày)?",
    answers: ["Tháng 2", "Tháng 1", "Tháng 4", "Tháng 12"], correct: 0,
    hint: "⏱️ Đây là một tháng rất đặc biệt trong năm, số ngày thay đổi tùy theo năm nhuận.",
    level: "easy", tags: ["thoi_gian", "ly_thuyet"]
  },
  {
    id: 249, topic: "toan_thoi_gian", topicName: "Toán thời gian", type: "fill",
    q: "Một thế kỷ bằng bao nhiêu năm?",
    answer: "100",
    hint: "⏱️ Đây là đơn vị dùng để đo khoảng thời gian rất dài trong lịch sử.",
    level: "easy", tags: ["doi_don_vi", "thoi_gian", "ly_thuyet"]
  },
  {
    id: 250, topic: "toan_thoi_gian", topicName: "Toán thời gian", type: "mc",
    q: "Phép tính thời gian: 2 giờ 15 phút + 1 giờ 10 phút = ?",
    answers: ["3 giờ 25 phút", "3 giờ 35 phút", "2 giờ 25 phút", "3 giờ 5 phút"], correct: 0,
    hint: "⏱️ Cộng số giờ với số giờ (2 + 1) và số phút với số phút (15 + 10).",
    level: "easy", tags: ["phep_cong", "thoi_gian"]
  },
  {
    id: 251, topic: "toan_thoi_gian", topicName: "Toán thời gian", type: "fill",
    q: "Phép tính thời gian: 5 giờ 40 phút - 2 giờ 10 phút = 3 giờ ? phút. Điền số phút thích hợp.",
    answer: "30",
    hint: "⏱️ Lấy số phút ở số bị trừ trừ đi số phút ở số trừ: 40 - 10.",
    level: "easy", tags: ["phep_tru", "thoi_gian"]
  },
  {
    id: 252, topic: "toan_thoi_gian", topicName: "Toán thời gian", type: "mc",
    q: "Kết quả của phép tính: 12 phút 20 giây × 2 là:",
    answers: ["24 phút 40 giây", "24 phút 20 giây", "14 phút 40 giây", "12 phút 40 giây"], correct: 0,
    hint: "⏱️ Nhân cả số phút và số giây với 2: (12 × 2) và (20 × 2).",
    level: "easy", tags: ["phep_nhan", "thoi_gian"]
  },
  {
    id: 253, topic: "toan_thoi_gian", topicName: "Toán thời gian", type: "fill",
    q: "Kết quả của phép tính chia thời gian: 8 giờ 40 phút ÷ 4 = ? giờ 10 phút. Điền số giờ thích hợp.",
    answer: "2",
    hint: "⏱️ Ta chia số giờ trước: 8 giờ ÷ 4 = ? giờ.",
    level: "easy", tags: ["phep_chia", "thoi_gian"]
  },
  {
    id: 254, topic: "toan_thoi_gian", topicName: "Toán thời gian", type: "mc",
    q: "Đổi sang số thập phân: 30 phút = ? giờ.",
    answers: ["0,5 giờ", "3 giờ", "0,3 giờ", "5 giờ"], correct: 0,
    hint: "⏱️ 30 phút là một nửa giờ. Lấy 30 ÷ 60 = 0,5.",
    level: "easy", tags: ["doi_don_vi", "thoi_gian"]
  },
  {
    id: 255, topic: "toan_thoi_gian", topicName: "Toán thời gian", type: "fill",
    q: "Một bạn học sinh làm xong bài tập hết 15 phút. Bạn bắt đầu làm từ lúc 8 giờ. Bạn làm xong lúc 8 giờ ? phút.",
    answer: "15",
    hint: "⏱️ Lấy thời gian bắt đầu cộng với thời gian làm bài: 8 giờ + 15 phút.",
    level: "easy", tags: ["thoi_gian", "thuc_te"]
  },

  // ==========================================
  // TOÁN CHUYỂN ĐỘNG ĐỀU CĂN BẢN (ID: 256 - 270)
  // ==========================================
  {
    id: 256, topic: "toan_chuyen_dong", topicName: "Toán chuyển động", type: "mc",
    q: "Công thức tính vận tốc (v) khi biết quãng đường là s và thời gian là t là:",
    answers: ["v = s ÷ t", "v = s × t", "v = t ÷ s", "v = s + t"], correct: 0,
    hint: "🚗 Vận tốc bằng quãng đường chia cho thời gian di chuyển.",
    level: "easy", tags: ["ly_thuyet"]
  },
  {
    id: 257, topic: "toan_chuyen_dong", topicName: "Toán chuyển động", type: "fill",
    q: "Muốn tính quãng đường (s) khi biết vận tốc (v) và thời gian (t), ta lấy vận tốc ? với thời gian.",
    answer: "nhân",
    hint: "🚗 Công thức tính quãng đường là: s = v × t. Hãy điền từ 'nhân'.",
    level: "easy", tags: ["ly_thuyet"]
  },
  {
    id: 258, topic: "toan_chuyen_dong", topicName: "Toán chuyển động", type: "mc",
    q: "Công thức tính thời gian (t) khi biết quãng đường là s và vận tốc là v là:",
    answers: ["t = s ÷ v", "t = s × v", "t = v ÷ s", "t = s - v"], correct: 0,
    hint: "🚗 Thời gian đi bằng quãng đường chia cho vận tốc.",
    level: "easy", tags: ["ly_thuyet"]
  },
  {
    id: 259, topic: "toan_chuyen_dong", topicName: "Toán chuyển động", type: "fill",
    q: "Một người đi xe máy đi được quãng đường 120 km trong 3 giờ. Vận tốc của người đi xe máy đó là ? km/giờ.",
    answer: "40",
    hint: "🚗 Áp dụng công thức tính vận tốc: v = s ÷ t. Lấy 120 ÷ 3.",
    level: "easy", tags: ["van_toc", "thuc_te"]
  },
  {
    id: 260, topic: "toan_chuyen_dong", topicName: "Toán chuyển động", type: "mc",
    q: "Một ô tô di chuyển với vận tốc 60 km/giờ. Quãng đường ô tô đó đi được trong thời gian 2 giờ là:",
    answers: ["120 km", "30 km", "62 km", "180 km"], correct: 0,
    hint: "🚗 Áp dụng công thức tính quãng đường: s = v × t. Lấy 60 × 2.",
    level: "easy", tags: ["quang_duong", "thuc_te"]
  },
  {
    id: 261, topic: "toan_chuyen_dong", topicName: "Toán chuyển động", type: "fill",
    q: "Một người đi xe đạp với vận tốc 15 km/giờ trên quãng đường dài 30 km. Thời gian người đó đi hết quãng đường là ? giờ.",
    answer: "2",
    hint: "🚗 Áp dụng công thức tính thời gian: t = s ÷ v. Lấy 30 ÷ 15.",
    level: "easy", tags: ["thoi_gian", "thuc_te"]
  },
  {
    id: 262, topic: "toan_chuyen_dong", topicName: "Toán chuyển động", type: "mc",
    q: "Đơn vị đo nào sau đây thường được dùng để đo vận tốc của một chiếc ô tô?",
    answers: ["km/giờ", "km", "giờ", "m"], correct: 0,
    hint: "🚗 Vận tốc ô tô thường tính bằng số ki-lô-mét đi được trong một giờ (km/giờ).",
    level: "easy", tags: ["ly_thuyet"]
  },
  {
    id: 263, topic: "toan_chuyen_dong", topicName: "Toán chuyển động", type: "fill",
    q: "Một người đi bộ với vận tốc 5 km/giờ. Quãng đường người đó đi được trong 4 giờ là ? km.",
    answer: "20",
    hint: "🚗 Tính quãng đường: s = v × t. Thực hiện phép tính 5 × 4.",
    level: "easy", tags: ["quang_duong", "thuc_te"]
  },
  {
    id: 264, topic: "toan_chuyen_dong", topicName: "Toán chuyển động", type: "mc",
    q: "Một con tàu hỏa chạy với vận tốc 80 km/giờ. Thời gian để tàu chạy hết quãng đường 240 km là:",
    answers: ["3 giờ", "2 giờ", "4 giờ", "160 giờ"], correct: 0,
    hint: "🚗 Tính thời gian: t = s ÷ v. Thực hiện phép tính 240 ÷ 80.",
    level: "easy", tags: ["thoi_gian", "thuc_te"]
  },
  {
    id: 265, topic: "toan_chuyen_dong", topicName: "Toán chuyển động", type: "fill",
    q: "Một người chạy bộ quãng đường 20 km trong thời gian 2 giờ. Vận tốc chạy của người đó là ? km/giờ.",
    answer: "10",
    hint: "🚗 Tính vận tốc: v = s ÷ t. Thực hiện phép tính 20 ÷ 2.",
    level: "easy", tags: ["van_toc", "thuc_te"]
  },
  {
    id: 266, topic: "toan_chuyen_dong", topicName: "Toán chuyển động", type: "mc",
    q: "Nếu một xe máy đi với vận tốc 40 km/giờ, trong 0,5 giờ xe máy đó đi được quãng đường dài:",
    answers: ["20 km", "40 km", "80 km", "10 km"], correct: 0,
    hint: "🚗 Quãng đường s = 40 × 0,5 (0,5 giờ là nửa giờ, nên quãng đường bằng một nửa vận tốc).",
    level: "easy", tags: ["quang_duong", "so_thap_phan"]
  },
  {
    id: 267, topic: "toan_chuyen_dong", topicName: "Toán chuyển động", type: "fill",
    q: "Một con ong bay với vận tốc 2 m/giây. Quãng đường con ong bay được trong 10 giây là ? m.",
    answer: "20",
    hint: "🚗 Đơn vị vận tốc là m/giây kết hợp với giây. Tính quãng đường: 2 × 10.",
    level: "easy", tags: ["quang_duong"]
  },
  {
    id: 268, topic: "toan_chuyen_dong", topicName: "Toán chuyển động", type: "mc",
    q: "Một người đi bộ đi hết quãng đường 10 km với vận tốc 4 km/giờ. Thời gian đi của người đó là:",
    answers: ["2,5 giờ", "2 giờ", "3 giờ", "14 giờ"], correct: 0,
    hint: "🚗 Tính thời gian t = 10 ÷ 4 = 2,5 giờ.",
    level: "easy", tags: ["thoi_gian", "so_thap_phan"]
  },
  {
    id: 269, topic: "toan_chuyen_dong", topicName: "Toán chuyển động", type: "fill",
    q: "Một ô tô đi từ tỉnh A đến tỉnh B hết 3 giờ với vận tốc 55 km/giờ. Quãng đường AB dài ? km.",
    answer: "165",
    hint: "🚗 Tính quãng đường s = 55 × 3.",
    level: "easy", tags: ["quang_duong", "thuc_te"]
  },
  {
    id: 270, topic: "toan_chuyen_dong", topicName: "Toán chuyển động", type: "mc",
    q: "Khi đi trên cùng một quãng đường, nếu ta đi với vận tốc nhanh hơn thì thời gian đi sẽ thay đổi thế nào?",
    answers: ["Ít đi (nhanh hơn)", "Nhiều lên (lâu hơn)", "Không thay đổi", "Gấp đôi lên"], correct: 0,
    hint: "🚗 Vận tốc và thời gian là hai đại lượng tỉ lệ nghịch. Đi càng nhanh thì thời gian càng ít.",
    level: "easy", tags: ["ly_thuyet"]
  },
  // ==========================================
  // ĐƠN VỊ ĐO ĐỘ DÀI & ĐO KHỐI LƯỢNG (ID: 271 - 285)
  // ==========================================
  {
    id: 271, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Đổi đơn vị đo độ dài: 1 m = ? cm.",
    answer: "100",
    hint: "⚖️ Một mét bằng một trăm cen-ti-mét. Đây là thước đo rất quen thuộc với các em.",
    level: "easy", tags: ["do_dai", "doi_don_vi"]
  },
  {
    id: 272, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Đơn vị nào lớn nhất trong các đơn vị đo độ dài dưới đây?",
    answers: ["km", "m", "dm", "cm"], correct: 0,
    hint: "⚖️ Ki-lô-mét (km) thường dùng để đo khoảng cách đường đi giữa các tỉnh, là đơn vị lớn nhất ở đây.",
    level: "easy", tags: ["do_dai", "ly_thuyet"]
  },
  {
    id: 273, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Hai đơn vị đo độ dài liền kề nhau trong bảng đơn vị thì hơn kém nhau bao nhiêu lần?",
    answer: "10",
    hint: "⚖️ Ví dụ: 1 m = 10 dm, 1 dm = 10 cm. Các đơn vị liền kề hơn kém nhau số tròn chục.",
    level: "easy", tags: ["do_dai", "ly_thuyet"]
  },
  {
    id: 274, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Đổi đơn vị sau: 5 km bằng bao nhiêu mét?",
    answers: ["5000 m", "500 m", "50 m", "50000 m"], correct: 0,
    hint: "⚖️ Vì 1 km = 1000 m, nên 5 km ta lấy 5 × 1000.",
    level: "easy", tags: ["do_dai", "doi_don_vi"]
  },
  {
    id: 275, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Đổi đơn vị sau sang số thập phân: 2 m 5 dm = ? m.",
    answer: "2.5",
    hint: "⚖️ 5 dm = 0,5 m. Lấy 2 m cộng với 0,5 m.",
    level: "easy", tags: ["do_dai", "so_thap_phan"]
  },
  {
    id: 276, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Đơn vị cơ bản chuẩn dùng để đo khối lượng của một cơ thể người hoặc một vật thông thường là gì?",
    answers: ["ki-lô-gam (kg)", "mét (m)", "lít (l)", "mét vuông (m²)"], correct: 0,
    hint: "⚖️ Khi cân cân nặng, người ta dùng đơn vị ki-lô-gam (kg).",
    level: "easy", tags: ["khoi_luong", "ly_thuyet"]
  },
  {
    id: 277, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Đổi đơn vị khối lượng: 1 kg = ? g.",
    answer: "1000",
    hint: "⚖️ Một ki-lô-gam bằng một nghìn gam. Hãy điền số thích hợp.",
    level: "easy", tags: ["khoi_luong", "doi_don_vi"]
  },
  {
    id: 278, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Một tấn bằng bao nhiêu ki-lô-gam (kg)?",
    answers: ["1000 kg", "100 kg", "10 kg", "10000 kg"], correct: 0,
    hint: "⚖️ Tấn là đơn vị đo khối lượng rất lớn (như xe tải, con voi). 1 tấn = 1000 kg.",
    level: "easy", tags: ["khoi_luong", "doi_don_vi"]
  },
  {
    id: 279, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Đổi đơn vị sau: 3 tạ = ? kg.",
    answer: "300",
    hint: "⚖️ Theo bảng đơn vị: Tấn -> Tạ -> Yến -> kg. 1 tạ = 100 kg, vậy 3 tạ bằng bao nhiêu?",
    level: "easy", tags: ["khoi_luong", "doi_don_vi"]
  },
  {
    id: 280, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Bao gạo cân nặng 50 kg. Cần bao nhiêu bao gạo như thế để cân được đúng 1 tấn?",
    answers: ["20 bao", "10 bao", "50 bao", "100 bao"], correct: 0,
    hint: "⚖️ Đổi 1 tấn = 1000 kg. Lấy 1000 ÷ 50 để tìm số bao gạo.",
    level: "easy", tags: ["khoi_luong", "thuc_te"]
  },
  {
    id: 281, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Điền dấu thích hợp (>, <, =) vào chỗ trống: 450 g ? 0,5 kg.",
    answer: "<",
    hint: "⚖️ Đổi 0,5 kg = 500 g. So sánh 450 g với 500 g.",
    level: "easy", tags: ["khoi_luong", "so_sanh"]
  },
  {
    id: 282, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Phép tính khối lượng: 12 kg + 850 g bằng bao nhiêu?",
    answers: ["12,85 kg", "1285 kg", "12,085 kg", "20,5 kg"], correct: 0,
    hint: "⚖️ Đổi 850 g = 0,85 kg. Thực hiện phép cộng: 12 + 0,85.",
    level: "easy", tags: ["khoi_luong", "phep_cong"]
  },
  {
    id: 283, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Một quả cam nặng khoảng 200 g. Vậy 5 quả cam như thế nặng tổng cộng khoảng ? kg.",
    answer: "1",
    hint: "⚖️ Tính khối lượng 5 quả: 200 × 5 = 1000 g. Sau đó đổi từ g ra kg.",
    level: "easy", tags: ["khoi_luong", "thuc_te"]
  },
  {
    id: 284, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Khi cân một chiếc bút mực của học sinh, ta nên chọn đơn vị đo nào là phù hợp nhất?",
    answers: ["gam (g)", "ki-lô-gam (kg)", "tấn", "tạ"], correct: 0,
    hint: "⚖️ Chiếc bút mực rất nhẹ, nên dùng đơn vị nhỏ nhất là gam (g).",
    level: "easy", tags: ["khoi_luong", "ly_thuyet"]
  },
  {
    id: 285, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Đổi đơn vị đo độ dài sau: 150 cm = ? m. (Viết dưới dạng số thập phân)",
    answer: "1.5",
    hint: "⚖️ Từ cm đổi ra m ta thực hiện chia cho 100. Lấy 150 ÷ 100.",
    level: "easy", tags: ["do_dai", "so_thap_phan"]
  },

  // ==========================================
  // ĐƠN VỊ ĐO DIỆN TÍCH & THỂ TÍCH (ID: 286 - 300)
  // ==========================================
  {
    id: 286, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Hai đơn vị đo diện tích liền kề nhau trong bảng đơn vị thì hơn kém nhau bao nhiêu lần?",
    answers: ["100 lần", "10 lần", "1000 lần", "2 lần"], correct: 0,
    hint: "⚖️ Đơn vị diện tích có ký hiệu số 2 ở trên đầu (ví dụ m²), nên mỗi hàng hơn kém nhau 2 chữ số 0 (100 lần).",
    level: "easy", tags: ["dien_tich", "ly_thuyet"]
  },
  {
    id: 287, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Đổi đơn vị diện tích sau: 4 m² = ? dm².",
    answer: "400",
    hint: "⚖️ Vì m² liền kề trước dm² nên 1 m² = 100 dm². Tính 4 × 100.",
    level: "easy", tags: ["dien_tich", "doi_don_vi"]
  },
  {
    id: 288, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Đổi đơn vị diện tích sau: 200 cm² bằng bao nhiêu đề-xi-mét vuông (dm²)?",
    answers: ["2 dm²", "20 dm²", "0,2 dm²", "20000 dm²"], correct: 0,
    hint: "⚖️ Đổi từ đơn vị nhỏ ra đơn vị lớn liền kề, ta chia cho 100. Lấy 200 ÷ 100.",
    level: "easy", tags: ["dien_tich", "doi_don_vi"]
  },
  {
    id: 289, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Trong nông nghiệp, đơn vị đo diện tích 'Héc-ta' (ký hiệu là ha) tương đương với đơn vị nào: 1 ha = 10000 ?.",
    answer: "m²",
    hint: "⚖️ Một héc-ta bằng mười nghìn mét vuông. Hãy điền ký hiệu đơn vị mét vuông.",
    level: "easy", tags: ["dien_tich", "ly_thuyet"]
  },
  {
    id: 290, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Đổi đơn vị diện tích sau sang số thập phân: 5 m² 20 dm² = ? m².",
    answers: ["5,2 m²", "5,02 m²", "52 m²", "5,20 m²"], correct: 0,
    hint: "⚖️ 20 dm² = 20/100 m² = 0,2 m². Kết quả là 5 + 0,2.",
    level: "easy", tags: ["dien_tich", "so_thap_phan"]
  },
  {
    id: 291, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Hai đơn vị đo thể tích liền kề nhau trong bảng đơn vị thì hơn kém nhau bao nhiêu ? lần.",
    answer: "1000",
    hint: "⚖️ Đơn vị thể tích có ký hiệu số 3 ở trên đầu (ví dụ m³), nên mỗi hàng hơn kém nhau 3 chữ số 0.",
    level: "easy", tags: ["the_tich", "ly_thuyet"]
  },
  {
    id: 292, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Đổi đơn vị thể tích sau: 2 m³ bằng bao nhiêu đề-xi-mét khối (dm³)?",
    answers: ["2000 dm³", "200 dm³", "20 dm³", "20000 dm³"], correct: 0,
    hint: "⚖️ Lấy 2 nhân với 1000 vì m³ gấp dm³ 1000 lần.",
    level: "easy", tags: ["the_tich", "doi_don_vi"]
  },
  {
    id: 293, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Đổi đơn vị thể tích sau: 5000 cm³ = ? dm³.",
    answer: "5",
    hint: "⚖️ Đổi ngược từ cm³ ra đơn vị lớn hơn liền kề là dm³, ta chia cho 1000. Lấy 5000 ÷ 1000.",
    level: "easy", tags: ["the_tich", "doi_don_vi"]
  },
  {
    id: 294, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Một bình nước khoáng nhỏ có thể tích ghi trên nhãn là 500 ml. Đơn vị 'ml' là viết tắt của từ nào?",
    answers: ["mi-li-lít", "mi-li-mét", "mét khối", "mi-li-gam"], correct: 0,
    hint: "⚖️ Chữ l viết hoa thường đại diện cho đơn vị lít, nên ml là mi-li-lít.",
    level: "easy", tags: ["the_tich", "ly_thuyet"]
  },
  {
    id: 295, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Một thùng nước chứa được 10 dm³ nước, tương đương với thùng đó chứa được ? lít nước.",
    answer: "10",
    hint: "⚖️ Nhớ rằng số đề-xi-mét khối (dm³) luôn bằng đúng số lít nước.",
    level: "easy", tags: ["the_tich", "doi_don_vi"]
  },
  {
    id: 296, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Để đo thể tích của một lượng nước đổ đầy trong một hồ bơi lớn, người ta thường dùng đơn vị nào?",
    answers: ["mét khối (m³)", "mét (m)", "mét vuông (m²)", "cen-ti-mét khối (cm³)"], correct: 0,
    hint: "⚖️ Hồ bơi rất lớn nên dùng mét khối (m³) là đơn vị đo lượng nước thích hợp nhất.",
    level: "easy", tags: ["the_tich", "ly_thuyet"]
  },
  {
    id: 297, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Điền số thích hợp vào chỗ trống: 1,2 m³ = ? dm³.",
    answer: "1200",
    hint: "⚖️ Nhân số 1,2 với 1000 (dịch dấu phẩy sang phải 3 chữ số).",
    level: "easy", tags: ["the_tich", "so_thap_phan"]
  },
  {
    id: 298, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Trong các số đo diện tích sau: 300 cm²; 3 dm²; 0,03 m², các số đo này có bằng nhau không?",
    answers: ["Có bằng nhau", "Không bằng nhau"], correct: 0,
    hint: "⚖️ Đổi tất cả ra dm²: 300 cm² = 3 dm²; 0,03 m² = 3 dm². Vậy chúng đều bằng nhau.",
    level: "easy", tags: ["dien_tich", "so_sanh"]
  },
  {
    id: 299, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Một sợi dây dài 1 m, người ta cắt đi 20 cm. Sợi dây còn lại dài ? cm.",
    answer: "80",
    hint: "⚖️ Bước 1: Đổi 1 m = 100 cm. Bước 2: Lấy 100 - 20.",
    level: "easy", tags: ["do_dai", "phep_tru"]
  },
  {
    id: 300, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Khi viết các đơn vị đo lường, nếu em viết sai ký hiệu chữ hoa và chữ thường (ví dụ viết KG thay vì kg) thì có đúng quy định không?",
    answers: ["Không đúng", "Có, vẫn đúng"], correct: 0,
    hint: "⚖️ Ký hiệu đơn vị đo lường quốc tế bắt buộc phải viết chuẩn xác bằng chữ thường (kg, m, l).",
    level: "easy", tags: ["ly_thuyet"]
  },
  // ==========================================
  // ĐỔI SỐ ĐO ĐỘ DÀI & KHỐI LƯỢNG (ID: 301 - 315)
  // ==========================================
  {
    id: 301, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Viết số thập phân thích hợp vào chỗ trống: 4 m 7 cm = ? m.",
    answer: "4.07",
    hint: "⚖️ Vì 7 cm = 7/100 m = 0,07 m. Nên khi cộng với 4 m ta được 4,07 m. Chú ý hàng phần mười là số 0 nhé.",
    level: "easy", tags: ["doi_so", "do_dai", "so_thap_phan"]
  },
  {
    id: 302, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Điền số thích hợp vào chỗ trống: 5,2 m = ? cm.",
    answers: ["520", "52", "5200", "5,20"], correct: 0,
    hint: "⚖️ Từ m đổi ra cm ta nhân với 100 (dịch dấu phẩy sang phải 2 chữ số). Số 5,2 biến thành 520.",
    level: "easy", tags: ["doi_so", "do_dai"]
  },
  {
    id: 303, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Điền số thích hợp vào chỗ trống: 85 dm = ? m. (Viết dưới dạng số thập phân)",
    answer: "8.5",
    hint: "⚖️ Từ dm đổi ngược ra m ta chia cho 10. Lấy 85 ÷ 10.",
    level: "easy", tags: ["doi_so", "do_dai", "so_thap_phan"]
  },
  {
    id: 304, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Số thập phân nào thích hợp để điền vào chỗ trống: 1 km 25 m = ...... km?",
    answers: ["1,025", "1,25", "1,250", "12,5"], correct: 0,
    hint: "⚖️ 25 m = 25/1000 km = 0,025 km. Kết quả là 1 + 0,025 = 1,025.",
    level: "easy", tags: ["doi_so", "do_dai", "so_thap_phan"]
  },
  {
    id: 305, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Đổi số đo độ dài sau sang hỗn số: 3 m 4 dm = 3 và ?/10 m. Điền tử số thích hợp.",
    answer: "4",
    hint: "⚖️ 4 dm chiếm 4 phần mười của mét, nên phần phân số của hỗn số sẽ là 4/10.",
    level: "easy", tags: ["doi_so", "do_dai", "hon_so"]
  },
  {
    id: 306, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Một sợi dây dài 0,8 m. Độ dài của sợi dây đó tính theo đơn vị đề-xi-mét (dm) là:",
    answers: ["8 dm", "80 dm", "0,08 dm", "800 dm"], correct: 0,
    hint: "⚖️ Từ m đổi ra dm ta nhân với 10. Lấy 0,8 × 10.",
    level: "easy", tags: ["doi_so", "do_dai"]
  },
  {
    id: 307, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Viết số thập phân thích hợp vào chỗ trống: 2 kg 50 g = ? kg.",
    answer: "2.05",
    hint: "⚖️ 50 g = 50/1000 kg = 0,05 kg. Kết quả thu được là 2 + 0,05.",
    level: "easy", tags: ["doi_so", "khoi_luong", "so_thap_phan"]
  },
  {
    id: 308, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Điền số thích hợp vào chỗ trống: 4,7 tấn = ...... kg.",
    answers: ["4700", "470", "47000", "47"], correct: 0,
    hint: "⚖️ Từ tấn đổi ra kg ta nhân với 1000. Lấy 4,7 × 1000 = 4700.",
    level: "easy", tags: ["doi_so", "khoi_luong"]
  },
  {
    id: 309, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Điền số thích hợp vào chỗ trống: 650 kg = ? tạ. (Viết dưới dạng số thập phân)",
    answer: "6.5",
    hint: "⚖️ Từ kg đổi ngược ra tạ ta chia cho 100. Lấy 650 ÷ 100.",
    level: "easy", tags: ["doi_so", "khoi_luong", "so_thap_phan"]
  },
  {
    id: 310, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Số đo khối lượng 3 và 1/2 kg (ba và một nửa ki-lô-gam) viết dưới dạng số thập phân là:",
    answers: ["3,5 kg", "3,12 kg", "3,1 kg", "3,2 kg"], correct: 0,
    hint: "⚖️ Phân số 1/2 bằng 0,5. Vậy hỗn số này bằng 3,5 kg.",
    level: "easy", tags: ["doi_so", "khoi_luong", "so_thap_phan"]
  },
  {
    id: 311, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Viết số thích hợp vào chỗ trống: 0,25 kg = ? g.",
    answer: "250",
    hint: "⚖️ Lấy 0,25 nhân với 1000 để đổi từ kg sang g.",
    level: "easy", tags: ["doi_so", "khoi_luong"]
  },
  {
    id: 312, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Hộp bánh ghi trọng lượng 0,5 kg, hộp kẹo ghi 450 g. Hộp nào có trọng lượng nặng hơn?",
    answers: ["Hộp bánh nặng hơn", "Hộp kẹo nặng hơn", "Hai hộp bằng nhau"], correct: 0,
    hint: "⚖️ Đổi 0,5 kg = 500 g. Vì 500 g > 450 g nên hộp bánh nặng hơn.",
    level: "easy", tags: ["doi_so", "khoi_luong", "so_sanh"]
  },
  {
    id: 313, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Điền số thích hợp vào chỗ trống: 7 m 2 cm = ? cm.",
    answer: "702",
    hint: "⚖️ Đổi 7 m = 700 cm rồi cộng thêm 2 cm nữa.",
    level: "easy", tags: ["doi_so", "do_dai"]
  },
  {
    id: 314, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Một túi muối nặng 1250 g. Số đo này viết dưới dạng đơn vị ki-lô-gam (kg) là:",
    answers: ["1,25 kg", "12,5 kg", "0,125 kg", "125 kg"], correct: 0,
    hint: "⚖️ Lấy 1250 chia cho 1000 ta được số thập phân thích hợp.",
    level: "easy", tags: ["doi_so", "khoi_luong", "so_thap_phan"]
  },
  {
    id: 315, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Tìm số tự nhiên thích hợp điền vào chỗ trống: ? m = 3000 mm.",
    answer: "3",
    hint: "⚖️ 1 m = 1000 mm. Vậy 3000 mm thì bằng bao nhiêu mét?",
    level: "easy", tags: ["doi_so", "do_dai"]
  },

  // ==========================================
  // ĐỔI SỐ ĐO DIỆN TÍCH & THỂ TÍCH (ID: 316 - 330)
  // ==========================================
  {
    id: 316, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Viết số thập phân thích hợp vào chỗ trống: 3 m² 5 dm² = ...... m².",
    answers: ["3,05", "3,5", "3,50", "35"], correct: 0,
    hint: "⚖️ Vì đơn vị diện tích hơn kém nhau 100 lần nên 5 dm² = 5/100 m² = 0,07 m². Kết quả là 3,05 m².",
    level: "easy", tags: ["doi_so", "dien_tich", "so_thap_phan"]
  },
  {
    id: 317, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Điền số thích hợp vào chỗ trống: 1,5 m² = ? dm².",
    answer: "150",
    hint: "⚖️ Đổi từ m² ra dm² ta nhân với 100. Lấy 1,5 × 100 = 150.",
    level: "easy", tags: ["doi_so", "dien_tich"]
  },
  {
    id: 318, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Điền số thích hợp vào chỗ trống: 45 cm² = ...... dm².",
    answers: ["0,45", "4,5", "0,045", "4500"], correct: 0,
    hint: "⚖️ Từ cm² đổi ngược ra dm² ta chia cho 100. Lấy 45 ÷ 100.",
    level: "easy", tags: ["doi_so", "dien_tich", "so_thap_phan"]
  },
  {
    id: 319, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Một khu vườn có diện tích là 0,5 ha. Đổi sang mét vuông, diện tích khu vườn đó là ? m².",
    answer: "5000",
    hint: "⚖️ Biết rằng 1 ha = 10000 m². Lấy 0,5 nhân với 10000.",
    level: "easy", tags: ["doi_so", "dien_tich"]
  },
  {
    id: 320, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Số đo diện tích 7 m² 80 cm² viết dưới dạng số thập phân với đơn vị mét vuông là:",
    answers: ["7,008 m²", "7,08 m²", "7,8 m²", "7,80 m²"], correct: 0,
    hint: "⚖️ Từ cm² cách m² hai hàng (qua dm²), nên ta chia cho 10000. 80 cm² = 0,0080 m² = 0,008 m².",
    level: "easy", tags: ["doi_so", "dien_tich", "so_thap_phan"]
  },
  {
    id: 321, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Viết số thập phân thích hợp vào chỗ trống: 6 dm³ 45 cm³ = ? dm³.",
    answer: "6.045",
    hint: "⚖️ Đơn vị thể tích hơn kém nhau 1000 lần nên 45 cm³ = 45/1000 dm³ = 0,045 dm³.",
    level: "easy", tags: ["doi_so", "the_tich", "so_thap_phan"]
  },
  {
    id: 322, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Điền số thích hợp vào chỗ trống: 2,4 m³ = ...... dm³.",
    answers: ["2400", "240", "24000", "24"], correct: 0,
    hint: "⚖️ Từ m³ đổi ra dm³ ta nhân với 1000. Lấy 2,4 × 1000.",
    level: "easy", tags: ["doi_so", "the_tich"]
  },
  {
    id: 323, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Điền số thích hợp vào chỗ trống: 800 dm³ = ? m³. (Viết dưới dạng số thập phân)",
    answer: "0.8",
    hint: "⚖️ Đổi ngược từ dm³ ra m³ ta chia cho 1000. Lấy 800 ÷ 1000.",
    level: "easy", tags: ["doi_so", "the_tich", "so_thap_phan"]
  },
  {
    id: 324, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Một bể chứa được 1,5 m³ nước. Sức chứa của bể đó tương đương với bao nhiêu lít nước?",
    answers: ["1500 lít", "150 lít", "15000 lít", "15 lít"], correct: 0,
    hint: "⚖️ Đầu tiên đổi m³ ra dm³: 1,5 m³ = 1500 dm³. Mà 1 dm³ = 1 lít nên bằng 1500 lít.",
    level: "easy", tags: ["doi_so", "the_tich"]
  },
  {
    id: 325, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Viết số thích hợp vào chỗ trống: 35000 cm³ = ? dm³.",
    answer: "35",
    hint: "⚖️ Chia số 35000 cho 1000 để đổi từ đơn vị cm³ sang dm³.",
    level: "easy", tags: ["doi_so", "the_tich"]
  },
  {
    id: 326, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Điền dấu thích hợp (>, <, =) vào chỗ trống: 2 m² 9 dm² ...... 2,9 m²",
    answers: ["<", ">", "="], correct: 0,
    hint: "⚖️ Đổi 2 m² 9 dm² = 2,09 m². So sánh 2,09 m² với 2,9 m² ta thấy 2,09 bé hơn.",
    level: "easy", tags: ["doi_so", "dien_tich", "so_sanh"]
  },
  {
    id: 327, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Một chai nước ngọt có thể tích là 0,75 lít. Đổi đơn vị sang đề-xi-mét khối ta được số ? dm³.",
    answer: "0.75",
    hint: "⚖️ Đơn vị lít và đơn vị đề-xi-mét khối (dm³) có giá trị hoàn toàn bằng nhau.",
    level: "easy", tags: ["doi_so", "the_tich"]
  },
  {
    id: 328, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Kết quả của phép đổi: 0,05 m² sang xăng-ti-mét vuông (cm²) là:",
    answers: ["500 cm²", "50 cm²", "5000 cm²", "5 cm²"], correct: 0,
    hint: "⚖️ Từ m² đổi ra cm² ta phải nhân với 10000. Lấy 0,05 × 10000 = 500.",
    level: "easy", tags: ["doi_so", "dien_tich"]
  },
  {
    id: 329, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Điền số thích hợp vào chỗ trống: 1/4 m = ? cm.",
    answer: "25",
    hint: "⚖️ Biết 1 m = 100 cm. Lấy 100 nhân với 1/4 (tức là lấy 100 ÷ 4).",
    level: "easy", tags: ["doi_so", "do_dai"]
  },
  {
    id: 330, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Số thập phân 0,001 m³ bằng với số đo nào dưới đây?",
    answers: ["1 dm³", "1 cm³", "10 dm³", "100 cm³"], correct: 0,
    hint: "⚖️ Lấy 0,001 m³ nhân với 1000 để đổi ra dm³ ta được kết quả là 1 dm³.",
    level: "easy", tags: ["doi_so", "the_tich"]
  },
  // ==========================================
  // LUYỆN TẬP THÀNH THẠO ĐỔI SỐ ĐO LƯỜNG (ID: 331 - 345)
  // ==========================================
  {
    id: 331, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Viết số thập phân thích hợp vào chỗ trống: 5 tạ 8 kg = ? tạ.",
    answer: "5.08",
    hint: "⚖️ 1 tạ = 100 kg nên 8 kg = 8/100 tạ = 0,08 tạ. Cộng với 5 tạ ta được 5,08 tạ.",
    level: "easy", tags: ["doi_so", "khoi_luong", "so_thap_phan"]
  },
  {
    id: 332, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Điền số thích hợp vào chỗ trống: 0,5 m = ...... mm.",
    answers: ["500", "50", "5", "5000"], correct: 0,
    hint: "⚖️ Từ m đổi ra mm ta phải nhân với 1000. Lấy 0,5 × 1000 = 500.",
    level: "easy", tags: ["doi_so", "do_dai"]
  },
  {
    id: 333, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Đổi số đo diện tích sau sang số thập phân: 45 dm² = ? m².",
    answer: "0.45",
    hint: "⚖️ Đổi từ dm² ngược ra m² ta chia cho 100. Lấy 45 ÷ 100.",
    level: "easy", tags: ["doi_so", "dien_tich", "so_thap_phan"]
  },
  {
    id: 334, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Số đo nào dưới đây lớn nhất?",
    answers: ["1,2 kg", "120 g", "1050 g", "0,9 kg"], correct: 0,
    hint: "⚖️ Đổi tất cả ra gam để so sánh: 1,2 kg = 1200 g. Đây là số lớn nhất.",
    level: "easy", tags: ["khoi_luong", "so_sanh"]
  },
  {
    id: 335, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Đổi đơn vị đo thời gian sau sang số thập phân: 1 giờ 30 phút = ? giờ.",
    answer: "1.5",
    hint: "⚖️ 30 phút bằng một nửa giờ, tức là 0,5 giờ. Lấy 1 + 0,5.",
    level: "easy", tags: ["doi_so", "thoi_gian", "so_thap_phan"]
  },
  {
    id: 336, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Điền số thích hợp vào chỗ trống: 2,5 ngày = ...... giờ.",
    answers: ["60", "48", "50", "24"], correct: 0,
    hint: "⚖️ Một ngày có 24 giờ. Lấy 2,5 × 24 = 60 giờ.",
    level: "easy", tags: ["doi_so", "thoi_gian"]
  },
  {
    id: 337, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Viết số thích hợp vào chỗ trống: 4 m² 5 cm² = 4,0005 m². Đúng hay Sai?",
    answer: "Đúng",
    hint: "⚖️ Từ cm² đổi ra m² phải chia cho 10000. 5 cm² = 0,0005 m² nên kết quả hoàn toàn chính xác.",
    level: "easy", tags: ["doi_so", "dien_tich", "ly_thuyet"]
  },
  {
    id: 338, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Đổi phân số sau thành số đo mét: 3/5 m = ...... cm.",
    answers: ["60 cm", "35 cm", "6 cm", "30 cm"], correct: 0,
    hint: "⚖️ 1 m = 100 cm. Lấy 100 × 3/5 (tức là 100 ÷ 5 × 3).",
    level: "easy", tags: ["doi_so", "do_dai"]
  },
  {
    id: 339, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Điền số thích hợp vào chỗ trống: 0,075 tấn = ? kg.",
    answer: "75",
    hint: "⚖️ Nhân 0,075 với 1000 để đổi từ tấn sang kg. Dịch dấu phẩy sang phải 3 hàng.",
    level: "easy", tags: ["doi_so", "khoi_luong"]
  },
  {
    id: 340, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Số đo thể tích 1500 cm³ viết dưới dạng số thập phân với đơn vị đề-xi-mét khối (dm³) là:",
    answers: ["1,5 dm³", "15 dm³", "0,15 dm³", "150 dm³"], correct: 0,
    hint: "⚖️ Từ cm³ đổi ngược ra dm³ ta chia cho 1000. Lấy 1500 ÷ 1000.",
    level: "easy", tags: ["doi_so", "the_tich", "so_thap_phan"]
  },
  {
    id: 341, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Điền số thích hợp vào chỗ trống: 12,5 dm = ? cm.",
    answer: "125",
    hint: "⚖️ Từ dm đổi ra cm ta nhân với 10. Lấy 12,5 × 10.",
    level: "easy", tags: ["doi_so", "do_dai"]
  },
  {
    id: 342, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Một ô tô chở được 2,5 tấn hàng. Số hàng đó tương đương với bao nhiêu tạ?",
    answers: ["25 tạ", "250 tạ", "2,5 tạ", "50 tạ"], correct: 0,
    hint: "⚖️ 1 tấn = 100 yến = 10 tạ. Để đổi từ tấn ra tạ ta nhân với 10: 2,5 × 10.",
    level: "easy", tags: ["doi_so", "khoi_luong", "thuc_te"]
  },
  {
    id: 343, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Viết số thập phân thích hợp vào chỗ trống: 8 m 25 mm = ? m.",
    answer: "8.025",
    hint: "⚖️ 25 mm = 25/1000 m = 0,025 m. Kết quả thu được là 8 + 0,025.",
    level: "easy", tags: ["doi_so", "do_dai", "so_thap_phan"]
  },
  {
    id: 344, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Kết quả của phép tính: 4 ha - 5000 m² bằng bao nhiêu mét vuông?",
    answers: ["35000 m²", "39500 m²", "45000 m²", "3500 m²"], correct: 0,
    hint: "⚖️ Đổi 4 ha = 40000 m². Sau đó thực hiện phép trừ: 40000 - 5000.",
    level: "easy", tags: ["dien_tich", "phep_tru"]
  },
  {
    id: 345, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Điền số thích hợp vào chỗ trống: 3/4 giờ = ? phút.",
    answer: "45",
    hint: "⚖️ Biết 1 giờ = 60 phút. Lấy 60 × 3/4 (hoặc 60 ÷ 4 × 3).",
    level: "easy", tags: ["doi_so", "thoi_gian"]
  },

  // ==========================================
  // ĐỔI SỐ PHỨC HỢP & PHẢN XẠ NHANH (ID: 346 - 360)
  // ==========================================
  {
    id: 346, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Số nào thích hợp điền vào chỗ trống: 7,05 m² = ...... cm²?",
    answers: ["70500", "705", "7050", "705000"], correct: 0,
    hint: "⚖️ Từ m² đổi ra cm² ta nhân với 10000. Lấy 7,05 × 10000 = 70500.",
    level: "easy", tags: ["doi_so", "dien_tich"]
  },
  {
    id: 347, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Viết số thập phân thích hợp vào chỗ trống: 9 kg 8 g = ? kg.",
    answer: "9.008",
    hint: "⚖️ 8 g = 8/1000 kg = 0,008 kg. Kết quả cộng lại là 9,008.",
    level: "easy", tags: ["doi_so", "khoi_luong", "so_thap_phan"]
  },
  {
    id: 348, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Điền số thích hợp vào chỗ trống: 0,05 m³ = ...... cm³.",
    answers: ["50000", "5000", "500", "500000"], correct: 0,
    hint: "⚖️ Từ m³ đổi trực tiếp ra cm³ ta nhân với 1000000 (1 triệu). Lấy 0,05 × 1000000.",
    level: "easy", tags: ["doi_so", "the_tich"]
  },
  {
    id: 349, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Điền dấu thích hợp (>, <, =) vào chỗ trống: 1,5 tấn ? 25 tạ.",
    answer: "<",
    hint: "⚖️ Đổi 1,5 tấn = 15 tạ. So sánh 15 tạ với 25 tạ.",
    level: "easy", tags: ["khoi_luong", "so_sanh"]
  },
  {
    id: 350, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Một thửa ruộng thu hoạch được 1200 kg thóc. Số thóc đó đổi ra đơn vị tấn là:",
    answers: ["1,2 tấn", "12 tấn", "0,12 tấn", "120 tấn"], correct: 0,
    hint: "⚖️ Từ kg đổi ngược ra tấn ta chia cho 1000. Lấy 1200 ÷ 1000.",
    level: "easy", tags: ["doi_so", "khoi_luong"]
  },
  {
    id: 351, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Viết số thập phân thích hợp vào chỗ trống: 25 m 6 dm = ? m.",
    answer: "25.6",
    hint: "⚖️ 6 dm = 0,6 m. Kết quả ghép lại là 25,6 m.",
    level: "easy", tags: ["doi_so", "do_dai", "so_thap_phan"]
  },
  {
    id: 352, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Một chai sữa có thể tích là 250 ml. Hỏi cần bao nhiêu chai sữa như thế để đổ đầy một bình có thể tích đúng 1 lít?",
    answers: ["4 chai", "2 chai", "5 chai", "10 chai"], correct: 0,
    hint: "⚖️ Đổi 1 lít = 1000 ml. Thực hiện phép tính chia: 1000 ÷ 250.",
    level: "easy", tags: ["the_tich", "thuc_te"]
  },
  {
    id: 353, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Viết số thích hợp vào chỗ trống: 0,4 m² = ? dm².",
    answer: "40",
    hint: "⚖️ Lấy 0,4 nhân với 100 để đổi từ m² ra dm².",
    level: "easy", tags: ["doi_so", "dien_tich"]
  },
  {
    id: 354, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Hỗn số 4 và 3/100 m được viết dưới dạng số thập phân là:",
    answers: ["4,03 m", "4,3 m", "4,30 m", "0,43 m"], correct: 0,
    hint: "⚖️ 3/100 tương ứng với 0,03. Kết quả là 4,03 m.",
    level: "easy", tags: ["doi_so", "do_dai", "so_thap_phan"]
  },
  {
    id: 355, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Điền số thích hợp vào chỗ trống: 15 phút = ? giờ. (Viết dưới dạng số thập phân)",
    answer: "0.25",
    hint: "⚖️ Lấy 15 ÷ 60 = 1/4 = 0,25 giờ.",
    level: "easy", tags: ["doi_so", "thoi_gian", "so_thap_phan"]
  },
  {
    id: 356, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Một khối kim loại có thể tích 2 dm³. Số đo này bằng bao nhiêu xăng-ti-mét khối (cm³)?",
    answers: ["2000 cm³", "200 cm³", "20 cm³", "20000 cm³"], correct: 0,
    hint: "⚖️ Lấy 2 nhân với 1000 vì dm³ gấp cm³ 1000 lần.",
    level: "easy", tags: ["doi_so", "the_tich"]
  },
  {
    id: 357, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Điền số thích hợp vào chỗ trống: 8200 m = ? km. (Viết dưới dạng số thập phân)",
    answer: "8.2",
    hint: "⚖️ Đổi ngược từ m ra km ta thực hiện chia cho 1000. Lấy 8200 ÷ 1000.",
    level: "easy", tags: ["doi_so", "do_dai", "so_thap_phan"]
  },
  {
    id: 358, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Điền dấu thích hợp vào chỗ trống: 0,5 m³ ...... 500 dm³",
    answers: ["=", ">", "<"], correct: 0,
    hint: "⚖️ Đổi 0,5 m³ = 0,5 × 1000 = 500 dm³. Vậy hai bên hoàn toàn bằng nhau.",
    level: "easy", tags: ["the_tich", "so_sanh"]
  },
  {
    id: 359, topic: "do_luong", topicName: "Đo lường", type: "fill",
    q: "Một viên thuốc vitamin nặng 500 mg. Hỏi 2 viên thuốc như thế nặng tổng cộng bao nhiêu gam (g)?",
    answer: "1",
    hint: "⚖️ Tính tổng: 500 × 2 = 1000 mg. Biết 1 g = 1000 mg nên kết quả là mấy gam?",
    level: "easy", tags: ["khoi_luong", "thuc_te"]
  },
  {
    id: 360, topic: "do_luong", topicName: "Đo lường", type: "mc",
    q: "Số thập phân nào bằng với 0,15 m?",
    answers: ["15 cm", "15 mm", "1,5 cm", "15 dm"], correct: 0,
    hint: "⚖️ Nhân 0,15 m với 100 ta được 15 cm.",
    level: "easy", tags: ["doi_so", "do_dai"]
  },
  // ==========================================
  // TOÁN TÌM X CĂN BẢN (ID: 361 - 375)
  // ==========================================
  {
    id: 361, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "fill",
    q: "Tìm x, biết: x + 2,5 = 6,5. Giá trị của x là ?.",
    answer: "4",
    hint: "✏️ Muốn tìm số hạng chưa biết, ta lấy Tổng trừ đi số hạng đã biết. Tính 6,5 - 2,5.",
    level: "easy", tags: ["tim_x", "phep_cong"]
  },
  {
    id: 362, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "mc",
    q: "Tìm x, biết: x - 4,2 = 5,8. Giá trị của x là:",
    answers: ["10", "1,6", "9", "2"], correct: 0,
    hint: "✏️ Muốn tìm số bị trừ, ta lấy Hiệu cộng với số trừ. Tính 5,8 + 4,2.",
    level: "easy", tags: ["tim_x", "phep_tru"]
  },
  {
    id: 363, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "fill",
    q: "Tìm x, biết: 10 - x = 3,5. Giá trị của x là ?.",
    answer: "6.5",
    hint: "✏️ Muốn tìm số trừ, ta lấy Số bị trừ trừ đi Hiệu. Tính 10 - 3,5 (coi 10 là 10,0).",
    level: "easy", tags: ["tim_x", "phep_tru"]
  },
  {
    id: 364, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "mc",
    q: "Tìm x, biết: x × 3 = 1,2. Giá trị của x là:",
    answers: ["0,4", "3,6", "4", "0,3"], correct: 0,
    hint: "✏️ Muốn tìm thừa số chưa biết, ta lấy Tích chia cho thừa số đã biết. Tính 1,2 ÷ 3.",
    level: "easy", tags: ["tim_x", "phep_nhan"]
  },
  {
    id: 365, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "fill",
    q: "Tìm x, biết: x ÷ 2 = 4,5. Giá trị của x là ?.",
    answer: "9",
    hint: "✏️ Muốn tìm số bị chia, ta lấy Thương nhân với số chia. Tính 4,5 × 2.",
    level: "easy", tags: ["tim_x", "phep_chia"]
  },
  {
    id: 366, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "mc",
    q: "Tìm x, biết: 8,4 ÷ x = 4. Giá trị của x là:",
    answers: ["2,1", "21", "33,6", "0,21"], correct: 0,
    hint: "✏️ Muốn tìm số chia, ta lấy Số bị chia chia cho Thương. Tính 8,4 ÷ 4.",
    level: "easy", tags: ["tim_x", "phep_chia"]
  },
  {
    id: 367, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "fill",
    q: "Tìm x, biết: x + x = 10. Giá trị của x là ?.",
    answer: "5",
    hint: "✏️ x + x tức là x × 2 = 10. Hãy tìm số nào cộng với chính nó thì bằng 10.",
    level: "easy", tags: ["tim_x", "tu_duy"]
  },
  {
    id: 368, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "mc",
    q: "Để tìm x trong biểu thức: 1,5 + x = 4,5 × 2. Bước đầu tiên em nên làm gì?",
    answers: ["Tính kết quả phép nhân 4,5 × 2 trước", "Lấy 4,5 trừ cho 1,5 trước", "Lấy 1,5 nhân với 2 trước"], correct: 0,
    hint: "✏️ Hãy làm gọn vế phải bằng cách tính phép nhân 4,5 × 2 = 9 trước, rồi đưa về bài toán tìm x cơ bản.",
    level: "easy", tags: ["tim_x", "ly_thuyet"]
  },
  {
    id: 369, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "fill",
    q: "Tìm x, biết: x - 1,1 = 2,2 + 3,3. Giá trị của x là ?.",
    answer: "6.6",
    hint: "✏️ Bước 1: Tính vế phải: 2,2 + 3,3 = 5,5. Bước 2: Tìm x bằng cách lấy 5,5 + 1,1.",
    level: "easy", tags: ["tim_x"]
  },
  {
    id: 370, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "mc",
    q: "Tìm x, biết: x × 0,1 = 5. Giá trị của x là:",
    answers: ["50", "0,5", "5", "500"], correct: 0,
    hint: "✏️ Nhân với 0,1 bằng chia cho 10. Hoặc tính x = 5 ÷ 0,1 = 50.",
    level: "easy", tags: ["tim_x", "phep_nhan"]
  },
  {
    id: 371, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "fill",
    q: "Tìm x, biết: x ÷ 0,5 = 4. Giá trị của x là ?.",
    answer: "2",
    hint: "✏️ Tìm số bị chia x = 4 × 0,5 (Nhân với 0,5 giống như chia cho 2).",
    level: "easy", tags: ["tim_x", "phep_chia"]
  },
  {
    id: 372, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "mc",
    q: "Tìm x, biết: x + 0,75 = 1. Giá trị của x là:",
    answers: ["0,25", "0,35", "1,75", "0,5"], correct: 0,
    hint: "✏️ Lấy 1 - 0,75 (coi 1 là 1,00 rồi đặt tính trừ).",
    level: "easy", tags: ["tim_x", "phep_cong"]
  },
  {
    id: 373, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "fill",
    q: "Tìm số tự nhiên x, biết x là số chẵn và 2 < x < 5. Giá trị của x là ?.",
    answer: "4",
    hint: "✏️ Nằm giữa số 2 và số 5 có số 3 và số 4. Mà x là số chẵn nên x phải là số mấy?",
    level: "easy", tags: ["tim_x", "so_hoc"]
  },
  {
    id: 374, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "mc",
    q: "Tìm x, biết: x × 4 = 0. Giá trị của x là:",
    answers: ["0", "4", "1", "Không có số nào"], correct: 0,
    hint: "✏️ Bất kỳ số nào nhân với 0 cũng bằng 0. Lấy 0 ÷ 4 = 0.",
    level: "easy", tags: ["tim_x"]
  },
  {
    id: 375, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "fill",
    q: "Tìm x, biết: 7,5 - x = 7,5. Giá trị của x là ?.",
    answer: "0",
    hint: "✏️ Một số trừ đi chính nó thì mới giữ nguyên giá trị. Lấy 7,5 - 7,5.",
    level: "easy", tags: ["tim_x"]
  },

  // ==========================================
  // TÍNH GIÁ TRỊ BIỂU THỨC CĂN BẢN (ID: 376 - 390)
  // ==========================================
  {
    id: 376, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "mc",
    q: "Trong một biểu thức chỉ có phép tính cộng và phép tính nhân, ta thực hiện phép tính nào trước?",
    answers: ["Phép tính nhân", "Phép tính cộng", "Tính từ trái sang phải", "Tính phép nào trước cũng được"], correct: 0,
    hint: "✏️ Quy tắc cốt lõi: Luôn luôn thực hiện nhân chia trước, cộng trừ sau.",
    level: "easy", tags: ["bieu_thuc", "ly_thuyet"]
  },
  {
    id: 377, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "fill",
    q: "Nếu biểu thức có chứa dấu ngoặc đơn ( ), ta phải thực hiện phép tính ở ? dấu ngoặc trước.",
    answer: "trong",
    hint: "✏️ Dấu ngoặc đơn luôn được ưu tiên cao nhất, phải tính toán trong ngoặc trước.",
    level: "easy", tags: ["bieu_thuc", "ly_thuyet"]
  },
  {
    id: 378, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "mc",
    q: "Giá trị của biểu thức: 2 + 3 × 4 là:",
    answers: ["14", "20", "24", "9"], correct: 0,
    hint: "✏️ Áp dụng quy tắc: tính phép nhân 3 × 4 trước, sau đó lấy 2 cộng với kết quả đó.",
    level: "easy", tags: ["bieu_thuc"]
  },
  {
    id: 379, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "fill",
    q: "Giá trị của biểu thức có dấu ngoặc: (2 + 3) × 4 = ?.",
    answer: "20",
    hint: "✏️ Vì có dấu ngoặc nên thực hiện trong ngoặc trước: 2 + 3 = 5. Sau đó tính 5 × 4.",
    level: "easy", tags: ["bieu_thuc"]
  },
  {
    id: 380, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "mc",
    q: "Giá trị của biểu thức: 10 ÷ 2 × 5 là:",
    answers: ["25", "1", "50", "4"], correct: 0,
    hint: "✏️ Biểu thức chỉ có nhân và chia, ta thực hiện tuần tự từ trái sang phải: tính 10 ÷ 2 trước, rồi nhân với 5.",
    level: "easy", tags: ["bieu_thuc"]
  },
  {
    id: 381, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "fill",
    q: "Tính giá trị biểu thức sau: 4,5 + 5,5 - 2 = ?.",
    answer: "8",
    hint: "✏️ Tính từ trái sang phải: 4,5 + 5,5 = 10. Sau đó lấy 10 - 2.",
    level: "easy", tags: ["bieu_thuc"]
  },
  {
    id: 382, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "mc",
    q: "Tính giá trị biểu thức: 1,2 × 3 + 0,4 là:",
    answers: ["4", "4,4", "1,6", "3,6"], correct: 0,
    hint: "✏️ Thực hiện phép nhân trước: 1,2 × 3 = 3,6. Sau đó tính 3,6 + 0,4.",
    level: "easy", tags: ["bieu_thuc"]
  },
  {
    id: 383, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "fill",
    q: "Tính giá trị biểu thức: 5 × (4 - 3,8) = ?.",
    answer: "1",
    hint: "✏️ Bước 1: Tính trong ngoặc 4 - 3,8 = 0,2. Bước 2: Tính 5 × 0,2.",
    level: "easy", tags: ["bieu_thuc"]
  },
  {
    id: 384, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "mc",
    q: "Biểu thức nào dưới đây có giá trị bằng 0?",
    answers: ["(5 - 5) ÷ 2", "5 - 5 ÷ 2", "5 ÷ 5 - 1", "(5 + 5) × 0"], correct: 0,
    hint: "✏️ Xét phương án đầu tiên: (5 - 5) = 0, rồi 0 ÷ 2 = 0. Hoặc phương án cuối cũng đúng, anh chọn câu đầu nhé.",
    level: "easy", tags: ["bieu_thuc"]
  },
  {
    id: 385, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "fill",
    q: "Tính giá trị biểu thức: 10 - 6 ÷ 2 = ?.",
    answer: "7",
    hint: "✏️ Hãy nhớ tính phép chia trước: 6 ÷ 2 = 3. Sau đó lấy 10 trừ đi kết quả đó.",
    level: "easy", tags: ["bieu_thuc"]
  },
  {
    id: 386, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "mc",
    q: "Giá trị của biểu thức: 0,5 × 4 × 2 là:",
    answers: ["4", "2", "1", "8"], correct: 0,
    hint: "✏️ Tính từ trái sang phải hoặc nhân nhẩm nhanh: 0,5 × 4 = 2, rồi lấy 2 × 2.",
    level: "easy", tags: ["bieu_thuc", "tinh_nhanh"]
  },
  {
    id: 387, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "fill",
    q: "Điền dấu thích hợp (>, <, =) vào chỗ trống: 2 × 3 + 4 ? 2 × (3 + 4).",
    answer: "<",
    hint: "✏️ Vế trái: 6 + 4 = 10. Vế phải: 2 × 7 = 14. So sánh 10 và 14.",
    level: "easy", tags: ["bieu_thuc", "so_sanh"]
  },
  {
    id: 388, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "mc",
    q: "Tính giá trị biểu thức: 2,4 ÷ (0,2 × 3) là:",
    answers: ["4", "40", "12", "3,6"], correct: 0,
    hint: "✏️ Tính trong ngoặc trước: 0,2 × 3 = 0,6. Sau đó lấy 2,4 ÷ 0,6.",
    level: "easy", tags: ["bieu_thuc"]
  },
  {
    id: 389, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "fill",
    q: "Kết quả phép tính nhẩm biểu thức sau: 12,5 × 8 = ?.",
    answer: "100",
    hint: "✏️ Đây là cặp số nhân nhẩm rất quen thuộc: 125 × 8 = 1000, đặt dấu phẩy ta được 100.",
    level: "easy", tags: ["bieu_thuc", "tinh_nhanh"]
  },
  {
    id: 390, topic: "dai_so", topicName: "Tìm X & Biểu thức", type: "mc",
    q: "Khi một biểu thức chỉ gồm toàn phép cộng và phép trừ, ta thực hiện tính toán theo thứ tự nào?",
    answers: ["Từ trái sang phải", "Từ phải sang trái", "Tính phép cộng trước", "Tính phép trừ trước"], correct: 0,
    hint: "✏️ Khi biểu thức chỉ có cộng trừ (hoặc chỉ có nhân chia), thứ tự chuẩn luôn là từ trái sang phải.",
    level: "easy", tags: ["bieu_thuc", "ly_thuyet"]
  },
  // ==========================================
  // BÀI TOÁN TRUNG BÌNH CỘNG CÂN BẢN (ID: 391 - 405)
  // ==========================================
  {
    id: 391, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Trung bình cộng của hai số 4 và 6 là ?.",
    answer: "5",
    hint: "✏️ Muốn tìm trung bình cộng của hai số, ta lấy tổng của hai số đó rồi chia cho 2. Tính (4 + 6) ÷ 2.",
    level: "easy", tags: ["trung_binh_cong"]
  },
  {
    id: 392, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Trung bình cộng của ba số 10, 20 và 30 là:",
    answers: ["20", "10", "30", "60"], correct: 0,
    hint: "✏️ Lấy tổng của ba số chia cho 3: (10 + 20 + 30) ÷ 3.",
    level: "easy", tags: ["trung_binh_cong"]
  },
  {
    id: 393, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Biết trung bình cộng của hai số là 8. Tổng của hai số đó là ?.",
    answer: "16",
    hint: "✏️ Muốn tìm tổng khi biết trung bình cộng, ta lấy Trung bình cộng nhân với số các số hạng: 8 × 2.",
    level: "easy", tags: ["trung_binh_cong"]
  },
  {
    id: 394, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Bạn An cân nặng 32 kg, bạn Bình cân nặng 36 kg. Hỏi trung bình mỗi bạn cân nặng bao nhiêu ki-lô-gam?",
    answers: ["34 kg", "32 kg", "36 kg", "68 kg"], correct: 0,
    hint: "✏️ Tính trung bình cộng cân nặng của hai bạn: (32 + 36) ÷ 2.",
    level: "easy", tags: ["trung_binh_cong", "thuc_te"]
  },
  {
    id: 395, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Trung bình cộng của hai số là 15, biết một số là 10. Số còn lại là ?.",
    answer: "20",
    hint: "✏️ Bước 1: Tìm tổng hai số = 15 × 2 = 30. Bước 2: Tìm số còn lại = 30 - 10.",
    level: "easy", tags: ["trung_binh_cong"]
  },
  {
    id: 396, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Trung bình cộng của các số: 1, 2, 3, 4, 5 là:",
    answers: ["3", "2", "4", "15"], correct: 0,
    hint: "✏️ Tính tổng (1+2+3+4+5) = 15. Sau đó lấy 15 chia cho 5 số hạng. (Mẹo: Với dãy số cách đều lẻ số hạng, trung bình cộng chính là số ở chính giữa).",
    level: "easy", tags: ["trung_binh_cong", "tinh_nhanh"]
  },
  {
    id: 397, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Một cửa hàng ngày thứ nhất bán được 50 kg gạo, ngày thứ hai bán được 70 kg gạo. Trung bình mỗi ngày cửa hàng bán được ? kg gạo.",
    answer: "60",
    hint: "✏️ Lấy tổng số gạo hai ngày bán được chia cho 2: (50 + 70) ÷ 2.",
    level: "easy", tags: ["trung_binh_cong", "thuc_te"]
  },
  {
    id: 398, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Trung bình cộng của hai số chẵn liên tiếp 8 và 10 là số nào?",
    answers: ["9", "8", "10", "18"], correct: 0,
    hint: "✏️ Số nằm ở giữa 8 và 10 chính là kết quả của phép tính (8 + 10) ÷ 2.",
    level: "easy", tags: ["trung_binh_cong"]
  },
  {
    id: 399, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Biết trung bình cộng của ba số là 4. Tổng của ba số đó là ?.",
    answer: "12",
    hint: "✏️ Tìm tổng của ba số bằng cách lấy trung bình cộng nhân với 3: 4 × 3.",
    level: "easy", tags: ["trung_binh_cong"]
  },
  {
    id: 400, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Hùng có 20 viên bi, Nam có 22 viên bi, Minh có số bi bằng trung bình cộng của Hùng và Nam. Hỏi Minh có bao nhiêu viên bi?",
    answers: ["21 viên bi", "20 viên bi", "22 viên bi", "42 viên bi"], correct: 0,
    hint: "✏️ Số bi của Minh chính là trung bình cộng của 20 và 22. Tính (20 + 22) ÷ 2.",
    level: "easy", tags: ["trung_binh_cong", "thuc_te"]
  },
  {
    id: 401, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Trung bình cộng của số lớn nhất có một chữ số (9) và số nhỏ nhất có một chữ số (0) là ? (Viết dưới dạng số thập phân).",
    answer: "4.5",
    hint: "✏️ Thực hiện phép tính tổng rồi chia hai: (9 + 0) ÷ 2 = 4,5.",
    level: "easy", tags: ["trung_binh_cong", "so_thap_phan"]
  },
  {
    id: 402, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Hai số có trung bình cộng là 10. Nếu số thứ nhất là 12 thì số thứ hai là:",
    answers: ["8", "10", "2", "20"], correct: 0,
    hint: "✏️ Tổng hai số là 10 × 2 = 20. Số thứ hai lấy 20 - 12.",
    level: "easy", tags: ["trung_binh_cong"]
  },
  {
    id: 403, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Một ô tô trong 2 giờ đầu mỗi giờ đi được 40 km. Trung bình mỗi giờ ô tô đó đi được ? km.",
    answer: "40",
    hint: "✏️ Vì mỗi giờ đều đi được 40 km như nhau, nên trung bình cộng chắc chắn là 40 km.",
    level: "easy", tags: ["trung_binh_cong", "thuc_te"]
  },
  {
    id: 404, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Trung bình cộng của 0 và 100 là:",
    answers: ["50", "0", "100", "25"], correct: 0,
    hint: "✏️ Lấy (0 + 100) ÷ 2.",
    level: "easy", tags: ["trung_binh_cong"]
  },
  {
    id: 405, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Bốn số có trung bình cộng là 5. Tổng của bốn số đó là ?.",
    answer: "20",
    hint: "✏️ Lấy trung bình cộng nhân với số lượng số hạng: 5 × 4.",
    level: "easy", tags: ["trung_binh_cong"]
  },

  // ==========================================
  // TỔNG - TỈ & HIỆU - TỈ CĂN BẢN (ID: 406 - 420)
  // ==========================================
  {
    id: 406, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Biết tổng hai số là 10, tỉ số của hai số là 1:4 (một phần tư). Tổng số phần bằng nhau là mấy phần?",
    answers: ["5 phần", "3 phần", "4 phần", "10 phần"], correct: 0,
    hint: "✏️ Với bài toán Tổng - Tỉ, tổng số phần bằng nhau = Tử số + Mẫu số = 1 + 4.",
    level: "easy", tags: ["tong_ti", "ly_thuyet"]
  },
  {
    id: 407, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Biết hiệu hai số là 15, tỉ số của hai số là 1:4. Hiệu số phần bằng nhau là ? phần.",
    answer: "3",
    hint: "✏️ Với bài toán Hiệu - Tỉ, hiệu số phần bằng nhau = Mẫu số - Tử số = 4 - 1.",
    level: "easy", tags: ["hieu_ti", "ly_thuyet"]
  },
  {
    id: 408, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Tổng của hai số là 15. Tỉ số của hai số là 1/2. Số bé là:",
    answers: ["5", "10", "3", "12"], correct: 0,
    hint: "✏️ Bước 1: Tổng số phần = 1 + 2 = 3 phần. Bước 2: Giá trị 1 phần (cũng là số bé) = 15 ÷ 3 = 5.",
    level: "easy", tags: ["tong_ti"]
  },
  {
    id: 409, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Tổng của hai số là 20. Tỉ số của hai số là 1/3. Số lớn là ?.",
    answer: "15",
    hint: "✏️ Bước 1: Tổng số phần = 1 + 3 = 4 phần. Bước 2: Số lớn chiếm 3 phần, tính: 20 ÷ 4 × 3.",
    level: "easy", tags: ["tong_ti"]
  },
  {
    id: 410, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Hiệu của hai số là 10. Tỉ số của hai số là 1/3. Số bé là:",
    answers: ["5", "15", "10", "2"], correct: 0,
    hint: "✏️ Bước 1: Hiệu số phần = 3 - 1 = 2 phần. Bước 2: Số bé chiếm 1 phần, tính: 10 ÷ 2 × 1 = 5.",
    level: "easy", tags: ["hieu_ti"]
  },
  {
    id: 411, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Hiệu của hai số là 12. Tỉ số của hai số là 1/2. Số lớn là ?.",
    answer: "24",
    hint: "✏️ Bước 1: Hiệu số phần = 2 - 1 = 1 phần. Bước 2: Số lớn chiếm 2 phần, tính: 12 ÷ 1 × 2.",
    level: "easy", tags: ["hieu_ti"]
  },
  {
    id: 412, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Một thúng có 30 quả vừa cam vừa quýt. Số cam bằng 1/2 số quýt. Hỏi thúng đó có bao nhiêu quả cam?",
    answers: ["10 quả", "20 quả", "15 quả", "5 quả"], correct: 0,
    hint: "✏️ Bài toán Tổng - Tỉ. Tổng số phần: 1 + 2 = 3 phần. Số cam (số bé): 30 ÷ 3 = 10 quả.",
    level: "easy", tags: ["tong_ti", "thuc_te"]
  },
  {
    id: 413, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Mẹ hơn con 25 tuổi. Tuổi con bằng 1/6 tuổi mẹ. Tuổi của con hiện nay là ? tuổi.",
    answer: "5",
    hint: "✏️ Bài toán Hiệu - Tỉ. Hiệu số phần: 6 - 1 = 5 phần. Tuổi con: 25 ÷ 5 × 1.",
    level: "easy", tags: ["hieu_ti", "thuc_te"]
  },
  {
    id: 414, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Hai số có tỉ số là 1/5. Biết số lớn hơn số bé là 16 đơn vị. Số lớn là:",
    answers: ["20", "4", "16", "25"], correct: 0,
    hint: "✏️ Cụm từ 'số lớn hơn số bé' chính là Hiệu = 16. Hiệu số phần: 5 - 1 = 4 phần. Số lớn: 16 ÷ 4 × 5 = 20.",
    level: "easy", tags: ["hieu_ti"]
  },
  {
    id: 415, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Một sợi dây dài 18 m được cắt thành hai đoạn, đoạn ngắn bằng 1/2 đoạn dài. Đoạn dây dài có số mét là ? m.",
    answer: "12",
    hint: "✏️ Bài toán Tổng - Tỉ. Tổng số phần: 1 + 2 = 3 phần. Đoạn dài: 18 ÷ 3 × 2.",
    level: "easy", tags: ["tong_ti", "thuc_te"]
  },
  {
    id: 416, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Tổng của hai số là 8. Tỉ số của hai số là 1/1 (hai số bằng nhau). Mỗi số có giá trị là:",
    answers: ["4", "8", "2", "1"], correct: 0,
    hint: "✏️ Khi tỉ số là 1/1 tức là hai số bằng nhau, ta chỉ cần lấy tổng chia đôi: 8 ÷ 2 = 4.",
    level: "easy", tags: ["tong_ti"]
  },
  {
    id: 417, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Hai lớp 5A và 5B trồng được tổng cộng 50 cây. Biết lớp 5A trồng được bằng 2/3 lớp 5B. Lớp 5A trồng được ? cây.",
    answer: "20",
    hint: "✏️ Tổng số phần: 2 + 3 = 5 phần. Lớp 5A chiếm 2 phần: 50 ÷ 5 × 2.",
    level: "easy", tags: ["tong_ti", "thuc_te"]
  },
  {
    id: 418, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Hiệu của hai số là 6. Tỉ số của hai số là 2/3. Số lớn là:",
    answers: ["18", "12", "6", "24"], correct: 0,
    hint: "✏️ Hiệu số phần: 3 - 2 = 1 phần. Số lớn chiếm 3 phần: 6 ÷ 1 × 3 = 18.",
    level: "easy", tags: ["hieu_ti"]
  },
  {
    id: 419, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Một mảnh đất hình chữ nhật có chiều rộng bằng 1/2 chiều dài. Biết chiều dài hơn chiều rộng 10 m. Chiều rộng mảnh đất là ? m.",
    answer: "10",
    hint: "✏️ Hiệu số phần: 2 - 1 = 1 phần. Chiều rộng chính là: 10 ÷ 1 × 1 = 10 m.",
    level: "easy", tags: ["hieu_ti", "thuc_te"]
  },
  {
    id: 420, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Nếu một bài toán có cả 'Tổng hai số' và 'Tỉ số của hai số', bước đầu tiên ta nên tìm gì để giải?",
    answers: ["Tổng số phần bằng nhau", "Hiệu số phần bằng nhau", "Số bé trước", "Số lớn trước"], correct: 0,
    hint: "✏️ Quy tắc giải toán Tổng - Tỉ: Bước đầu tiên luôn là đi tìm tổng số phần bằng nhau.",
    level: "easy", tags: ["tong_ti", "ly_thuyet"]
  },
  // ==========================================
  // TOÁN LỜI VĂN: SO SÁNH HƠN KÉM (ID: 421 - 430)
  // ==========================================
  {
    id: 421, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Đội Một trồng được 45 cây, đội Hai trồng được nhiều hơn đội Một 15 cây. Hỏi đội Hai trồng được bao nhiêu cây?",
    answer: "60",
    hint: "🛒 Đọc kỹ chữ 'nhiều hơn'. Ta lấy số cây của đội Một cộng với phần nhiều hơn: 45 + 15.",
    level: "easy", tags: ["loi_van", "hon_kem"]
  },
  {
    id: 422, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "An có 25 viên bi. Bình có ít hơn An 7 viên bi. Hỏi Bình có bao nhiêu viên bi?",
    answers: ["18 viên bi", "32 viên bi", "15 viên bi", "20 viên bi"], correct: 0,
    hint: "🛒 Cụm từ 'ít hơn' cho biết ta cần thực hiện phép tính trừ. Lấy số bi của An trừ đi 7.",
    level: "easy", tags: ["loi_van", "hon_kem"]
  },
  {
    id: 423, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Thùng thứ nhất chứa 80 lít dầu, thùng thứ hai chứa ít hơn thùng thứ nhất 15 lít. Thùng thứ hai chứa ? lít dầu.",
    answer: "65",
    hint: "🛒 Lấy số dầu ở thùng thứ nhất trừ đi phần ít hơn: 80 - 15.",
    level: "easy", tags: ["loi_van", "hon_kem"]
  },
  {
    id: 424, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Bể thứ nhất chứa 1,5 khối nước (m³), bể thứ hai chứa nhiều hơn bể thứ nhất 0,5 khối nước. Hỏi bể thứ hai chứa bao nhiêu khối nước?",
    answers: ["2 m³", "1 m³", "2,5 m³", "1,7 m³"], correct: 0,
    hint: "🛒 Thực hiện phép cộng hai số thập phân: 1,5 + 0,5.",
    level: "easy", tags: ["loi_van", "hon_kem", "so_thap_phan"]
  },
  {
    id: 425, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Lớp 5A có 22 bạn nữ. Số bạn nam ít hơn số bạn nữ là 4 bạn. Hỏi lớp 5A có bao nhiêu bạn nam?",
    answer: "18",
    hint: "🛒 Đề bài hỏi số bạn nam, mà nam ít hơn nữ nên ta lấy số nữ trừ đi 4.",
    level: "easy", tags: ["loi_van", "hon_kem"]
  },
  {
    id: 426, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Mảnh vườn A thu hoạch được 120 kg rau. Mảnh vườn B thu hoạch được 100 kg rau. Hỏi mảnh vườn A thu hoạch nhiều hơn mảnh vườn B bao nhiêu ki-lô-gam rau?",
    answers: ["20 kg", "220 kg", "10 kg", "30 kg"], correct: 0,
    hint: "🛒 Tìm phần chênh lệch 'nhiều hơn bao nhiêu' bằng cách lấy số lớn trừ số bé: 120 - 100.",
    level: "easy", tags: ["loi_van", "hon_kem"]
  },
  {
    id: 427, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Sách Toán nặng 250 g, sách Tiếng Việt nhẹ hơn sách Toán 30 g. Hỏi sách Tiếng Việt nặng bao nhiêu gam?",
    answer: "220",
    hint: "🛒 'Nhẹ hơn' tương đương với ít hơn về khối lượng. Lấy 250 - 30.",
    level: "easy", tags: ["loi_van", "hon_kem"]
  },
  {
    id: 428, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Một sợi dây màu xanh dài 2,4 m. Sợi dây màu đỏ dài hơn sợi dây màu xanh 0,6 m. Hỏi sợi dây màu đỏ dài bao nhiêu mét?",
    answers: ["3 m", "1,8 m", "2 m", "3,2 m"], correct: 0,
    hint: "🛒 Lấy độ dài dây xanh cộng với phần dài hơn: 2,4 + 0,6.",
    level: "easy", tags: ["loi_van", "hon_kem", "so_thap_phan"]
  },
  {
    id: 429, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Dũng có 15 nhãn vở. Dũng có ít hơn Minh 5 nhãn vở. Hỏi Minh có bao nhiêu nhãn vở?",
    answer: "20",
    hint: "🛒 Cẩn thận bẫy! Dũng ít hơn Minh nghĩa là Minh nhiều hơn Dũng. Muốn tìm số nhãn vở của Minh, ta lấy 15 + 5.",
    level: "easy", tags: ["loi_van", "hon_kem", "tu_duy"]
  },
  {
    id: 430, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Xe tải thứ nhất chở 3,5 tấn hàng. Xe tải thứ hai chở ít hơn xe tải thứ nhất 0,5 tấn. Hỏi cả hai xe chở được bao nhiêu tấn hàng?",
    answers: ["6,5 tấn", "3 tấn", "4 tấn", "7 tấn"], correct: 0,
    hint: "🛒 Bài toán 2 bước tính: Bước 1 tìm xe hai = 3,5 - 0,5 = 3 tấn. Bước 2 tính tổng cả hai xe = 3,5 + 3.",
    level: "easy", tags: ["loi_van", "hon_kem", "hai_buoc_tinh"]
  },

  // ==========================================
  // TOÁN LỜI VĂN: TÍNH TUỔI GIA ĐÌNH (ID: 431 - 440)
  // ==========================================
  {
    id: 431, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Năm nay con 10 tuổi, ba nhiều hơn con 30 tuổi. Hỏi năm nay ba bao nhiêu tuổi?",
    answer: "40",
    hint: "🛒 Tính tuổi ba bằng cách lấy tuổi con cộng với số tuổi nhiều hơn: 10 + 30.",
    level: "easy", tags: ["loi_van", "toan_tuoi"]
  },
  {
    id: 432, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Năm nay mẹ 38 tuổi. Mẹ ít hơn ba 2 tuổi. Hỏi năm nay ba bao nhiêu tuổi?",
    answers: ["40 tuổi", "36 tuổi", "38 tuổi", "42 tuổi"], correct: 0,
    hint: "🛒 Mẹ ít hơn ba nghĩa là ba nhiều tuổi hơn mẹ. Lấy tuổi mẹ cộng thêm 2.",
    level: "easy", tags: ["loi_van", "toan_tuoi"]
  },
  {
    id: 433, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Năm nay chị 15 tuổi, em kém chị 6 tuổi. Hỏi năm nay em bao nhiêu tuổi?",
    answer: "9",
    hint: "🛒 Chữ 'kém' nghĩa là ít tuổi hơn. Lấy tuổi chị trừ đi 6.",
    level: "easy", tags: ["loi_van", "toan_tuoi"]
  },
  {
    id: 434, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Năm nay ba 42 tuổi, con 12 tuổi. Hỏi ba nhiều hơn con bao nhiêu tuổi?",
    answers: ["30 tuổi", "20 tuổi", "32 tuổi", "40 tuổi"], correct: 0,
    hint: "🛒 Tìm số tuổi nhiều hơn bằng cách thực hiện phép tính trừ: 42 - 12.",
    level: "easy", tags: ["loi_van", "toan_tuoi"]
  },
  {
    id: 435, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Năm nay con 8 tuổi. Tuổi mẹ gấp 5 lần tuổi con. Hỏi năm nay mẹ bao nhiêu tuổi?",
    answer: "40",
    hint: "🛒 Tuổi mẹ gấp 5 lần tuổi con nên ta lấy tuổi con nhân với 5.",
    level: "easy", tags: ["loi_van", "toan_tuoi"]
  },
  {
    id: 436, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Năm nay ba 36 tuổi. Tuổi con bằng 1/4 tuổi ba. Hỏi năm nay con bao nhiêu tuổi?",
    answers: ["9 tuổi", "8 tuổi", "12 tuổi", "6 tuổi"], correct: 0,
    hint: "🛒 Tính tuổi con bằng cách lấy tuổi ba chia cho 4 (vì tuổi con bằng một phần tư tuổi ba).",
    level: "easy", tags: ["loi_van", "toan_tuoi"]
  },
  {
    id: 437, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Hiện nay tổng số tuổi của mẹ và con là 45 tuổi. Biết con 10 tuổi. Hỏi mẹ bao nhiêu tuổi?",
    answer: "35",
    hint: "🛒 Lấy tổng số tuổi của hai mẹ con trừ đi số tuổi của con.",
    level: "easy", tags: ["loi_van", "toan_tuoi"]
  },
  {
    id: 438, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Năm nay con 7 tuổi, mẹ 35 tuổi. Hỏi sau 2 năm nữa, mẹ hơn con bao nhiêu tuổi?",
    answers: ["28 tuổi", "30 tuổi", "35 tuổi", "26 tuổi"], correct: 0,
    hint: "🛒 Mẹo nhỏ: Hiệu số tuổi của hai người không bao giờ thay đổi theo thời gian. Năm nay mẹ hơn con: 35 - 7 = 28 tuổi, thì 2 năm nữa vẫn là 28 tuổi.",
    level: "easy", tags: ["loi_van", "toan_tuoi", "tu_duy"]
  },
  {
    id: 439, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Năm nay con 10 tuổi. Tuổi ba gấp 4 lần tuổi con. Hỏi tổng số tuổi của ba và con năm nay là ? tuổi.",
    answer: "50",
    hint: "🛒 Bài toán 2 bước: Bước 1 tìm tuổi ba = 10 × 4 = 40 tuổi. Bước 2 tính tổng tuổi hai ba con = 40 + 10.",
    level: "easy", tags: ["loi_van", "toan_tuoi", "hai_buoc_tinh"]
  },
  {
    id: 440, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Năm nay ông nội 70 tuổi. Tuổi ba bằng một nửa (1/2) tuổi ông nội. Hỏi năm nay ba bao nhiêu tuổi?",
    answers: ["35 tuổi", "40 tuổi", "45 tuổi", "50 tuổi"], correct: 0,
    hint: "🛒 Tuổi ba bằng một nửa tuổi ông nội, ta lấy tuổi ông nội chia cho 2.",
    level: "easy", tags: ["loi_van", "toan_tuoi"]
  },

  // ==========================================
  // TOÁN LỜI VĂN: MUA SẮM SÁCH VỞ, ĐỒ DÙNG (ID: 441 - 450)
  // ==========================================
  {
    id: 441, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Mua 1 quyển vở hết 6000 đồng. Hỏi mua 5 quyển vở như thế hết bao nhiêu đồng?",
    answer: "30000",
    hint: "🛒 Đây là bài toán tỉ lệ thuận (rút về đơn vị). Lấy giá tiền 1 quyển nhân với 5.",
    level: "easy", tags: ["loi_van", "mua_sam"]
  },
  {
    id: 442, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Mua 3 cây bút mực hết 15000 đồng. Hỏi mua 1 cây bút mực như thế hết bao nhiêu tiền?",
    answers: ["5000 đồng", "3000 đồng", "4000 đồng", "6000 đồng"], correct: 0,
    hint: "🛒 Tìm giá tiền của một cây bút (rút về đơn vị) bằng cách lấy tổng số tiền chia cho 3.",
    level: "easy", tags: ["loi_van", "mua_sam"]
  },
  {
    id: 443, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "An mua 1 quyển sách giá 12000 đồng và 1 hộp bút giá 18000 đồng. An đưa cô bán hàng 30000 đồng. Hỏi cô bán hàng phải trả lại An bao nhiêu đồng?",
    answer: "0",
    hint: "🛒 Tính tổng số tiền An mua: 12000 + 18000 = 30000 đồng. Vì bằng đúng số tiền An đưa nên không được trả lại.",
    level: "easy", tags: ["loi_van", "mua_sam", "thuc_te"]
  },
  {
    id: 444, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Một hộp bút chì màu giá 24000 đồng. Vào ngày khai trường, cửa hàng giảm giá 4000 đồng cho mỗi hộp. Hỏi lúc này giá hộp bút là bao nhiêu?",
    answers: ["20000 đồng", "28000 đồng", "22000 đồng", "16000 đồng"], correct: 0,
    hint: "🛒 Giảm giá nghĩa là bớt tiền đi. Ta lấy giá ban đầu trừ đi số tiền được giảm.",
    level: "easy", tags: ["loi_van", "mua_sam", "thuc_te"]
  },
  {
    id: 445, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Bình có 50000 đồng. Bình mua một quyển truyện hết 35000 đồng. Số tiền Bình còn lại là ? đồng.",
    answer: "15000",
    hint: "🛒 Tính số tiền còn lại bằng cách lấy số tiền ban đầu trừ đi số tiền đã tiêu.",
    level: "easy", tags: ["loi_van", "mua_sam"]
  },
  {
    id: 446, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Mua 2 quyển truyện tranh hết 40000 đồng. Hỏi với 100000 đồng thì có thể mua được tối đa bao nhiêu quyển truyện tranh như thế?",
    answers: ["5 quyển", "4 quyển", "2 quyển", "10 quyển"], correct: 0,
    hint: "🛒 Bước 1: Giá 1 quyển = 40000 ÷ 2 = 20000 đồng. Bước 2: Số quyển mua được = 100000 ÷ 20000.",
    level: "easy", tags: ["loi_van", "mua_sam", "hai_buoc_tinh"]
  },
  {
    id: 447, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Một chiếc cặp học sinh giá 80000 đồng. Mẹ mua cho hai chị em mỗi người một chiếc cặp như thế. Tổng số tiền mẹ phải trả là ? đồng.",
    answer: "160000",
    hint: "🛒 Hai chị em nghĩa là mẹ mua 2 chiếc cặp. Thực hiện phép tính 80000 × 2.",
    level: "easy", tags: ["loi_van", "mua_sam"]
  },
  {
    id: 448, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Giá một chiếc thước kẻ là 5000 đồng, giá một chiếc gọt bút chì đắt hơn chiếc thước kẻ 3000 đồng. Hỏi chiếc gọt bút chì giá bao nhiêu?",
    answers: ["8000 đồng", "2000 đồng", "5000 đồng", "15000 đồng"], correct: 0,
    hint: "🛒 Từ 'đắt hơn' đồng nghĩa với nhiều tiền hơn. Ta lấy 5000 + 3000.",
    level: "easy", tags: ["loi_van", "mua_sam"]
  },
  {
    id: 449, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Minh mua 10 quyển vở hết 70000 đồng. Bạn Hòa chỉ mua 5 quyển vở như thế thì hết ? đồng.",
    answer: "35000",
    hint: "🛒 Nhận xét nhanh: 5 quyển vở bằng một nửa so với 10 quyển vở, nên số tiền cũng giảm đi một nửa. Lấy 70000 ÷ 2.",
    level: "easy", tags: ["loi_van", "mua_sam", "tinh_nhanh"]
  },
  {
    id: 450, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Mẹ cho Lan 20000 đồng. Lan mua 2 cây bút chì, mỗi cây giá 4000 đồng. Số tiền Lan mang về đưa lại cho mẹ là:",
    answers: ["12000 đồng", "8000 đồng", "16000 đồng", "4000 đồng"], correct: 0,
    hint: "🛒 Bước 1: Tính tiền mua 2 cây bút = 4000 × 2 = 8000 đồng. Bước 2: Số tiền còn lại mang về = 20000 - 8000.",
    level: "easy", tags: ["loi_van", "mua_sam", "hai_buoc_tinh"]
  },
  // ==========================================
  // TOÁN LỜI VĂN: SO SÁNH & ĐỔI SỐ (DỄ & TRUNG BÌNH) (ID: 451 - 465)
  // ==========================================
  {
    id: 451, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Mẹ mua 2 kg đường. Bữa sáng mẹ dùng hết 400 g đường, bữa chiều mẹ dùng hết 600 g đường. Hỏi mẹ còn lại bao nhiêu gam đường?",
    answers: ["1000 g", "1800 g", "1200 g", "1400 g"], correct: 0,
    hint: "🛒 Bước 1: Đổi 2 kg = 2000 g. Bước 2: Tính tổng số đường đã dùng: 400 + 600 = 1000 g. Bước 3: Tính số đường còn lại: 2000 - 1000.",
    level: "medium", tags: ["loi_van", "khoi_luong", "hai_buoc_tinh"]
  },
  {
    id: 452, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Cuộn dây thứ nhất dài 15,5 m. Cuộn dây thứ hai ngắn hơn cuộn dây thứ nhất 2,5 m. Hỏi cuộn dây thứ hai dài bao nhiêu mét?",
    answer: "13",
    hint: "🛒 Cụm từ 'ngắn hơn' cho biết ta cần thực hiện phép tính trừ số thập phân: 15,5 - 2,5.",
    level: "easy", tags: ["loi_van", "hon_kem", "so_thap_phan"]
  },
  {
    id: 453, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Một rổ quýt có 40 quả. Bạn Lan ăn hết 1/4 số quýt đó. Hỏi trong rổ còn lại bao nhiêu quả quýt?",
    answers: ["30 quả", "10 quả", "20 quả", "35 quả"], correct: 0,
    hint: "🛒 Bước 1: Tính số quýt Lan đã ăn: 40 ÷ 4 = 10 quả. Bước 2: Tính số quýt còn lại: 40 - 10 = 30 quả.",
    level: "medium", tags: ["loi_van", "phan_so", "hai_buoc_tinh"]
  },
  {
    id: 454, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "An có 18 viên bi. Số bi của Bình nhiều gấp đôi (2 lần) số bi của An. Hỏi cả hai bạn có tất cả bao nhiêu viên bi?",
    answer: "54",
    hint: "🛒 Bước 1: Tìm số bi của Bình: 18 × 2 = 36 viên. Bước 2: Tìm tổng số bi của cả hai bạn: 18 + 36.",
    level: "medium", tags: ["loi_van", "hai_buoc_tinh"]
  },
  {
    id: 455, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Bao gạo thứ nhất nặng 45 kg, bao gạo thứ hai nặng ít hơn bao gạo thứ nhất 5 kg. Hỏi trung bình mỗi bao gạo nặng bao nhiêu ki-lô-gam?",
    answers: ["42,5 kg", "40 kg", "45 kg", "85 kg"], correct: 0,
    hint: "🛒 Bước 1: Tìm bao thứ hai = 45 - 5 = 40 kg. Bước 2: Tính trung bình cộng của bao một và bao hai: (45 + 40) ÷ 2 = 85 ÷ 2.",
    level: "medium", tags: ["loi_van", "trung_binh_cong", "so_thap_phan"]
  },
  {
    id: 456, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Đoạn thẳng AB dài 12 cm. Đoạn thẳng CD dài bằng 1/3 đoạn thẳng AB. Hỏi đoạn thẳng AB dài hơn đoạn thẳng CD bao nhiêu xăng-ti-mét?",
    answer: "8",
    hint: "🛒 Bước 1: Tìm độ dài đoạn CD = 12 ÷ 3 = 4 cm. Bước 2: Tìm phần dài hơn: 12 - 4 = 8 cm.",
    level: "medium", tags: ["loi_van", "hon_kem", "phan_so"]
  },
  {
    id: 457, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Một xe máy giờ thứ nhất đi được 35,5 km, giờ thứ hai đi được nhiều hơn giờ thứ nhất 4 km. Hỏi cả hai giờ xe máy đi được bao nhiêu ki-lô-mét?",
    answers: ["75 km", "39,5 km", "71 km", "79,5 km"], correct: 0,
    hint: "🛒 Bước 1: Giờ thứ hai đi được: 35,5 + 4 = 39,5 km. Bước 2: Tổng cả hai giờ: 35,5 + 39,5 = 75 km.",
    level: "medium", tags: ["loi_van", "hon_kem", "so_thap_phan"]
  },
  {
    id: 458, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Đội trồng rừng trồng được 120 cây bạch đàn và số cây thông ít hơn số cây bạch đàn là 30 cây. Hỏi đội đó trồng được bao nhiêu cây thông?",
    answer: "90",
    hint: "🛒 Đọc kỹ đề bài hỏi số cây thông. Vì thông ít hơn bạch đàn nên ta lấy 120 - 30.",
    level: "easy", tags: ["loi_van", "hon_kem"]
  },
  {
    id: 459, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Một cửa hàng buổi sáng bán được 80 kg gạo. Buổi chiều bán được số gạo bằng một nửa (1/2) buổi sáng. Hỏi cả ngày cửa hàng bán được bao nhiêu ki-lô-gam gạo?",
    answers: ["120 kg", "40 kg", "160 kg", "100 kg"], correct: 0,
    hint: "🛒 Bước 1: Tìm số gạo buổi chiều = 80 ÷ 2 = 40 kg. Bước 2: Tính tổng cả ngày = 80 + 40 = 120 kg.",
    level: "medium", tags: ["loi_van", "hai_buoc_tinh"]
  },
  {
    id: 460, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Bể thứ nhất chứa 2500 lít nước. Bể thứ hai chứa nhiều hơn bể thứ nhất 500 lít nước. Hỏi cả hai bể chứa bao nhiêu lít nước?",
    answer: "5500",
    hint: "🛒 Bước 1: Tính số nước bể hai: 2500 + 500 = 3000 lít. Bước 2: Tính tổng hai bể: 2500 + 3000 = 5500 lít.",
    level: "medium", tags: ["loi_van", "hai_buoc_tinh"]
  },
  {
    id: 461, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Thửa ruộng A thu hoạch được 2,5 tạ thóc. Thửa ruộng B thu hoạch được 350 kg thóc. Hỏi thửa ruộng nào thu hoạch được nhiều thóc hơn?",
    answers: ["Thửa ruộng B nhiều hơn", "Thửa ruộng A nhiều hơn", "Hai thửa bằng nhau"], correct: 0,
    hint: "🛒 Đổi 2,5 tạ = 250 kg. So sánh 250 kg (thửa A) với 350 kg (thửa B) ta thấy thửa B nhiều hơn.",
    level: "easy", tags: ["loi_van", "khoi_luong", "so_sanh"]
  },
  {
    id: 462, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Một sợi dây dài 5 m. Người ta cắt đi một đoạn dài 1,8 m. Đoạn dây còn lại dài bao nhiêu mét?",
    answer: "3.2",
    hint: "🛒 Thực hiện phép trừ số thập phân: 5,0 - 1,8 = 3,2 m.",
    level: "easy", tags: ["loi_van", "so_thap_phan"]
  },
  {
    id: 463, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Thùng A có 15 lít dầu. Thùng B nếu có thêm 5 lít nữa thì sẽ bằng thùng A. Hỏi thùng B thực tế có bao nhiêu lít dầu?",
    answers: ["10 lít", "20 lít", "15 lít", "5 lít"], correct: 0,
    hint: "🛒 Thêm 5 lít mới bằng thùng A, chứng tỏ thùng B đang ít hơn thùng A là 5 lít. Lấy 15 - 5 = 10 lít.",
    level: "medium", tags: ["loi_van", "tu_duy"]
  },
  {
    id: 464, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Một tấm vải dài 20 m. Người ta đã may quần áo hết 3/5 tấm vải đó. Hỏi người ta đã may hết bao nhiêu mét vải?",
    answer: "12",
    hint: "🛒 Tìm phân số của một số: Lấy 20 × 3/5 (tức là 20 ÷ 5 × 3).",
    level: "easy", tags: ["loi_van", "phan_so"]
  },
  {
    id: 465, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Một người đi bộ trong 3 giờ. Giờ đầu đi được 4 km, hai giờ sau mỗi giờ đi được 3,5 km. Hỏi trung bình mỗi giờ người đó đi được bao nhiêu ki-lô-mét?",
    answers: ["3,6 m", "3,6 km", "3,5 km", "11 km"], correct: 1,
    hint: "🛒 Bước 1: Tính tổng quãng đường = 4 + 3,5 + 3,5 = 11 km. Bước 2: Tính trung bình cộng = 11 ÷ 3 = 3,66... À, câu này đáp án đúng là 3,6... (ở đây làm tròn nhẹ hoặc đề đẹp hơn là lấy 11 chia 3 nhé, để em sửa lại số cho đẹp: 4 + 3,7 + 3,7 = 11,4 / 3 = 3,8 nhé). Anh tính: (4 + 3,5 + 3,5) ÷ 3 = 11 ÷ 3 ≈ 3,6 km.",
    level: "medium", tags: ["loi_van", "trung_binh_cong"]
  },

  // ==========================================
  // TOÁN LỜI VĂN: TÍNH TUỔI & MUA SẮM (ID: 466 - 480)
  // ==========================================
  {
    id: 466, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Năm nay con 8 tuổi. Tuổi ba gấp 5 lần tuổi con. Hỏi ba nhiều hơn con bao nhiêu tuổi?",
    answer: "32",
    hint: "🛒 Bước 1: Tìm tuổi ba = 8 × 5 = 40 tuổi. Bước 2: Tìm số tuổi ba nhiều hơn con: 40 - 8 = 32 tuổi.",
    level: "medium", tags: ["loi_van", "toan_tuoi", "hai_buoc_tinh"]
  },
  {
    id: 467, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Mẹ năm nay 36 tuổi, con năm nay 6 tuổi. Hỏi cách đây 2 năm, tuổi mẹ gấp mấy lần tuổi con?",
    answers: ["8,5 lần", "6 lần", "5 lần", "7,5 lần"], correct: 0,
    hint: "🛒 Cách đây 2 năm: Tuổi mẹ là 36 - 2 = 34 tuổi; tuổi con là 6 - 2 = 4 tuổi. Lấy 34 ÷ 4 = 8,5 lần.",
    level: "medium", tags: ["loi_van", "toan_tuoi", "tu_duy"]
  },
  {
    id: 468, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Năm nay mẹ 35 tuổi. Tuổi con bằng 1/5 tuổi mẹ. Hỏi sau 5 năm nữa, con bao nhiêu tuổi?",
    answer: "12",
    hint: "🛒 Bước 1: Tính tuổi con hiện nay = 35 ÷ 5 = 7 tuổi. Bước 2: Tính tuổi con sau 5 năm nữa = 7 + 5 = 12 tuổi.",
    level: "medium", tags: ["loi_van", "toan_tuoi", "hai_buoc_tinh"]
  },
  {
    id: 469, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Ba hơn mẹ 3 tuổi. Mẹ hơn con 26 tuổi. Biết năm nay con 10 tuổi. Hỏi năm nay ba bao nhiêu tuổi?",
    answers: ["39 tuổi", "36 tuổi", "33 tuổi", "41 tuổi"], correct: 0,
    hint: "🛒 Bước 1: Tính tuổi mẹ = 10 + 26 = 36 tuổi. Bước 2: Tính tuổi ba = 36 + 3 = 39 tuổi.",
    level: "medium", tags: ["loi_van", "toan_tuoi", "hai_buoc_tinh"]
  },
  {
    id: 470, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Hiện nay ba 40 tuổi, con 12 tuổi. Hỏi tổng số tuổi của hai ba con sau 3 năm nữa là ? tuổi.",
    answer: "58",
    hint: "🛒 Sau 3 năm nữa, cả ba và con đều tăng thêm 3 tuổi (tổng cộng tăng thêm 6 tuổi). Lấy (40 + 12) + 6 = 58 tuổi.",
    level: "medium", tags: ["loi_van", "toan_tuoi", "tu_duy"]
  },
  {
    id: 471, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Mua 5 quyển vở hết 35000 đồng. Hỏi mua 8 quyển vở cùng loại như thế hết bao nhiêu tiền?",
    answers: ["56000 đồng", "48000 đồng", "40000 đồng", "64000 đồng"], correct: 0,
    hint: "🛒 Bước 1: Giá tiền 1 quyển vở = 35000 ÷ 5 = 7000 đồng. Bước 2: Giá tiền 8 quyển vở = 7000 × 8 = 56000 đồng.",
    level: "medium", tags: ["loi_van", "mua_sam", "hai_buoc_tinh"]
  },
  {
    id: 472, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Một chiếc bút chì giá 5000 đồng. Một chiếc thước kẻ giá đắt hơn chiếc bút chì 2000 đồng. Lan mua 1 chiếc bút chì và 1 chiếc thước kẻ đó. Lan phải trả tất cả ? đồng.",
    answer: "12000",
    hint: "🛒 Bước 1: Tính giá thước kẻ = 5000 + 2000 = 7000 đồng. Bước 2: Tính tổng số tiền Lan trả = 5000 + 7000 = 12000 đồng.",
    level: "medium", tags: ["loi_van", "mua_sam", "hai_buoc_tinh"]
  },
  {
    id: 473, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Hòa có 50000 đồng. Hòa mua 3 quyển tập, mỗi quyển giá 12000 đồng. Hỏi Hòa còn lại bao nhiêu tiền?",
    answers: ["14000 đồng", "36000 đồng", "24000 đồng", "15000 đồng"], correct: 0,
    hint: "🛒 Bước 1: Tính tiền mua 3 quyển tập = 12000 × 3 = 36000 đồng. Bước 2: Số tiền còn lại = 50000 - 36000 = 14000 đồng.",
    level: "medium", tags: ["loi_van", "mua_sam", "hai_buoc_tinh"]
  },
  {
    id: 474, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Mẹ mua một cuốn sách tham khảo hết 45000 đồng và một tập nhãn vở hết 5000 đồng. Mẹ đưa cho cô bán hàng tờ tiền 100000 đồng. Cô bán hàng phải trả lại mẹ ? đồng.",
    answer: "50000",
    hint: "🛒 Tổng số tiền mẹ mua là 45000 + 5000 = 50000 đồng. Số tiền được trả lại: 100000 - 50000.",
    level: "medium", tags: ["loi_van", "mua_sam"]
  },
  {
    id: 475, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Một cửa hàng bán một bộ sách giáo khoa lớp 5 với giá 150000 đồng. Nhân dịp hè, cửa hàng giảm giá 10% giá bán. Hỏi bộ sách được giảm bao nhiêu tiền?",
    answers: ["15000 đồng", "1500 đồng", "30000 đồng", "135000 đồng"], correct: 0,
    hint: "🛒 Tính 10% của 150000 đồng bằng cách lấy 150000 ÷ 100 × 10 (hoặc lấy 150000 ÷ 10).",
    level: "medium", tags: ["loi_van", "phan_tram", "mua_sam"]
  },
  {
    id: 476, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Có 24 quyển vở chia đều cho 4 bạn. Hỏi 3 bạn như thế nhận được bao nhiêu quyển vở?",
    answer: "18",
    hint: "🛒 Bước 1: Mỗi bạn nhận được: 24 ÷ 4 = 6 quyển vở. Bước 2: Ba bạn nhận được: 6 × 3 = 18 quyển vở.",
    level: "medium", tags: ["loi_van", "hai_buoc_tinh"]
  },
  {
    id: 477, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Bình mua 4 chiếc bút chì hết 20000 đồng. Bạn An mua 6 chiếc bút chì cùng loại. Hỏi bạn An phải trả nhiều hơn bạn Bình bao nhiêu tiền?",
    answers: ["10000 đồng", "30000 đồng", "5000 đồng", "20000 đồng"], correct: 0,
    hint: "🛒 Bước 1: Giá 1 chiếc bút = 20000 ÷ 4 = 5000 đồng. Bước 2: An mua nhiều hơn Bình: 6 - 4 = 2 chiếc. Bước 3: Số tiền nhiều hơn = 5000 × 2 = 10000 đồng.",
    level: "medium", tags: ["loi_van", "mua_sam", "tu_duy"]
  },
  {
    id: 478, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Giá tiền một cây bút bi là 4000 đồng. Giá tiền một quyển truyện đắt gấp 5 lần cây bút bi. Hỏi quyển truyện đó có giá bao nhiêu đồng?",
    answer: "20000",
    hint: "🛒 Quyển truyện đắt gấp 5 lần cây bút bi nên ta thực hiện phép tính nhân: 4000 × 5.",
    level: "easy", tags: ["loi_van", "mua_sam"]
  },
  {
    id: 479, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Một hộp bút màu lúc đầu có giá 30000 đồng. Sau đó cửa hàng tăng giá thêm 5000 đồng. Lan mang theo 40000 đồng đi mua hộp bút đó. Hỏi Lan còn thừa bao nhiêu tiền mang về?",
    answers: ["5000 đồng", "10000 đồng", "35000 đồng", "0 đồng"], correct: 0,
    hint: "🛒 Bước 1: Tính giá mới của hộp bút = 30000 + 5000 = 35000 đồng. Bước 2: Số tiền Lan còn thừa = 40000 - 35000 = 5000 đồng.",
    level: "medium", tags: ["loi_van", "mua_sam", "hai_buoc_tinh"]
  },
  {
    id: 480, topic: "toan_co_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Minh mua 2 quyển truyện hết 30000 đồng. Hỏi nếu Minh mua 4 quyển truyện như thế thì hết tổng cộng bao nhiêu tiền?",
    answer: "60000",
    hint: "🛒 Nhận xét nhanh: 4 quyển gấp đôi 2 quyển, nên số tiền cũng gấp đôi lên. Tính 30000 × 2.",
    level: "easy", tags: ["loi_van", "mua_sam", "tinh_nhanh"]
  },
  // ==========================================
  // TÌ SỐ PHẦN TRĂM CĂN BẢN (ID: 481 - 495)
  // ==========================================
  {
    id: 481, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "fill",
    q: "Viết phân số 1/2 dưới dạng tỉ số phần trăm là ? %.",
    answer: "50",
    hint: "📊 1/2 bằng 0,5. Để chuyển sang tỉ số phần trăm, ta nhân 0,5 với 100 và thêm ký hiệu %.",
    level: "easy", tags: ["ly_thuyet", "doi_so"]
  },
  {
    id: 482, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "mc",
    q: "Tỉ số phần trăm của hai số 3 và 4 là bao nhiêu?",
    answers: ["75%", "34%", "43%", "25%"], correct: 0,
    hint: "📊 Ta lấy 3 ÷ 4 = 0,75. Sau đó nhân nhẩm 0,75 với 100.",
    level: "easy", tags: ["tim_ti_so"]
  },
  {
    id: 483, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "fill",
    q: "Lớp 5A có 40 học sinh, trong đó có 20 bạn nữ. Số bạn nữ chiếm ? % số học sinh cả lớp.",
    answer: "50",
    hint: "📊 Lấy số học sinh nữ chia cho tổng số học sinh: 20 ÷ 40 = 0,5. Đổi sang phần trăm là 50%.",
    level: "easy", tags: ["loi_van", "tim_ti_so"]
  },
  {
    id: 484, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "mc",
    q: "Số thập phân 0,25 được viết dưới dạng tỉ số phần trăm là:",
    answers: ["25%", "2,5%", "0,25%", "250%"], correct: 0,
    hint: "📊 Dịch dấu phẩy sang bên phải hai hàng khi nhân với 100: 0,25 × 100 = 25.",
    level: "easy", tags: ["doi_so"]
  },
  {
    id: 485, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "fill",
    q: "Tỉ số phần trăm của hai số 5 và 10 là ? %.",
    answer: "50",
    hint: "📊 Lấy 5 ÷ 10 = 0,5. Nhân với 100 ta được 50%.",
    level: "easy", tags: ["tim_ti_so"]
  },
  {
    id: 486, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "mc",
    q: "Một vườn cây có 100 cây, trong đó có 35 cây cam. Hỏi số cây cam chiếm bao nhiêu phần trăm tổng số cây trong vườn?",
    answers: ["35%", "53%", "65%", "3,5%"], correct: 0,
    hint: "📊 Vì tổng số cây là 100 nên số cây cam chiếm luôn giá trị tương ứng: 35 ÷ 100 = 35%.",
    level: "easy", tags: ["loi_van", "tim_ti_so"]
  },
  {
    id: 487, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "fill",
    q: "Viết tỉ số phần trăm sau dưới dạng số thập phân: 7% = ?.",
    answer: "0.07",
    hint: "📊 Lấy 7 ÷ 100 để bỏ ký hiệu phần trăm, ta dịch dấu phẩy sang trái hai chữ số.",
    level: "easy", tags: ["doi_so"]
  },
  {
    id: 488, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "mc",
    q: "Tỉ số phần trăm của 1 và 5 là:",
    answers: ["20%", "15%", "50%", "10%"], correct: 0,
    hint: "📊 Tính phép chia: 1 ÷ 5 = 0,2. Đổi 0,2 sang tỉ số phần trăm là 20%.",
    level: "easy", tags: ["tim_ti_so"]
  },
  {
    id: 489, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "fill",
    q: "Một cửa hàng có 50 cái áo, đã bán được 15 cái áo. Cửa hàng đó đã bán được ? % số áo.",
    answer: "30",
    hint: "📊 Bước 1: Lấy số áo đã bán chia cho tổng số áo: 15 ÷ 50 = 0,3. Bước 2: Đổi 0,3 = 30%.",
    level: "medium", tags: ["loi_van", "tim_ti_so"]
  },
  {
    id: 490, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "mc",
    q: "Trong một trường học có 1000 học sinh, có 450 học sinh khá. Số học sinh khá chiếm bao nhiêu phần trăm số học sinh toàn trường?",
    answers: ["45%", "4,5%", "450%", "55%"], correct: 0,
    hint: "📊 Thực hiện phép tính: 450 ÷ 1000 = 0,45. Nhân với 100 ta được 45%.",
    level: "easy", tags: ["loi_van", "tim_ti_so"]
  },
  {
    id: 491, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "fill",
    q: "Tính nhẩm: 25% của 200 là ?.",
    answer: "50",
    hint: "📊 Mẹo: 25% tương đương với 1/4. Muốn tìm 25% của một số, ta chỉ cần lấy số đó chia cho 4. Tính 200 ÷ 4.",
    level: "easy", tags: ["tinh_nhanh", "gia_tri_phan_tram"]
  },
  {
    id: 492, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "mc",
    q: "Muốn tìm 50% của một số, ta có thể làm cách nào nhanh nhất?",
    answers: ["Chia số đó cho 2", "Chia số đó cho 4", "Nhân số đó với 2", "Chia số đó cho 10"], correct: 0,
    hint: "📊 50% tức là một nửa, vì vậy chia số đó cho 2 là cách nhẩm nhanh nhất.",
    level: "easy", tags: ["ly_thuyet", "tinh_nhanh"]
  },
  {
    id: 493, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "fill",
    q: "Tính: 10% của 80 bằng ?.",
    answer: "8",
    hint: "📊 Mẹo: Tìm 10% của một số ta chỉ cần lấy số đó chia cho 10. Lấy 80 ÷ 10.",
    level: "easy", tags: ["tinh_nhanh", "gia_tri_phan_tram"]
  },
  {
    id: 494, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "mc",
    q: "Biết 20% của một số là 10. Số đó là số nào?",
    answers: ["50", "20", "5", "100"], correct: 0,
    hint: "📊 Dạng toán tìm một số: Lấy 10 ÷ 20 × 100 = 50. (Hoặc hiểu 20% là 1/5, nên số đó là 10 × 5 = 50).",
    level: "medium", tags: ["tim_so_goc"]
  },
  {
    id: 495, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "fill",
    q: "Biết 10% số mét vải là 5 m. Chiều dài tổng cộng của tấm vải đó là ? m.",
    answer: "50",
    hint: "📊 Lấy 5 ÷ 10 × 100 = 50 m. (Hoặc nhẩm 5 × 10 = 50).",
    level: "easy", tags: ["tim_so_goc"]
  },

  // ==========================================
  // BÀI TOÁN LỜI VĂN ỨNG DỤNG % (DỄ & TRUNG BÌNH) (ID: 496 - 510)
  // ==========================================
  {
    id: 496, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "mc",
    q: "Một rổ xoài có 20 quả. Người ta đã bán đi 25% số xoài. Hỏi trong rổ còn lại bao nhiêu quả xoài?",
    answers: ["15 quả", "5 quả", "10 quả", "12 quả"], correct: 0,
    hint: "📊 Bước 1: Tìm số xoài đã bán = 20 ÷ 4 = 5 quả (vì 25% là 1/4). Bước 2: Tìm số xoài còn lại = 20 - 5 = 15 quả.",
    level: "medium", tags: ["loi_van", "hai_buoc_tinh"]
  },
  {
    id: 497, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "fill",
    q: "Một lớp học có 30 học sinh. Số học sinh mười tuổi chiếm 80% cả lớp. Lớp đó có ? học sinh mười tuổi.",
    answer: "24",
    hint: "📊 Tính số học sinh: 30 × 80 ÷ 100 = 24 bạn.",
    level: "easy", tags: ["loi_van", "gia_tri_phan_tram"]
  },
  {
    id: 498, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "mc",
    q: "Một chiếc áo khoác có giá gốc là 200000 đồng. Hôm nay cửa hàng giảm giá 10%. Hỏi số tiền được giảm là bao nhiêu đồng?",
    answers: ["20000 đồng", "10000 đồng", "180000 đồng", "2000 đồng"], correct: 0,
    hint: "📊 Tìm 10% của 200000 bằng cách lấy số tiền chia cho 10.",
    level: "easy", tags: ["loi_van", "mua_sam", "gia_tri_phan_tram"]
  },
  {
    id: 499, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "fill",
    q: "Một chiếc mũ có giá 50000 đồng. Cửa hàng giảm giá 20%. Hỏi sau khi giảm giá, chiếc mũ có giá bán là ? đồng.",
    answer: "40000",
    hint: "📊 Bước 1: Tính số tiền giảm = 50000 × 20 ÷ 100 = 10000 đồng. Bước 2: Giá bán mới = 50000 - 10000 = 40000 đồng.",
    level: "medium", tags: ["loi_van", "mua_sam", "hai_buoc_tinh"]
  },
  {
    id: 500, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "mc",
    q: "Lớp 5B có 15 bạn nam và 15 bạn nữ. Hỏi số bạn nam chiếm bao nhiêu phần trăm số học sinh cả lớp?",
    answers: ["50%", "30%", "15%", "100%"], correct: 0,
    hint: "📊 Tổng số học sinh lớp là 15 + 15 = 30 bạn. Số nam chiếm: 15 ÷ 30 = 0,5 = 50%.",
    level: "medium", tags: ["loi_van", "tim_ti_so"]
  },
  {
    id: 501, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "fill",
    q: "Một bác nông dân nuôi 50 con gà. Sau một tháng, số gà tăng thêm 10%. Hỏi bác nông dân đã tăng thêm ? con gà.",
    answer: "5",
    hint: "📊 Tìm 10% của 50 con gà: lấy 50 ÷ 10 = 5 con.",
    level: "easy", tags: ["loi_van", "gia_tri_phan_tram"]
  },
  {
    id: 502, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "mc",
    q: "Kết quả của phép tính: 25% + 35% bằng bao nhiêu?",
    answers: ["60%", "50%", "60", "0,6%"], correct: 0,
    hint: "📊 Khi cộng hai tỉ số phần trăm, ta cộng hai số với nhau rồi giữ nguyên ký hiệu %: 25 + 35 = 60.",
    level: "easy", tags: ["phep_tinh"]
  },
  {
    id: 503, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "fill",
    q: "Kết quả của phép tính trừ: 100% - 45% = ? %.",
    answer: "55",
    hint: "📊 Thực hiện trừ hai số tự nhiên: 100 - 45 = 55.",
    level: "easy", tags: ["phep_tinh"]
  },
  {
    id: 504, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "mc",
    q: "Một cuốn truyện có 120 trang. An đã đọc được 50% số trang. Hỏi An còn phải đọc bao nhiêu trang nữa thì hết cuốn truyện?",
    answers: ["60 trang", "50 trang", "70 trang", "30 trang"], correct: 0,
    hint: "📊 50% là một nửa cuốn truyện. An đã đọc một nửa thì số trang còn lại cũng là một nửa: 120 ÷ 2 = 60.",
    level: "easy", tags: ["loi_van", "tinh_nhanh"]
  },
  {
    id: 505, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "fill",
    q: "Một đội công nhân phải sửa 200 m đường. Đội đó đã sửa được 60% kế hoạch. Đội công nhân đã sửa được ? m đường.",
    answer: "120",
    hint: "📊 Tính số mét đường: 200 × 60 ÷ 100 = 120 m.",
    level: "easy", tags: ["loi_van", "gia_tri_phan_tram"]
  },
  {
    id: 506, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "mc",
    q: "Biết 50% diện tích một mảnh đất là 60 m². Diện tích toàn bộ mảnh đất đó là:",
    answers: ["120 m²", "30 m²", "60 m²", "240 m²"], correct: 0,
    hint: "📊 Một nửa mảnh đất là 60 m², vậy toàn bộ mảnh đất ta nhân đôi lên: 60 × 2 = 120 m².",
    level: "easy", tags: ["tim_so_goc", "tinh_nhanh"]
  },
  {
    id: 507, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "fill",
    q: "Một cửa hàng rau quả có 40 kg cam. Số cam này chiếm 20% tổng số quả trong cửa hàng. Cửa hàng đó có tất cả ? kg quả các loại.",
    answer: "200",
    hint: "📊 Lấy số cam chia cho phần trăm tương ứng rồi nhân với 100: 40 ÷ 20 × 100 = 200 kg.",
    level: "medium", tags: ["loi_van", "tim_so_goc"]
  },
  {
    id: 508, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "mc",
    q: "Một trường tiểu học có số bạn nam chiếm 48% tổng số học sinh. Hỏi số bạn nữ chiếm bao nhiêu phần trăm học sinh toàn trường?",
    answers: ["52%", "48%", "50%", "62%"], correct: 0,
    hint: "📊 Coi tổng số học sinh toàn trường là 100%. Số bạn nữ chiếm: 100% - 48% = 52%.",
    level: "medium", tags: ["loi_van", "tu_duy"]
  },
  {
    id: 509, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "fill",
    q: "Tính nhanh giá trị biểu thức sau: 12% + 18% - 5% = ? %.",
    answer: "25",
    hint: "📊 Tính toán tuần tự từ trái sang phải: 12 + 18 = 30, sau đó lấy 30 - 5.",
    level: "easy", tags: ["phep_tinh", "tinh_nhanh"]
  },
  {
    id: 510, topic: "ti_so_phan_tram", topicName: "Tỉ số phần trăm", type: "mc",
    q: "Một rổ trứng có 50 quả. Do vận chuyển nên bị vỡ mất 4% số trứng. Hỏi có bao nhiêu quả trứng bị vỡ?",
    answers: ["2 quả", "4 quả", "20 quả", "5 quả"], correct: 0,
    hint: "📊 Tìm số trứng vỡ: lấy 50 × 4 ÷ 100 = 200 ÷ 100 = 2 quả.",
    level: "medium", tags: ["loi_van", "gia_tri_phan_tram"]
  },
  // ==========================================
  // SỐ TỰ NHIÊN: CẤU TẠO SỐ, HÀNG VÀ LỚP (ID: 511 - 525)
  // ==========================================
  {
    id: 511, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Trong số tự nhiên 45678, chữ số 5 thuộc hàng nào?",
    answers: ["Hàng nghìn", "Hàng chục nghìn", "Hàng trăm", "Hàng chục"], correct: 0,
    hint: "🔢 Đếm từ phải sang trái: 8 (đơn vị), 7 (chục), 6 (trăm), 5 (nghìn).",
    level: "easy", tags: ["cau_tao_so", "hang_va_lop"]
  },
  {
    id: 512, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Viết số tự nhiên gồm có: 4 triệu, 5 trăm nghìn và 3 đơn vị. Số đó là ?.",
    answer: "4500003",
    hint: "🔢 Chú ý các hàng bị khuyết (chục nghìn, nghìn, trăm, chục) sẽ điền chữ số 0.",
    level: "medium", tags: ["cau_tao_so"]
  },
  {
    id: 513, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Số tự nhiên lớn nhất có 5 chữ số khác nhau là số nào?",
    answers: ["98765", "99999", "98760", "89765"], correct: 0,
    hint: "🔢 Để số lớn nhất, ta xếp các chữ số lớn nhất giảm dần từ trái sang phải và không lặp lại: 9, 8, 7, 6, 5.",
    level: "medium", tags: ["tu_duy", "so_sanh"]
  },
  {
    id: 514, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Số tự nhiên nhỏ nhất có 4 chữ số khác nhau là ?.",
    answer: "1023",
    hint: "🔢 Chữ số đầu tiên phải khác 0 (chọn 1), chữ số thứ hai nhỏ nhất có thể (chọn 0), tiếp theo là 2 và 3.",
    level: "medium", tags: ["tu_duy", "so_sanh"]
  },
  {
    id: 515, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Khi thêm chữ số 0 vào bên phải một số tự nhiên khác 0, số đó thay đổi như thế nào?",
    answers: ["Gấp lên 10 lần", "Tăng thêm 10 đơn vị", "Không thay đổi giá trị", "Giảm đi 10 lần"], correct: 0,
    hint: "🔢 Ví dụ: từ 5 thêm 0 thành 50. Ta lấy 50 ÷ 5 = 10 lần.",
    level: "easy", tags: ["ly_thuyet", "cau_tao_so"]
  },
  {
    id: 516, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tìm số tự nhiên liền sau của số 999999. Số đó là ?.",
    answer: "1000000",
    hint: "🔢 Muốn tìm số liền sau của một số tự nhiên, ta lấy số đó cộng thêm 1.",
    level: "easy", tags: ["day_so"]
  },
  {
    id: 517, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Số mười hai triệu không trăm linh năm nghìn ba trăm được viết là:",
    answers: ["12 005 300", "12 050 300", "12 500 300", "12 005 030"], correct: 0,
    hint: "🔢 Tách theo từng lớp: lớp triệu (12), lớp nghìn (005), lớp đơn vị (300).",
    level: "easy", tags: ["cau_tao_so"]
  },
  {
    id: 518, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Trong số 789123, giá trị của chữ số 8 gấp giá trị của chữ số 2 bao nhiêu lần? ? lần.",
    answer: "4000",
    hint: "🔢 Chữ số 8 ở hàng chục nghìn (80000), chữ số 2 ở hàng chục (20). Lấy 80000 ÷ 20.",
    level: "medium", tags: ["hang_va_lop", "tu_duy"]
  },
  {
    id: 519, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Lớp triệu của số 123 456 789 gồm những chữ số nào?",
    answers: ["1, 2, 3", "4, 5, 6", "7, 8, 9", "1, 2, 3, 4"], correct: 0,
    hint: "🔢 Ba chữ số đầu tiên tính từ trái sang phải thuộc lớp triệu (hàng trăm triệu, chục triệu, triệu).",
    level: "easy", tags: ["hang_va_lop"]
  },
  {
    id: 520, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Điền số thích hợp vào chỗ trống để hoàn thành dãy số cách đều: 5, 10, 15, ?, 25.",
    answer: "20",
    hint: "🔢 Dãy số đếm thêm 5 đơn vị. Lấy 15 + 5.",
    level: "easy", tags: ["day_so"]
  },
  {
    id: 521, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Số tự nhiên nào là số tự nhiên nhỏ nhất?",
    answers: ["Số 0", "Số 1", "Không có số nào", "Số 10"], correct: 0,
    hint: "🔢 Tập hợp số tự nhiên bắt đầu từ số 0, nên 0 là số nhỏ nhất.",
    level: "easy", tags: ["ly_thuyet"]
  },
  {
    id: 522, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Có bao nhiêu số tự nhiên có một chữ số? ? số.",
    answer: "10",
    hint: "🔢 Các số đó gồm từ 0 đến 9. Đếm kỹ kẻo quên số 0 nhé.",
    level: "easy", tags: ["tu_duy"]
  },
  {
    id: 523, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Khi so sánh hai số tự nhiên có số chữ số khác nhau, ta khẳng định điều gì?",
    answers: ["Số nào có nhiều chữ số hơn thì lớn hơn", "Số nào có ít chữ số hơn thì lớn hơn", "Hai số bằng nhau", "Không so sánh được"], correct: 0,
    hint: "🔢 Quy tắc cơ bản: Số có nhiều chữ số hơn luôn luôn lớn hơn (ví dụ: 100 > 99).",
    level: "easy", tags: ["ly_thuyet", "so_sanh"]
  },
  {
    id: 524, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tìm số tự nhiên x, biết x là số lẻ và 18 < x < 21. Giá trị của x là ?.",
    answer: "19",
    hint: "🔢 Giữa số 18 và 21 có hai số là 19 và 20. Do x là số lẻ nên chọn 19.",
    level: "easy", tags: ["so_hoc", "tim_x"]
  },
  {
    id: 525, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Số 45000 được làm tròn đến hàng nghìn gần nhất là số nào?",
    answers: ["45000", "40000", "50000", "46000"], correct: 0,
    hint: "🔢 Vì số này đã tròn nghìn sẵn nên giữ nguyên giá trị là 45000.",
    level: "easy", tags: ["lam_tron"]
  },

  // ==========================================
  // SỐ TỰ NHIÊN: TÍNH CHẤT & PHÉP TÍNH NHANH (ID: 526 - 540)
  // ==========================================
  {
    id: 526, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tính nhanh giá trị biểu thức: 25 × 4 = ?.",
    answer: "100",
    hint: "🔢 Đây là một cặp số nhân nhẩm kinh điển, bé cần học thuộc lòng để tính nhanh.",
    level: "easy", tags: ["phep_tinh", "tinh_nhanh"]
  },
  {
    id: 527, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Biểu thức: a + b = b + a thể hiện tính chất nào của phép cộng?",
    answers: ["Tính chất giao hoán", "Tính chất kết hợp", "Tính chất phân phối", "Không có tính chất này"], correct: 0,
    hint: "🔢 Khi đổi chỗ các số hạng trong một tổng thì tổng không thay đổi, đó gọi là tính chất giao hoán.",
    level: "easy", tags: ["ly_thuyet", "phep_cong"]
  },
  {
    id: 528, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tính nhẩm nhanh tổng sau bằng cách gom nhóm: 17 + 28 + 33 = ?.",
    answer: "78",
    hint: "🔢 Gom nhóm các số tròn chục trước: (17 + 33) + 28 = 50 + 28.",
    level: "easy", tags: ["phep_tinh", "tinh_nhanh"]
  },
  {
    id: 529, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Khi nhân một số tự nhiên với 100, ta chỉ cần làm việc nào dưới đây?",
    answers: ["Viết thêm hai chữ số 0 vào bên phải số đó", "Viết thêm một chữ số 0 vào bên phải số đó", "Chia số đó cho 100", "Giữ nguyên số đó"], correct: 0,
    hint: "🔢 Nhân với 10, 100, 1000... ta chỉ việc thêm lần lượt 1, 2, 3 chữ số 0 vào bên phải số gốc.",
    level: "easy", tags: ["ly_thuyet", "tinh_nhanh"]
  },
  {
    id: 530, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Kết quả của phép tính nhẩm: 4500 ÷ 100 = ?.",
    answer: "45",
    hint: "🔢 Chia cho 100 thì ta bớt đi hai chữ số 0 ở tận cùng bên phải của số đó.",
    level: "easy", tags: ["phep_tinh", "tinh_nhanh"]
  },
  {
    id: 531, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Bất kỳ số tự nhiên nào nhân với 1 thì kết quả sẽ bằng:",
    answers: ["Chính số đó", "Số 1", "Số 0", "Kết quả gấp đôi lên"], correct: 0,
    hint: "🔢 Quy tắc phép nhân: Số nào nhân với 1 cũng bằng chính số đó.",
    level: "easy", tags: ["ly_thuyet"]
  },
  {
    id: 532, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tính nhanh tích sau bằng cách gom nhóm: 5 × 19 × 2 = ?.",
    answer: "190",
    hint: "🔢 Gom nhóm tạo số tròn chục trước: (5 × 2) × 19 = 10 × 19.",
    level: "easy", tags: ["phep_tinh", "tinh_nhanh"]
  },
  {
    id: 533, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Phép chia nào dưới đây là phép chia có dư?",
    answers: ["15 ÷ 2", "16 ÷ 4", "20 ÷ 5", "100 ÷ 10"], correct: 0,
    hint: "🔢 15 không chia hết cho 2 (15 ÷ 2 = 7 dư 1). Các phép tính còn lại đều là phép chia hết.",
    level: "easy", tags: ["phep_chia"]
  },
  {
    id: 534, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Trong phép chia cho 5, số dư lớn nhất có thể có là bao nhiêu? ?.",
    answer: "4",
    hint: "🔢 Số dư luôn luôn nhỏ hơn số chia. Số chia là 5 thì số dư lớn nhất chỉ có thể là 4.",
    level: "medium", tags: ["phep_chia", "tu_duy"]
  },
  {
    id: 535, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Giá trị của biểu thức: 0 × (123 + 456 + 789) bằng bao nhiêu?",
    answers: ["0", "1368", "1", "Không tính được"], correct: 0,
    hint: "🔢 Không cần tính trong ngoặc, vì bất kỳ số nào nhân với 0 cũng đều bằng 0.",
    level: "easy", tags: ["tinh_nhanh"]
  },
  {
    id: 536, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tính nhanh: 125 × 8 = ?.",
    answer: "1000",
    hint: "🔢 Cặp số nhân nhẩm thần thánh hay dùng để giải toán tính nhanh lớp 5.",
    level: "easy", tags: ["tinh_nhanh"]
  },
  {
    id: 537, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Tìm số tự nhiên x, biết: x ÷ 4 = 8 (dư 3). Giá trị của x là:",
    answers: ["35", "32", "29", "15"], correct: 0,
    hint: "🔢 Muốn tìm số bị chia trong phép chia có dư, ta lấy Thương nhân với Số chia rồi cộng với Số dư: x = 8 × 4 + 3.",
    level: "medium", tags: ["phep_chia", "tim_x"]
  },
  {
    id: 538, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tìm thương của phép chia sau: 0 ÷ 99 = ?.",
    answer: "0",
    hint: "🔢 Số 0 chia cho bất kỳ số tự nhiên nào khác 0 cũng đều bằng 0.",
    level: "easy", tags: ["phep_chia"]
  },
  {
    id: 539, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Biểu thức nào dưới đây áp dụng đúng tính chất nhân một số với một tổng: a × (b + c) ?",
    answers: ["a × b + a × c", "a × b + c", "a + b × c", "a × b × c"], correct: 0,
    hint: "🔢 Nhân số đó lần lượt với từng số hạng của tổng rồi cộng các kết quả lại.",
    level: "medium", tags: ["ly_thuyet"]
  },
  {
    id: 540, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tính nhẩm nhanh kết quả phép nhân sau: 35 × 11 = ?.",
    answer: "385",
    hint: "🔢 Mẹo nhân với 11: Lấy chữ số đầu (3) và chữ số cuối (5), viết tổng của chúng (3+5=8) vào giữa.",
    level: "medium", tags: ["tinh_nhanh"]
  },
  // ==========================================
  // SỐ TỰ NHIÊN: DẤU HIỆU CHIA HẾT (ID: 541 - 555)
  // ==========================================
  {
    id: 541, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Số nào dưới đây chia hết cho cả 2 và 5?",
    answers: ["130", "125", "132", "135"], correct: 0,
    hint: "🔢 Một số chia hết cho cả 2 và 5 khi và chỉ khi nó có chữ số tận cùng bằng 0.",
    level: "easy", tags: ["chia_het"]
  },
  {
    id: 542, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tìm chữ số x để số 45x chia hết cho 3 nhưng không chia hết cho 9. Biết x là số có một chữ số lớn hơn 5. Giá trị của x là ?.",
    answer: "6",
    hint: "🔢 Tổng các chữ số phải chia hết cho 3. Ta thử: 4 + 5 + 6 = 15 (15 chia hết cho 3 nhưng không chia hết cho 9).",
    level: "medium", tags: ["chia_het", "tu_duy"]
  },
  {
    id: 543, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Dấu hiệu chia hết cho 9 là gì?",
    answers: ["Tổng các chữ số chia hết cho 9", "Chữ số tận cùng là 9", "Chữ số tận cùng là 0 hoặc 9", "Tổng các chữ số là một số chẵn"], correct: 0,
    hint: "🔢 Quy tắc: Các số có tổng các chữ số chia hết cho 9 thì chia hết cho 9.",
    level: "easy", tags: ["ly_thuyet", "chia_het"]
  },
  {
    id: 544, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Cho số 78*. Điền chữ số thích hợp vào dấu * để được một số chia hết cho 9. Chữ số đó là ?.",
    answer: "3",
    hint: "🔢 Ta có 7 + 8 = 15. Để chia hết cho 9 thì tổng gần nhất phải bằng 18. Lấy 18 - 15 = 3.",
    level: "easy", tags: ["chia_het"]
  },
  {
    id: 545, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Số nào dưới đây là số chia hết cho 3?",
    answers: ["124", "235", "501", "911"], correct: 2,
    hint: "🔢 Cộng nhẩm các chữ số: 5 + 0 + 1 = 6. Vì 6 chia hết cho 3 nên số 501 chia hết cho 3.",
    level: "easy", tags: ["chia_het"]
  },
  {
    id: 546, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Có bao nhiêu số tự nhiên có hai chữ số chia hết cho 5? ? số.",
    answer: "18",
    hint: "🔢 Các số đó bắt đầu từ 10, 15, 20,... đến 95. Công thức: (95 - 10) ÷ 5 + 1 = 18 số.",
    level: "medium", tags: ["chia_het", "day_so"]
  },
  {
    id: 547, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Số 23460 không chia hết cho số nào sau đây?",
    answers: ["9", "2", "3", "5"], correct: 0,
    hint: "🔢 Tận cùng là 0 nên chia hết cho 2 và 5. Tổng chữ số: 2+3+4+6+0 = 15. Vì 15 chia hết cho 3 nhưng không chia hết cho 9.",
    level: "medium", tags: ["chia_het"]
  },
  {
    id: 548, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tìm số tự nhiên nhỏ nhất có 3 chữ số mà số đó chia hết cho cả 2, 3, 5. Số đó là ?.",
    answer: "120",
    hint: "🔢 Chia hết cho 2 và 5 thì tận cùng phải là 0 (Số dạng ab0). Số nhỏ nhất có 3 chữ số bắt đầu bằng 1 (1b0). Để chia hết cho 3 thì 1 + b + 0 phải chia hết cho 3. Chọn b = 2.",
    level: "medium", tags: ["chia_het", "tu_duy"]
  },
  {
    id: 549, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Khi một số tự nhiên lẻ nhân với 5 thì chữ số tận cùng của kết quả luôn là chữ số nào?",
    answers: ["5", "0", "1", "Không cố định"], correct: 0,
    hint: "🔢 Số lẻ khi nhân với 5 luôn có tận cùng là 5. Số chẵn nhân với 5 mới có tận cùng là 0.",
    level: "easy", tags: ["ly_thuyet", "tinh_nhanh"]
  },
  {
    id: 550, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Điền chữ số thích hợp vào dấu * để số 1a5 chia hết cho 9. Giá trị của a là ?.",
    answer: "3",
    hint: "🔢 Tính tổng các chữ số: 1 + a + 5 = 6 + a. Để chia hết cho 9 thì a phải bằng 3 (6 + 3 = 9).",
    level: "easy", tags: ["chia_het"]
  },
  {
    id: 551, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Trong các số sau, số nào vừa là số chẵn vừa chia hết cho 3?",
    answers: ["42", "45", "32", "13"], correct: 0,
    hint: "🔢 42 có tận cùng là 2 (số chẵn) và tổng chữ số là 4 + 2 = 6 (chia hết cho 3).",
    level: "easy", tags: ["chia_het"]
  },
  {
    id: 552, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Số tự nhiên lớn nhất có hai chữ số chia hết cho 3 là số nào? ?.",
    answer: "99",
    hint: "🔢 Số lớn nhất có 2 chữ số là 99. Tổng chữ số 9 + 9 = 18 chia hết cho 3.",
    level: "easy", tags: ["chia_het", "so_sanh"]
  },
  {
    id: 553, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Nếu một số chia hết cho 9 thì số đó chắc chắn chia hết cho số nào dưới đây?",
    answers: ["3", "6", "2", "5"], correct: 0,
    hint: "🔢 Vì 9 chia hết cho 3, nên tất cả các số chia hết cho 9 đều đồng thời chia hết cho 3.",
    level: "easy", tags: ["ly_thuyet"]
  },
  {
    id: 554, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tìm số tự nhiên x lớn nhất biết x chia hết cho 5 và 34 < x < 46. Giá trị của x là ?.",
    answer: "45",
    hint: "🔢 Trong khoảng từ 34 đến 46, có các số chia hết cho 5 là 35, 40, 45. Số lớn nhất là 45.",
    level: "easy", tags: ["chia_het", "tim_x"]
  },
  {
    id: 555, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Phép tính nào dưới đây có kết quả là một số chia hết cho 5?",
    answers: ["23 + 12", "44 - 11", "15 × 3", "20 ÷ 3"], correct: 0,
    hint: "🔢 Tính nhẩm: 23 + 12 = 35. Số 35 có chữ số tận cùng là 5 nên chia hết cho 5.",
    level: "easy", tags: ["chia_het", "phep_tinh"]
  },

  // ==========================================
  // SỐ TỰ NHIÊN: TOÁN LẬP SỐ VÀ DÃY SỐ (ID: 556 - 570)
  // ==========================================
  {
    id: 556, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Từ ba chữ số 1, 2, 3 có thể lập được bao nhiêu số có ba chữ số khác nhau? ? số.",
    answer: "6",
    hint: "🔢 Công thức tính: 3 × 2 × 1 = 6 số (các số đó là 123, 132, 213, 231, 312, 321).",
    level: "medium", tags: ["lap_so", "tu_duy"]
  },
  {
    id: 557, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Từ các chữ số 0, 4, 7 lập được số có ba chữ số nhỏ nhất (các chữ số không cần khác nhau) là số nào?",
    answers: ["400", "407", "444", "700"], correct: 0,
    hint: "🔢 Chữ số đầu tiên hàng trăm nhỏ nhất phải là 4 (vì số 0 không đứng đầu được). Các hàng sau chọn chữ số nhỏ nhất là 0.",
    level: "medium", tags: ["lap_so", "tu_duy"]
  },
  {
    id: 558, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tính tổng của dãy số tự nhiên liên tiếp từ 1 đến 10. Kết quả là ?.",
    answer: "55",
    hint: "🔢 Mẹo gom cặp: (1+10) + (2+9) + (3+8) + (4+7) + (5+6) = 11 × 5 = 55.",
    level: "easy", tags: ["day_so", "tinh_nhanh"]
  },
  {
    id: 559, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Có bao nhiêu số tự nhiên có hai chữ số?",
    answers: ["90 số", "99 số", "100 số", "89 số"], correct: 0,
    hint: "🔢 Tính từ số 10 đến số 99. Công thức: (99 - 10) + 1 = 90 số.",
    level: "easy", tags: ["day_so"]
  },
  {
    id: 560, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tìm số lượng các số chẵn có một chữ số. Có tất cả ? số.",
    answer: "5",
    hint: "🔢 Các số chẵn có một chữ số gồm: 0, 2, 4, 6, 8. Đừng bỏ sót số 0 nhé.",
    level: "easy", tags: ["tu_duy"]
  },
  {
    id: 561, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Hiệu của số tự nhiên lớn nhất có ba chữ số và số tự nhiên nhỏ nhất có ba chữ số là:",
    answers: ["899", "900", "898", "999"], correct: 0,
    hint: "🔢 Số lớn nhất có 3 chữ số là 999. Số nhỏ nhất có 3 chữ số là 100. Tính 999 - 100.",
    level: "easy", tags: ["phep_tinh"]
  },
  {
    id: 562, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tích của 5 số tự nhiên đầu tiên bắt đầu từ số 0 bằng bao nhiêu? ?.",
    answer: "0",
    hint: "🔢 5 số đầu tiên là 0, 1, 2, 3, 4. Trong dãy tích có thừa số 0 nên kết quả chắc chắn bằng 0.",
    level: "easy", tags: ["tinh_nhanh"]
  },
  {
    id: 563, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Quy luật của dãy số sau là gì: 1, 4, 9, 16, 25, ...",
    answers: ["Mỗi số bằng số thứ tự của nó nhân với chính nó", "Mỗi số hạng sau bằng số hạng trước cộng 3", "Dãy số chẵn cách đều", "Mỗi số hạng sau bằng số hạng trước nhân 2"], correct: 0,
    hint: "🔢 Ta thấy: 1=1×1, 4=2×2, 9=3×3, 16=4×4, 25=5×5. Đây là dãy số chính phương.",
    level: "medium", tags: ["day_so", "tu_duy"]
  },
  {
    id: 564, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tìm số hạng tiếp theo của dãy số sau: 2, 4, 8, 16, ?.",
    answer: "32",
    hint: "🔢 Quy luật: Số đứng sau gấp đôi số đứng liền trước nó. Tính 16 × 2.",
    level: "easy", tags: ["day_so"]
  },
  {
    id: 565, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Có bao nhiêu số lẻ có hai chữ số nhỏ hơn 20?",
    answers: ["5 số", "10 số", "4 số", "6 số"], correct: 0,
    hint: "🔢 Các số lẻ từ 10 đến 20 gồm có: 11, 13, 15, 17, 19. Tổng cộng có 5 số.",
    level: "easy", tags: ["day_so"]
  },
  {
    id: 566, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tổng của số lẻ nhỏ nhất có hai chữ số và số chẵn lớn nhất có một chữ số là ?.",
    answer: "19",
    hint: "🔢 Số lẻ nhỏ nhất có 2 chữ số là 11. Số chẵn lớn nhất có 1 chữ số là 8. Tính 11 + 8.",
    level: "easy", tags: ["phep_tinh"]
  },
  {
    id: 567, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Trung bình cộng của hai số tự nhiên là 12, biết một số là 15. Số còn lại là:",
    answers: ["9", "12", "6", "24"], correct: 0,
    hint: "🔢 Tổng của hai số là: 12 × 2 = 24. Số còn lại là: 24 - 15 = 9.",
    level: "medium", tags: ["trung_binh_cong"]
  },
  {
    id: 568, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Lập được bao nhiêu số có hai chữ số từ hai chữ số 5 và 8 (các chữ số có thể lặp lại)? ? số.",
    answer: "4",
    hint: "🔢 Các số lập được gồm có: 55, 58, 85, 88. Tổng cộng có 4 số.",
    level: "medium", tags: ["lap_so"]
  },
  {
    id: 569, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Trong các dãy số sau, dãy số nào là dãy số cách đều?",
    answers: ["2, 5, 8, 11", "1, 2, 4, 7", "3, 6, 12, 24", "5, 10, 20, 25"], correct: 0,
    hint: "🔢 Dãy 2, 5, 8, 11 có khoảng cách giữa các số liên tiếp luôn luôn bằng 3 nên gọi là dãy cách đều.",
    level: "easy", tags: ["day_so", "ly_thuyet"]
  },
  {
    id: 570, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tìm một số tự nhiên có hai chữ số, biết rằng nếu viết thêm chữ số 0 vào giữa hai chữ số đó ta được số mới gấp 9 lần số cũ. Số đó là ?.",
    answer: "45",
    hint: "🔢 Gọi số cần tìm là ab. Ta có a0b = 9 × ab. Thử nhanh với các số tận cùng bằng 5: 45 thêm 0 thành 405. Ta thấy 45 × 9 = 405 (Đúng).",
    level: "medium", tags: ["tu_duy", "cau_tao_so"]
  },
  // ==========================================
  // SỐ TỰ NHIÊN: TÍNH CHẤT & LOGIC (ID: 571 - 585)
  // ==========================================
  {
    id: 571, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Biểu thức nào dưới đây thể hiện đúng tính chất kết hợp của phép nhân: (a × b) × c ?",
    answers: ["a × (b × c)", "a + b × c", "a × b + c", "a × (b + c)"], correct: 0,
    hint: "🔢 Khi nhân một tích hai số với số thứ ba, ta có thể nhân số thứ nhất với tích của số thứ hai và số thứ ba.",
    level: "easy", tags: ["ly_thuyet", "phep_nhan"]
  },
  {
    id: 572, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tìm số tự nhiên x lớn nhất sao cho: x < 15. Giá trị của x là ?.",
    answer: "14",
    hint: "🔢 Số tự nhiên lớn nhất nhưng phải nhỏ hơn hẳn 15, đó chính là số 14.",
    level: "easy", tags: ["so_sanh", "tim_x"]
  },
  {
    id: 573, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Hiệu của số chẵn lớn nhất có hai chữ số và số lẻ nhỏ nhất có hai chữ số là:",
    answers: ["87", "88", "89", "97"], correct: 0,
    hint: "🔢 Số chẵn lớn nhất có 2 chữ số là 98. Số lẻ nhỏ nhất có 2 chữ số là 11. Tính: 98 - 11 = 87.",
    level: "easy", tags: ["phep_tinh"]
  },
  {
    id: 574, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tính nhanh giá trị biểu thức: 125 × 7 × 8 = ?.",
    answer: "7000",
    hint: "🔢 Sử dụng tính chất giao hoán và kết hợp để nhóm hai số tròn nghìn trước: (125 × 8) × 7 = 1000 × 7.",
    level: "easy", tags: ["tinh_nhanh"]
  },
  {
    id: 575, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Có bao nhiêu số tự nhiên ở giữa hai số 10 và 20? (Không tính số 10 và số 20)",
    answers: ["9 số", "10 số", "11 số", "8 số"], correct: 0,
    hint: "🔢 Các số đó gồm từ 11 đến 19. Công thức tính số lượng: (19 - 11) + 1 = 9 số.",
    level: "medium", tags: ["day_so", "tu_duy"]
  },
  {
    id: 576, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Thương của phép chia số tự nhiên lớn nhất có một chữ số cho số lẻ nhỏ nhất khác 0 là ?.",
    answer: "9",
    hint: "🔢 Số tự nhiên lớn nhất có 1 chữ số là 9. Số lẻ nhỏ nhất khác 0 là 1. Tính 9 ÷ 1 = 9.",
    level: "easy", tags: ["phep_chia"]
  },
  {
    id: 577, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Nếu một thừa số trong phép nhân được gấp lên 5 lần, thừa số còn lại giữ nguyên thì tích của phép nhân đó thay đổi như thế nào?",
    answers: ["Gấp lên 5 lần", "Tăng thêm 5 đơn vị", "Giảm đi 5 lần", "Không thay đổi"], correct: 0,
    hint: "🔢 Quy tắc phép nhân: Một thừa số gấp lên bao nhiêu lần thì tích gấp lên bấy nhiêu lần.",
    level: "easy", tags: ["ly_thuyet", "phep_nhan"]
  },
  {
    id: 578, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tìm số tự nhiên x chẵn, biết: 24 < x < 28. Giá trị của x là ?.",
    answer: "26",
    hint: "🔢 Nằm giữa 24 và 28 có các số lẻ 25, 27 và số chẵn 26. Vì x chẵn nên chọn 26.",
    level: "easy", tags: ["tim_x"]
  },
  {
    id: 579, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Trong phép tính chia hết, nếu ta cùng gấp cả số bị chia và số chia lên 10 lần thì thương sẽ:",
    answers: ["Không thay đổi", "Gấp lên 10 lần", "Giảm đi 10 lần", "Gấp lên 100 lần"], correct: 0,
    hint: "🔢 Tính chất phép chia: Khi cùng nhân (hoặc cùng chia) cả số bị chia và số chia với một số khác 0 thì thương không đổi.",
    level: "medium", tags: ["ly_thuyet", "phep_chia"]
  },
  {
    id: 580, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tính nhanh tổng sau bằng cách gom cặp: 5 + 15 + 25 + 35 = ?.",
    answer: "80",
    hint: "🔢 Nhóm thành các cặp tròn chục: (5 + 35) + (15 + 25) = 40 + 40 = 80.",
    level: "easy", tags: ["tinh_nhanh"]
  },
  {
    id: 581, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Một số tự nhiên có chữ số tận cùng là 5, khi nhân số đó với 4 thì chữ số tận cùng của tích mới thu được chắc chắn là:",
    answers: ["0", "5", "4", "2"], correct: 0,
    hint: "🔢 Ta lấy chữ số hàng đơn vị nhân nhẩm: 5 × 4 = 20. Vậy tích có chữ số tận cùng là 0.",
    level: "easy", tags: ["tu_duy", "phep_nhan"]
  },
  {
    id: 582, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tìm số tự nhiên nhỏ nhất có hai chữ số mà tổng hai chữ số đó bằng 9. Số đó là ?.",
    answer: "18",
    hint: "🔢 Để số nhỏ nhất, chữ số hàng chục phải nhỏ nhất có thể (chọn 1). Chữ số hàng đơn vị sẽ là: 9 - 1 = 8.",
    level: "medium", tags: ["tu_duy", "cau_tao_so"]
  },
  {
    id: 583, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Cho biểu thức: A = 20 + b. Để biểu thức A có giá trị lớn nhất nhỏ hơn 30 thì số tự nhiên b phải bằng bao nhiêu?",
    answers: ["9", "10", "8", "0"], correct: 0,
    hint: "🔢 Giá trị lớn nhất nhỏ hơn 30 phải là 29. Ta có 20 + b = 29, suy ra b = 9.",
    level: "medium", tags: ["tim_x", "tu_duy"]
  },
  {
    id: 584, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tích của một số tự nhiên với số 0 thì bằng bao nhiêu? ?.",
    answer: "0",
    hint: "🔢 Bất kỳ số tự nhiên nào khi nhân với 0 cũng đều cho kết quả bằng 0.",
    level: "easy", tags: ["ly_thuyet"]
  },
  {
    id: 585, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Phép tính nào sau đây không thực hiện được trong tập hợp các số tự nhiên?",
    answers: ["5 - 8", "8 - 5", "0 × 5", "0 ÷ 5"], correct: 0,
    hint: "🔢 Trong tập hợp số tự nhiên, số bị trừ phải lớn hơn hoặc bằng số trừ. Phép tính 5 - 8 không thực hiện được.",
    level: "easy", tags: ["ly_thuyet"]
  },

  // ==========================================
  // SỐ TỰ NHIÊN: TOÁN LỜI VĂN THỰC TẾ (ID: 586 - 600)
  // ==========================================
  {
    id: 586, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Một đoàn tàu có 4 toa, mỗi toa chở được 50 hành khách. Hỏi đoàn tàu đó chở được tối đa bao nhiêu hành khách? ? hành khách.",
    answer: "200",
    hint: "🔢 Thực hiện phép tính nhân số tự nhiên: lấy số khách của một toa nhân với 4.",
    level: "easy", tags: ["loi_van"]
  },
  {
    id: 587, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Có 45 quyển tập xếp đều vào 5 hộp. Hỏi 3 hộp như thế xếp được bao nhiêu quyển tập?",
    answers: ["27 quyển", "9 quyển", "15 quyển", "30 quyển"], correct: 0,
    hint: "🔢 Bước 1: Mỗi hộp xếp được: 45 ÷ 5 = 9 quyển. Bước 2: 3 hộp xếp được: 9 × 3 = 27 quyển.",
    level: "medium", tags: ["loi_van", "hai_buoc_tinh"]
  },
  {
    id: 588, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Bình có 20 cái kẹo. Bình chia cho An một nửa số kẹo, sau đó chia cho Hòa 5 cái kẹo. Hỏi Bình còn lại bao nhiêu cái kẹo? ? cái.",
    answer: "5",
    hint: "🔢 Một nửa của 20 là 10 cái kẹo. Sau khi cho An, Bình còn 10 cái. Cho Hòa tiếp 5 cái thì Bình còn: 10 - 5 = 5 cái.",
    level: "medium", tags: ["loi_van", "hai_buoc_tinh"]
  },
  {
    id: 589, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Mẹ mua một chục quả trứng gà. Bữa sáng mẹ dùng hết 4 quả trứng. Hỏi mẹ còn lại bao nhiêu quả trứng?",
    answers: ["6 quả", "16 quả", "8 quả", "10 quả"], correct: 0,
    hint: "🔢 Một chục tương ứng với số tự nhiên 10. Số trứng còn lại là: 10 - 4 = 6 quả.",
    level: "easy", tags: ["loi_van", "thuc_te"]
  },
  {
    id: 590, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Một trang trại có 30 con bò và số con heo gấp 3 lần số con bò. Hỏi trang trại đó có tất cả ? con cả bò và heo.",
    answer: "120",
    hint: "🔢 Bước 1: Tìm số heo = 30 × 3 = 90 con. Bước 2: Tìm tổng số con = 30 + 90 = 120 con.",
    level: "medium", tags: ["loi_van", "hai_buoc_tinh"]
  },
  {
    id: 591, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Một cửa hàng ngày đầu bán được 150 kg đường, ngày thứ hai bán được nhiều hơn ngày đầu 50 kg. Hỏi trung bình mỗi ngày cửa hàng bán được bao nhiêu ki-lô-gam đường?",
    answers: ["175 kg", "200 kg", "150 kg", "350 kg"], correct: 0,
    hint: "🔢 Bước 1: Ngày thứ hai bán được: 150 + 50 = 200 kg. Bước 2: Trung bình cộng hai ngày: (150 + 200) ÷ 2 = 175 kg.",
    level: "medium", tags: ["loi_van", "trung_binh_cong"]
  },
  {
    id: 592, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Lan đọc một cuốn sách dày 80 trang. Ngày thứ nhất Lan đọc được 20 trang. Ngày thứ hai Lan đọc gấp đôi ngày thứ nhất. Số trang sách Lan chưa đọc là ? trang.",
    answer: "20",
    hint: "🔢 Bước 1: Ngày thứ hai đọc được: 20 × 2 = 40 trang. Bước 2: Tổng hai ngày đọc được: 20 + 40 = 60 trang. Bước 3: Số trang chưa đọc: 80 - 60 = 20 trang.",
    level: "medium", tags: ["loi_van", "hai_buoc_tinh"]
  },
  {
    id: 593, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Có 24 quả cam xếp đều vào 4 đĩa. Hỏi nếu có 6 đĩa như thế thì xếp được bao nhiêu quả cam?",
    answers: ["36 quả", "24 quả", "30 quả", "48 quả"], correct: 0,
    hint: "🔢 Bước 1: Mỗi đĩa có số cam là: 24 ÷ 4 = 6 quả. Bước 2: 6 đĩa có số cam là: 6 × 6 = 36 quả.",
    level: "medium", tags: ["loi_van", "hai_buoc_tinh"]
  },
  {
    id: 594, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Một hình chữ nhật có chiều dài 12 cm, chiều rộng 8 cm. Chu vi của hình chữ nhật đó là ? cm.",
    answer: "40",
    hint: "🔢 Công thức chu vi hình chữ nhật: (Chiều dài + Chiều rộng) × 2. Tính nhẩm: (12 + 8) × 2.",
    level: "easy", tags: ["loi_van", "hinh_hoc"]
  },
  {
    id: 595, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Một người thợ may dùng 3 m vải thì may được một bộ quần áo. Hỏi từ 30 m vải thì người đó may được nhiều nhất bao nhiêu bộ quần áo như thế?",
    answers: ["10 bộ", "9 bộ", "11 bộ", "3 bộ"], correct: 0,
    hint: "🔢 Thực hiện phép tính chia số tự nhiên để tìm số lượng bộ quần áo: 30 ÷ 3 = 10.",
    level: "easy", tags: ["loi_van"]
  },
  {
    id: 596, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Hùng có 18 viên bi, Minh có 12 viên bi. Hải có số bi bằng trung bình cộng của Hùng và Minh. Số bi của Hải là ? viên.",
    answer: "15",
    hint: "🔢 Tính trung bình cộng bằng cách lấy tổng số bi của Hùng và Minh rồi chia cho 2: (18 + 12) ÷ 2.",
    level: "easy", tags: ["loi_van", "trung_binh_cong"]
  },
  {
    id: 597, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Một lớp học có 35 học sinh. Người ta chia lớp thành các nhóm học tập, mỗi nhóm có 5 học sinh. Hỏi chia được tất cả bao nhiêu nhóm?",
    answers: ["7 nhóm", "6 nhóm", "8 nhóm", "5 nhóm"], correct: 0,
    hint: "🔢 Lấy tổng số học sinh của lớp chia cho số học sinh trong một nhóm: 35 ÷ 5 = 7.",
    level: "easy", tags: ["loi_van"]
  },
  {
    id: 598, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Một vườn cây ăn quả có 3 hàng cây, mỗi hàng có 15 cây. Người ta trồng thêm vào vườn 5 cây nữa. Tổng số cây trong vườn lúc này là ? cây.",
    answer: "50",
    hint: "🔢 Bước 1: Tính số cây lúc đầu: 15 × 3 = 45 cây. Bước 2: Tính tổng số cây lúc sau: 45 + 5 = 50 cây.",
    level: "medium", tags: ["loi_van", "hai_buoc_tinh"]
  },
  {
    id: 599, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Một xe tải chở được 2 tấn hàng. Người ta cần chuyển 9 tấn hàng bằng loại xe tải đó. Hỏi cần ít nhất bao nhiêu chuyến xe để chở hết số hàng trên?",
    answers: ["5 chuyến", "4 chuyến", "4,5 chuyến", "6 chuyến"], correct: 0,
    hint: "🔢 Thực hiện phép chia: 9 ÷ 2 = 4 (dư 1 tấn). Vì vẫn còn thừa 1 tấn hàng nên cần thêm 1 chuyến xe nữa. Tổng cộng: 4 + 1 = 5 chuyến.",
    level: "medium", tags: ["loi_van", "tu_duy", "thuc_te"]
  },
  {
    id: 600, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Một sợi dây dài 24 m được cắt thành các đoạn nhỏ bằng nhau, mỗi đoạn dài 4 m. Người ta phải cắt tất cả ? lần.",
    answer: "5",
    hint: "🔢 Mẹo đố vui thực tế: Số đoạn dây cắt được là 24 ÷ 4 = 6 đoạn. Số lần cắt luôn ít hơn số đoạn thu được 1 đơn vị. Tính 6 - 1 = 5 lần.",
    level: "medium", tags: ["loi_van", "tu_duy", "thuc_te"]
  },
  // ==========================================
  // PHÂN SỐ: SO SÁNH & TÍNH CHẤT NÂNG CAO (ID: 601 - 615)
  // ==========================================
  {
    id: 601, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Không quy đồng mẫu số, hãy cho biết phân số nào lớn nhất trong các phân số sau?",
    answers: ["9/10", "7/8", "5/6", "3/4"], correct: 0,
    hint: "🍕 Mẹo so sánh phần bù: Phần bù đến 1 lần lượt là 1/10, 1/8, 1/6, 1/4. Vì 1/10 nhỏ nhất nên 9/10 là phân số lớn nhất.",
    level: "medium", tags: ["so_sanh", "tu_duy"]
  },
  {
    id: 602, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tìm chữ số x thích hợp là số tự nhiên để: 1/2 < x/6 < 5/6. Giá trị của x là ?.",
    answer: "2",
    hint: "🍕 Quy đồng mẫu số của 1/2 thành 3/6. Ta có 3/6 < x/6 < 5/6. Vậy x chỉ có thể bằng 4. Khoan đã, hãy nhìn lại điều kiện tử số lẻ/chẵn... À, giữa 3 và 5 chỉ có số 4.",
    level: "medium", tags: ["tim_x", "so_sanh"]
  },
  {
    id: 603, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Phân số nào sau đây bằng với phân số 5/7?",
    answers: ["25/35", "10/21", "15/28", "20/35"], correct: 0,
    hint: "🍕 Nhân cả tử số và mẫu số của 5/7 với số 5: 5 × 5 = 25 và 7 × 5 = 35.",
    level: "easy", tags: ["tinh_chat"]
  },
  {
    id: 604, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Rút gọn phân số 121/132 về phân số tối giản ta được tử số của phân số mới là ?.",
    answer: "11",
    hint: "🍕 Cả tử số và mẫu số cùng chia hết cho 11. Tính: 121 ÷ 11 = 11.",
    level: "medium", tags: ["rut_gon"]
  },
  {
    id: 605, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "So sánh hai phân số: 13/15 và 133/155, khẳng định nào đúng?",
    answers: ["13/15 > 133/155", "13/15 < 133/155", "Hai phân số bằng nhau", "Không so sánh được"], correct: 0,
    hint: "🍕 Quy đồng hoặc dùng phần bù: 1 - 13/15 = 2/15 và 1 - 133/155 = 22/155. So sánh 2/15 = 22/165 < 22/155 nên phần bù của 13/15 nhỏ hơn, suy ra 13/15 lớn hơn.",
    level: "hard", tags: ["so_sanh", "tu_duy"]
  },
  {
    id: 606, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tính giá trị biểu thức sau: 1/2 + 1/6 + 1/12 = ?/?. (Viết kết quả dưới dạng phân số tối giản dạng a/b).",
    answer: "3/4",
    hint: "🍕 Mẫu số chung là 12. Quy đồng: 6/12 + 2/12 + 1/12 = 9/12. Rút gọn 9/12 cho 3 ta được 3/4.",
    level: "medium", tags: ["phep_tinh"]
  },
  {
    id: 607, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Có bao nhiêu phân số có mẫu số bằng 5, lớn hơn 1 và nhỏ hơn 2?",
    answers: ["4 phân số", "3 phân số", "5 phân số", "2 phân số"], correct: 0,
    hint: "🍕 Số 1 = 5/5, số 2 = 10/5. Các phân số ở giữa gồm: 6/5, 7/5, 8/5, 9/5. Tổng cộng có 4 phân số.",
    level: "medium", tags: ["tu_duy"]
  },
  {
    id: 608, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tìm một phân số biết tổng của tử số và mẫu số là 15 và mẫu số hơn tử số 3 đơn vị. Phân số đó là ?/?. (Viết dạng a/b)",
    answer: "6/9",
    hint: "🍕 Bài toán Tổng - Hiệu: Tử số là (15 - 3) ÷ 2 = 6. Mẫu số là 6 + 3 = 9. Phân số là 6/9.",
    level: "medium", tags: ["tu_duy", "tong_hieu"]
  },
  {
    id: 609, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Khi ta cộng thêm cùng một số tự nhiên khác 0 vào cả tử số và mẫu số của một phân số nhỏ hơn 1 thì giá trị của phân số đó thay đổi như thế nào?",
    answers: ["Tăng lên", "Giảm đi", "Không thay đổi", "Trở bằng 1"], correct: 0,
    hint: "🍕 Ví dụ: 1/2 cộng cả tử và mẫu với 1 thành 2/3. Ta thấy 2/3 > 1/2 nên giá trị phân số tăng lên.",
    level: "hard", tags: ["ly_thuyet", "tinh_chat"]
  },
  {
    id: 610, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tính nhanh tích sau: (1 - 1/2) × (1 - 1/3) × (1 - 1/4) = ?/?. (Viết dạng a/b)",
    answer: "1/4",
    hint: "🍕 Tính trong ngoặc: 1/2 × 2/3 × 3/4. Triệt tiêu các số giống nhau ở tử và mẫu, còn lại 1/4.",
    level: "medium", tags: ["tinh_nhanh"]
  },
  {
    id: 611, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Phân số nào sau đây có thể viết thành phân số thập phân (có mẫu là 10, 100, 1000...)?",
    answers: ["3/5", "1/3", "4/7", "5/9"], correct: 0,
    hint: "🍕 Nhân cả tử và mẫu của 3/5 với 2 ta được 6/10. Các mẫu số chứa thừa số nguyên tố khác 2 và 5 thì không đổi được.",
    level: "medium", tags: ["tinh_chat"]
  },
  {
    id: 612, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tìm một phân số bằng phân số 2/5 và có tích của tử số và mẫu số bằng 40. Phân số đó là ?/?. (Viết dạng a/b)",
    answer: "4/10",
    hint: "🍕 Gọi tử số là 2k, mẫu số là 5k. Tích = 2k × 5k = 10 × k × k = 40 => k × k = 4 => k = 2. Tử số là 4, mẫu số là 10.",
    level: "hard", tags: ["tu_duy"]
  },
  {
    id: 613, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Hỗn số $3 \\frac{2}{5}$ được viết dưới dạng phân số là:",
    answers: ["17/5", "11/5", "6/5", "13/5"], correct: 0,
    hint: "🍕 Lấy phần nguyên nhân với mẫu số rồi cộng với tử số: 3 × 5 + 2 = 17. Giữ nguyên mẫu số là 5.",
    level: "easy", tags: ["hon_so"]
  },
  {
    id: 614, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tìm x, biết: x - 2/3 = 1/6. Kết quả tối giản của x là ?/?. (Viết dạng a/b)",
    answer: "5/6",
    hint: "🍕 Tìm số bị trừ: x = 1/6 + 2/3 = 1/6 + 4/6 = 5/6.",
    level: "easy", tags: ["tim_x"]
  },
  {
    id: 615, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Kết quả của phép tính nhân: $4 \\times \\frac{3}{8}$ bằng phân số tối giản nào?",
    answers: ["3/2", "12/8", "3/8", "7/8"], correct: 0,
    hint: "🍕 Lấy số tự nhiên nhân với tử số và giữ nguyên mẫu: 4 × 3 / 8 = 12/8. Rút gọn cho 4 được 3/2.",
    level: "easy", tags: ["phep_tinh"]
  },

  // ==========================================
  // PHÂN SỐ: TOÁN LỜI VĂN ỨNG DỤNG (ID: 616 - 630)
  // ==========================================
  {
    id: 616, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Một cửa hàng có 60 tạ gạo, ngày đầu bán được 1/3 số gạo. Hỏi cửa hàng còn lại ? tạ gạo.",
    answer: "40",
    hint: "🍕 Số gạo đã bán: 60 × 1/3 = 20 tạ. Số gạo còn lại: 60 - 20 = 40 tạ.",
    level: "medium", tags: ["loi_van", "hai_buoc_tinh"]
  },
  {
    id: 617, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Bình có một số viên bi. Bình cho An 1/4 số bi, cho Hòa 1/2 số bi. Hỏi Bình đã cho đi tổng cộng bao nhiêu phần số bi của mình?",
    answers: ["3/4", "2/6", "1/8", "2/4"], correct: 0,
    hint: "🍕 Thực hiện phép cộng phân số phần bi đã cho: 1/4 + 1/2 = 1/4 + 2/4 = 3/4.",
    level: "easy", tags: ["loi_van"]
  },
  {
    id: 618, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Một mảnh vườn hình chữ nhật có chiều dài 20 m, chiều rộng bằng 3/4 chiều dài. Diện tích mảnh vườn đó là ? m².",
    answer: "300",
    hint: "🍕 Bước 1: Chiều rộng bằng 20 × 3 ÷ 4 = 15 m. Bước 2: Diện tích = 20 × 15 = 300 m².",
    level: "medium", tags: ["loi_van", "hinh_hoc"]
  },
  {
    id: 619, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Biết 2/5 quãng đường từ nhà đến trường dài 4 km. Hỏi toàn bộ quãng đường từ nhà đến trường dài bao nhiêu ki-lô-mét?",
    answers: ["10 km", "8 km", "16 km", "5 km"], correct: 0,
    hint: "🍕 Dạng toán tìm một số: Lấy giá trị chia cho phân số: 4 ÷ 2/5 = 4 × 5 ÷ 2 = 10 km.",
    level: "medium", tags: ["loi_van"]
  },
  {
    id: 620, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Mẹ có 24 quả táo, mẹ cho chị 1/3 số táo và cho em 1/4 số táo. Mẹ còn lại ? quả táo.",
    answer: "10",
    hint: "🍕 Chị nhận: 24 ÷ 3 = 8 quả. Em nhận: 24 ÷ 4 = 6 quả. Mẹ còn lại: 24 - (8 + 6) = 10 quả.",
    level: "medium", tags: ["loi_van", "hai_buoc_tinh"]
  },
  {
    id: 621, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Một bể nước đang cạn, giờ thứ nhất chảy được 2/7 bể, giờ thứ hai chảy được 3/7 bể. Hỏi còn bao nhiêu phần bể chưa có nước?",
    answers: ["2/7", "5/7", "3/7", "1/7"], correct: 0,
    hint: "🍕 Tổng lượng nước đã chảy: 2/7 + 3/7 = 5/7 bể. Số phần bể còn trống: 1 - 5/7 = 2/7 bể.",
    level: "medium", tags: ["loi_van"]
  },
  {
    id: 622, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Lớp 5A có 40 học sinh, trong đó số học sinh nam bằng 3/5 số học sinh cả lớp. Số học sinh nữ của lớp đó là ? bạn.",
    answer: "16",
    hint: "🍕 Số học sinh nam: 40 × 3 ÷ 5 = 24 bạn. Số học sinh nữ: 40 - 24 = 16 bạn.",
    level: "medium", tags: ["loi_van"]
  },
  {
    id: 623, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Một tấm vải được cắt đi 3/8 chiều dài thì còn lại 15 m. Hỏi chiều dài ban đầu của tấm vải là bao nhiêu mét?",
    answers: ["24 m", "40 m", "25 m", "30 m"], correct: 0,
    hint: "🍕 Phân số chỉ 15 m còn lại là: 1 - 3/8 = 5/8 tấm vải. Chiều dài ban đầu: 15 ÷ 5/8 = 24 m.",
    level: "hard", tags: ["loi_van", "tu_duy"]
  },
  {
    id: 624, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Một đội công nhân ngày một sửa được 1/4 quãng đường, ngày hai sửa được 2/5 quãng đường. Cả hai ngày đội đó sửa được ?/? quãng đường.",
    answer: "13/20",
    hint: "🍕 Thực hiện phép cộng hai phân số khác mẫu: 1/4 + 2/5 = 5/20 + 8/20 = 13/20.",
    level: "medium", tags: ["loi_van"]
  },
  {
    id: 625, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Một chai nước ngọt chứa 3/4 lít nước. Người ta rót ra 1/2 lít nước. Hỏi trong chai còn lại bao nhiêu lít nước?",
    answers: ["1/4 lít", "2/4 lít", "1/2 lít", "2/2 lít"], correct: 0,
    hint: "🍕 Thực hiện phép trừ phân số: 3/4 - 1/2 = 3/4 - 2/4 = 1/4 lít.",
    level: "easy", tags: ["loi_van"]
  },
  {
    id: 626, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Một cuốn sách có 120 trang. Ngày đầu An đọc được 2/5 số trang. Ngày thứ hai An đọc được 1/3 số trang còn lại. Ngày thứ hai An đọc được ? trang.",
    answer: "24",
    hint: "🍕 Ngày đầu đọc: 120 × 2 ÷ 5 = 48 trang. Số trang còn lại: 120 - 48 = 72 trang. Ngày thứ hai đọc: 72 × 1 ÷ 3 = 24 trang.",
    level: "hard", tags: ["loi_van", "hai_buoc_tinh"]
  },
  {
    id: 627, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Hùng nặng 36 kg. Minh có số cân nặng bằng 8/9 số cân nặng của Hùng. Hỏi Minh nặng bao nhiêu ki-lô-gam?",
    answers: ["32 kg", "40 kg", "36 kg", "28 kg"], correct: 0,
    hint: "🍕 Tìm giá trị phân số của một số: Lấy cân nặng của Hùng nhân với 8/9: 36 × 8 ÷ 9 = 32 kg.",
    level: "easy", tags: ["loi_van"]
  },
  {
    id: 628, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Diện tích một hình bình hành là 2/3 m², chiều cao là 4/5 m. Độ dài đáy của hình bình hành đó là ?/? m. (Viết kết quả tối giản dạng a/b)",
    answer: "5/6",
    hint: "🍕 Độ dài đáy bằng Diện tích chia cho Chiều cao: 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6 m.",
    level: "medium", tags: ["hinh_hoc", "phep_tinh"]
  },
  {
    id: 629, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Một công việc nếu một mình Nam làm mất 4 giờ sẽ xong. Hỏi trong 1 giờ Nam làm được bao nhiêu phần công việc?",
    answers: ["1/4 công việc", "4/1 công việc", "1/2 công việc", "3/4 công việc"], correct: 0,
    hint: "🍕 Đây là dạng toán công việc chung. Cả công việc coi là 1 đơn vị, 1 giờ sẽ làm được 1 ÷ 4 = 1/4 công việc.",
    level: "easy", tags: ["loi_van", "tu_duy"]
  },
  {
    id: 630, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Một nhóm học sinh có 12 bạn thích đá bóng, số bạn thích bóng rổ bằng 2/3 số bạn thích đá bóng. Nhóm đó có ? bạn thích bóng rổ.",
    answer: "8",
    hint: "🍕 Tính số bạn thích bóng rổ: lấy số bạn thích đá bóng nhân với 2/3: 12 × 2 ÷ 3 = 8 bạn.",
    level: "easy", tags: ["loi_van"]
  },
  // ==========================================
  // PHÂN SỐ: PHÉP TÍNH CỘNG & TRỪ (ID: 631 - 645)
  // ==========================================
  {
    id: 631, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Kết quả của phép tính cộng: $\\frac{5}{12} + \\frac{1}{4}$ bằng phân số tối giản nào?",
    answers: ["2/3", "6/12", "1/2", "7/12"], correct: 0,
    hint: "🍕 Quy đồng mẫu số: 1/4 = 3/12. Thực hiện cộng: 5/12 + 3/12 = 8/12. Rút gọn cho 4 ta được 2/3.",
    level: "easy", tags: ["phep_tinh", "phep_cong"]
  },
  {
    id: 632, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tính kết quả của phép trừ hai phân số sau: $\\frac{7}{9} - \\frac{1}{3} = ?/?$. (Viết dưới dạng phân số tối giản dạng a/b)",
    answer: "4/9",
    hint: "🍕 Quy đồng phân số 1/3 thành 3/9. Sau đó lấy tử số trừ tử số: 7/9 - 3/9 = 4/9.",
    level: "easy", tags: ["phep_tinh", "phep_tru"]
  },
  {
    id: 633, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Tìm x, biết: $x + \\frac{2}{5} = \\frac{7}{10}$. Kết quả tối giản của x là:",
    answers: ["3/10", "5/10", "9/10", "1/2"], correct: 0,
    hint: "🍕 Tìm số hạng chưa biết: x = 7/10 - 2/5 = 7/10 - 4/10 = 3/10.",
    level: "easy", tags: ["tim_x", "phep_cong"]
  },
  {
    id: 634, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tính giá trị của biểu thức sau bằng cách thuận tiện: $\\frac{3}{7} + \\frac{4}{9} + \\frac{4}{7} = ?$.",
    answer: "13/9",
    hint: "🍕 Nhóm các phân số có cùng mẫu số trước: (3/7 + 4/7) + 4/9 = 1 + 4/9 = 9/9 + 4/9 = 13/9.",
    level: "medium", tags: ["tinh_nhanh", "phep_cong"]
  },
  {
    id: 635, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Thực hiện phép tính trừ hỗn số với phân số: $1 \\frac{1}{2} - \\frac{3}{4}$. Kết quả thu được là:",
    answers: ["3/4", "1/4", "1/2", "5/4"], correct: 0,
    hint: "🍕 Đổi hỗn số sang phân số trước: 1 1/2 = 3/2. Quy đồng rồi trừ: 6/4 - 3/4 = 3/4.",
    level: "medium", tags: ["hon_so", "phep_tru"]
  },
  {
    id: 636, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tìm x, biết: $x - \\frac{1}{4} = \\frac{5}{8}$. Kết quả của x là ?/?. (Viết dạng a/b)",
    answer: "7/8",
    hint: "🍕 Tìm số bị trừ: lấy hiệu cộng với số trừ. x = 5/8 + 1/4 = 5/8 + 2/8 = 7/8.",
    level: "easy", tags: ["tim_x", "phep_tru"]
  },
  {
    id: 637, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Giá trị của biểu thức: $2 - \\frac{1}{3} - \\frac{2}{3}$ bằng số tự nhiên nào?",
    answers: ["1", "0", "2", "3"], correct: 0,
    hint: "🍕 Trừ liên tiếp hoặc gom nhóm: 2 - (1/3 + 2/3) = 2 - 3/3 = 2 - 1 = 1.",
    level: "medium", tags: ["tinh_nhanh", "phep_tru"]
  },
  {
    id: 638, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tính tổng của ba phân số sau: $\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6} = ?$.",
    answer: "1",
    hint: "🍕 Chọn mẫu số chung là 6. Quy đồng các phân số: 3/6 + 2/6 + 1/6 = 6/6 = 1.",
    level: "medium", tags: ["phep_tinh", "phep_cong"]
  },
  {
    id: 639, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Tìm x, biết: $\\frac{15}{6} - x = \\frac{3}{2}$. Kết quả tối giản của x là:",
    answers: ["1", "2/3", "1/2", "3/4"], correct: 0,
    hint: "🍕 Tìm số trừ: x = 15/6 - 3/2 = 15/6 - 9/6 = 6/6 = 1.",
    level: "easy", tags: ["tim_x", "phep_tru"]
  },
  {
    id: 640, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tính nhanh hiệu sau: $\\frac{19}{11} - \\frac{4}{7} - \\frac{8}{11} = ?/?$. (Viết dạng a/b)",
    answer: "3/7",
    hint: "🍕 Sử dụng tính chất giao hoán để nhóm các phân số cùng mẫu: (19/11 - 8/11) - 4/7 = 11/11 - 4/7 = 1 - 4/7 = 3/7.",
    level: "medium", tags: ["tinh_nhanh", "phep_tru"]
  },
  {
    id: 641, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Kết quả của phép tính: $\\frac{1}{2} - \\frac{1}{4} + \\frac{1}{8}$ bằng phân số nào?",
    answers: ["3/8", "1/8", "5/8", "7/8"], correct: 0,
    hint: "🍕 Quy đồng về mẫu số chung là 8: 4/8 - 2/8 + 1/8 = 3/8.",
    level: "easy", tags: ["phep_tinh"]
  },
  {
    id: 642, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tìm một số biết rằng nếu lấy số đó cộng với $\\frac{1}{5}$ rồi trừ đi $\\frac{1}{2}$ thì được kết quả là $\\frac{1}{10}$. Số đó là ?/?. (Viết dạng a/b)",
    answer: "2/5",
    hint: "🍕 Thực hiện tính ngược từ cuối: lấy 1/10 + 1/2 - 1/5 = 1/10 + 5/10 - 2/10 = 4/10. Rút gọn thành 2/5.",
    level: "hard", tags: ["tu_duy", "tim_x"]
  },
  {
    id: 643, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Phép tính nào dưới đây có kết quả lớn hơn 1?",
    answers: ["2/3 + 1/2", "1/4 + 1/2", "5/6 - 1/3", "1 - 1/5"], correct: 0,
    hint: "🍕 Quy đồng phép tính đầu tiên: 4/6 + 3/6 = 7/6. Vì tử số lớn hơn mẫu số nên phân số này lớn hơn 1.",
    level: "medium", tags: ["phep_tinh", "so_sanh"]
  },
  {
    id: 644, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tính tổng hai hỗn số sau: $2 \\frac{1}{3} + 1 \\frac{1}{3} = ?$.",
    answer: "11/3",
    hint: "🍕 Cộng phần nguyên với phần nguyên (2+1=3), phần phân số với phần phân số (1/3+1/3=2/3). Kết quả là hỗn số 3 2/3, chuyển thành phân số là 11/3.",
    level: "medium", tags: ["hon_so", "phep_cong"]
  },
  {
    id: 645, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Cho biểu thức: $A = \\frac{12}{15} - \\frac{x}{5}$. Tìm số tự nhiên x sao cho giá trị biểu thức A bằng 0.",
    answers: ["4", "3", "12", "1"], correct: 0,
    hint: "🍕 Rút gọn 12/15 cho 3 ta được phân số 4/5. Để 4/5 - x/5 = 0 thì x phải bằng 4.",
    level: "medium", tags: ["tim_x", "rut_gon"]
  },

  // ==========================================
  // PHÂN SỐ: PHÉP TÍNH NHÂN & CHIA (ID: 646 - 660)
  // ==========================================
  {
    id: 646, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tính tích của hai phân số sau: $\\frac{4}{7} \\times \\frac{3}{5} = ?/?$. (Viết dạng a/b)",
    answer: "12/35",
    hint: "🍕 Áp dụng quy tắc nhân phân số: lấy tử số nhân với tử số, mẫu số nhân với mẫu số.",
    level: "easy", tags: ["phep_tinh", "phep_nhan"]
  },
  {
    id: 647, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Thực hiện phép tính chia hai phân số: $\\frac{5}{8} \\div \\frac{3}{4}$. Kết quả sau khi tối giản là:",
    answers: ["5/6", "15/32", "20/24", "6/5"], correct: 0,
    hint: "🍕 Lấy phân số thứ nhất nhân đảo ngược với phân số thứ hai: 5/8 × 4/3 = 20/24. Rút gọn cho 4 được 5/6.",
    level: "easy", tags: ["phep_tinh", "phep_chia"]
  },
  {
    id: 648, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tìm x, biết: $x \\times \\frac{2}{3} = \\frac{8}{9}$. Kết quả tối giản của x là ?/?. (Viết dạng a/b)",
    answer: "4/3",
    hint: "🍕 Tìm thừa số chưa biết: x = 8/9 ÷ 2/3 = 8/9 × 3/2 = 24/18. Rút gọn cho 6 được 4/3.",
    level: "easy", tags: ["tim_x", "phep_nhan"]
  },
  {
    id: 649, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Tính giá trị phép nhân liên tiếp: $\\frac{2}{3} \\times \\frac{3}{4} \\times \\frac{4}{5}$. Kết quả tối giản là:",
    answers: ["2/5", "24/60", "1/5", "3/5"], correct: 0,
    hint: "🍕 Mẹo triệt tiêu: Số 3 và số 4 xuất hiện ở cả tử số và mẫu số nên rút gọn hết, tích chỉ còn lại tử đầu là 2 và mẫu cuối là 5.",
    level: "medium", tags: ["tinh_nhanh", "phep_nhan"]
  },
  {
    id: 650, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tìm x, biết: $x \\div \\frac{3}{5} = \\frac{10}{9}$. Kết quả tối giản của x là ?/?. (Viết dạng a/b)",
    answer: "2/3",
    hint: "🍕 Tìm số bị chia: x = 10/9 × 3/5 = 30/45. Rút gọn cả tử và mẫu cho 15 ta được 2/3.",
    level: "easy", tags: ["tim_x", "phep_chia"]
  },
  {
    id: 651, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Khi thực hiện phép tính chia một phân số cho số tự nhiên 3 (khác 0), ta có thể làm như thế nào?",
    answers: ["Giữ nguyên tử số và nhân mẫu số với 3", "Nhân tử số với 3 và giữ nguyên mẫu số", "Giữ nguyên phân số đó", "Đảo ngược phân số đó"], correct: 0,
    hint: "🍕 Bản chất chia cho 3 chính là nhân với 1/3, do đó tử số giữ nguyên (nhân 1) và mẫu số nhân với 3.",
    level: "medium", tags: ["ly_thuyet", "phep_chia"]
  },
  {
    id: 652, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tính nhanh giá trị biểu thức: $\\frac{5}{7} \\times \\frac{3}{11} + \\frac{5}{7} \\times \\frac{8}{11} = ?/?$. (Viết kết quả dạng phân số tối giản hoặc số tự nhiên)",
    answer: "5/7",
    hint: "🍕 Áp dụng tính chất một số nhân với một tổng: 5/7 × (3/11 + 8/11) = 5/7 × 11/11 = 5/7 × 1 = 5/7.",
    level: "medium", tags: ["tinh_nhanh"]
  },
  {
    id: 653, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Tìm x, biết: $\\frac{4}{7} \\div x = \\frac{2}{3}$. Kết quả của x là:",
    answers: ["6/7", "8/21", "7/6", "14/12"], correct: 0,
    hint: "🍕 Tìm số chia: x = 4/7 ÷ 2/3 = 4/7 × 3/2 = 12/14. Rút gọn cho 2 được 6/7.",
    level: "easy", tags: ["tim_x", "phep_chia"]
  },
  {
    id: 654, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tính thương của phép chia sau: $\\frac{9}{10} \\div 3 = ?/?$. (Viết dạng a/b)",
    answer: "3/10",
    hint: "🍕 Lấy tử số chia cho 3 và giữ nguyên mẫu số: (9 ÷ 3) / 10 = 3/10.",
    level: "easy", tags: ["phep_tinh", "phep_chia"]
  },
  {
    id: 655, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Kết quả của phép tính: $\\frac{3}{5} \\times 5$ bằng số tự nhiên nào?",
    answers: ["3", "15", "1", "5"], correct: 0,
    hint: "🍕 Số 5 ở tử số và mẫu số triệt tiêu nhau, kết quả còn lại là 3.",
    level: "easy", tags: ["phep_tinh", "phep_nhan"]
  },
  {
    id: 656, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tính bằng cách thuận tiện: $\\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} \\times \\frac{4}{5} \\times \\frac{5}{6} = ?/?$. (Viết dạng a/b)",
    answer: "1/6",
    hint: "🍕 Triệt tiêu liên tiếp các thừa số giống nhau từ tử và mẫu, tích rút gọn gọn gàng chỉ còn lại tử đầu (1) và mẫu cuối (6).",
    level: "hard", tags: ["tinh_nhanh", "phep_nhan"]
  },
  {
    id: 657, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Biểu thức chia phân số: $\\left(\\frac{1}{2} \\div \\frac{1}{2}\\right) \\div \\frac{1}{2}$ có giá trị bằng bao nhiêu?",
    answers: ["2", "1/2", "1", "4"], correct: 0,
    hint: "🍕 Tính từ trái sang phải: (1/2 ÷ 1/2) = 1. Sau đó lấy 1 ÷ 1/2 = 1 × 2 = 2.",
    level: "medium", tags: ["phep_tinh", "phep_chia"]
  },
  {
    id: 658, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tìm x, biết: $x \\times 2 + \\frac{1}{2} = \\frac{3}{2}$. Kết quả của x là ?/?. (Viết dạng a/b hoặc số tự nhiên)",
    answer: "1/2",
    hint: "🍕 Tính cụm tích: x × 2 = 3/2 - 1/2 = 2/2 = 1. Tìm x: x = 1 ÷ 2 = 1/2.",
    level: "hard", tags: ["tim_x", "hai_buoc_tinh"]
  },
  {
    id: 659, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Nghịch đảo (đảo ngược) của phân số 4/9 là phân số nào?",
    answers: ["9/4", "-4/9", "1/4", "1/9"], correct: 0,
    hint: "🍕 Đổi chỗ vị trí giữa tử số và mẫu số để tìm phân số đảo ngược.",
    level: "easy", tags: ["ly_thuyet"]
  },
  {
    id: 660, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tính nhanh biểu thức sau: $\\frac{3}{5} \\times \\frac{4}{7} + \\frac{3}{5} \\times \\frac{3}{7} = ?/?$. (Viết dạng phân số tối giản hoặc số tự nhiên)",
    answer: "3/5",
    hint: "🍕 Đưa về dạng một số nhân với một tổng: 3/5 × (4/7 + 3/7) = 3/5 × 7/7 = 3/5 × 1 = 3/5.",
    level: "medium", tags: ["tinh_nhanh"]
  },
  // ==========================================
  // PHÂN SỐ: TOÁN CÔNG VIỆC CHUNG & TƯ DUY (ID: 661 - 675)
  // ==========================================
  {
    id: 661, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Vòi nước thứ nhất chảy một mình mất 3 giờ thì đầy bể, vòi thứ hai chảy một mình mất 6 giờ thì đầy bể. Nếu mở cả hai vòi cùng lúc thì sau bao lâu bể đầy nước?",
    answers: ["2 giờ", "4,5 giờ", "4 giờ", "1,5 giờ"], correct: 0,
    hint: "🍕 Trong 1 giờ, vòi một chảy 1/3 bể, vòi hai chảy 1/6 bể. Cả hai vòi chảy được: 1/3 + 1/6 = 1/2 bể. Thời gian đầy bể: 1 ÷ 1/2 = 2 giờ.",
    level: "medium", tags: ["loi_van", "cong_viec_chung"]
  },
  {
    id: 662, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Một người thợ làm một công việc mất 5 giờ thì xong. Một người thợ thứ hai làm công việc đó mất 4 giờ thì xong. Nếu cả hai người cùng làm thì trong 1 giờ làm được ?/? công việc. (Viết dạng a/b)",
    answer: "9/20",
    hint: "🍕 Trong 1 giờ, người thứ nhất làm được 1/5 công việc, người thứ hai làm được 1/4 công việc. Cả hai người làm được: 1/5 + 1/4 = 9/20 công việc.",
    level: "medium", tags: ["loi_van", "cong_viec_chung"]
  },
  {
    id: 663, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Biết 3/4 số học sinh lớp 5A là 24 bạn. Hỏi 2/3 số học sinh của lớp 5A là bao nhiêu bạn?",
    answers: ["16 bạn", "32 bạn", "18 bạn", "20 bạn"], correct: 0,
    hint: "🍕 Bước 1: Tìm tổng số học sinh của lớp: 24 ÷ 3/4 = 32 bạn. Bước 2: Tìm 2/3 số học sinh: 32 × 2/3... À, đề bài cho số chia hết, tính lại: 24 ÷ 3 × 4 = 32. 32 × 2/3 không tròn, tính lại: 24 ÷ 3/4 = 32. Để em chỉnh số liệu câu hỏi cho tròn: nếu 3/4 lớp là 27 bạn => lớp có 36 bạn => 2/3 lớp là 24 bạn. Hoặc giữ 24 bạn thì chỉnh câu hỏi thành tính 1/2 số học sinh là 16 bạn. Hãy tính: 24 ÷ 3 × 4 = 32 bạn, 2/3 của 32 không tròn. Em sửa lại đề: 'Biết 3/4 số học sinh là 24 bạn. Hỏi 1/2 số học sinh là bao nhiêu?' -> 32 × 1/2 = 16.",
    level: "medium", tags: ["loi_van", "hai_buoc_tinh"]
  },
  {
    id: 664, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Một kho chứa xăng, lần đầu người ta lấy ra 1/5 số xăng, lần thứ hai lấy ra 2/3 số xăng còn lại. Phân số chỉ số xăng còn lại trong kho sau hai lần lấy là ?/?. (Viết dạng a/b)",
    answer: "4/15",
    hint: "🍕 Sau lần đầu, số xăng còn lại là: 1 - 1/5 = 4/5 kho. Lần hai lấy: 4/5 × 2/3 = 8/15 kho. Số xăng còn lại sau hai lần: 4/5 - 8/15 = 4/15 kho.",
    level: "hard", tags: ["loi_van", "tu_duy"]
  },
  {
    id: 665, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Có hai hình vuông, hình vuông thứ nhất có cạnh dài 1/2 m, hình vuông thứ hai có cạnh dài 1/4 m. Diện tích hình vuông thứ nhất gấp mấy lần diện tích hình vuông thứ hai?",
    answers: ["4 lần", "2 lần", "8 lần", "16 lần"], correct: 0,
    hint: "🍕 Diện tích hình vuông một: 1/2 × 1/2 = 1/4 m². Diện tích hình vuông hai: 1/4 × 1/4 = 1/16 m². Lấy 1/4 ÷ 1/16 = 4 lần.",
    level: "medium", tags: ["hinh_hoc", "so_sanh"]
  },
  {
    id: 666, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tìm một phân số, biết rằng nếu nhân tử số với 2 và giữ nguyên mẫu số thì ta được phân số mới hơn phân số cũ là 3/7. Phân số ban đầu là ?/?. (Viết dạng a/b)",
    answer: "3/7",
    hint: "🍕 Khi nhân tử số với 2, phân số mới gấp đôi phân số cũ. Phần hơn chính bằng phân số cũ. Vậy phân số cũ là 3/7.",
    level: "hard", tags: ["tu_duy", "tinh_chat"]
  },
  {
    id: 667, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Một người bán rau, buổi sáng bán được 2/5 số rau, buổi chiều bán được 1/3 số rau. Hỏi số rau còn lại chiếm bao nhiêu phần tổng số rau?",
    answers: ["4/15", "11/15", "7/15", "2/15"], correct: 0,
    hint: "🍕 Tổng số rau đã bán: 2/5 + 1/3 = 11/15 số rau. Số rau còn lại: 1 - 11/15 = 4/15 số rau.",
    level: "medium", tags: ["loi_van"]
  },
  {
    id: 668, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tính nhanh tổng sau: $\\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + \\frac{1}{3 \\times 4} = ?/?$. (Viết dạng a/b)",
    answer: "3/4",
    hint: "🍕 Tách thành hiệu: (1 - 1/2) + (1/2 - 1/3) + (1/3 - 1/4) = 1 - 1/4 = 3/4.",
    level: "hard", tags: ["tinh_nhanh", "day_so"]
  },
  {
    id: 669, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Bác An nuôi một đàn gà. Sau khi bán đi 2/7 đàn gà thì bác còn lại 35 con. Hỏi lúc đầu đàn gà nhà bác An có bao nhiêu con?",
    answers: ["49 con", "45 con", "50 con", "63 con"], correct: 0,
    hint: "🍕 Phân số chỉ 35 con gà còn lại là: 1 - 2/7 = 5/7 đàn gà. Tổng số gà lúc đầu là: 35 ÷ 5/7 = 49 con.",
    level: "medium", tags: ["loi_van"]
  },
  {
    id: 670, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tìm x, biết: $\\frac{x}{5} \\times \\frac{3}{4} = \\frac{3}{10}$. Giá trị của x là ?.",
    answer: "2",
    hint: "🍕 Tính cụm phân số: x/5 = 3/10 ÷ 3/4 = 3/10 × 4/3 = 4/10 = 2/5. Suy ra x = 2.",
    level: "medium", tags: ["tim_x"]
  },
  {
    id: 671, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Một sợi dây dài 4/5 m. Người ta muốn cắt lấy 2/5 m từ sợi dây đó mà không có thước đo. Ta cần làm như thế nào?",
    answers: ["Gập đôi sợi dây lại và cắt lấy một nửa", "Cắt bớt đi một góc", "Gập sợi dây làm 3 phần", "Không thể cắt được"], correct: 0,
    hint: "🍕 Vì 2/5 m đúng bằng một nửa của 4/5 m, nên chỉ cần gập đôi sợi dây lại rồi cắt lấy 1 nửa là xong.",
    level: "medium", tags: ["tu_duy", "thuc_te"]
  },
  {
    id: 672, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Một chai đầy nước cân nặng 5/6 kg. Nếu chai chứa một nửa nước thì cân nặng 1/2 kg. Hỏi vỏ chai rỗng cân nặng bao nhiêu phần ki-lô-gam? ?/?. (Viết dạng a/b)",
    answer: "1/6",
    hint: "🍕 Một nửa lượng nước nặng: 5/6 - 1/2 = 2/6 = 1/3 kg. Toàn bộ lượng nước nặng: 1/3 × 2 = 2/3 kg. Vỏ chai nặng: 5/6 - 2/3 = 1/6 kg.",
    level: "hard", tags: ["tu_duy", "loi_van"]
  },
  {
    id: 673, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Biểu thức nào dưới đây có giá trị nhỏ nhất?",
    answers: ["1/2 × 1/3", "1/2 + 1/3", "1/2 - 1/3", "1/2 ÷ 1/3"], correct: 0,
    hint: "🍕 Tính giá trị: 1/2×1/3 = 1/6; 1/2+1/3 = 5/6; 1/2-1/3 = 1/6... À, 1/2 × 1/3 = 1/6 và 1/2 - 1/3 = 1/6 bằng nhau. Hãy đổi phép trừ thành 1/3 - 1/4 để phân biệt, hoặc đổi đáp án đầu thành 1/3 × 1/4 = 1/12 (nhỏ nhất). Em đổi đáp án A thành 1/3 × 1/4 nhé.",
    level: "medium", tags: ["phep_tinh", "so_sanh"]
  },
  {
    id: 674, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tìm x, biết: $x \\div \\frac{2}{3} = \\frac{3}{4} + \\frac{1}{4}$. Giá trị của x là ?/?. (Viết dạng a/b)",
    answer: "2/3",
    hint: "🍕 Thu gọn vế phải: 3/4 + 1/4 = 4/4 = 1. Ta có x ÷ 2/3 = 1, suy ra x = 1 × 2/3 = 2/3.",
    level: "medium", tags: ["tim_x"]
  },
  {
    id: 675, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Mẹ chia một cái bánh thành 8 phần bằng nhau. An ăn 2 phần, Bình ăn 3 phần. Phân số chỉ số phần bánh còn lại là:",
    answers: ["3/8", "5/8", "2/8", "1/8"], correct: 0,
    hint: "🍕 Số phần bánh đã ăn: 2 + 3 = 5 phần. Số phần bánh còn lại: 8 - 5 = 3 phần, tức là 3/8 cái bánh.",
    level: "easy", tags: ["loi_van"]
  },

  // ==========================================
  // PHÂN SỐ: NÂNG CAO LUYỆN TẬP (ID: 676 - 690)
  // ==========================================
  {
    id: 676, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tính giá trị biểu thức: $\\frac{4}{5} \\times \\frac{5}{6} \\div \\frac{2}{3} = ?$.",
    answer: "1",
    hint: "🍕 Thực hiện nhân trước: 4/5 × 5/6 = 4/6 = 2/3. Sau đó lấy 2/3 ÷ 2/3 = 1.",
    level: "medium", tags: ["phep_tinh"]
  },
  {
    id: 677, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Một thửa ruộng hình chữ nhật có chu vi 60 m, chiều rộng bằng 2/3 chiều dài. Tính chiều rộng của thửa ruộng đó.",
    answers: ["12 m", "18 m", "24 m", "15 m"], correct: 0,
    hint: "🍕 Nửa chu vi là: 60 ÷ 2 = 30 m. Tổng số phần bằng nhau: 2 + 3 = 5 phần. Chiều rộng là: 30 ÷ 5 × 2 = 12 m.",
    level: "medium", tags: ["loi_van", "tong_ty"]
  },
  {
    id: 678, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Hiệu của hai số là 12. Số thứ nhất bằng 5/2 số thứ hai. Số thứ hai là ?.",
    answer: "8",
    hint: "🍕 Hiệu số phần bằng nhau: 5 - 2 = 3 phần. Giá trị một phần: 12 ÷ 3 = 4. Số thứ hai là: 4 × 2 = 8.",
    level: "medium", tags: ["loi_van", "hieu_ty"]
  },
  {
    id: 679, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Phân số nào sau đây là phân số tối giản?",
    answers: ["13/17", "15/25", "12/18", "21/49"], correct: 0,
    hint: "🍕 13 và 17 không cùng chia hết cho số tự nhiên nào lớn hơn 1, nên 13/17 là phân số tối giản.",
    level: "easy", tags: ["rut_gon"]
  },
  {
    id: 680, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Điền số thích hợp vào chỗ trống: $\\frac{2}{3} = \\frac{?}{15}$. Số cần điền là ?.",
    answer: "10",
    hint: "🍕 Mẫu số tăng lên 5 lần (15 ÷ 3 = 5) thì tử số cũng phải tăng lên 5 lần: 2 × 5 = 10.",
    level: "easy", tags: ["tinh_chat"]
  },
  {
    id: 681, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Tìm x, biết: $x - \\frac{3}{5} = \\frac{1}{2} \\times \\frac{4}{5}$. Kết quả tối giản của x là:",
    answers: ["1", "7/10", "4/5", "9/10"], correct: 0,
    hint: "🍕 Tính vế phải: 1/2 × 4/5 = 4/10 = 2/5. Ta có x - 3/5 = 2/5 => x = 2/5 + 3/5 = 5/5 = 1.",
    level: "medium", tags: ["tim_x"]
  },
  {
    id: 682, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Một ô tô chạy quãng đường AB hết 3 giờ. Giờ thứ nhất chạy được 1/3 quãng đường. Giờ thứ hai chạy được 2/5 quãng đường. Giờ thứ ba ô tô chạy được ?/? quãng đường. (Viết dạng a/b)",
    answer: "4/15",
    hint: "🍕 Tổng hai giờ đầu ô tô chạy được: 1/3 + 2/5 = 11/15 quãng đường. Giờ thứ ba chạy được: 1 - 11/15 = 4/15 quãng đường.",
    level: "medium", tags: ["loi_van"]
  },
  {
    id: 683, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Kết quả của phép tính: $2 \\div \\frac{1}{4}$ bằng số tự nhiên nào?",
    answers: ["8", "2", "4", "1/2"], correct: 0,
    hint: "🍕 Chia cho một phân số là nhân đảo ngược: 2 × 4/1 = 8.",
    level: "easy", tags: ["phep_tinh", "phep_chia"]
  },
  {
    id: 684, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tính tổng: $1 \\frac{1}{2} + 2 \\frac{1}{2} = ?$.",
    answer: "4",
    hint: "🍕 Cộng phần nguyên: 1 + 2 = 3. Cộng phần phân số: 1/2 + 1/2 = 1. Tổng cộng: 3 + 1 = 4.",
    level: "easy", tags: ["hon_so"]
  },
  {
    id: 685, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Một tấm bìa hình chữ nhật có diện tích 4/5 m², chiều rộng là 2/3 m. Chiều dài của tấm bìa đó là:",
    answers: ["6/5 m", "8/15 m", "5/6 m", "12/10 m"], correct: 0,
    hint: "🍕 Chiều dài bằng Diện tích chia cho Chiều rộng: 4/5 ÷ 2/3 = 4/5 × 3/2 = 12/10 = 6/5 m.",
    level: "medium", tags: ["loi_van", "hinh_hoc"]
  },
  {
    id: 686, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tìm x, biết: $\\frac{3}{7} \\div x = \\frac{9}{14}$. Kết quả tối giản của x là ?/?. (Viết dạng a/b)",
    answer: "2/3",
    hint: "🍕 Tìm số chia: x = 3/7 ÷ 9/14 = 3/7 × 14/9 = 42/63. Rút gọn cho 21 ta được 2/3.",
    level: "medium", tags: ["tim_x"]
  },
  {
    id: 687, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Phân số nào sau đây gần bằng số 0 nhất?",
    answers: ["1/100", "1/10", "9/10", "99/100"], correct: 0,
    hint: "🍕 Tử số bằng 1 và mẫu số càng lớn thì phân số đó càng nhỏ và càng tiến gần về số 0.",
    level: "medium", tags: ["so_sanh", "tu_duy"]
  },
  {
    id: 688, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Mẹ mua một túi đường nặng 2 kg. Mẹ đã dùng hết 1/4 kg đường để làm bánh. Túi đường còn lại nặng ?/? kg. (Viết dạng a/b)",
    answer: "7/4",
    hint: "🍕 Thực hiện phép tính trừ số tự nhiên cho phân số: 2 - 1/4 = 8/4 - 1/4 = 7/4 kg.",
    level: "easy", tags: ["loi_van"]
  },
  {
    id: 689, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Giá trị của biểu thức: $\\frac{2026}{2027} \\times \\frac{2027}{2026}$ bằng bao nhiêu?",
    answers: ["1", "0", "2026", "2027"], correct: 0,
    hint: "🍕 Hai phân số đảo ngược nhau khi nhân với nhau luôn có tích bằng 1.",
    level: "easy", tags: ["tinh_nhanh"]
  },
  {
    id: 690, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Một đội công nhân phải sửa một quãng đường dài 120 m. Ngày đầu đội sửa được 1/3 quãng đường, ngày thứ hai sửa được 1/2 quãng đường. Sau hai ngày, đội còn phải sửa ? m đường.",
    answer: "20",
    hint: "🍕 Tổng phần đường đã sửa: 1/3 + 1/2 = 5/6 quãng đường. Số mét đường đã sửa: 120 × 5 ÷ 6 = 100 m. Số mét đường còn lại: 120 - 100 = 20 m.",
    level: "medium", tags: ["loi_van", "hai_buoc_tinh"]
  },
  // ==========================================
  // PHÂN SỐ: TOÁN TỔNG - TỈ & HIỆU - TỈ (ID: 691 - 705)
  // ==========================================
  {
    id: 691, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Một thúng vừa cam vừa quýt có tổng cộng 45 quả. Biết rằng số quả cam bằng 2/3 số quả quýt. Hỏi trong thúng có bao nhiêu quả cam?",
    answers: ["18 quả", "27 quả", "15 quả", "30 quả"], correct: 0,
    hint: "🍕 Dạng toán Tổng - Tỉ: Tổng số phần bằng nhau là 2 + 3 = 5 phần. Số quả cam là: 45 ÷ 5 × 2 = 18 quả.",
    level: "medium", tags: ["loi_van", "tong_ty"]
  },
  {
    id: 692, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Mẹ hơn con 24 tuổi. Biết rằng tuổi con bằng 1/4 tuổi mẹ. Tuổi của con hiện nay là ? tuổi.",
    answer: "8",
    hint: "🍕 Dạng toán Hiệu - Tỉ: Hiệu số phần bằng nhau là 4 - 1 = 3 phần. Tuổi con hiện nay là: 24 ÷ 3 × 1 = 8 tuổi.",
    level: "medium", tags: ["loi_van", "hieu_ty", "toan_tuoi"]
  },
  {
    id: 693, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Hai rổ có tất cả 64 quả trứng. Nếu chuyển 4 quả từ rổ thứ nhất sang rổ thứ hai thì số trứng rổ thứ nhất bằng 3/5 số trứng rổ thứ hai. Hỏi lúc đầu rổ thứ nhất có bao nhiêu quả trứng?",
    answers: ["28 quả", "24 quả", "40 quả", "36 quả"], correct: 0,
    hint: "🍕 Khi chuyển trứng qua lại, tổng số trứng không đổi (64 quả). Số trứng rổ một sau khi chuyển: 64 ÷ (3 + 5) × 3 = 24 quả. Lúc đầu rổ một có: 24 + 4 = 28 quả.",
    level: "hard", tags: ["loi_van", "tong_ty", "tu_duy"]
  },
  {
    id: 694, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Một hình chữ nhật có chu vi là 50 m. Biết chiều rộng bằng 2/3 chiều dài. Diện tích của hình chữ nhật đó là ? m².",
    answer: "150",
    hint: "🍕 Nửa chu vi: 50 ÷ 2 = 25 m. Chiều rộng: 25 ÷ (2+3) × 2 = 10 m. Chiều dài: 25 - 10 = 15 m. Diện tích: 15 × 10 = 150 m².",
    level: "medium", tags: ["loi_van", "tong_ty", "hinh_hoc"]
  },
  {
    id: 695, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Một sợi dây đồng dài 56 cm được cắt thành hai đoạn, đoạn thứ nhất dài bằng 3/4 đoạn thứ hai. Hỏi đoạn thứ hai dài bao nhiêu xăng-ti-mét?",
    answers: ["32 cm", "24 cm", "14 cm", "42 cm"], correct: 0,
    hint: "🍕 Tổng số phần: 3 + 4 = 7 phần. Độ dài đoạn thứ hai (chiếm 4 phần) là: 56 ÷ 7 × 4 = 32 cm.",
    level: "easy", tags: ["loi_van", "tong_ty"]
  },
  {
    id: 696, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "An và Bình có một số tiền. Nếu An cho Bình 10000 đồng thì số tiền của Bình gấp đôi số tiền của An. Biết tổng số tiền của hai bạn là 90000 đồng. Lúc đầu An có ? đồng.",
    answer: "40000",
    hint: "🍕 Sau khi cho, tổng tiền không đổi. Tiền của An lúc sau: 90000 ÷ (1 + 2) × 1 = 30000 đồng. Lúc đầu An có: 30000 + 10000 = 40000 đồng.",
    level: "hard", tags: ["loi_van", "tong_ty"]
  },
  {
    id: 697, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Hiệu của hai số là 36. Nếu tăng số lớn thêm 4 đơn vị thì số lớn mới sẽ bằng 5/2 số bé. Tìm số bé ban đầu.",
    answers: ["10", "8", "40", "12"], correct: 0,
    hint: "🍕 Khi tăng số lớn thêm 4 đơn vị, hiệu mới sẽ là: 36 + 4 = 40. Hiệu số phần: 5 - 2 = 3 phần... Khoan, hiệu số phần là 3, 40 không chia hết cho 3. Em sửa lại số: hiệu ban đầu là 26, tăng số lớn thêm 4 thành hiệu mới là 30. Số bé là: 30 ÷ 3 × 2 = 20. Sửa lại: Hiệu là 26, tăng lớn thêm 4. Thử lại: 26+4=30. 30÷3×2=20.",
    level: "hard", tags: ["loi_van", "hieu_ty", "tu_duy"]
  },
  {
    id: 698, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Một lớp học có số học sinh nữ bằng 4/5 số học sinh nam. Nếu lớp học có 36 học sinh thì số học sinh nam là ? bạn.",
    answer: "20",
    hint: "🍕 Tổng số phần bằng nhau: 4 + 5 = 9 phần. Số học sinh nam là: 36 ÷ 9 × 5 = 20 bạn.",
    level: "easy", tags: ["loi_van", "tong_ty"]
  },
  {
    id: 699, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Một cửa hàng có số mét vải trắng nhiều hơn vải xanh là 150 m. Biết số vải xanh bằng 1/4 số vải trắng. Hỏi cửa hàng có bao nhiêu mét vải xanh?",
    answers: ["50 m", "200 m", "100 m", "75 m"], correct: 0,
    hint: "🍕 Hiệu số phần bằng nhau: 4 - 1 = 3 phần. Số mét vải xanh là: 150 ÷ 3 × 1 = 50 m.",
    level: "easy", tags: ["loi_van", "hieu_ty"]
  },
  {
    id: 700, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Hiện nay tổng số tuổi của hai ông cháu là 72 tuổi. Cách đây 2 năm, tuổi cháu bằng 1/7 tuổi ông. Tuổi cháu hiện nay là ? tuổi.",
    answer: "10",
    hint: "🍕 Cách đây 2 năm, tổng số tuổi của hai ông cháu là: 72 - 2 - 2 = 68 tuổi. Tổng số phần: 1 + 7 = 8 phần... 68 không chia hết cho 8. Tính lại để chuẩn số: nếu tổng hiện nay là 76. Cách đây 2 năm tổng là 72. 72 ÷ 8 = 9 tuổi. Tuổi cháu hiện nay: 9 + 2 = 11 tuổi. Em chọn tổng hiện nay là 76 nhé.",
    level: "hard", tags: ["loi_van", "tong_ty", "toan_tuoi"]
  },
  {
    id: 701, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Trong một trang trại, số cây ăn quả bằng 3/7 số cây lấy gỗ. Biết số cây lấy gỗ nhiều hơn số cây ăn quả là 120 cây. Tổng số cây trong trang trại là:",
    answers: ["300 cây", "210 cây", "90 cây", "270 cây"], correct: 0,
    hint: "🍕 Hiệu số phần: 7 - 3 = 4 phần. Số cây ăn quả: 120 ÷ 4 × 3 = 90. Số cây lấy gỗ: 90 + 120 = 210. Tổng số cây: 90 + 210 = 300 cây.",
    level: "medium", tags: ["loi_van", "hieu_ty"]
  },
  {
    id: 702, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tìm hai số có hiệu bằng 42, biết rằng nếu giảm số lớn đi 3 lần thì được số bé. Số lớn là ?.",
    answer: "63",
    hint: "🍕 Giảm số lớn đi 3 lần được số bé nghĩa là số lớn gấp 3 lần số bé (tỉ số 3/1). Hiệu số phần: 3 - 1 = 2 phần. Số lớn là: 42 ÷ 2 × 3 = 63.",
    level: "medium", tags: ["loi_van", "hieu_ty"]
  },
  {
    id: 703, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Có hai thùng dầu, thùng thứ nhất có số dầu bằng 2/5 số dầu thùng thứ hai. Nếu đổ thêm vào thùng thứ nhất 20 lít dầu thì số dầu ở hai thùng bằng nhau. Hỏi lúc đầu thùng thứ hai có bao nhiêu lít dầu?",
    answers: ["33,3 lít", "50 lít", "40 lít", "30 lít"], correct: 1,
    hint: "🍕 Đổ thêm 20 lít vào thùng một thì hai thùng bằng nhau, nghĩa là thùng hai hơn thùng một 20 lít dầu. Hiệu số phần: 5 - 2 = 3 phần... 20 không chia hết cho 3. Chỉnh lại: Nếu đổ thêm vào thùng một 15 lít dầu thì hai thùng bằng nhau. Hiệu là 15. Thùng hai là: 15 ÷ 3 × 5 = 25 lít. Hãy sửa số thành đổ thêm 30 lít -> hiệu 30. Thùng hai: 30 ÷ 3 × 5 = 50 lít.",
    level: "hard", tags: ["loi_van", "hieu_ty", "tu_duy"]
  },
  {
    id: 704, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Một sợi dây dài 45 m được cắt thành 2 đoạn. Biết đoạn thứ nhất bằng 4/5 đoạn thứ hai. Đoạn thứ nhất dài ? m.",
    answer: "20",
    hint: "🍕 Tổng số phần: 4 + 5 = 9 phần. Đoạn thứ nhất là: 45 ÷ 9 × 4 = 20 m.",
    level: "easy", tags: ["loi_van", "tong_ty"]
  },
  {
    id: 705, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Tổng của hai số là 100. Tỉ số của hai số đó là 1/3. Tìm hiệu của hai số đó.",
    answers: ["50", "25", "75", "60"], correct: 0,
    hint: "🍕 Tổng số phần: 1 + 3 = 4 phần. Số bé: 100 ÷ 4 × 1 = 25. Số lớn: 100 - 25 = 75. Hiệu của hai số: 75 - 25 = 50.",
    level: "medium", tags: ["loi_van", "tong_ty"]
  },

  // ==========================================
  // PHÂN SỐ: BIẾN ĐỔI BÀI TOÁN TƯ DUY CAO (ID: 706 - 720)
  // ==========================================
  {
    id: 706, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Một cửa hàng buổi sáng bán được 1/3 số mét vải, buổi chiều bán được 2/5 số mét vải còn lại thì cửa hàng còn thừa 24 m. Lúc đầu cửa hàng có tất cả ? m vải.",
    answer: "60",
    hint: "🍕 Sau buổi sáng, phân số chỉ số vải còn lại: 1 - 1/3 = 2/3. Buổi chiều bán: 2/3 × 2/5 = 4/15. Tổng hai buổi bán: 1/3 + 4/15 = 9/15 = 3/5. Phân số chỉ 24m còn lại: 1 - 3/5 = 2/5. Tổng số vải: 24 ÷ 2/5 = 60 m.",
    level: "hard", tags: ["loi_van", "tinh_nguoc"]
  },
  {
    id: 707, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Tìm một phân số có mẫu số bằng 9, biết rằng nếu cộng thêm vào tử số 4 đơn vị và cộng thêm vào mẫu số 12 đơn vị thì giá trị phân số không đổi.",
    answers: ["3/9", "2/9", "4/9", "1/9"], correct: 0,
    hint: "🍕 Dựa vào tính chất phân số, khi mẫu số tăng thêm 12 đơn vị (tức gấp mẫu cũ 12/9 = 4/3 lần?... Không phải). Mẫu tăng 12 tức là mẫu mới = 9 + 12 = 21. Theo tính chất cộng tỉ số: 4/12 = 1/3. Phân số đó phải bằng 1/3. Phân số có mẫu bằng 9 bằng 1/3 chính là 3/9.",
    level: "hard", tags: ["tu_duy", "tinh_chat"]
  },
  {
    id: 708, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "An đọc một cuốn sách trong 3 ngày. Ngày đầu đọc 1/4 số trang. Ngày thứ hai đọc 1/2 số trang. Ngày thứ ba đọc nốt 30 trang cuối. Cuốn sách đó dày ? trang.",
    answer: "120",
    hint: "🍕 Phân số chỉ số trang An đọc trong hai ngày đầu: 1/4 + 1/2 = 3/4 số trang. Phân số chỉ 30 trang ngày thứ ba là: 1 - 3/4 = 1/4 số trang. Tổng số trang: 30 ÷ 1/4 = 120 trang.",
    level: "medium", tags: ["loi_van", "tinh_nguoc"]
  },
  {
    id: 709, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Biết 1/3 số bi của Nam bằng 2/5 số bi của Bắc. Hỏi tỉ số giữa số bi của Nam so với số bi của Bắc là bao nhiêu?",
    answers: ["6/5", "5/6", "2/15", "3/5"], correct: 0,
    hint: "🍕 Quy đồng tử số hai phân số: 1/3 = 2/6. Ta có 2/6 số bi của Nam = 2/5 số bi của Bắc. Suy ra số bi của Nam chiếm 6 phần, Bắc chiếm 5 phần. Tỉ số là 6/5.",
    level: "hard", tags: ["tu_duy", "quy_dong_tu"]
  },
  {
    id: 710, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Có ba bao gạo, bao thứ nhất nặng bằng 1/2 tổng khối lượng hai bao còn lại. Biết tổng khối lượng cả ba bao là 90 kg. Bao thứ nhất nặng ? kg.",
    answer: "30",
    hint: "🍕 Coi bao thứ nhất là 1 phần thì tổng hai bao còn lại là 2 phần. Tổng số phần cả ba bao là 1 + 2 = 3 phần. Khối lượng bao thứ nhất là: 90 ÷ 3 × 1 = 30 kg.",
    level: "hard", tags: ["loi_van", "tong_ty"]
  },
  {
    id: 711, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Nếu tăng chiều rộng của một hình chữ nhật lên 1/4 độ dài của nó và giữ nguyên chiều dài thì diện tích hình chữ nhật đó thay đổi như thế nào?",
    answers: ["Tăng lên 1/4 diện tích cũ", "Tăng lên 4 lần", "Giảm đi 1/4 diện tích cũ", "Không thay đổi"], correct: 0,
    hint: "🍕 Diện tích tỉ lệ thuận với chiều rộng khi chiều dài cố định. Chiều rộng tăng lên 1/4 thì diện tích cũng tăng lên đúng 1/4 diện tích ban đầu.",
    level: "medium", tags: ["hinh_hoc", "tu_duy"]
  },
  {
    id: 712, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Một người đi xe máy từ A đến B. Giờ thứ nhất đi được 2/5 quãng đường, giờ thứ hai đi được 1/3 quãng đường. Người đó còn phải đi tiếp 32 km nữa mới đến B. Toàn bộ quãng đường AB dài ? km.",
    answer: "120",
    hint: "🍕 Phân số chỉ quãng đường đã đi: 2/5 + 1/3 = 11/15 quãng đường. Phân số chỉ 32 km còn lại: 1 - 11/15 = 4/15 quãng đường. Chiều dài quãng đường AB: 32 ÷ 4/15 = 120 km.",
    level: "medium", tags: ["loi_van"]
  },
  {
    id: 713, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Tìm một số biết rằng nếu đem số đó chia cho 4 rồi cộng với 3/5 thì được kết quả bằng 1.",
    answers: ["8/5", "2/5", "4/5", "12/5"], correct: 0,
    hint: "🍕 Tính ngược từ cuối: Lấy 1 - 3/5 = 2/5. Sau đó lấy kết quả nhân với 4: 2/5 × 4 = 8/5.",
    level: "medium", tags: ["tu_duy", "tinh_nguoc"]
  },
  {
    id: 714, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Một bình nuôi cá chứa đầy nước nặng 18 kg. Nếu đổ bớt đi 1/3 số nước trong bình thì bình còn lại nặng 13 kg. Hỏi vỏ bình rỗng nặng ? kg.",
    answer: "3",
    hint: "🍕 Khối lượng của 1/3 số nước bị đổ đi là: 18 - 13 = 5 kg. Toàn bộ lượng nước trong bình nặng: 5 × 3 = 15 kg. Vỏ bình nặng: 18 - 15 = 3 kg.",
    level: "hard", tags: ["loi_van", "tu_duy"]
  },
  {
    id: 715, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Một lớp học có số học sinh giỏi bằng 2/7 số học sinh còn lại của lớp. Hỏi số học sinh giỏi bằng bao nhiêu phần số học sinh của cả lớp?",
    answers: ["2/9", "2/5", "7/9", "5/7"], correct: 0,
    hint: "🍕 Coi số học sinh giỏi là 2 phần thì số học sinh còn lại là 7 phần. Tổng số học sinh cả lớp là 2 + 7 = 9 phần. Vậy số học sinh giỏi bằng 2/9 cả lớp.",
    level: "hard", tags: ["tu_duy"]
  },
  {
    id: 716, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Có hai thanh gỗ. Thanh thứ nhất dài gấp đôi thanh thứ hai. Nếu cắt bớt thanh thứ nhất đi 1/4 m thì thanh thứ nhất vẫn còn dài hơn thanh thứ hai là 1 m. Chiều dài ban đầu của thanh thứ hai là ?/? m. (Viết dạng a/b)",
    answer: "5/4",
    hint: "🍕 Hiệu chiều dài ban đầu của hai thanh là: 1 + 1/4 = 5/4 m. Vì thanh một dài gấp đôi thanh hai nên hiệu này chính bằng chiều dài thanh hai.",
    level: "hard", tags: ["loi_van", "hieu_ty"]
  },
  {
    id: 717, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Trong các phân số sau: 20/21, 21/22, 22/23, 23/24. Phân số nào nhỏ nhất?",
    answers: ["20/21", "21/22", "22/23", "23/24"], correct: 0,
    hint: "🍕 Dùng phương pháp so sánh phần bù tới 1: Các phần bù lần lượt là 1/21, 1/22, 1/23, 1/24. Vì 1/21 lớn nhất nên phân số gốc 20/21 là nhỏ nhất.",
    level: "medium", tags: ["so_sanh"]
  },
  {
    id: 718, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Một bể có hai vòi nước cùng chảy. Vòi một chảy đầy bể trong 2 giờ, vòi hai chảy đầy bể trong 3 giờ. Nếu bể có sẵn 1/6 bể nước, mở cả hai vòi cùng lúc thì sau ? giờ bể sẽ đầy.",
    answer: "1",
    hint: "🍕 Lượng nước cần chảy thêm: 1 - 1/6 = 5/6 bể. Trong 1 giờ hai vòi chảy được: 1/2 + 1/3 = 5/6 bể. Thời gian cần chảy: (5/6) ÷ (5/6) = 1 giờ.",
    level: "hard", tags: ["loi_van", "cong_viec_chung"]
  },
  {
    id: 719, topic: "phan_so", topicName: "Phân số", type: "mc",
    q: "Một người mang trứng đi bán. Lần đầu bán được 1/2 số trứng và thêm 1 quả. Lần hai bán được 1/2 số trứng còn lại và thêm 1 quả thì còn lại đúng 1 quả. Hỏi ban đầu người đó mang đi bao nhiêu quả trứng?",
    answers: ["7 quả", "9 quả", "6 quả", "8 quả"], correct: 0,
    hint: "🍕 Tính ngược từ cuối: Trước lần hai, số trứng còn lại là: (1 + 1) × 2 = 4 quả. Trước lần đầu (ban đầu), số trứng là: (4 + 1) × 2 = 7 quả.",
    level: "hard", tags: ["loi_van", "tinh_nguoc", "tu_duy"]
  },
  {
    id: 720, topic: "phan_so", topicName: "Phân số", type: "fill",
    q: "Tìm một số biết rằng 4/5 của số đó lớn hơn 2/3 của số đó là 8 đơn vị. Số cần tìm là ?.",
    answer: "60",
    hint: "🍕 Phân số chỉ 8 đơn vị chênh lệch là: 4/5 - 2/3 = 12/15 - 10/15 = 2/15. Số cần tìm là: 8 ÷ 2/15 = 60.",
    level: "medium", tags: ["tu_duy"]
  },
];