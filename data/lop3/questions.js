const QUESTIONS = [
 

  {
    id: 1, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Tính: 6 x 7 = ?",
    answer: "42",
    hint: "Dựa vào bảng nhân 6: 6 x 6 = 36, vậy 6 x 7 = 36 + 6 = 42.",
    level: "easy", tags: ["nhan_6"]
  },
  {
    id: 2, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Kết quả của phép tính 54 : 6 là:",
    answers: ["7", "8", "9", "6"], correct: 2,
    hint: "Tìm số nào nhân với 6 bằng 54.",
    level: "easy", tags: ["chia_6"]
  },
  {
    id: 3, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Tính: 8 x 9 = ?",
    answer: "72",
    hint: "Dựa vào bảng nhân 8 hoặc nhân 9.",
    level: "easy", tags: ["nhan_8"]
  },
  {
    id: 4, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Phép chia nào dưới đây có kết quả bằng 7?",
    answers: ["48 : 6", "56 : 8", "63 : 7", "42 : 6"], correct: 1,
    hint: "56 chia 8 bằng 7.",
    level: "easy", tags: ["chia_8"]
  },
  {
    id: 5, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Tìm x, biết: 9 x x = 63. Vậy x = ?",
    answer: "7",
    hint: "Lấy 63 chia cho 9.",
    level: "medium", tags: ["tim_x", "nhan_9"]
  },
  {
    id: 6, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Số nào lớn hơn kết quả của 7 x 6?",
    answers: ["40", "42", "44", "38"], correct: 2,
    hint: "7 x 6 = 42, vậy số cần tìm phải lớn hơn 42.",
    level: "medium", tags: ["nhan_7"]
  },
  {
    id: 7, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Điền số thích hợp: 81 : 9 = ?",
    answer: "9",
    hint: "9 x 9 = 81.",
    level: "easy", tags: ["chia_9"]
  },
  {
    id: 8, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Một hộp bánh có 8 chiếc, 7 hộp như thế có bao nhiêu chiếc?",
    answers: ["54", "56", "64", "48"], correct: 1,
    hint: "Phép tính: 8 x 7.",
    level: "medium", tags: ["loi_van", "nhan_8"]
  },
  {
    id: 9, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Tính: (6 x 3) : 2 = ?",
    answer: "9",
    hint: "Thực hiện phép nhân trước: 18, sau đó chia 2.",
    level: "medium", tags: ["tinh_toan"]
  },
  {
    id: 10, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Phép tính nào có kết quả bằng 0?",
    answers: ["8 x 0", "8 : 1", "0 : 8", "Cả A và C đều đúng"], correct: 3,
    hint: "Số nào nhân 0 cũng bằng 0, 0 chia số nào khác 0 cũng bằng 0.",
    level: "medium", tags: ["tinh_chat"]
  },
  {
    id: 11, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Điền số thích hợp: 7 x 9 = ?",
    answer: "63",
    hint: "7 lần 9 là 63.",
    level: "easy", tags: ["nhan_7"]
  },
  {
    id: 12, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Kết quả của phép tính 48 : 8 bằng bao nhiêu?",
    answers: ["5", "6", "7", "8"], correct: 1,
    hint: "6 x 8 = 48.",
    level: "easy", tags: ["chia_8"]
  },
  {
    id: 13, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Tính: 6 x 8 + 6 = ?",
    answer: "54",
    hint: "Tính 6 x 8 = 48, sau đó cộng 6.",
    level: "medium", tags: ["tinh_toan"]
  },
  {
    id: 14, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Số nào thích hợp để điền vào chỗ chấm: 9 x ... = 54",
    answers: ["5", "6", "7", "8"], correct: 1,
    hint: "54 chia 9 bằng mấy?",
    level: "medium", tags: ["tim_x"]
  },
  {
    id: 15, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Tính: 72 : 9 x 6 = ?",
    answer: "48",
    hint: "Tính từ trái qua phải: 72 chia 9 bằng 8, sau đó 8 nhân 6.",
    level: "medium", tags: ["tinh_toan"]
  },
  {
    id: 16, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Trong các phép tính sau, phép nào sai?",
    answers: ["7 x 6 = 42", "8 x 9 = 72", "9 x 7 = 64", "6 x 9 = 54"], correct: 2,
    hint: "Kiểm tra bảng nhân 9: 9 x 7 = 63, không phải 64.",
    level: "medium", tags: ["tinh_toan"]
  },
  {
    id: 17, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Một lớp học có 42 học sinh, chia đều thành 6 hàng. Mỗi hàng có bao nhiêu học sinh?",
    answer: "7",
    hint: "Phép chia: 42 : 6.",
    level: "easy", tags: ["loi_van"]
  },
  {
    id: 18, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Giá trị của biểu thức 8 x 5 + 8 x 4 là:",
    answers: ["72", "80", "64", "70"], correct: 0,
    hint: "Tính nhanh: 8 x (5 + 4) = 8 x 9 = 72.",
    level: "hard", tags: ["tinh_nhanh"]
  },
  {
    id: 19, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Điền số thích hợp: 36 : 6 = ? : 2",
    answer: "12",
    hint: "36 chia 6 bằng 6. Số nào chia 2 bằng 6?",
    level: "hard", tags: ["tim_x"]
  },
  {
    id: 20, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Bố mua 6 túi cam, mỗi túi có 9 quả. Bố đã mua tất cả bao nhiêu quả cam?",
    answers: ["54", "45", "63", "56"], correct: 0,
    hint: "6 x 9 = 54.",
    level: "easy", tags: ["loi_van"]
  },
  {
    id: 21, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Tính: 9 x 8 - 15 = ?",
    answer: "57",
    hint: "9 x 8 = 72, sau đó 72 trừ 15.",
    level: "medium", tags: ["tinh_toan"]
  },
  {
    id: 22, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Phép tính nào sau đây có kết quả nhỏ hơn 10?",
    answers: ["54 : 6", "63 : 9", "72 : 8", "48 : 6"], correct: 1,
    hint: "63 : 9 = 7, các kết quả khác: 9, 9, 8.",
    level: "medium", tags: ["so_sanh"]
  },
  {
    id: 23, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Điền số vào dãy: 7, 14, 21, ..., 35.",
    answer: "28",
    hint: "Đây là kết quả của bảng nhân 7.",
    level: "easy", tags: ["quy_luat"]
  },
  {
    id: 24, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Một tấm vải dài 56m, cắt đi 1/8 tấm vải. Số vải còn lại là bao nhiêu?",
    answers: ["7m", "49m", "48m", "8m"], correct: 1,
    hint: "Cắt đi 56 : 8 = 7m. Còn lại 56 - 7 = 49m.",
    level: "medium", tags: ["loi_van"]
  },
  {
    id: 25, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Tính: 6 x 6 : 4 = ?",
    answer: "9",
    hint: "36 : 4 = 9.",
    level: "medium", tags: ["tinh_toan"]
  },
  {
    id: 26, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Điền dấu thích hợp: 8 x 7 ... 7 x 8",
    answers: [">", "<", "=", "Không xác định"], correct: 2,
    hint: "Tính chất giao hoán của phép nhân.",
    level: "easy", tags: ["tinh_chat"]
  },
  {
    id: 27, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Số nào là kết quả của 81 : 9?",
    answers: ["7", "8", "9", "6"], correct: 2,
    hint: "9 x 9 = 81.",
    level: "easy", tags: ["chia_9"]
  },
  {
    id: 28, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Mỗi con gà có 2 chân. 9 con gà có tất cả bao nhiêu chân?",
    answer: "18",
    hint: "9 x 2 = 18.",
    level: "easy", tags: ["loi_van"]
  },
  {
    id: 29, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Tìm một số biết rằng số đó chia cho 7 được 8.",
    answers: ["54", "56", "64", "48"], correct: 1,
    hint: "Số đó = 7 x 8.",
    level: "medium", tags: ["tim_x"]
  },
  {
    id: 30, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Tính: 9 x 9 - 9 x 8 = ?",
    answer: "9",
    hint: "Dùng tính chất phân phối: 9 x (9 - 8) = 9 x 1 = 9.",
    level: "hard", tags: ["tinh_nhanh"]
  },
  // ==========================================
  // BẢNG NHÂN & CHIA (6 - 9) (ID: 31 - 60)
  // ==========================================
  {
    id: 31, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Tính: 6 x 4 + 6 x 6 = ?",
    answer: "60",
    hint: "Dùng tính chất phân phối: 6 x (4 + 6) = 6 x 10 = 60.",
    level: "hard", tags: ["tinh_nhanh"]
  },
  {
    id: 32, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Trong phép chia cho 7, số dư lớn nhất có thể là bao nhiêu?",
    answers: ["5", "6", "7", "8"], correct: 1,
    hint: "Số dư luôn nhỏ hơn số chia.",
    level: "medium", tags: ["ly_thuyet"]
  },
  {
    id: 33, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Tính: 54 : 9 x 8 = ?",
    answer: "48",
    hint: "54 chia 9 bằng 6, rồi 6 nhân 8.",
    level: "medium", tags: ["tinh_toan"]
  },
  {
    id: 34, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Có 48 cái kẹo, chia đều vào các túi, mỗi túi 8 cái. Hỏi có bao nhiêu túi kẹo?",
    answers: ["5", "6", "7", "8"], correct: 1,
    hint: "48 chia 8 bằng 6.",
    level: "easy", tags: ["loi_van"]
  },
  {
    id: 35, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Điền số: 9 x ... = 36 + 18",
    answer: "6",
    hint: "36 + 18 = 54. 54 chia 9 bằng 6.",
    level: "hard", tags: ["tim_x"]
  },
  {
    id: 36, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Kết quả của 7 x 8 trừ đi 6 x 8 bằng:",
    answers: ["8", "16", "24", "0"], correct: 0,
    hint: "Tính nhanh: 8 x (7 - 6) = 8 x 1 = 8.",
    level: "hard", tags: ["tinh_nhanh"]
  },
  {
    id: 37, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Một tấm bìa hình vuông có cạnh 9cm. Chu vi tấm bìa là bao nhiêu cm?",
    answer: "36",
    hint: "Chu vi hình vuông = cạnh x 4.",
    level: "medium", tags: ["hinh_hoc", "nhan_9"]
  },
  {
    id: 38, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Số nào chia cho 6 được 9?",
    answers: ["54", "48", "63", "56"], correct: 0,
    hint: "6 x 9 = 54.",
    level: "easy", tags: ["tim_x"]
  },
  {
    id: 39, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Tính: 7 x 5 + 7 x 5 = ?",
    answer: "70",
    hint: "35 + 35 = 70.",
    level: "medium", tags: ["tinh_toan"]
  },
  {
    id: 40, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Trong các phép tính sau, kết quả nào là số lẻ?",
    answers: ["8 x 6", "9 x 8", "7 x 9", "6 x 4"], correct: 2,
    hint: "Số lẻ nhân số lẻ bằng số lẻ.",
    level: "hard", tags: ["so_chan_le"]
  },
  {
    id: 41, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Điền số: 42 : 6 = 49 : ...",
    answer: "7",
    hint: "42 chia 6 bằng 7. 49 chia 7 bằng 7.",
    level: "hard", tags: ["tinh_toan"]
  },
  {
    id: 42, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Mẹ có 63 quả cam, chia đều vào 9 túi. Mỗi túi có bao nhiêu quả?",
    answers: ["6", "7", "8", "9"], correct: 1,
    hint: "63 chia 9 bằng 7.",
    level: "easy", tags: ["loi_van"]
  },
  {
    id: 43, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Tính: 63 : 7 + 63 : 9 = ?",
    answer: "16",
    hint: "9 + 7 = 16.",
    level: "medium", tags: ["tinh_toan"]
  },
  {
    id: 44, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Phép nhân nào có tích là số tròn chục?",
    answers: ["8 x 5", "7 x 6", "9 x 7", "6 x 7"], correct: 0,
    hint: "8 x 5 = 40 (tròn chục).",
    level: "medium", tags: ["tinh_chat"]
  },
  {
    id: 45, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Tính: 9 x 4 - 6 = ?",
    answer: "30",
    hint: "36 - 6 = 30.",
    level: "easy", tags: ["tinh_toan"]
  },
  {
    id: 46, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Số nào chia cho 8 được 8?",
    answers: ["56", "64", "72", "48"], correct: 1,
    hint: "8 x 8 = 64.",
    level: "easy", tags: ["tim_x"]
  },
  {
    id: 47, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Tính: 72 : 8 + 19 = ?",
    answer: "28",
    hint: "9 + 19 = 28.",
    level: "medium", tags: ["tinh_toan"]
  },
  {
    id: 48, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Một hàng ghế có 9 chỗ ngồi. 7 hàng ghế như thế có bao nhiêu chỗ?",
    answers: ["56", "63", "72", "54"], correct: 1,
    hint: "9 x 7 = 63.",
    level: "easy", tags: ["loi_van"]
  },
  {
    id: 49, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Tính: 48 : 6 : 2 = ?",
    answer: "4",
    hint: "8 : 2 = 4.",
    level: "medium", tags: ["tinh_toan"]
  },
  {
    id: 50, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Tìm x, biết 6 x x = 6 x 8. Vậy x = ?",
    answers: ["6", "8", "48", "1"], correct: 1,
    hint: "Hai vế cùng có nhân 6, nên x = 8.",
    level: "medium", tags: ["tim_x"]
  },
  {
    id: 51, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Tính: 9 x 7 - 7 x 7 = ?",
    answer: "14",
    hint: "7 x (9 - 7) = 7 x 2 = 14.",
    level: "hard", tags: ["tinh_nhanh"]
  },
  {
    id: 52, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Phép tính nào sau đây có kết quả nhỏ nhất?",
    answers: ["56 : 8", "42 : 6", "63 : 9", "72 : 9"], correct: 3,
    hint: "Kết quả lần lượt: 7, 7, 7, 8. 7 < 8.",
    level: "medium", tags: ["so_sanh"]
  },
  {
    id: 53, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Mỗi con bò có 4 chân. 6 con bò có bao nhiêu chân?",
    answer: "24",
    hint: "6 x 4 = 24.",
    level: "easy", tags: ["loi_van"]
  },
  {
    id: 54, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Số nào khi nhân với 7 được 49?",
    answers: ["6", "7", "8", "9"], correct: 1,
    hint: "7 x 7 = 49.",
    level: "easy", tags: ["tim_x"]
  },
  {
    id: 55, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Tính: 8 x 4 + 8 x 6 = ?",
    answer: "80",
    hint: "8 x (4 + 6) = 8 x 10 = 80.",
    level: "medium", tags: ["tinh_nhanh"]
  },
  {
    id: 56, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Phép tính 36 : 6 được kết quả là:",
    answers: ["5", "6", "7", "8"], correct: 1,
    hint: "6 x 6 = 36.",
    level: "easy", tags: ["chia_6"]
  },
  {
    id: 57, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Tính: 81 : 9 + 41 = ?",
    answer: "50",
    hint: "9 + 41 = 50.",
    level: "medium", tags: ["tinh_toan"]
  },
  {
    id: 58, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Lớp học có 8 hàng, mỗi hàng 6 học sinh. Tổng số học sinh là:",
    answers: ["42", "48", "54", "46"], correct: 1,
    hint: "8 x 6 = 48.",
    level: "easy", tags: ["loi_van"]
  },
  {
    id: 59, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "fill",
    q: "Tính: 56 : 7 + 56 : 8 = ?",
    answer: "15",
    hint: "8 + 7 = 15.",
    level: "hard", tags: ["tinh_toan"]
  },
  {
    id: 60, topic: "bang_nhan_chia", topicName: "Bảng nhân & chia (6-9)", type: "mc",
    q: "Phép nhân nào cho kết quả lớn nhất?",
    answers: ["6 x 9", "7 x 8", "9 x 6", "8 x 7"], correct: 1,
    hint: "7 x 8 = 56, các phép còn lại là 54.",
    level: "hard", tags: ["so_sanh"]
  },
  // ==========================================
  // HÌNH HỌC (CHU VI, DIỆN TÍCH) (ID: 61 - 90)
  // ==========================================
   {
    id: 61, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.square(40, "11") + " Hình vuông có cạnh 11cm. Diện tích là ? cm².",
    answer: "121", hint: "Diện tích = cạnh x cạnh.", level: "medium", tags: ["dien_tich"]
  },
  {
    id: 62, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Sợi dây dài 20cm uốn thành hình vuông. Cạnh hình vuông là:",
    answers: ["4cm", "5cm", "10cm", "2cm"], correct: 1,
    hint: "Cạnh = Chu vi : 4.", level: "medium", tags: ["chu_vi"]
  },
  {
    id: 63, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.rectangle(60, 40, "10", "7") + " Diện tích hình chữ nhật là ? cm².",
    answer: "70", hint: "Diện tích = dài x rộng.", level: "easy", tags: ["dien_tich"]
  },
  {
    id: 64, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.square(40, "12") + " Chu vi hình vuông có cạnh 12m là:",
    answers: ["48m", "24m", "36m", "144m"], correct: 0,
    hint: "Chu vi = cạnh x 4.", level: "easy", tags: ["chu_vi"]
  },
  {
    id: 65, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Hình chữ nhật có chu vi 40cm, chiều rộng 8cm. Chiều dài là ? cm.",
    answer: "12", hint: "Nửa chu vi = 20. Dài = 20 - 8.", level: "medium", tags: ["chu_vi", "tim_canh"]
  },
  {
    id: 66, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Đơn vị đo diện tích nào lớn nhất?",
    answers: ["cm²", "m²", "dm²", "mm²"], correct: 1,
    hint: "So sánh các đơn vị mét vuông.", level: "easy", tags: ["dien_tich"]
  },
  {
    id: 67, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.square(40, "20") + " Hình vuông có cạnh 20cm. Chu vi là ? cm.",
    answer: "80", hint: "Chu vi = cạnh x 4.", level: "easy", tags: ["chu_vi"]
  },
  {
    id: 68, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Muốn tính nửa chu vi hình chữ nhật, ta lấy:",
    answers: ["Chu vi x 2", "Chu vi : 2", "Dài + Rộng", "Cả B và C đều đúng"], correct: 3,
    hint: "Nửa chu vi bằng chu vi chia 2 hoặc tổng chiều dài và chiều rộng.", level: "medium", tags: ["chu_vi"]
  },
  {
    id: 69, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.square(40, "6") + " Hình vuông có cạnh 6cm. Diện tích là ? cm².",
    answer: "36", hint: "Diện tích = cạnh x cạnh.", level: "easy", tags: ["dien_tich"]
  },
  {
    id: 70, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Diện tích hình vuông là 49cm². Cạnh hình vuông là:",
    answers: ["6cm", "7cm", "8cm", "9cm"], correct: 1,
    hint: "Số nào nhân với chính nó bằng 49?", level: "medium", tags: ["dien_tich"]
  },
  {
    id: 71, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.rectangle(60, 30, "9", "2") + " Chu vi hình chữ nhật là ? cm.",
    answer: "22", hint: "Chu vi = (dài + rộng) x 2.", level: "easy", tags: ["chu_vi"]
  },
  {
    id: 72, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.rectangle(60, 40, "10", "5") + " Diện tích hình chữ nhật là:",
    answers: ["15m²", "30m²", "50m²", "50m"], correct: 2,
    hint: "Diện tích = dài x rộng.", level: "easy", tags: ["dien_tich"]
  },
  {
    id: 73, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.square(40, "12") + " Hình vuông có cạnh 12dm. Diện tích là ? dm².",
    answer: "144", hint: "Diện tích = cạnh x cạnh.", level: "medium", tags: ["dien_tich"]
  },
  {
    id: 74, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.square(40, "15") + " Chu vi hình vuông có cạnh 15cm là:",
    answers: ["60cm", "30cm", "45cm", "225cm"], correct: 0,
    hint: "Chu vi = cạnh x 4.", level: "easy", tags: ["chu_vi"]
  },
  {
    id: 75, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.rectangle(60, 30, "13", "3") + " Chu vi hình chữ nhật là ? cm.",
    answer: "32", hint: "Chu vi = (13 + 3) x 2.", level: "medium", tags: ["chu_vi"]
  },
  {
    id: 76, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Hình vuông có 4 cạnh như thế nào?",
    answers: ["Khác nhau", "Bằng nhau", "Song song", "Vuông góc"], correct: 1,
    hint: "Đặc điểm của hình vuông.", level: "easy", tags: ["hinh_vuong"]
  },
  {
    id: 77, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Hình chữ nhật có diện tích 28cm², rộng 4cm. Dài là ? cm.",
    answer: "7", hint: "Dài = Diện tích : rộng.", level: "medium", tags: ["dien_tich"]
  },
  {
    id: 78, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.square(40, "8") + " Chu vi hình vuông cạnh 8cm là:",
    answers: ["16cm", "32cm", "64cm", "24cm"], correct: 1,
    hint: "Chu vi = cạnh x 4.", level: "easy", tags: ["chu_vi"]
  },
  {
    id: 79, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.rectangle(60, 40, "8", "6") + " Diện tích là ? dm².",
    answer: "48", hint: "Diện tích = dài x rộng.", level: "easy", tags: ["dien_tich"]
  },
  {
    id: 80, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.line(60, "12", "cm") + " Trung điểm đoạn thẳng 12cm cách mỗi đầu đoạn thẳng bao nhiêu?",
    answers: ["4cm", "6cm", "8cm", "3cm"], correct: 1,
    hint: "Trung điểm chia đôi đoạn thẳng.", level: "medium", tags: ["trung_diem"]
  },
  {
    id: 81, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Hình vuông có chu vi 48cm. Cạnh là ? cm.",
    answer: "12", hint: "Cạnh = Chu vi : 4.", level: "easy", tags: ["chu_vi"]
  },
  {
    id: 82, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Hình nào không phải là hình chữ nhật?",
    answers: ["Hình vuông", "Hình có 4 góc vuông", "Hình tam giác", "Hình có 2 cặp cạnh song song"], correct: 2,
    hint: "Hình nào chỉ có 3 cạnh?", level: "easy", tags: ["hinh_hoc"]
  },
  {
    id: 83, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.square(40, "5") + " Diện tích là ? dm².",
    answer: "25", hint: "Diện tích = cạnh x cạnh.", level: "easy", tags: ["dien_tich"]
  },
  {
    id: 84, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.rectangle(60, 30, "10", "6") + " Chu vi là:",
    answers: ["16cm", "32cm", "60cm", "20cm"], correct: 1,
    hint: "Chu vi = (10+6) x 2.", level: "easy", tags: ["chu_vi"]
  },
  {
    id: 85, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.square(40, "14") + " Chu vi là ? cm.",
    answer: "56", hint: "Chu vi = 14 x 4.", level: "medium", tags: ["chu_vi"]
  },
  {
    id: 86, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.rectangle(60, 40, "7", "3") + " Diện tích là:",
    answers: ["10m²", "20m²", "21m²", "14m²"], correct: 2,
    hint: "Diện tích = 7 x 3.", level: "easy", tags: ["dien_tich"]
  },
  {
    id: 87, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.square(40, "11") + " Diện tích là ? cm².",
    answer: "121", hint: "Diện tích = 11 x 11.", level: "medium", tags: ["dien_tich"]
  },
  {
    id: 88, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.rectangle(60, 30, "12", "9") + " Chu vi là:",
    answers: ["21cm", "42cm", "108cm", "38cm"], correct: 1,
    hint: "Chu vi = (12+9) x 2.", level: "medium", tags: ["chu_vi"]
  },
  {
    id: 89, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Hình vuông có chu vi 36cm. Diện tích là ? cm².",
    answer: "81", hint: "Cạnh = 36:4=9. Diện tích = 9x9.", level: "hard", tags: ["chu_vi", "dien_tich"]
  },
  {
    id: 90, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Hình chữ nhật có dài gấp đôi rộng. Nếu rộng 4cm, chu vi là:",
    answers: ["12cm", "24cm", "48cm", "8cm"], correct: 1,
    hint: "Rộng=4, Dài=8. Chu vi=(4+8)x2.", level: "hard", tags: ["chu_vi", "tu_duy"]
  },
  {
    id: 91, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.square(40, "15") + " Hình vuông cạnh 15cm. Chu vi là ? cm.",
    answer: "60", hint: "15 x 4 = 60.", level: "easy", tags: ["chu_vi"]
  },
  {
    id: 92, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.rectangle(60, 40, "12", "5") + " Diện tích là ?",
    answers: ["17", "34", "60", "65"], correct: 2,
    hint: "12 x 5 = 60.", level: "easy", tags: ["dien_tich"]
  },
  {
    id: 93, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Nếu cạnh hình vuông tăng lên 3 lần thì chu vi tăng lên mấy lần?",
    answers: ["3 lần", "6 lần", "9 lần", "Không đổi"], correct: 0,
    hint: "Chu vi tỉ lệ thuận với cạnh.", level: "medium", tags: ["tu_duy"]
  },
  {
    id: 94, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Diện tích 72cm², dài 9cm. Rộng là bao nhiêu?",
    answers: ["6cm", "8cm", "9cm", "10cm"], correct: 1,
    hint: "Rộng = 72 : 9.", level: "medium", tags: ["dien_tich"]
  },
  {
    id: 95, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.rectangle(60, 30, "14", "6") + " Chu vi là ? cm.",
    answer: "40", hint: "(14 + 6) x 2.", level: "easy", tags: ["chu_vi"]
  },
 // --- SỐ TỰ NHIÊN (ID 101 - 110) ---
  {
    id: 101, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Số lớn nhất có 3 chữ số là số nào?",
    answers: ["100", "900", "999", "899"], correct: 2,
    hint: "Số có 3 chữ số lớn nhất là số có cả 3 hàng (trăm, chục, đơn vị) đều là 9.",
    level: "easy", tags: ["so_lon_nhat"]
  },
  {
    id: 102, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Số liền trước của số 500 là số nào?",
    answer: "499",
    hint: "Số liền trước của một số là số đó trừ đi 1 đơn vị.",
    level: "easy", tags: ["so_lien_truoc"]
  },
  {
    id: 103, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Trong số 785, chữ số 8 thuộc hàng nào?",
    answers: ["Hàng đơn vị", "Hàng chục", "Hàng trăm", "Không thuộc hàng nào"], correct: 1,
    hint: "Thứ tự từ phải sang trái là: đơn vị, chục, trăm.",
    level: "medium", tags: ["cau_tao_so"]
  },
  {
    id: 104, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Số gồm 5 trăm, 3 chục và 2 đơn vị được viết là?",
    answer: "532",
    hint: "Viết các chữ số theo thứ tự hàng trăm, hàng chục, hàng đơn vị.",
    level: "easy", tags: ["cau_tao_so"]
  },
  {
    id: 105, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Số nào bé hơn 456?",
    answers: ["465", "457", "449", "546"], correct: 2,
    hint: "So sánh hàng trăm, sau đó đến hàng chục.",
    level: "medium", tags: ["so_sanh"]
  },
  {
    id: 106, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Số liền sau của số 899 là số nào?",
    answer: "900",
    hint: "Số liền sau là số đó cộng thêm 1 đơn vị.",
    level: "easy", tags: ["so_lien_sau"]
  },
  {
    id: 107, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Giá trị của chữ số 4 trong số 412 là:",
    answers: ["4", "40", "400", "412"], correct: 2,
    hint: "Chữ số 4 đứng ở hàng trăm.",
    level: "medium", tags: ["gia_tri_chu_so"]
  },
  {
    id: 108, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Điền số thích hợp vào dãy số: 100, 200, 300, ...?",
    answer: "400",
    hint: "Dãy số tăng dần 100 đơn vị mỗi bước.",
    level: "easy", tags: ["quy_luat"]
  },
  {
    id: 109, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Số nào gồm 8 trăm và 5 đơn vị?",
    answers: ["85", "805", "850", "508"], correct: 1,
    hint: "Hàng chục không có nên ta viết chữ số 0 vào hàng chục.",
    level: "medium", tags: ["cau_tao_so"]
  },
  {
    id: 110, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Sắp xếp các số sau theo thứ tự từ bé đến lớn: 321, 123, 231. Số đứng đầu là?",
    answer: "123",
    hint: "So sánh hàng trăm của các số.",
    level: "medium", tags: ["so_sanh"]
  },
  // --- SỐ TỰ NHIÊN (ID 111 - 120) ---
  {
    id: 111, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Số nào lớn hơn 678 nhưng bé hơn 680?",
    answers: ["677", "679", "681", "670"], correct: 1,
    hint: "Tìm số đứng giữa 678 và 680.",
    level: "easy", tags: ["so_tu_nhien", "so_sanh"]
  },
  {
    id: 112, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tìm số có 3 chữ số biết chữ số hàng trăm là 9, hàng chục là 0, hàng đơn vị là 5.",
    answer: "905",
    hint: "Viết lần lượt các chữ số vào các hàng.",
    level: "easy", tags: ["cau_tao_so"]
  },
  {
    id: 113, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Dãy số nào sau đây được viết theo thứ tự từ lớn đến bé?",
    answers: ["123, 234, 345", "987, 876, 765", "456, 654, 564", "100, 200, 300"], correct: 1,
    hint: "Hãy kiểm tra hàng trăm của các số trong dãy.",
    level: "medium", tags: ["so_sanh", "quy_luat"]
  },
  {
    id: 114, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Trong các số: 345, 543, 435, số nào lớn nhất?",
    answer: "543",
    hint: "So sánh chữ số ở hàng trăm trước.",
    level: "easy", tags: ["so_sanh"]
  },
  {
    id: 115, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Giá trị của chữ số 5 trong số 555 là:",
    answers: ["5, 50, 500", "500, 50, 5", "5, 5, 5", "500, 500, 500"], correct: 1,
    hint: "Chữ số 5 ở hàng trăm, hàng chục và hàng đơn vị có giá trị khác nhau.",
    level: "hard", tags: ["gia_tri_chu_so"]
  },
  {
    id: 116, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Điền số tiếp theo vào dãy: 12, 22, 32, ...?",
    answer: "42",
    hint: "Dãy số tăng dần 10 đơn vị mỗi bước.",
    level: "easy", tags: ["quy_luat"]
  },
  {
    id: 117, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Số nào sau đây gồm 7 trăm và 3 chục?",
    answers: ["73", "703", "730", "370"], correct: 2,
    hint: "Hàng đơn vị không có, ta coi là 0.",
    level: "medium", tags: ["cau_tao_so"]
  },
  {
    id: 118, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Có bao nhiêu số có 1 chữ số?",
    answer: "9",
    hint: "Bắt đầu từ số 1 đến số 9.",
    level: "medium", tags: ["so_tu_nhien"]
  },
  {
    id: 119, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Chữ số 0 trong số 204 đứng ở hàng nào?",
    answers: ["Hàng trăm", "Hàng chục", "Hàng đơn vị", "Không ở hàng nào"], correct: 1,
    hint: "Nhìn vào vị trí chữ số từ phải sang trái.",
    level: "easy", tags: ["cau_tao_so"]
  },
  {
    id: 120, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tìm số nhỏ nhất có 3 chữ số khác nhau.",
    answer: "102",
    hint: "Hàng trăm nhỏ nhất khác 0 là 1, hàng chục nhỏ nhất là 0, hàng đơn vị nhỏ nhất còn lại là 2.",
    level: "hard", tags: ["so_tu_nhien", "tu_duy"]
  },
  // --- SỐ TỰ NHIÊN (ID 121 - 150) ---
  {
    id: 121, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Số nào dưới đây là số lẻ nhỏ nhất có 3 chữ số?",
    answers: ["100", "101", "102", "111"], correct: 1,
    hint: "Số lẻ có chữ số tận cùng là 1, 3, 5, 7, 9.", level: "medium", tags: ["so_le"]
  },
  {
    id: 122, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Viết số: Bốn trăm linh sáu.",
    answer: "406", hint: "Chữ số hàng chục không có, viết là 0.", level: "easy", tags: ["doc_so"]
  },
  {
    id: 123, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Số 798 làm tròn đến hàng chục là:",
    answers: ["790", "800", "780", "799"], correct: 1,
    hint: "Chữ số hàng đơn vị là 8 (>5), làm tròn lên hàng chục kế tiếp.", level: "hard", tags: ["lam_tron"]
  },
  {
    id: 124, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Số liền trước của 1000 là số nào?",
    answer: "999", hint: "1000 trừ 1 bằng bao nhiêu?", level: "easy", tags: ["so_lien_truoc"]
  },
  {
    id: 125, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Chọn số bé nhất trong các số: 578, 587, 588, 579.",
    answers: ["578", "587", "588", "579"], correct: 0,
    hint: "So sánh hàng trăm, sau đó đến hàng chục.", level: "easy", tags: ["so_sanh"]
  },
  {
    id: 126, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Dãy số: 2, 4, 6, 8, ... số tiếp theo là?",
    answer: "10", hint: "Dãy số cách đều 2 đơn vị.", level: "easy", tags: ["quy_luat"]
  },
  {
    id: 127, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Giá trị của chữ số 2 trong số 259 là:",
    answers: ["2", "20", "200", "259"], correct: 2,
    hint: "Số 2 đứng ở hàng trăm.", level: "medium", tags: ["gia_tri_chu_so"]
  },
  {
    id: 128, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Số gồm 9 trăm và 9 đơn vị viết là?",
    answer: "909", hint: "Hàng chục không có, viết 0.", level: "medium", tags: ["cau_tao_so"]
  },
  {
    id: 129, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Số tự nhiên lớn nhất có 2 chữ số là:",
    answers: ["10", "90", "99", "100"], correct: 2,
    hint: "Số ngay trước 100.", level: "easy", tags: ["so_tu_nhien"]
  },
  {
    id: 130, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tìm số biết số đó cộng thêm 1 thì bằng 600.",
    answer: "599", hint: "Số liền trước của 600.", level: "medium", tags: ["so_lien_truoc"]
  },
  {
    id: 131, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Số nào có chữ số 5 ở hàng chục?",
    answers: ["501", "150", "105", "550"], correct: 1,
    hint: "Chữ số hàng chục đứng ở vị trí thứ hai từ phải sang trái.", level: "medium", tags: ["cau_tao_so"]
  },
  {
    id: 132, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Có bao nhiêu số có 2 chữ số?",
    answer: "90", hint: "Từ 10 đến 99 có bao nhiêu số?", level: "hard", tags: ["so_tu_nhien"]
  },
  {
    id: 133, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Số 325 được phân tích thành:",
    answers: ["30 + 20 + 5", "300 + 20 + 5", "300 + 2 + 5", "3 + 2 + 5"], correct: 1,
    hint: "Phân tích theo giá trị hàng trăm, chục, đơn vị.", level: "medium", tags: ["cau_tao_so"]
  },
  {
    id: 134, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Điền số: 150, 160, 170, ...?",
    answer: "180", hint: "Tăng thêm 10 đơn vị.", level: "easy", tags: ["quy_luat"]
  },
  {
    id: 135, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Số nào là số chẵn?",
    answers: ["123", "457", "789", "864"], correct: 3,
    hint: "Số chẵn có tận cùng là 0, 2, 4, 6, 8.", level: "easy", tags: ["so_chan"]
  },
  {
    id: 136, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Số nào lớn hơn 599 và bé hơn 601?",
    answer: "600", hint: "Số đứng giữa 599 và 601.", level: "easy", tags: ["so_sanh"]
  },
  {
    id: 137, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Trong số 999, giá trị của các chữ số 9 là:",
    answers: ["9, 9, 9", "900, 90, 9", "9, 90, 900", "999, 99, 9"], correct: 1,
    hint: "Hàng trăm là 900, hàng chục là 90, hàng đơn vị là 9.", level: "hard", tags: ["gia_tri_chu_so"]
  },
  {
    id: 138, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Số nhỏ nhất có 3 chữ số là?",
    answer: "100", hint: "Số đầu tiên sau số 99.", level: "easy", tags: ["so_tu_nhien"]
  },
  {
    id: 139, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Số 800 đọc là:",
    answers: ["Tám chục", "Tám trăm", "Tám đơn vị", "Tám nghìn"], correct: 1,
    hint: "Số 8 ở hàng trăm.", level: "easy", tags: ["doc_so"]
  },
  {
    id: 140, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Viết số gồm: 2 đơn vị, 8 trăm, 4 chục.",
    answer: "842", hint: "Sắp xếp đúng vị trí các hàng.", level: "medium", tags: ["cau_tao_so"]
  },
  {
    id: 141, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Số nào lớn hơn 200?",
    answers: ["199", "200", "201", "150"], correct: 2,
    hint: "So sánh hàng trăm.", level: "easy", tags: ["so_sanh"]
  },
  {
    id: 142, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Số liền sau của 459 là?",
    answer: "460", hint: "Cộng thêm 1 vào 459.", level: "easy", tags: ["so_lien_sau"]
  },
  {
    id: 143, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Dãy số nào sau đây không theo quy luật?",
    answers: ["2, 4, 6, 8", "5, 10, 15, 20", "1, 2, 4, 7", "3, 6, 9, 12"], correct: 2,
    hint: "Hãy kiểm tra khoảng cách giữa các số.", level: "hard", tags: ["quy_luat"]
  },
  {
    id: 144, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Tìm số lớn nhất có 3 chữ số khác nhau.",
    answer: "987", hint: "Hàng trăm là 9, hàng chục 8, hàng đơn vị 7.", level: "hard", tags: ["tu_duy"]
  },
  {
    id: 145, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Chữ số 0 trong 505 có giá trị là:",
    answers: ["0", "50", "5", "500"], correct: 0,
    hint: "Chữ số 0 luôn có giá trị là 0 ở bất kỳ hàng nào.", level: "medium", tags: ["gia_tri_chu_so"]
  },
  {
    id: 146, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Số nhỏ nhất có 3 chữ số khác nhau là?",
    answer: "102", hint: "Hàng trăm là 1, hàng chục là 0, hàng đơn vị là 2.", level: "hard", tags: ["tu_duy"]
  },
  {
    id: 147, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Số 666 có bao nhiêu chữ số 6?",
    answers: ["1", "2", "3", "4"], correct: 2,
    hint: "Đếm số lượng chữ số 6 xuất hiện.", level: "easy", tags: ["cau_tao_so"]
  },
  {
    id: 148, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "10 chục bằng bao nhiêu?",
    answer: "100", hint: "10 lần của 10 là bao nhiêu?", level: "easy", tags: ["so_tu_nhien"]
  },
  {
    id: 149, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "mc",
    q: "Số lớn nhất có 3 chữ số là bao nhiêu?",
    answers: ["900", "990", "999", "1000"], correct: 2,
    hint: "Số gồm 3 chữ số 9.", level: "easy", tags: ["so_tu_nhien"]
  },
  {
    id: 150, topic: "so_tu_nhien", topicName: "Số tự nhiên", type: "fill",
    q: "Viết số: Ba trăm hai mươi lăm.",
    answer: "325", hint: "Viết số theo hàng tương ứng.", level: "easy", tags: ["doc_so"]
  },
  // --- PHÉP TÍNH (ID 151 - 180) ---
  {
    id: 151, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 125 + 346 = ?",
    answer: "471", hint: "Cộng từ hàng đơn vị: 5+6=11, viết 1 nhớ 1.", level: "easy", tags: ["phep_cong"]
  },
  {
    id: 152, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Kết quả của 782 - 259 là:",
    answers: ["523", "533", "423", "524"], correct: 0,
    hint: "Trừ từng hàng từ phải sang trái.", level: "medium", tags: ["phep_tru"]
  },
  {
    id: 153, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 45 x 3 = ?",
    answer: "135", hint: "45 x 3 = 45 + 45 + 45.", level: "easy", tags: ["phep_nhan"]
  },
  {
    id: 154, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Kết quả của 84 : 4 là:",
    answers: ["20", "21", "22", "19"], correct: 1,
    hint: "8 chia 4 được 2, 4 chia 4 được 1.", level: "easy", tags: ["phep_chia"]
  },
  {
    id: 155, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tìm x, biết: x - 120 = 350. x = ?",
    answer: "470", hint: "x = hiệu + số bị trừ.", level: "medium", tags: ["tim_x"]
  },
  {
    id: 156, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Phép tính nào có kết quả bằng 100?",
    answers: ["50 + 40", "20 x 4", "200 : 2", "75 + 30"], correct: 2,
    hint: "Tính từng đáp án một.", level: "easy", tags: ["phep_tinh"]
  },
  {
    id: 157, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 312 x 3 = ?",
    answer: "936", hint: "Nhân lần lượt từng hàng.", level: "medium", tags: ["phep_nhan"]
  },
  {
    id: 158, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Kết quả của 96 : 3 là:",
    answers: ["31", "32", "33", "22"], correct: 1,
    hint: "9 chia 3 được 3, 6 chia 3 được 2.", level: "easy", tags: ["phep_chia"]
  },
  {
    id: 159, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 700 - 245 = ?",
    answer: "455", hint: "Mượn đơn vị khi trừ.", level: "medium", tags: ["phep_tru"]
  },
  {
    id: 160, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Số bị chia là 60, số chia là 5, thương là:",
    answers: ["10", "12", "15", "11"], correct: 1,
    hint: "Thương = Số bị chia : Số chia.", level: "easy", tags: ["phep_chia"]
  },
  {
    id: 161, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 23 x 4 = ?",
    answer: "92", hint: "23 x 4 = 23 + 23 + 23 + 23.", level: "easy", tags: ["phep_nhan"]
  },
  {
    id: 162, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Kết quả của 500 + 250 - 100 là:",
    answers: ["650", "750", "550", "600"], correct: 0,
    hint: "Tính từ trái sang phải.", level: "medium", tags: ["phep_tinh"]
  },
  {
    id: 163, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tìm x, biết: x : 2 = 150. x = ?",
    answer: "300", hint: "x = thương x số chia.", level: "medium", tags: ["tim_x"]
  },
  {
    id: 164, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Phép tính nào sau đây có dư?",
    answers: ["10 : 2", "15 : 3", "20 : 6", "12 : 4"], correct: 2,
    hint: "Số nào không chia hết?", level: "medium", tags: ["phep_chia"]
  },
  {
    id: 165, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 108 x 6 = ?",
    answer: "648", hint: "Nhân hàng đơn vị, chục, trăm.", level: "hard", tags: ["phep_nhan"]
  },
  {
    id: 166, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Kết quả của 900 - 300 - 200 là:",
    answers: ["500", "400", "300", "600"], correct: 1,
    hint: "Tính theo thứ tự.", level: "easy", tags: ["phep_tru"]
  },
  {
    id: 167, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 75 : 5 = ?",
    answer: "15", hint: "75 chia 5.", level: "medium", tags: ["phep_chia"]
  },
  {
    id: 168, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Thừa số thứ nhất là 7, thừa số thứ hai là 8, tích là:",
    answers: ["54", "56", "64", "48"], correct: 1,
    hint: "Tích = Thừa số x Thừa số.", level: "easy", tags: ["phep_nhan"]
  },
  {
    id: 169, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 124 x 2 = ?",
    answer: "248", hint: "Nhân đôi các hàng.", level: "easy", tags: ["phep_nhan"]
  },
  {
    id: 170, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Số dư trong phép chia 17 : 3 là:",
    answers: ["1", "2", "3", "0"], correct: 1,
    hint: "17 = 3 x 5 + dư.", level: "medium", tags: ["phep_chia"]
  },
  {
    id: 171, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 550 + 150 = ?",
    answer: "700", hint: "550 + 150.", level: "easy", tags: ["phep_cong"]
  },
  {
    id: 172, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Kết quả của 200 x 4 : 2 là:",
    answers: ["400", "200", "800", "100"], correct: 0,
    hint: "Tính từ trái sang phải.", level: "medium", tags: ["phep_tinh"]
  },
  {
    id: 173, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 88 : 8 = ?",
    answer: "11", hint: "Chia từng hàng.", level: "easy", tags: ["phep_chia"]
  },
  {
    id: 174, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Số nào cộng với 250 để bằng 500?",
    answers: ["200", "300", "250", "350"], correct: 2,
    hint: "500 - 250.", level: "medium", tags: ["phep_cong"]
  },
  {
    id: 175, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 345 - 123 = ?",
    answer: "222", hint: "Trừ từng hàng.", level: "easy", tags: ["phep_tru"]
  },
  {
    id: 176, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Kết quả của 11 x 9 là:",
    answers: ["99", "89", "91", "109"], correct: 0,
    hint: "Nhân nhẩm.", level: "easy", tags: ["phep_nhan"]
  },
  {
    id: 177, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 420 : 6 = ?",
    answer: "70", hint: "42 chia 6 bằng 7.", level: "medium", tags: ["phep_chia"]
  },
  {
    id: 178, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Kết quả của 30 x 3 + 10 là:",
    answers: ["90", "100", "110", "120"], correct: 1,
    hint: "Nhân trước, cộng sau.", level: "medium", tags: ["phep_tinh"]
  },
  {
    id: 179, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 999 - 99 = ?",
    answer: "900", hint: "Trừ hàng chục và đơn vị.", level: "easy", tags: ["phep_tru"]
  },
  {
    id: 180, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Tìm x biết: x + 15 = 45. x là:",
    answers: ["30", "40", "20", "50"], correct: 0,
    hint: "x = 45 - 15.", level: "medium", tags: ["tim_x"]
  },
  // --- PHÉP TÍNH (ID 181 - 210) ---
  {
    id: 181, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 48 : 2 + 15 = ?",
    answer: "39", hint: "Thực hiện phép chia trước, phép cộng sau.", level: "medium", tags: ["phep_tinh"]
  },
  {
    id: 182, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Tìm x biết: x x 5 = 45. x là:",
    answers: ["8", "9", "10", "7"], correct: 1,
    hint: "x = 45 : 5.", level: "easy", tags: ["tim_x"]
  },
  {
    id: 183, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 1000 - 500 - 200 = ?",
    answer: "300", hint: "Trừ lần lượt từ trái sang phải.", level: "easy", tags: ["phep_tru"]
  },
  {
    id: 184, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Kết quả của 32 x 2 : 4 là:",
    answers: ["16", "8", "12", "64"], correct: 0,
    hint: "Nhân trước, chia sau.", level: "medium", tags: ["phep_tinh"]
  },
  {
    id: 185, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 9 x 7 + 37 = ?",
    answer: "100", hint: "Nhân trước, cộng sau.", level: "medium", tags: ["phep_tinh"]
  },
  {
    id: 186, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Số nào chia cho 4 được 12?",
    answers: ["36", "48", "44", "40"], correct: 1,
    hint: "Lấy 12 nhân 4.", level: "medium", tags: ["phep_chia"]
  },
  {
    id: 187, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 215 x 4 = ?",
    answer: "860", hint: "Nhân từng hàng: đơn vị, chục, trăm.", level: "hard", tags: ["phep_nhan"]
  },
  {
    id: 188, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Kết quả của 64 : 8 x 3 là:",
    answers: ["24", "8", "32", "21"], correct: 0,
    hint: "Chia trước, nhân sau.", level: "medium", tags: ["phep_tinh"]
  },
  {
    id: 189, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 567 - 234 = ?",
    answer: "333", hint: "Trừ từng hàng.", level: "easy", tags: ["phep_tru"]
  },
  {
    id: 190, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Tìm x biết: 80 : x = 8. x là:",
    answers: ["8", "10", "12", "5"], correct: 1,
    hint: "x = 80 : 8.", level: "medium", tags: ["tim_x"]
  },
  {
    id: 191, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 15 x 6 = ?",
    answer: "90", hint: "15 x 6 = 90.", level: "easy", tags: ["phep_nhan"]
  },
  {
    id: 192, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Phép tính nào sau đây có kết quả là 50?",
    answers: ["100 : 5", "25 x 2", "150 : 2", "10 x 4"], correct: 1,
    hint: "Kiểm tra từng phép tính.", level: "easy", tags: ["phep_tinh"]
  },
  {
    id: 193, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 444 + 555 = ?",
    answer: "999", hint: "Cộng từng hàng.", level: "easy", tags: ["phep_cong"]
  },
  {
    id: 194, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Số dư của 25 : 4 là:",
    answers: ["0", "1", "2", "3"], correct: 1,
    hint: "25 = 4 x 6 + dư.", level: "medium", tags: ["phep_chia"]
  },
  {
    id: 195, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 120 : 3 x 2 = ?",
    answer: "80", hint: "Chia trước, nhân sau.", level: "medium", tags: ["phep_tinh"]
  },
  {
    id: 196, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Kết quả của 7 x 8 - 16 là:",
    answers: ["40", "42", "56", "36"], correct: 0,
    hint: "Nhân trước, trừ sau.", level: "medium", tags: ["phep_tinh"]
  },
  {
    id: 197, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 600 - 350 + 50 = ?",
    answer: "300", hint: "Tính từ trái sang phải.", level: "medium", tags: ["phep_tinh"]
  },
  {
    id: 198, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Tìm x biết: x - 200 = 400. x là:",
    answers: ["200", "600", "500", "300"], correct: 1,
    hint: "x = 400 + 200.", level: "medium", tags: ["tim_x"]
  },
  {
    id: 199, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 96 : 4 = ?",
    answer: "24", hint: "Chia đơn vị và chục.", level: "easy", tags: ["phep_chia"]
  },
  {
    id: 200, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Phép tính nào đúng?",
    answers: ["10 x 5 = 50", "20 : 5 = 5", "15 x 3 = 35", "12 : 2 = 8"], correct: 0,
    hint: "Kiểm tra bảng nhân chia.", level: "easy", tags: ["phep_tinh"]
  },
  {
    id: 201, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 32 x 3 = ?",
    answer: "96", hint: "Nhân đơn vị và chục.", level: "easy", tags: ["phep_nhan"]
  },
  {
    id: 202, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Kết quả của 100 : 2 x 5 là:",
    answers: ["250", "50", "200", "100"], correct: 0,
    hint: "Tính từ trái sang phải.", level: "medium", tags: ["phep_tinh"]
  },
  {
    id: 203, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 525 + 75 = ?",
    answer: "600", hint: "Cộng đơn vị, chục, trăm.", level: "easy", tags: ["phep_cong"]
  },
  {
    id: 204, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Tìm x biết: x + 25 = 100. x là:",
    answers: ["75", "85", "65", "55"], correct: 0,
    hint: "x = 100 - 25.", level: "easy", tags: ["tim_x"]
  },
  {
    id: 205, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 720 : 8 = ?",
    answer: "90", hint: "72 chia 8 bằng 9.", level: "medium", tags: ["phep_chia"]
  },
  {
    id: 206, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Kết quả của 125 x 2 là:",
    answers: ["250", "240", "260", "225"], correct: 0,
    hint: "Nhân từng phần.", level: "easy", tags: ["phep_nhan"]
  },
  {
    id: 207, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 85 - 45 + 20 = ?",
    answer: "60", hint: "Tính từ trái sang phải.", level: "medium", tags: ["phep_tinh"]
  },
  {
    id: 208, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Số bị chia là 81, số chia là 9, thương là:",
    answers: ["7", "8", "9", "6"], correct: 2,
    hint: "Bảng chia 9.", level: "easy", tags: ["phep_chia"]
  },
  {
    id: 209, topic: "phep_tinh", topicName: "Phép tính", type: "fill",
    q: "Tính: 111 x 9 = ?",
    answer: "999", hint: "Nhân các hàng đơn vị, chục, trăm.", level: "easy", tags: ["phep_nhan"]
  },
  {
    id: 210, topic: "phep_tinh", topicName: "Phép tính", type: "mc",
    q: "Kết quả của 50 x 2 - 40 là:",
    answers: ["60", "50", "40", "70"], correct: 0,
    hint: "Nhân trước, trừ sau.", level: "medium", tags: ["phep_tinh"]
  },
  // --- TOÁN LỜI VĂN (ID 211 - 240) ---
  {
    id: 211, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Một cửa hàng có 250kg gạo, đã bán 120kg. Hỏi cửa hàng còn lại bao nhiêu kg gạo?",
    answer: "130", hint: "Lấy tổng số gạo trừ đi số đã bán.", level: "easy", tags: ["tru"]
  },
  {
    id: 212, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Lan có 15 viên bi, Hùng có nhiều hơn Lan 8 viên. Hỏi Hùng có bao nhiêu viên bi?",
    answers: ["7", "23", "25", "20"], correct: 1,
    hint: "Số bi của Hùng = Số bi của Lan + 8.", level: "easy", tags: ["cong"]
  },
  {
    id: 213, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Mẹ mua 5 hộp bánh, mỗi hộp có 8 cái bánh. Hỏi mẹ mua tất cả bao nhiêu cái bánh?",
    answer: "40", hint: "Số bánh = số hộp x số cái trong mỗi hộp.", level: "easy", tags: ["nhan"]
  },
  {
    id: 214, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Chia đều 36 quyển vở cho 4 bạn. Hỏi mỗi bạn được bao nhiêu quyển vở?",
    answers: ["8", "9", "7", "10"], correct: 1,
    hint: "Số vở mỗi bạn = 36 : 4.", level: "easy", tags: ["chia"]
  },
  {
    id: 215, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Một tuần có 7 ngày. Hỏi 4 tuần có bao nhiêu ngày?",
    answer: "28", hint: "7 ngày x 4 tuần.", level: "easy", tags: ["nhan"]
  },
  {
    id: 216, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Thùng thứ nhất đựng 120 lít dầu, thùng thứ hai đựng ít hơn thùng thứ nhất 30 lít. Hỏi thùng thứ hai đựng bao nhiêu lít dầu?",
    answers: ["150", "90", "100", "80"], correct: 1,
    hint: "120 - 30.", level: "easy", tags: ["tru"]
  },
  {
    id: 217, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Trong vườn có 4 hàng cây, mỗi hàng có 9 cây. Hỏi trong vườn có tất cả bao nhiêu cây?",
    answer: "36", hint: "4 hàng x 9 cây.", level: "easy", tags: ["nhan"]
  },
  {
    id: 218, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Cửa hàng buổi sáng bán được 200kg đường, buổi chiều bán được nhiều hơn buổi sáng 50kg. Hỏi buổi chiều bán được bao nhiêu kg đường?",
    answers: ["150", "250", "200", "300"], correct: 1,
    hint: "200 + 50.", level: "easy", tags: ["cong"]
  },
  {
    id: 219, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Mẹ có 42 quả cam, mẹ chia đều vào 6 giỏ. Hỏi mỗi giỏ có bao nhiêu quả cam?",
    answer: "7", hint: "42 : 6.", level: "easy", tags: ["chia"]
  },
  {
    id: 220, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Bạn An có 50 viên bi, An cho bạn 12 viên. Hỏi An còn lại bao nhiêu viên bi?",
    answers: ["38", "42", "62", "32"], correct: 0,
    hint: "50 - 12.", level: "easy", tags: ["tru"]
  },
  // ... (Tiếp tục với các dạng toán: gấp lên một số lần, giảm đi một số lần)
  {
    id: 221, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Một sợi dây dài 45cm, cắt đi 1/5 sợi dây. Hỏi đoạn dây cắt đi dài bao nhiêu cm?",
    answer: "9", hint: "45 : 5.", level: "medium", tags: ["chia"]
  },
  {
    id: 222, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Lan có 8 cái kẹo, số kẹo của Mai gấp 3 lần số kẹo của Lan. Hỏi Mai có bao nhiêu cái kẹo?",
    answers: ["11", "24", "18", "21"], correct: 1,
    hint: "8 x 3.", level: "easy", tags: ["nhan"]
  },
  {
    id: 223, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Có 32 bông hoa cắm vào 4 lọ. Hỏi mỗi lọ có bao nhiêu bông hoa?",
    answer: "8", hint: "32 : 4.", level: "easy", tags: ["chia"]
  },
  {
    id: 224, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Một bao gạo nặng 50kg, sau khi dùng hết 1/5 số gạo thì còn lại bao nhiêu kg?",
    answers: ["10", "40", "45", "30"], correct: 1,
    hint: "Số gạo dùng hết = 50 : 5 = 10. Còn lại = 50 - 10.", level: "medium", tags: ["tru"]
  },
  {
    id: 225, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Một tổ có 9 học sinh, số học sinh của tổ gấp 4 lần số học sinh giỏi. Hỏi tổ có bao nhiêu học sinh giỏi?",
    answer: "Chưa đủ dữ kiện", // Hoặc dạng bài tương đương logic
    hint: "Bài toán này cần xem lại số liệu, giả sử tổ có 36 học sinh thì sao?", level: "hard", tags: ["logic"]
  },
  {
    id: 226, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Mẹ 35 tuổi, con 7 tuổi. Hỏi tuổi mẹ gấp mấy lần tuổi con?",
    answers: ["4", "5", "6", "7"], correct: 1,
    hint: "35 : 7.", level: "easy", tags: ["chia"]
  },
  {
    id: 227, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Tìm một số biết rằng số đó chia 6 được 9.",
    answer: "54", hint: "9 x 6.", level: "medium", tags: ["nhan"]
  },
  {
    id: 228, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Một hình vuông có cạnh 5cm, một hình chữ nhật có dài 6cm, rộng 4cm. Hình nào có chu vi lớn hơn?",
    answers: ["Hình vuông", "Hình chữ nhật", "Bằng nhau", "Không so sánh được"], correct: 0,
    hint: "Chu vi hình vuông = 5x4=20. Chu vi hình chữ nhật = (6+4)x2=20.", level: "medium", tags: ["hinh_hoc"]
  },
  {
    id: 229, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Số bị chia là 81, số chia là số nhỏ nhất có 1 chữ số khác 0 và 1. Tìm thương?",
    answer: "27", hint: "81 : 3.", level: "hard", tags: ["chia"]
  },
  {
    id: 230, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Bố có 60 nghìn đồng, bố chia cho 3 con mỗi con số tiền bằng nhau. Hỏi mỗi con được bao nhiêu nghìn?",
    answers: ["15", "20", "30", "10"], correct: 1,
    hint: "60 : 3.", level: "easy", tags: ["chia"]
  },
  // --- TOÁN LỜI VĂN (ID 231 - 270) ---
  {
    id: 231, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Một cửa hàng có 350kg gạo, buổi sáng bán 100kg, buổi chiều bán 150kg. Hỏi cửa hàng còn lại bao nhiêu kg gạo?",
    answer: "100", hint: "Lấy tổng trừ đi số gạo đã bán cả hai buổi.", level: "medium", tags: ["tru"]
  },
  {
    id: 232, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Nam có 12 viên bi, số bi của Nam gấp 2 lần số bi của Bình. Hỏi Bình có bao nhiêu viên bi?",
    answers: ["6", "24", "10", "4"], correct: 0,
    hint: "Số bi của Bình = Số bi của Nam : 2.", level: "easy", tags: ["chia"]
  },
  {
    id: 233, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Một lớp học có 4 hàng ghế, mỗi hàng có 8 chỗ ngồi. Hỏi lớp có bao nhiêu chỗ ngồi?",
    answer: "32", hint: "4 x 8 = 32.", level: "easy", tags: ["nhan"]
  },
  {
    id: 234, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Giá một quyển vở là 5 nghìn đồng, bạn An mua 6 quyển. Hỏi An phải trả bao nhiêu nghìn?",
    answers: ["25", "30", "35", "20"], correct: 1,
    hint: "5 x 6 = 30.", level: "easy", tags: ["nhan"]
  },
  {
    id: 235, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Một đàn gà có 48 con, người ta nhốt vào 6 cái lồng. Hỏi mỗi lồng có bao nhiêu con?",
    answer: "8", hint: "48 : 6 = 8.", level: "easy", tags: ["chia"]
  },
  {
    id: 236, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Có 24 cái kẹo, chị chia cho em 1/4 số kẹo. Hỏi em được mấy cái kẹo?",
    answers: ["4", "5", "6", "8"], correct: 2,
    hint: "24 : 4 = 6.", level: "medium", tags: ["chia"]
  },
  {
    id: 237, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Một hình chữ nhật có chiều dài 12cm, chiều rộng 8cm. Tính chu vi hình đó.",
    answer: "40", hint: "(12 + 8) x 2 = 40.", level: "medium", tags: ["hinh_hoc"]
  },
  {
    id: 238, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Cửa hàng có 5 bao đường, mỗi bao nặng 20kg. Hỏi 5 bao nặng bao nhiêu kg?",
    answers: ["25", "100", "80", "150"], correct: 1,
    hint: "5 x 20 = 100.", level: "easy", tags: ["nhan"]
  },
  {
    id: 239, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Mẹ mua 3 cân cam, mỗi cân 15 nghìn. Mẹ đưa cô bán hàng 50 nghìn. Hỏi mẹ được trả lại bao nhiêu tiền?",
    answer: "5", hint: "3 x 15 = 45; 50 - 45 = 5.", level: "hard", tags: ["phep_tinh_ket_hop"]
  },
  {
    id: 240, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Mẹ 30 tuổi, con 5 tuổi. Hỏi mẹ gấp tuổi con mấy lần?",
    answers: ["5", "6", "7", "4"], correct: 1,
    hint: "30 : 5 = 6.", level: "easy", tags: ["chia"]
  },
  // ... (Tương tự tiếp tục các ID từ 241 đến 270 với các bài toán đố khác nhau)
  {
    id: 241, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Một tấm vải dài 30m, người ta cắt lấy 1/6 tấm vải. Hỏi tấm vải còn lại bao nhiêu mét?",
    answer: "25", hint: "30 : 6 = 5; 30 - 5 = 25.", level: "medium", tags: ["tru"]
  },
  {
    id: 242, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Lan có 28 viên bi, Lan cho bạn 1/4 số bi. Hỏi Lan cho bạn bao nhiêu viên?",
    answers: ["7", "6", "8", "9"], correct: 0,
    hint: "28 : 4 = 7.", level: "medium", tags: ["chia"]
  },
  {
    id: 243, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Mỗi ngày An đọc được 9 trang sách. Hỏi trong 5 ngày An đọc được bao nhiêu trang?",
    answer: "45", hint: "9 x 5 = 45.", level: "easy", tags: ["nhan"]
  },
  {
    id: 244, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Một hình vuông có chu vi 36cm. Hỏi cạnh hình vuông dài bao nhiêu cm?",
    answers: ["6", "8", "9", "12"], correct: 2,
    hint: "36 : 4 = 9.", level: "medium", tags: ["hinh_hoc"]
  },
  {
    id: 245, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Có 40 bông hoa, cắm vào các lọ, mỗi lọ 5 bông. Hỏi có tất cả bao nhiêu lọ hoa?",
    answer: "8", hint: "40 : 5 = 8.", level: "easy", tags: ["chia"]
  },
  {
    id: 246, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Số bi của An là 12, số bi của Bình gấp 3 lần số bi của An. Bình có bao nhiêu viên?",
    answers: ["36", "30", "4", "24"], correct: 0,
    hint: "12 x 3 = 36.", level: "medium", tags: ["nhan"]
  },
  {
    id: 247, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Lớp 3A có 32 học sinh, trong đó có 1/4 là học sinh giỏi. Hỏi lớp có bao nhiêu học sinh giỏi?",
    answer: "8", hint: "32 : 4 = 8.", level: "medium", tags: ["chia"]
  },
  {
    id: 248, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Mua 2 cây bút chì hết 6 nghìn. Hỏi mua 5 cây bút chì hết bao nhiêu nghìn?",
    answers: ["12", "15", "18", "20"], correct: 1,
    hint: "Một cây hết 6 : 2 = 3 nghìn; 5 cây hết 3 x 5 = 15.", level: "hard", tags: ["nhan"]
  },
  {
    id: 249, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Một hình chữ nhật có chiều rộng 5cm, chiều dài gấp 3 lần chiều rộng. Tính chiều dài.",
    answer: "15", hint: "5 x 3 = 15.", level: "medium", tags: ["hinh_hoc"]
  },
  {
    id: 250, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Bạn Minh có 100 nghìn, Minh mua một quyển sách 60 nghìn. Số tiền còn lại là:",
    answers: ["30", "40", "50", "35"], correct: 1,
    hint: "100 - 60 = 40.", level: "easy", tags: ["tru"]
  },
  {
    id: 251, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Có 5 túi bi, mỗi túi 12 viên. Hỏi tổng cộng có bao nhiêu viên bi?",
    answer: "60", hint: "5 x 12 = 60.", level: "medium", tags: ["nhan"]
  },
  {
    id: 252, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Số tuổi của con là 8, tuổi của bố gấp 5 lần tuổi con. Bố bao nhiêu tuổi?",
    answers: ["35", "40", "45", "48"], correct: 1,
    hint: "8 x 5 = 40.", level: "medium", tags: ["nhan"]
  },
  {
    id: 253, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Một đoạn dây dài 80cm, cắt bỏ 20cm. Hỏi đoạn dây còn lại dài bao nhiêu?",
    answer: "60", hint: "80 - 20 = 60.", level: "easy", tags: ["tru"]
  },
  {
    id: 254, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Mẹ có 36 quả táo, chia đều cho 6 người. Mỗi người được bao nhiêu quả?",
    answers: ["5", "6", "7", "4"], correct: 1,
    hint: "36 : 6 = 6.", level: "easy", tags: ["chia"]
  },
  {
    id: 255, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Tìm một số biết số đó gấp lên 7 lần thì bằng 49.",
    answer: "7", hint: "49 : 7 = 7.", level: "medium", tags: ["chia"]
  },
  {
    id: 256, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Một gia đình có 4 người, mỗi người ăn 2 bát cơm. Hỏi gia đình ăn bao nhiêu bát cơm?",
    answers: ["6", "8", "10", "4"], correct: 1,
    hint: "4 x 2 = 8.", level: "easy", tags: ["nhan"]
  },
  {
    id: 257, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Có 28 học sinh đi tham quan, chia đều lên 4 xe. Mỗi xe chở bao nhiêu em?",
    answer: "7", hint: "28 : 4 = 7.", level: "easy", tags: ["chia"]
  },
  {
    id: 258, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "An đi học từ 7 giờ, đến 7 giờ 30 phút thì tới trường. An đi mất bao lâu?",
    answers: ["20 phút", "30 phút", "40 phút", "15 phút"], correct: 1,
    hint: "7h30 - 7h = 30 phút.", level: "medium", tags: ["thoi_gian"]
  },
  {
    id: 259, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Một quyển sách có 100 trang, An đã đọc 1/2 quyển sách. Hỏi An đã đọc bao nhiêu trang?",
    answer: "50", hint: "100 : 2 = 50.", level: "easy", tags: ["chia"]
  },
  {
    id: 260, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Số bi của Hùng gấp 4 lần số bi của Dũng. Nếu Dũng có 9 viên, Hùng có mấy viên?",
    answers: ["36", "32", "40", "13"], correct: 0,
    hint: "9 x 4 = 36.", level: "medium", tags: ["nhan"]
  },
  {
    id: 261, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Một sợi dây dài 60cm, chia làm 3 đoạn bằng nhau. Mỗi đoạn dài bao nhiêu cm?",
    answer: "20", hint: "60 : 3 = 20.", level: "easy", tags: ["chia"]
  },
  {
    id: 262, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Bố có 80 nghìn, bố cho 2 con mỗi con 20 nghìn. Số tiền còn lại của bố là:",
    answers: ["60", "50", "40", "20"], correct: 2,
    hint: "80 - 20 - 20 = 40.", level: "medium", tags: ["tru"]
  },
  {
    id: 263, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Số trừ là 120, hiệu là 300. Tìm số bị trừ?",
    answer: "420", hint: "Số bị trừ = hiệu + số trừ.", level: "medium", tags: ["phep_tru"]
  },
  {
    id: 264, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Có 5 túi cam, mỗi túi có 7 quả. Hỏi có tất cả bao nhiêu quả?",
    answers: ["30", "35", "40", "25"], correct: 1,
    hint: "5 x 7 = 35.", level: "easy", tags: ["nhan"]
  },
  {
    id: 265, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Tìm một số biết rằng số đó giảm đi 4 lần thì bằng 8.",
    answer: "32", hint: "8 x 4 = 32.", level: "medium", tags: ["nhan"]
  },
  {
    id: 266, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Mỗi con vịt có 2 chân, 10 con vịt có tất cả bao nhiêu chân?",
    answers: ["12", "20", "18", "22"], correct: 1,
    hint: "10 x 2 = 20.", level: "easy", tags: ["nhan"]
  },
  {
    id: 267, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "Một hình vuông có chu vi 28cm. Cạnh của nó là bao nhiêu?",
    answer: "7", hint: "28 : 4 = 7.", level: "medium", tags: ["hinh_hoc"]
  },
  {
    id: 268, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Có 45 bông hoa, cắm vào các lọ, mỗi lọ 9 bông. Hỏi có bao nhiêu lọ?",
    answers: ["4", "5", "6", "3"], correct: 1,
    hint: "45 : 9 = 5.", level: "easy", tags: ["chia"]
  },
  {
    id: 269, topic: "toan_loi_van", topicName: "Toán lời văn", type: "fill",
    q: "An đi ngủ lúc 9 giờ tối, dậy lúc 6 giờ sáng. Hỏi An ngủ bao nhiêu tiếng?",
    answer: "9", hint: "Đếm số giờ từ 9 giờ tối đến 6 giờ sáng.", level: "hard", tags: ["thoi_gian"]
  },
  {
    id: 270, topic: "toan_loi_van", topicName: "Toán lời văn", type: "mc",
    q: "Số nào gấp 3 lần số 15?",
    answers: ["35", "45", "40", "50"], correct: 1,
    hint: "15 x 3 = 45.", level: "medium", tags: ["nhan"]
  },
  // --- ĐƠN VỊ ĐO LƯỜNG (ID 271 - 300) ---
  {
    id: 271, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "2m 5cm = ? cm",
    answer: "205", hint: "1m = 100cm, nên 2m = 200cm.", level: "easy", tags: ["do_dai"]
  },
  {
    id: 272, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "Đơn vị nào dùng để đo khối lượng?",
    answers: ["mét", "lít", "ki-lô-gam", "giờ"], correct: 2,
    hint: "Kg là đơn vị đo khối lượng.", level: "easy", tags: ["khoi_luong"]
  },
  {
    id: 273, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "1/4 của 1 giờ là bao nhiêu phút?",
    answer: "15", hint: "1 giờ = 60 phút, 60 : 4 = 15.", level: "medium", tags: ["thoi_gian"]
  },
  {
    id: 274, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "5km bằng bao nhiêu mét?",
    answers: ["50m", "500m", "5000m", "50000m"], correct: 2,
    hint: "1km = 1000m.", level: "easy", tags: ["do_dai"]
  },
  {
    id: 275, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "3kg 50g = ? g",
    answer: "3050", hint: "1kg = 1000g, 3kg = 3000g.", level: "medium", tags: ["khoi_luong"]
  },
  {
    id: 276, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "Kim phút chỉ số 3, kim giờ chỉ số 2. Là mấy giờ?",
    answers: ["2 giờ 3 phút", "2 giờ 15 phút", "3 giờ 10 phút", "2 giờ 30 phút"], correct: 1,
    hint: "Mỗi số cách nhau 5 phút.", level: "medium", tags: ["thoi_gian"]
  },
  {
    id: 277, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "Nửa km bằng bao nhiêu mét?",
    answer: "500", hint: "1km = 1000m, 1000 : 2 = 500.", level: "medium", tags: ["do_dai"]
  },
  {
    id: 278, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "Một ngày có bao nhiêu giờ?",
    answers: ["12 giờ", "20 giờ", "24 giờ", "48 giờ"], correct: 2,
    hint: "Kiến thức về thời gian.", level: "easy", tags: ["thoi_gian"]
  },
  {
    id: 279, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "4000ml = ? lít",
    answer: "4", hint: "1000ml = 1 lít.", level: "easy", tags: ["dung_tich"]
  },
  {
    id: 280, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "Sáng thứ Hai đến sáng thứ Ba là bao nhiêu lâu?",
    answers: ["12 giờ", "24 giờ", "48 giờ", "1 giờ"], correct: 1,
    hint: "Một ngày đêm có 24 giờ.", level: "medium", tags: ["thoi_gian"]
  },
  {
    id: 281, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "2m 5dm = ? dm",
    answer: "25", hint: "1m = 10dm, 2m = 20dm.", level: "medium", tags: ["do_dai"]
  },
  {
    id: 282, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "1/5 của 1kg là bao nhiêu gram?",
    answers: ["100g", "200g", "500g", "1000g"], correct: 1,
    hint: "1kg = 1000g, 1000 : 5 = 200.", level: "hard", tags: ["khoi_luong"]
  },
  {
    id: 283, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "Bây giờ là 8 giờ kém 10 phút. Là mấy giờ?",
    answer: "7:50", hint: "7 giờ 50 phút.", level: "medium", tags: ["thoi_gian"]
  },
  {
    id: 284, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "Đơn vị đo độ dài nhỏ nhất trong các đơn vị sau là:",
    answers: ["km", "m", "dm", "mm"], correct: 3,
    hint: "Thứ tự: km > m > dm > cm > mm.", level: "easy", tags: ["do_dai"]
  },
  {
    id: 285, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "1/2 phút bằng bao nhiêu giây?",
    answer: "30", hint: "1 phút = 60 giây.", level: "easy", tags: ["thoi_gian"]
  },
  {
    id: 286, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "Một tuần lễ có bao nhiêu giờ?",
    answers: ["100", "168", "120", "24"], correct: 1,
    hint: "7 ngày x 24 giờ.", level: "hard", tags: ["thoi_gian"]
  },
  {
    id: 287, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "5km 50m = ? m",
    answer: "5050", hint: "5km = 5000m.", level: "medium", tags: ["do_dai"]
  },
  {
    id: 288, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "Can đựng 5 lít, chai đựng 500ml. Can gấp mấy lần chai?",
    answers: ["5 lần", "10 lần", "50 lần", "100 lần"], correct: 1,
    hint: "5 lít = 5000ml, 5000 : 500 = 10.", level: "hard", tags: ["dung_tich"]
  },
  {
    id: 289, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "3 giờ 15 phút = ? phút",
    answer: "195", hint: "3 x 60 + 15.", level: "medium", tags: ["thoi_gian"]
  },
  {
    id: 290, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "1/8 của 800m là bao nhiêu?",
    answers: ["100m", "80m", "200m", "50m"], correct: 0,
    hint: "800 : 8 = 100.", level: "easy", tags: ["do_dai"]
  },
  {
    id: 291, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "6000g = ? kg",
    answer: "6", hint: "1000g = 1kg.", level: "easy", tags: ["khoi_luong"]
  },
  {
    id: 292, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "Buổi sáng lúc 8 giờ, đến 11 giờ trưa là mấy tiếng?",
    answers: ["2", "3", "4", "5"], correct: 1,
    hint: "11 - 8 = 3.", level: "easy", tags: ["thoi_gian"]
  },
  {
    id: 293, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "1/2 mét bằng bao nhiêu dm?",
    answer: "5", hint: "1m = 10dm, 10 : 2 = 5.", level: "medium", tags: ["do_dai"]
  },
  {
    id: 294, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "3kg đường chia vào các túi 500g. Được mấy túi?",
    answers: ["3", "4", "5", "6"], correct: 3,
    hint: "3000g : 500g = 6.", level: "hard", tags: ["khoi_luong"]
  },
  {
    id: 295, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "2 giờ 30 phút là mấy phút?",
    answer: "150", hint: "2 x 60 + 30 = 150.", level: "medium", tags: ["thoi_gian"]
  },
  {
    id: 296, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "Độ dài nào lớn nhất?",
    answers: ["100cm", "10dm", "1m", "1000mm"], correct: 3,
    hint: "Tất cả đều bằng nhau.", level: "medium", tags: ["do_dai"]
  },
  {
    id: 297, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "Một con gà nặng 2kg. Hỏi 5 con nặng bao nhiêu gram?",
    answer: "10000", hint: "2 x 5 = 10kg = 10000g.", level: "hard", tags: ["khoi_luong"]
  },
  {
    id: 298, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "20 phút + 40 phút bằng bao nhiêu giờ?",
    answers: ["1 giờ", "2 giờ", "30 phút", "1 giờ 10 phút"], correct: 0,
    hint: "60 phút = 1 giờ.", level: "easy", tags: ["thoi_gian"]
  },
  {
    id: 299, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "1000m - 200m = ? km",
    answer: "0.8", hint: "800m = 0.8km.", level: "medium", tags: ["do_dai"]
  },
  {
    id: 300, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "Nếu ngày mai là thứ Sáu, hôm nay là thứ mấy?",
    answers: ["Thứ Tư", "Thứ Năm", "Thứ Bảy", "Chủ Nhật"], correct: 1,
    hint: "Thứ tự các ngày trong tuần.", level: "easy", tags: ["thoi_gian"]
  },// --- ĐƠN VỊ ĐO LƯỜNG (ID 301 - 330) ---
  {
    id: 301, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "Một cái bàn dài 15dm. Nếu đổi sang cm thì bàn dài bao nhiêu?",
    answer: "150", hint: "1dm = 10cm, lấy 15 x 10.", level: "easy", tags: ["do_dai"]
  },
  {
    id: 302, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "5kg 200g so với 5200g thì:",
    answers: ["Lớn hơn", "Bé hơn", "Bằng nhau", "Không so sánh được"], correct: 2,
    hint: "5kg = 5000g, 5000g + 200g = 5200g.", level: "medium", tags: ["khoi_luong"]
  },
  {
    id: 303, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "Một buổi sáng An tập thể dục từ 6h30 đến 7h15. An tập hết bao nhiêu phút?",
    answer: "45", hint: "Từ 6h30 đến 7h là 30p, thêm 15p nữa.", level: "medium", tags: ["thoi_gian"]
  },
  {
    id: 304, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "Đơn vị nào dùng để đo dung tích của một cái chai nước?",
    answers: ["Ki-lô-mét", "Mi-li-lít", "Mi-li-mét", "Ki-lô-gam"], correct: 1,
    hint: "Lít và mililít dùng đo chất lỏng.", level: "easy", tags: ["dung_tich"]
  },
  {
    id: 305, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "1/5 của 1 mét là bao nhiêu cm?",
    answer: "20", hint: "1m = 100cm, 100 : 5 = 20.", level: "medium", tags: ["do_dai"]
  },
  {
    id: 306, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "Tháng Hai của năm thường có bao nhiêu ngày?",
    answers: ["28", "29", "30", "31"], correct: 0,
    hint: "Năm thường có 28 ngày, năm nhuận có 29.", level: "medium", tags: ["thoi_gian"]
  },
  {
    id: 307, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "400cm + 2m = ? m",
    answer: "6", hint: "400cm = 4m, 4 + 2 = 6.", level: "medium", tags: ["do_dai"]
  },
  {
    id: 308, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "Một chiếc xe tải chở 2 tấn hàng. 2 tấn bằng bao nhiêu kg?",
    answers: ["20kg", "200kg", "2000kg", "20000kg"], correct: 2,
    hint: "1 tấn = 1000kg.", level: "easy", tags: ["khoi_luong"]
  },
  {
    id: 309, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "Bây giờ là 10 giờ đêm, sau 3 giờ nữa là mấy giờ?",
    answer: "1", hint: "10 + 3 = 13, 13 giờ là 1 giờ sáng.", level: "hard", tags: ["thoi_gian"]
  },
  {
    id: 310, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "Mẹ mua 2 lít dầu, dùng hết 500ml. Còn lại bao nhiêu ml?",
    answers: ["1000ml", "1500ml", "500ml", "1200ml"], correct: 1,
    hint: "2 lít = 2000ml, 2000 - 500 = 1500.", level: "hard", tags: ["dung_tich"]
  },
  {
    id: 311, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "8m 4dm = ? dm",
    answer: "84", hint: "8m = 80dm, 80 + 4 = 84.", level: "easy", tags: ["do_dai"]
  },
  {
    id: 312, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "Một con chó nặng 15kg, con mèo nhẹ hơn con chó 12kg. Mèo nặng bao nhiêu g?",
    answers: ["3kg", "3000g", "300g", "30g"], correct: 1,
    hint: "15 - 12 = 3kg = 3000g.", level: "hard", tags: ["khoi_luong"]
  },
  {
    id: 313, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "3 giờ 45 phút là bao nhiêu phút?",
    answer: "225", hint: "3 x 60 + 45 = 225.", level: "medium", tags: ["thoi_gian"]
  },
  {
    id: 314, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "Độ dài 1 gang tay của người lớn khoảng bao nhiêu?",
    answers: ["2cm", "20cm", "2m", "200mm"], correct: 1,
    hint: "Gang tay khoảng 20cm.", level: "easy", tags: ["do_dai"]
  },
  {
    id: 315, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "5000ml = ? lít",
    answer: "5", hint: "1000ml = 1 lít.", level: "easy", tags: ["dung_tich"]
  },
  {
    id: 316, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "Một bộ phim dài 90 phút. Tương đương bao nhiêu giờ?",
    answers: ["1 giờ 30 phút", "1 giờ 20 phút", "1 giờ 45 phút", "2 giờ"], correct: 0,
    hint: "90 phút = 60 phút + 30 phút.", level: "medium", tags: ["thoi_gian"]
  },
  {
    id: 317, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "3km 200m = ? m",
    answer: "3200", hint: "3km = 3000m.", level: "easy", tags: ["do_dai"]
  },
  {
    id: 318, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "Có bao nhiêu phút trong 2/3 giờ?",
    answers: ["30", "40", "45", "20"], correct: 1,
    hint: "60 : 3 x 2 = 40.", level: "hard", tags: ["thoi_gian"]
  },
  {
    id: 319, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "Một quả táo nặng 200g. Hỏi 5 quả nặng bao nhiêu kg?",
    answer: "1", hint: "200 x 5 = 1000g = 1kg.", level: "medium", tags: ["khoi_luong"]
  },
  {
    id: 320, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "Thứ Hai hôm nay là ngày 8, ngày này tuần sau là thứ mấy?",
    answers: ["Thứ Hai, ngày 15", "Thứ Hai, ngày 14", "Thứ Ba, ngày 15", "Chủ Nhật, ngày 14"], correct: 0,
    hint: "Cộng thêm 7 ngày.", level: "medium", tags: ["thoi_gian"]
  },
  {
    id: 321, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "40dm + 60cm = ? cm",
    answer: "460", hint: "40dm = 400cm.", level: "medium", tags: ["do_dai"]
  },
  {
    id: 322, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "1 tấn đường chia vào các túi 2kg. Được bao nhiêu túi?",
    answers: ["50", "500", "100", "5000"], correct: 1,
    hint: "1000kg : 2kg = 500.", level: "hard", tags: ["khoi_luong"]
  },
  {
    id: 323, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "4 giờ chiều là mấy giờ theo cách gọi 24 giờ?",
    answer: "16", hint: "12 + 4 = 16.", level: "easy", tags: ["thoi_gian"]
  },
  {
    id: 324, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "Chiều cao của một học sinh lớp 3 khoảng:",
    answers: ["13cm", "130cm", "13m", "130mm"], correct: 1,
    hint: "130cm = 1m30cm.", level: "medium", tags: ["do_dai"]
  },
  {
    id: 325, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "Một cái xô đựng được 10 lít, sau khi rót ra 2000ml còn mấy lít?",
    answer: "8", hint: "2000ml = 2 lít.", level: "medium", tags: ["dung_tich"]
  },
  {
    id: 326, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "Số ngày trong 2 tuần lễ là:",
    answers: ["7", "14", "21", "28"], correct: 1,
    hint: "2 x 7 = 14.", level: "easy", tags: ["thoi_gian"]
  },
  {
    id: 327, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "5m 7cm = ? cm",
    answer: "507", hint: "5m = 500cm.", level: "easy", tags: ["do_dai"]
  },
  {
    id: 328, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "1/4 phút bằng bao nhiêu giây?",
    answers: ["10s", "15s", "20s", "25s"], correct: 1,
    hint: "60 : 4 = 15.", level: "medium", tags: ["thoi_gian"]
  },
  {
    id: 329, topic: "don_vi_do", topicName: "Đo lường", type: "fill",
    q: "Tổng của 500g và 1kg 500g là bao nhiêu kg?",
    answer: "2", hint: "500g + 1500g = 2000g = 2kg.", level: "hard", tags: ["khoi_luong"]
  },
  {
    id: 330, topic: "don_vi_do", topicName: "Đo lường", type: "mc",
    q: "Bạn An chạy 100m mất 20 giây. Hỏi 200m mất bao nhiêu lâu?",
    answers: ["30s", "40s", "50s", "60s"], correct: 1,
    hint: "Gấp đôi quãng đường thì thời gian cũng gấp đôi.", level: "hard", tags: ["thoi_gian"]
  },
  // --- TƯ DUY LOGIC (ID 331 - 360) ---
   
// --- TƯ DUY LOGIC: DÃY SỐ & QUY LUẬT (ID 331 - 360) ---
  {
    id: 331, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Điền số tiếp theo: 2, 4, 8, 16, 32, ...?",
    answer: "64", hint: "Mỗi số gấp đôi số trước đó (x2).", level: "medium", tags: ["quy_luat"]
  },
  {
    id: 332, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Tìm số khác biệt trong dãy: 3, 6, 9, 11, 15.",
    answers: ["6", "9", "11", "15"], correct: 2,
    hint: "Các số khác đều chia hết cho 3.", level: "medium", tags: ["phan_loai"]
  },
  {
    id: 333, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Điền số tiếp theo: 1, 4, 9, 16, 25, ...?",
    answer: "36", hint: "Dãy bình phương: 1x1, 2x2, 3x3, 4x4, 5x5, 6x6.", level: "hard", tags: ["quy_luat"]
  },
  {
    id: 334, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Quy luật: 1->3, 2->6, 3->9. Vậy 5->?",
    answers: ["10", "12", "15", "20"], correct: 2,
    hint: "Số đầu nhân 3 bằng số sau.", level: "easy", tags: ["quy_luat"]
  },
  {
    id: 335, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Điền số: 100, 90, 80, 70, 60, ...?",
    answer: "50", hint: "Dãy số giảm dần 10 đơn vị.", level: "easy", tags: ["quy_luat"]
  },
  {
    id: 336, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Tìm số tiếp theo: 5, 10, 20, 40, ...?",
    answers: ["50", "60", "80", "100"], correct: 2,
    hint: "Mỗi số gấp đôi số trước.", level: "medium", tags: ["quy_luat"]
  },
  {
    id: 337, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Điền số: 1, 2, 4, 7, 11, ...?",
    answer: "16", hint: "Cộng thêm 1, 2, 3, 4, 5...", level: "hard", tags: ["quy_luat"]
  },
  {
    id: 338, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Quy luật: 10->5, 20->10, 30->15. Vậy 50->?",
    answers: ["20", "25", "30", "40"], correct: 1,
    hint: "Số sau bằng một nửa số trước.", level: "easy", tags: ["quy_luat"]
  },
  {
    id: 339, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Điền số: 3, 5, 8, 12, 17, ...?",
    answer: "23", hint: "Khoảng cách tăng dần (+2, +3, +4, +5, +6).", level: "hard", tags: ["quy_luat"]
  },
  {
    id: 340, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Dãy nào sau đây là số lẻ tăng dần?",
    answers: ["1, 3, 5, 7", "2, 4, 6, 8", "1, 2, 3, 4", "10, 8, 6, 4"], correct: 0,
    hint: "Số lẻ không chia hết cho 2.", level: "easy", tags: ["quy_luat"]
  },
  {
    id: 341, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Điền số: 0, 3, 6, 9, 12, ...?",
    answer: "15", hint: "Cộng thêm 3 mỗi bước.", level: "easy", tags: ["quy_luat"]
  },
  {
    id: 342, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Số nào không thuộc quy luật: 2, 4, 6, 7, 8?",
    answers: ["2", "4", "6", "7"], correct: 3,
    hint: "Quy luật dãy số chẵn.", level: "easy", tags: ["phan_loai"]
  },
  {
    id: 343, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Điền số: 99, 88, 77, 66, ...?",
    answer: "55", hint: "Giảm đi 11 mỗi số.", level: "medium", tags: ["quy_luat"]
  },
  {
    id: 344, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Quy luật: 1x2=2, 2x3=6, 3x4=12. Vậy 4x5=?",
    answers: ["16", "20", "24", "18"], correct: 1,
    hint: "Nhân số liền kề.", level: "medium", tags: ["quy_luat"]
  },
  {
    id: 345, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Điền số: 5, 15, 25, 35, ...?",
    answer: "45", hint: "Cộng thêm 10 mỗi bước.", level: "easy", tags: ["quy_luat"]
  },
  {
    id: 346, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Dãy số nào giảm dần?",
    answers: ["1, 2, 3", "10, 20, 30", "50, 40, 30", "5, 10, 15"], correct: 2,
    hint: "Số sau nhỏ hơn số trước.", level: "easy", tags: ["quy_luat"]
  },
  {
    id: 347, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Điền số: 2, 3, 5, 8, 13, ...?",
    answer: "21", hint: "Số sau bằng tổng 2 số trước (Dãy Fibonacci).", level: "hard", tags: ["quy_luat"]
  },
  {
    id: 348, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Quy luật: 1, 10, 100. Số tiếp theo là:",
    answers: ["110", "1000", "200", "1001"], correct: 1,
    hint: "Nhân với 10.", level: "medium", tags: ["quy_luat"]
  },
  {
    id: 349, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Điền số: 40, 36, 32, 28, ...?",
    answer: "24", hint: "Giảm đi 4 đơn vị.", level: "medium", tags: ["quy_luat"]
  },
  {
    id: 350, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Số nào lớn nhất trong dãy: 0.1, 0.5, 0.2, 0.9?",
    answers: ["0.1", "0.5", "0.2", "0.9"], correct: 3,
    hint: "So sánh phần mười.", level: "easy", tags: ["so_sanh"]
  },
  {
    id: 351, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Điền số: 7, 14, 21, 28, ...?",
    answer: "35", hint: "Bảng nhân 7.", level: "easy", tags: ["quy_luat"]
  },
  {
    id: 352, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Dãy 10, 20, 30, ... tiếp theo là:",
    answers: ["31", "40", "35", "50"], correct: 1,
    hint: "Cộng thêm 10.", level: "easy", tags: ["quy_luat"]
  },
  {
    id: 353, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Điền số: 8, 16, 24, 32, ...?",
    answer: "40", hint: "Bảng nhân 8.", level: "easy", tags: ["quy_luat"]
  },
  {
    id: 354, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Quy luật: 64, 32, 16. Số tiếp theo là:",
    answers: ["8", "12", "4", "10"], correct: 0,
    hint: "Chia cho 2.", level: "medium", tags: ["quy_luat"]
  },
  {
    id: 355, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Điền số: 10, 11, 13, 16, 20, ...?",
    answer: "25", hint: "Cộng (+1, +2, +3, +4, +5).", level: "hard", tags: ["quy_luat"]
  },
  {
    id: 356, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Số nào tiếp theo: 100, 105, 110, 115?",
    answers: ["125", "120", "130", "116"], correct: 1,
    hint: "Cộng thêm 5.", level: "easy", tags: ["quy_luat"]
  },
  {
    id: 357, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Điền số: 5, 6, 8, 11, 15, ...?",
    answer: "20", hint: "Cộng (+1, +2, +3, +4, +5).", level: "medium", tags: ["quy_luat"]
  },
  {
    id: 358, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Dãy 2, 2, 4, 6, 10, 16. Số tiếp theo là:",
    answers: ["20", "24", "26", "28"], correct: 2,
    hint: "Số sau bằng tổng 2 số trước.", level: "hard", tags: ["quy_luat"]
  },
  {
    id: 359, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Điền số: 90, 81, 72, 63, ...?",
    answer: "54", hint: "Giảm 9 đơn vị.", level: "medium", tags: ["quy_luat"]
  },
  {
    id: 360, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Số nào tiếp theo: 2, 5, 8, 11, 14?",
    answers: ["15", "16", "17", "18"], correct: 1,
    hint: "Cộng 3.", level: "easy", tags: ["quy_luat"]
  },
  // --- TƯ DUY LOGIC: SUY LUẬN TÌNH HUỐNG (ID 361 - 390) ---
  {
    id: 361, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "An cao hơn Bình, Bình cao hơn Cường. Ai thấp nhất?",
    answers: ["An", "Bình", "Cường", "Bằng nhau"], correct: 2,
    hint: "Sắp xếp: An > Bình > Cường.", level: "easy", tags: ["suy_luan"]
  },
  {
    id: 362, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Trong chuồng có cả gà và chó, đếm được 10 cái đầu và 28 cái chân. Hỏi có mấy con chó?",
    answer: "4", hint: "Giả sử 10 con là gà (20 chân), thiếu 8 chân. Số chó = 8 : 2 = 4.", level: "hard", tags: ["toan_do"]
  },
  {
    id: 363, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Mẹ mua 3 quả táo. Bạn chia đều cho 4 người. Hỏi mỗi người được bao nhiêu quả?",
    answers: ["1/4", "3/4", "1/3", "Không chia được"], correct: 1,
    hint: "3 chia 4 bằng 3/4 quả.", level: "medium", tags: ["toan_do"]
  },
  {
    id: 364, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Một sợi dây dài 10m, mỗi ngày cắt 1m. Hỏi sau bao nhiêu ngày thì cắt hết sợi dây?",
    answer: "9", hint: "Ngày thứ 9 cắt đoạn cuối cùng, sợi dây đã hết rồi.", level: "hard", tags: ["meo_tu_duy"]
  },
  {
    id: 365, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Nếu ngày mai là thứ Năm, thì hôm qua là thứ mấy?",
    answers: ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Sáu"], correct: 1,
    hint: "Ngày mai là thứ Năm -> Hôm nay là thứ Tư -> Hôm qua là thứ Ba.", level: "medium", tags: ["thoi_gian"]
  },
  {
    id: 366, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Có 5 bạn, mỗi bạn bắt tay với 4 bạn còn lại một lần. Hỏi có bao nhiêu cái bắt tay?",
    answer: "10", hint: "Công thức: 5 x 4 : 2 = 10.", level: "hard", tags: ["toan_do"]
  },
  {
    id: 367, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Con mèo nặng 2kg, con chó nặng bằng con mèo + 3kg. Chó nặng bao nhiêu?",
    answers: ["3kg", "5kg", "6kg", "7kg"], correct: 1,
    hint: "2 + 3 = 5.", level: "easy", tags: ["toan_do"]
  },
  {
    id: 368, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Tìm số có 2 chữ số, biết tổng 2 chữ số là 10, hiệu là 2.",
    answer: "64", hint: "Số lớn = (10+2):2 = 6; Số bé = 10-6 = 4.", level: "hard", tags: ["tu_duy"]
  },
  {
    id: 369, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Mẹ có 2 tờ 50k và 1 tờ 20k. Mẹ mua sách 80k. Mẹ còn lại bao nhiêu?",
    answers: ["20k", "30k", "40k", "50k"], correct: 2,
    hint: "100 + 20 = 120. 120 - 80 = 40.", level: "medium", tags: ["toan_do"]
  },
  {
    id: 370, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Có 3 hòn đảo, mỗi đảo có 2 con khỉ. Hỏi có bao nhiêu con khỉ?",
    answer: "6", hint: "3 x 2 = 6.", level: "easy", tags: ["toan_do"]
  },
  {
    id: 371, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Số nào gấp 3 lần số 12?",
    answers: ["32", "36", "38", "40"], correct: 1,
    hint: "12 x 3 = 36.", level: "easy", tags: ["toan_do"]
  },
  {
    id: 372, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Một lớp có 30 học sinh, số nam gấp đôi số nữ. Hỏi có bao nhiêu học sinh nữ?",
    answer: "10", hint: "Tổng số phần là 3 (2+1). Nữ = 30 : 3 = 10.", level: "hard", tags: ["toan_do"]
  },
  {
    id: 373, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Bố đi làm lúc 7h, về lúc 17h. Bố đi làm bao nhiêu tiếng?",
    answers: ["8", "9", "10", "11"], correct: 2,
    hint: "17 - 7 = 10.", level: "easy", tags: ["thoi_gian"]
  },
  {
    id: 374, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Tìm một số, biết rằng số đó nhân 5 rồi cộng 10 thì bằng 50.",
    answer: "8", hint: "Tính ngược: (50-10):5 = 8.", level: "hard", tags: ["tu_duy"]
  },
  {
    id: 375, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Trong 3 con vật: Gà, Vịt, Ngỗng. Con nào không biết bơi?",
    answers: ["Vịt", "Gà", "Ngỗng", "Cả 3 đều biết"], correct: 1,
    hint: "Gà thường sống trên cạn.", level: "medium", tags: ["suy_luan"]
  },
  {
    id: 376, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Có 24 cái bánh, chia cho 6 người. Hỏi 3 người được bao nhiêu cái?",
    answer: "12", hint: "Mỗi người 4 cái. 3 người = 3x4 = 12.", level: "medium", tags: ["toan_do"]
  },
  {
    id: 377, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Số nhỏ nhất có 3 chữ số khác nhau là?",
    answers: ["100", "102", "110", "120"], correct: 1,
    hint: "Hàng trăm là 1, chục là 0, đơn vị là 2.", level: "medium", tags: ["so_hoc"]
  },
  {
    id: 378, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Có 5 quả cam, chia cho 2 người sao cho mỗi người có số lượng bằng nhau?",
    answer: "2.5", hint: "5 : 2 = 2.5.", level: "easy", tags: ["toan_do"]
  },
  {
    id: 379, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Con gà có 2 chân, con chó có 4 chân. 3 gà và 2 chó có mấy chân?",
    answers: ["12", "14", "16", "18"], correct: 1,
    hint: "(3x2) + (2x4) = 6 + 8 = 14.", level: "medium", tags: ["toan_do"]
  },
  {
    id: 380, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Điền số thích hợp: 3 x ... = 27.",
    answer: "9", hint: "Bảng nhân 3.", level: "easy", tags: ["toan_do"]
  },
  {
    id: 381, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Lan có 5 quả cam, mẹ cho thêm 3 quả, Lan chia cho bạn 2 quả. Còn lại?",
    answers: ["4", "5", "6", "7"], correct: 2,
    hint: "5 + 3 - 2 = 6.", level: "easy", tags: ["toan_do"]
  },
  {
    id: 382, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Một hình vuông có cạnh 4cm. Chu vi là bao nhiêu?",
    answer: "16", hint: "Cạnh x 4.", level: "easy", tags: ["hinh_hoc"]
  },
  {
    id: 383, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Thứ Sáu là ngày 10. Thứ Hai tuần tới là ngày mấy?",
    answers: ["12", "13", "14", "15"], correct: 1,
    hint: "Thứ 6(10) -> T7(11) -> CN(12) -> T2(13).", level: "medium", tags: ["thoi_gian"]
  },
  {
    id: 384, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Nếu A=1, B=2, C=3. Vậy A+B+C = ?",
    answer: "6", hint: "1+2+3=6.", level: "easy", tags: ["tu_duy"]
  },
  {
    id: 385, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Con gì sáng 4 chân, trưa 2 chân, tối 3 chân?",
    answers: ["Con người", "Con chó", "Con mèo", "Con voi"], correct: 0,
    hint: "Câu đố dân gian nổi tiếng (bé, lớn, già).", level: "hard", tags: ["meo_tu_duy"]
  },
  {
    id: 386, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Có 10 quả trứng, làm vỡ 2, rán 3, ăn 5. Còn lại bao nhiêu?",
    answer: "8", hint: "Làm vỡ và rán cũng là số trứng đó.", level: "hard", tags: ["meo_tu_duy"]
  },
  {
    id: 387, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Số nào nằm giữa 19 và 21?",
    answers: ["18", "20", "22", "19.5"], correct: 1,
    hint: "Số liền sau 19.", level: "easy", tags: ["so_hoc"]
  },
  {
    id: 388, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Một hình chữ nhật có chu vi 20cm, chiều rộng 4cm. Chiều dài là?",
    answer: "6", hint: "Nửa chu vi = 10; 10 - 4 = 6.", level: "medium", tags: ["hinh_hoc"]
  },
  {
    id: 389, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Tập hợp các số có 1 chữ số có bao nhiêu số?",
    answers: ["9", "10", "11", "8"], correct: 1,
    hint: "Từ 0 đến 9.", level: "medium", tags: ["so_hoc"]
  },
  {
    id: 390, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Có bao nhiêu hình vuông trong một hình vuông lớn chia thành 4 ô vuông nhỏ?",
    answer: "5", hint: "4 ô nhỏ + 1 hình lớn bên ngoài.", level: "hard", tags: ["hinh_hoc"]
  },
  // --- TƯ DUY LOGIC: HÌNH HỌC & TƯ DUY NÂNG CAO (ID 391 - 420) ---
  {
    id: 391, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Hình nào tiếp theo trong dãy: Hình tròn, Hình vuông, Hình tròn, ...?",
    answers: ["Hình tròn", "Hình vuông", "Tam giác", "Chữ nhật"], correct: 1,
    hint: "Quy luật xen kẽ.", level: "easy", tags: ["logic_hinh_hoc"]
  },
  {
    id: 392, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Một hình tam giác có 3 cạnh, vậy 5 hình tam giác tách rời có bao nhiêu cạnh?",
    answer: "15", hint: "5 x 3 = 15.", level: "easy", tags: ["hinh_hoc"]
  },
  {
    id: 393, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Trong một hình chữ nhật có 2 đường chéo, có bao nhiêu hình tam giác tạo thành?",
    answers: ["2", "4", "6", "8"], correct: 1,
    hint: "Các đường chéo chia hình thành 4 tam giác nhỏ.", level: "hard", tags: ["hinh_hoc"]
  },
  {
    id: 394, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Điền số: 1, 2, 6, 24, 120, ...?",
    answer: "720", hint: "1x2=2, 2x3=6, 6x4=24, 24x5=120, 120x6=720.", level: "hard", tags: ["quy_luat"]
  },
  {
    id: 395, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Có bao nhiêu hình vuông trong một hình lưới 2x2 ô?",
    answers: ["3", "4", "5", "6"], correct: 2,
    hint: "4 hình nhỏ + 1 hình lớn bao quanh.", level: "hard", tags: ["hinh_hoc"]
  },
  {
    id: 396, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Nếu ngày mai là thứ Hai, hôm nay là Chủ nhật. Hỏi 3 ngày sau là thứ mấy?",
    answer: "Thứ Tư", hint: "CN + 3 ngày = Thứ Tư.", level: "medium", tags: ["thoi_gian"]
  },
  {
    id: 397, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Con thỏ có thể nhảy qua mấy cái rào, nếu rào cao hơn nó?",
    answers: ["0", "1", "2", "3"], correct: 0,
    hint: "Nó không thể nhảy qua rào cao hơn mình.", level: "medium", tags: ["meo_tu_duy"]
  },
  {
    id: 398, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Tìm một số biết rằng lấy số đó chia 4, rồi trừ 2 thì bằng 3.",
    answer: "20", hint: "Tính ngược: (3+2) x 4 = 20.", level: "medium", tags: ["toan_do"]
  },
  {
    id: 399, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Gia đình có 3 anh em, mỗi người có 1 chị gái. Hỏi gia đình có mấy chị em?",
    answers: ["3", "4", "5", "6"], correct: 1,
    hint: "3 anh em dùng chung 1 chị gái.", level: "hard", tags: ["meo_tu_duy"]
  },
  {
    id: 400, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Có bao nhiêu chữ số 9 từ 1 đến 100?",
    answer: "20", hint: "9, 19, 29, 39, 49, 59, 69, 79, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99 (có 2 số 9).", level: "hard", tags: ["so_hoc"]
  },
  {
    id: 401, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Một con tàu đi hướng Bắc, gió thổi hướng Nam. Khói tàu bay về hướng nào?",
    answers: ["Bắc", "Nam", "Tây", "Không bay"], correct: 1,
    hint: "Khói bay ngược hướng tàu chạy (nếu tàu chạy nhanh hơn gió).", level: "hard", tags: ["meo_tu_duy"]
  },
  {
    id: 402, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Điền số: 1000, 500, 250, ...?",
    answer: "125", hint: "Mỗi số bằng một nửa số trước.", level: "medium", tags: ["quy_luat"]
  },
  {
    id: 403, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Ai là người anh trong hai người sinh đôi cùng ngày, cùng tháng, cùng năm?",
    answers: ["Người sinh trước", "Người sinh sau", "Cả hai bằng nhau", "Không ai cả"], correct: 0,
    hint: "Người sinh ra trước là anh.", level: "easy", tags: ["meo_tu_duy"]
  },
  {
    id: 404, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Cần bao nhiêu đường thẳng để chia một chiếc bánh pizza thành 4 phần bằng nhau?",
    answer: "2", hint: "Cắt hình chữ X.", level: "easy", tags: ["hinh_hoc"]
  },
  {
    id: 405, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Số nào tiếp theo: 1, 3, 6, 10, 15?",
    answers: ["18", "20", "21", "25"], correct: 2,
    hint: "Cộng (+2, +3, +4, +5, +6).", level: "medium", tags: ["quy_luat"]
  },
  {
    id: 406, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Có bao nhiêu tháng trong 1 năm có 31 ngày?",
    answer: "7", hint: "Tháng 1, 3, 5, 7, 8, 10, 12.", level: "medium", tags: ["thoi_gian"]
  },
  {
    id: 407, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Một cái thang có 10 bậc. Bậc ở chính giữa là bậc thứ mấy?",
    answers: ["4", "5", "5.5", "6"], correct: 2,
    hint: "Không có bậc ở giữa nếu số bậc chẵn.", level: "hard", tags: ["meo_tu_duy"]
  },
  {
    id: 408, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Tìm số có 2 chữ số giống nhau, tổng là 12.",
    answer: "66", hint: "6+6=12.", level: "easy", tags: ["so_hoc"]
  },
  {
    id: 409, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Mẹ có 3 cô con gái, mỗi cô có 1 em trai. Nhà mẹ có bao nhiêu người con?",
    answers: ["3", "4", "5", "6"], correct: 1,
    hint: "3 cô chị + 1 em trai = 4.", level: "medium", tags: ["meo_tu_duy"]
  },
  {
    id: 410, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Điền số: 2, 6, 12, 20, 30, ...?",
    answer: "42", hint: "1x2, 2x3, 3x4, 4x5, 5x6, 6x7.", level: "hard", tags: ["quy_luat"]
  },
  {
    id: 411, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Bạn có 3 quả táo. Bạn lấy đi 2 quả. Bạn còn mấy quả?",
    answers: ["1", "2", "3", "0"], correct: 1,
    hint: "Bạn lấy đi thì bạn đang cầm 2 quả đó.", level: "easy", tags: ["meo_tu_duy"]
  },
  {
    id: 412, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Điền số: 50, 45, 40, 35, 30, ...?",
    answer: "25", hint: "Giảm 5 đơn vị.", level: "easy", tags: ["quy_luat"]
  },
  {
    id: 413, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Cái gì luôn đến nhưng không bao giờ đến?",
    answers: ["Hôm qua", "Ngày mai", "Hôm nay", "Giờ"], correct: 1,
    hint: "Khi ngày mai đến, nó trở thành hôm nay.", level: "hard", tags: ["meo_tu_duy"]
  },
  {
    id: 414, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Một đồng hồ điểm 3 giờ mất 3 giây. Hỏi điểm 6 giờ mất bao nhiêu giây?",
    answer: "7.5", hint: "Khoảng cách giữa các tiếng chuông. 3h có 2 khoảng cách (2x1.5s = 3s). 6h có 5 khoảng cách (5x1.5s = 7.5s).", level: "hard", tags: ["toan_do"]
  },
  {
    id: 415, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Ai là cha của con trai của mẹ tôi?",
    answers: ["Cha tôi", "Ông tôi", "Tôi", "Chú tôi"], correct: 0,
    hint: "Con trai của mẹ tôi là tôi (hoặc anh em tôi).", level: "medium", tags: ["meo_tu_duy"]
  },
  {
    id: 416, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Điền số: 1, 1, 2, 3, 5, 8, 13, ...?",
    answer: "21", hint: "Dãy Fibonacci.", level: "medium", tags: ["quy_luat"]
  },
  {
    id: 417, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Số nào không thuộc dãy: 1, 4, 7, 10, 12?",
    answers: ["1", "4", "7", "12"], correct: 3,
    hint: "Cộng 3, nhưng 10+3=13 chứ không phải 12.", level: "medium", tags: ["phan_loai"]
  },
  {
    id: 418, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Có bao nhiêu góc vuông trong một hình chữ nhật?",
    answer: "4", hint: "Định nghĩa hình chữ nhật.", level: "easy", tags: ["hinh_hoc"]
  },
  {
    id: 419, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "mc",
    q: "Bạn có 10 ngón tay. Có bao nhiêu ngón tay trong 10 người?",
    answers: ["10", "50", "100", "200"], correct: 2,
    hint: "10 x 10 = 100.", level: "easy", tags: ["so_hoc"]
  },
  {
    id: 420, topic: "tu_duy_logic", topicName: "Tư duy logic", type: "fill",
    q: "Điền số tiếp theo: 2, 10, 12, 16, 17, 18, 19, ...?",
    answer: "200", hint: "Tất cả các số bắt đầu bằng chữ T (theo tiếng Việt).", level: "hard", tags: ["meo_tu_duy"]
  },
];

