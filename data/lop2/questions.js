const QUESTIONS = [
  {
    id: 1, topic: "on_tap", topicName: "Ôn tập & Bổ sung (1–100)", type: "mc",
    q: "Số nào là số tròn chục trong các số sau?",
    answers: ["11", "13", "17", "10"], correct: 3,
    hint: "Số tròn chục có chữ số tận cùng là 0.",
    level: "easy"
    , tags: ["so_tron_chuc"]
  },
  {
    id: 2, topic: "on_tap", topicName: "Ôn tập & Bổ sung (1–100)", type: "mc",
    q: "Số nào là số tròn chục trong các số sau?",
    answers: ["27", "20", "23", "21"], correct: 1,
    hint: "Số tròn chục có chữ số tận cùng là 0.",
    level: "easy"
    , tags: ["so_tron_chuc"]
  },
  {
    id: 3, topic: "on_tap", topicName: "Ôn tập & Bổ sung (1–100)", type: "mc",
    q: "Số nào là số tròn chục trong các số sau?",
    answers: ["37", "30", "33", "31"], correct: 1,
    hint: "Số tròn chục có chữ số tận cùng là 0.",
    level: "easy"
    , tags: ["so_tron_chuc"]
  },
  {
    id: 4, topic: "on_tap", topicName: "Ôn tập & Bổ sung (1–100)", type: "mc",
    q: "Số nào là số tròn chục trong các số sau?",
    answers: ["40", "41", "47", "43"], correct: 0,
    hint: "Số tròn chục có chữ số tận cùng là 0.",
    level: "easy"
    , tags: ["so_tron_chuc"]
  },
  {
    id: 5, topic: "on_tap", topicName: "Ôn tập & Bổ sung (1–100)", type: "mc",
    q: "Số nào là số tròn chục trong các số sau?",
    answers: ["50", "57", "51", "53"], correct: 0,
    hint: "Số tròn chục có chữ số tận cùng là 0.",
    level: "easy"
    , tags: ["so_tron_chuc"]
  },
  {
    id: 6, topic: "on_tap", topicName: "Ôn tập & Bổ sung (1–100)", type: "mc",
    q: "Số nào là số tròn chục trong các số sau?",
    answers: ["67", "63", "60", "61"], correct: 2,
    hint: "Số tròn chục có chữ số tận cùng là 0.",
    level: "easy"
    , tags: ["so_tron_chuc"]
  },
  {
    id: 7, topic: "on_tap", topicName: "Ôn tập & Bổ sung (1–100)", type: "mc",
    q: "Số nào là số tròn chục trong các số sau?",
    answers: ["71", "70", "77", "73"], correct: 1,
    hint: "Số tròn chục có chữ số tận cùng là 0.",
    level: "easy"
    , tags: ["so_tron_chuc"]
  },
  {
    id: 8, topic: "on_tap", topicName: "Ôn tập & Bổ sung (1–100)", type: "mc",
    q: "Số nào là số tròn chục trong các số sau?",
    answers: ["87", "83", "80", "81"], correct: 2,
    hint: "Số tròn chục có chữ số tận cùng là 0.",
    level: "easy"
    , tags: ["so_tron_chuc"]
  },
  {
    id: 9, topic: "on_tap", topicName: "Ôn tập & Bổ sung (1–100)", type: "mc",
    q: "Số nào là số tròn chục trong các số sau?",
    answers: ["90", "93", "97", "91"], correct: 0,
    hint: "Số tròn chục có chữ số tận cùng là 0.",
    level: "easy"
    , tags: ["so_tron_chuc"]
  },
  {
    id: 10, topic: "on_tap", topicName: "Ôn tập & Bổ sung (1–100)", type: "mc",
    q: "Số nào là số tròn chục trong các số sau?",
    answers: ["107", "103", "100", "101"], correct: 2,
    hint: "Số tròn chục có chữ số tận cùng là 0.",
    level: "easy"
    , tags: ["so_tron_chuc"]
  },
  {
    id: 11, topic: "on_tap", topicName: "Ôn tập & Bổ sung (1–100)", type: "fill",
    q: "Trong hai số 35 và 42, số lớn hơn là ?",
    answer: "42",
    hint: "So sánh hàng chục trước, rồi hàng đơn vị.",
    level: "easy"
    , tags: ["so_sanh"]
  },
  {
    id: 12, topic: "on_tap", topicName: "Ôn tập & Bổ sung (1–100)", type: "fill",
    q: "Trong hai số 28 và 51, số lớn hơn là ?",
    answer: "51",
    hint: "So sánh hàng chục trước, rồi hàng đơn vị.",
    level: "easy"
    , tags: ["so_sanh"]
  },
  {
    id: 13, topic: "on_tap", topicName: "Ôn tập & Bổ sung (1–100)", type: "fill",
    q: "Trong hai số 67 và 23, số lớn hơn là ?",
    answer: "67",
    hint: "So sánh hàng chục trước, rồi hàng đơn vị.",
    level: "easy"
    , tags: ["so_sanh"]
  },
  {
    id: 14, topic: "on_tap", topicName: "Ôn tập & Bổ sung (1–100)", type: "fill",
    q: "Trong hai số 45 và 38, số lớn hơn là ?",
    answer: "45",
    hint: "So sánh hàng chục trước, rồi hàng đơn vị.",
    level: "easy"
    , tags: ["so_sanh"]
  },
  {
    id: 15, topic: "on_tap", topicName: "Ôn tập & Bổ sung (1–100)", type: "fill",
    q: "Trong hai số 72 và 19, số lớn hơn là ?",
    answer: "72",
    hint: "So sánh hàng chục trước, rồi hàng đơn vị.",
    level: "easy"
    , tags: ["so_sanh"]
  },
  {
    id: 16, topic: "on_tap", topicName: "Ôn tập & Bổ sung (1–100)", type: "fill",
    q: "Điền số thích hợp: 5, 6, ?, 8, 9",
    answer: "7",
    hint: "Các số liên tiếp nhau hơn kém nhau 1 đơn vị.",
    level: "easy"
    , tags: ["day_so"]
  },
  {
    id: 17, topic: "on_tap", topicName: "Ôn tập & Bổ sung (1–100)", type: "fill",
    q: "Điền số thích hợp: 10, 11, ?, 13, 14",
    answer: "12",
    hint: "Các số liên tiếp nhau hơn kém nhau 1 đơn vị.",
    level: "easy"
    , tags: ["day_so"]
  },
  {
    id: 18, topic: "on_tap", topicName: "Ôn tập & Bổ sung (1–100)", type: "fill",
    q: "Điền số thích hợp: 15, 16, ?, 18, 19",
    answer: "17",
    hint: "Các số liên tiếp nhau hơn kém nhau 1 đơn vị.",
    level: "easy"
    , tags: ["day_so"]
  },
  {
    id: 19, topic: "so_lien_ke", topicName: "Số liền trước, số liền sau", type: "fill",
    q: "Số liền sau của 15 là ?",
    answer: "16",
    hint: "Số liền sau lớn hơn số đã cho 1 đơn vị.",
    level: "easy"
    , tags: ["lien_sau"]
  },
  {
    id: 20, topic: "so_lien_ke", topicName: "Số liền trước, số liền sau", type: "fill",
    q: "Số liền trước của 15 là ?",
    answer: "14",
    hint: "Số liền trước nhỏ hơn số đã cho 1 đơn vị.",
    level: "easy"
    , tags: ["lien_truoc"]
  },
  {
    id: 21, topic: "so_lien_ke", topicName: "Số liền trước, số liền sau", type: "fill",
    q: "Số liền sau của 28 là ?",
    answer: "29",
    hint: "Số liền sau lớn hơn số đã cho 1 đơn vị.",
    level: "easy"
    , tags: ["lien_sau"]
  },
  {
    id: 22, topic: "so_lien_ke", topicName: "Số liền trước, số liền sau", type: "fill",
    q: "Số liền trước của 28 là ?",
    answer: "27",
    hint: "Số liền trước nhỏ hơn số đã cho 1 đơn vị.",
    level: "easy"
    , tags: ["lien_truoc"]
  },
  {
    id: 23, topic: "so_lien_ke", topicName: "Số liền trước, số liền sau", type: "fill",
    q: "Số liền sau của 47 là ?",
    answer: "48",
    hint: "Số liền sau lớn hơn số đã cho 1 đơn vị.",
    level: "easy"
    , tags: ["lien_sau"]
  },
  {
    id: 24, topic: "so_lien_ke", topicName: "Số liền trước, số liền sau", type: "fill",
    q: "Số liền trước của 47 là ?",
    answer: "46",
    hint: "Số liền trước nhỏ hơn số đã cho 1 đơn vị.",
    level: "easy"
    , tags: ["lien_truoc"]
  },
  {
    id: 25, topic: "so_lien_ke", topicName: "Số liền trước, số liền sau", type: "fill",
    q: "Số liền sau của 63 là ?",
    answer: "64",
    hint: "Số liền sau lớn hơn số đã cho 1 đơn vị.",
    level: "easy"
    , tags: ["lien_sau"]
  },
  {
    id: 26, topic: "so_lien_ke", topicName: "Số liền trước, số liền sau", type: "fill",
    q: "Số liền trước của 63 là ?",
    answer: "62",
    hint: "Số liền trước nhỏ hơn số đã cho 1 đơn vị.",
    level: "easy"
    , tags: ["lien_truoc"]
  },
  {
    id: 27, topic: "so_lien_ke", topicName: "Số liền trước, số liền sau", type: "fill",
    q: "Số liền sau của 81 là ?",
    answer: "82",
    hint: "Số liền sau lớn hơn số đã cho 1 đơn vị.",
    level: "easy"
    , tags: ["lien_sau"]
  },
  {
    id: 28, topic: "so_lien_ke", topicName: "Số liền trước, số liền sau", type: "fill",
    q: "Số liền trước của 81 là ?",
    answer: "80",
    hint: "Số liền trước nhỏ hơn số đã cho 1 đơn vị.",
    level: "easy"
    , tags: ["lien_truoc"]
  },
  {
    id: 29, topic: "so_lien_ke", topicName: "Số liền trước, số liền sau", type: "fill",
    q: "Số liền sau của 99 là ?",
    answer: "100",
    hint: "Số liền sau lớn hơn số đã cho 1 đơn vị.",
    level: "easy"
    , tags: ["lien_sau"]
  },
  {
    id: 30, topic: "so_lien_ke", topicName: "Số liền trước, số liền sau", type: "fill",
    q: "Số liền trước của 99 là ?",
    answer: "98",
    hint: "Số liền trước nhỏ hơn số đã cho 1 đơn vị.",
    level: "easy"
    , tags: ["lien_truoc"]
  },
  {
    id: 31, topic: "so_lien_ke", topicName: "Số liền trước, số liền sau", type: "mc",
    q: "Số liền trước của 30 là:",
    answers: ["29", "30", "31", "28"], correct: 0,
    hint: "Lùi lại 1 đơn vị.",
    level: "easy"
    , tags: ["lien_truoc"]
  },
  {
    id: 32, topic: "so_lien_ke", topicName: "Số liền trước, số liền sau", type: "mc",
    q: "Số liền trước của 59 là:",
    answers: ["58", "59", "60", "57"], correct: 0,
    hint: "Lùi lại 1 đơn vị.",
    level: "easy"
    , tags: ["lien_truoc"]
  },
  {
    id: 33, topic: "so_lien_ke", topicName: "Số liền trước, số liền sau", type: "mc",
    q: "Số liền trước của 100 là:",
    answers: ["99", "100", "101", "98"], correct: 0,
    hint: "Lùi lại 1 đơn vị.",
    level: "easy"
    , tags: ["lien_truoc"]
  },
  {
    id: 34, topic: "so_lien_ke", topicName: "Số liền trước, số liền sau", type: "mc",
    q: "31 là số liền sau của số nào?",
    answers: ["30", "32", "29", "33"], correct: 0,
    hint: "Số liền sau của 30 là 31.",
    level: "medium"
    , tags: ["lien_sau"]
  },
  {
    id: 35, topic: "so_lien_ke", topicName: "Số liền trước, số liền sau", type: "mc",
    q: "100 là số liền sau của số nào?",
    answers: ["99", "101", "98", "90"], correct: 0,
    hint: "99 + 1 = 100.",
    level: "medium"
    , tags: ["lien_sau"]
  },
  {
    id: 36, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 9 + 2 = ?",
    answer: "11",
    hint: "9 + 2: tách 2 thành 1 và 1, 9+1=10, 10+1=11.",
    level: "easy"
    , tags: ["cong_9"]
  },
  {
    id: 37, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 9 + 3 = ?",
    answer: "12",
    hint: "9 + 3: tách 3 thành 1 và 2, 9+1=10, 10+2=12.",
    level: "easy"
    , tags: ["cong_9"]
  },
  {
    id: 38, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 9 + 4 = ?",
    answer: "13",
    hint: "9 + 4: tách 4 thành 1 và 3, 9+1=10, 10+3=13.",
    level: "easy"
    , tags: ["cong_9"]
  },
  {
    id: 39, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 9 + 5 = ?",
    answer: "14",
    hint: "9 + 5: tách 5 thành 1 và 4, 9+1=10, 10+4=14.",
    level: "easy"
    , tags: ["cong_9"]
  },
  {
    id: 40, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 9 + 6 = ?",
    answer: "15",
    hint: "9 + 6: tách 6 thành 1 và 5, 9+1=10, 10+5=15.",
    level: "easy"
    , tags: ["cong_9"]
  },
  {
    id: 41, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 9 + 7 = ?",
    answer: "16",
    hint: "9 + 7: tách 7 thành 1 và 6, 9+1=10, 10+6=16.",
    level: "easy"
    , tags: ["cong_9"]
  },
  {
    id: 42, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 9 + 8 = ?",
    answer: "17",
    hint: "9 + 8: tách 8 thành 1 và 7, 9+1=10, 10+7=17.",
    level: "easy"
    , tags: ["cong_9"]
  },
  {
    id: 43, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 9 + 9 = ?",
    answer: "18",
    hint: "9 + 9: tách 9 thành 1 và 8, 9+1=10, 10+8=18.",
    level: "easy"
    , tags: ["cong_9"]
  },
  {
    id: 44, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 8 + 3 = ?",
    answer: "11",
    hint: "8 + 3: 8 + 2 = 10, còn 1, tổng = 11.",
    level: "easy"
    , tags: ["cong_8"]
  },
  {
    id: 45, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 8 + 4 = ?",
    answer: "12",
    hint: "8 + 4: 8 + 2 = 10, còn 2, tổng = 12.",
    level: "easy"
    , tags: ["cong_8"]
  },
  {
    id: 46, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 8 + 5 = ?",
    answer: "13",
    hint: "8 + 5: 8 + 2 = 10, còn 3, tổng = 13.",
    level: "easy"
    , tags: ["cong_8"]
  },
  {
    id: 47, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 8 + 6 = ?",
    answer: "14",
    hint: "8 + 6: 8 + 2 = 10, còn 4, tổng = 14.",
    level: "easy"
    , tags: ["cong_8"]
  },
  {
    id: 48, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 8 + 7 = ?",
    answer: "15",
    hint: "8 + 7: 8 + 2 = 10, còn 5, tổng = 15.",
    level: "easy"
    , tags: ["cong_8"]
  },
  {
    id: 49, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 8 + 8 = ?",
    answer: "16",
    hint: "8 + 8: 8 + 2 = 10, còn 6, tổng = 16.",
    level: "easy"
    , tags: ["cong_8"]
  },
  {
    id: 50, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 7 + 5 = ?",
    answer: "12",
    hint: "Tách số để tạo tổng bằng 10 trước.",
    level: "easy"
    , tags: ["cong_qua_10"]
  },
  {
    id: 51, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 7 + 6 = ?",
    answer: "13",
    hint: "Tách số để tạo tổng bằng 10 trước.",
    level: "easy"
    , tags: ["cong_qua_10"]
  },
  {
    id: 52, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 7 + 7 = ?",
    answer: "14",
    hint: "Tách số để tạo tổng bằng 10 trước.",
    level: "easy"
    , tags: ["cong_qua_10"]
  },
  {
    id: 53, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 6 + 6 = ?",
    answer: "12",
    hint: "Tách số để tạo tổng bằng 10 trước.",
    level: "easy"
    , tags: ["cong_qua_10"]
  },
  {
    id: 54, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 6 + 7 = ?",
    answer: "13",
    hint: "Tách số để tạo tổng bằng 10 trước.",
    level: "easy"
    , tags: ["cong_qua_10"]
  },
  {
    id: 55, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 6 + 8 = ?",
    answer: "14",
    hint: "Tách số để tạo tổng bằng 10 trước.",
    level: "easy"
    , tags: ["cong_qua_10"]
  },
  {
    id: 56, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 10 - 1 = ?",
    answer: "9",
    hint: "Tìm số cộng với 1 bằng 10.",
    level: "easy"
    , tags: ["tru_bang"]
  },
  {
    id: 57, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 11 - 2 = ?",
    answer: "9",
    hint: "Tìm số cộng với 2 bằng 11.",
    level: "easy"
    , tags: ["tru_bang"]
  },
  {
    id: 58, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 12 - 3 = ?",
    answer: "9",
    hint: "Tìm số cộng với 3 bằng 12.",
    level: "easy"
    , tags: ["tru_bang"]
  },
  {
    id: 59, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 13 - 4 = ?",
    answer: "9",
    hint: "Tìm số cộng với 4 bằng 13.",
    level: "easy"
    , tags: ["tru_bang"]
  },
  {
    id: 60, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 14 - 5 = ?",
    answer: "9",
    hint: "Tìm số cộng với 5 bằng 14.",
    level: "easy"
    , tags: ["tru_bang"]
  },
  {
    id: 61, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 15 - 6 = ?",
    answer: "9",
    hint: "Tìm số cộng với 6 bằng 15.",
    level: "easy"
    , tags: ["tru_bang"]
  },
  {
    id: 62, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 16 - 7 = ?",
    answer: "9",
    hint: "Tìm số cộng với 7 bằng 16.",
    level: "easy"
    , tags: ["tru_bang"]
  },
  {
    id: 63, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 17 - 8 = ?",
    answer: "9",
    hint: "Tìm số cộng với 8 bằng 17.",
    level: "easy"
    , tags: ["tru_bang"]
  },
  {
    id: 64, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "fill",
    q: "Tính: 18 - 9 = ?",
    answer: "9",
    hint: "Tìm số cộng với 9 bằng 18.",
    level: "easy"
    , tags: ["tru_bang"]
  },
  {
    id: 65, topic: "cong_tru_20", topicName: "Cộng trừ qua 10 (đến 20)", type: "mc",
    q: "Phép tính nào có kết quả bằng 10?",
    answers: ["6 + 4", "7 + 2", "5 + 3", "8 + 3"], correct: 0,
    hint: "6 + 4 = 10.",
    level: "easy"
    , tags: ["cong_10"]
  },
  {
    id: 66, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "fill",
    q: "Tính: 25 + 35 = ?",
    answer: "60",
    hint: "Cộng hàng đơn vị trước, rồi hàng chục.",
    level: "medium"
    , tags: ["cong_khong_nho"]
  },
  {
    id: 67, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "fill",
    q: "Tính: 37 + 43 = ?",
    answer: "80",
    hint: "Cộng hàng đơn vị trước, rồi hàng chục.",
    level: "medium"
    , tags: ["cong_khong_nho"]
  },
  {
    id: 68, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "fill",
    q: "Tính: 28 + 52 = ?",
    answer: "80",
    hint: "Cộng hàng đơn vị trước, rồi hàng chục.",
    level: "medium"
    , tags: ["cong_khong_nho"]
  },
  {
    id: 69, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "fill",
    q: "Tính: 46 + 34 = ?",
    answer: "80",
    hint: "Cộng hàng đơn vị trước, rồi hàng chục.",
    level: "medium"
    , tags: ["cong_khong_nho"]
  },
  {
    id: 70, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "fill",
    q: "Tính: 19 + 61 = ?",
    answer: "80",
    hint: "Cộng hàng đơn vị trước, rồi hàng chục.",
    level: "medium"
    , tags: ["cong_khong_nho"]
  },
  {
    id: 71, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "fill",
    q: "Tính: 38 + 42 = ?",
    answer: "80",
    hint: "Cộng hàng đơn vị trước, rồi hàng chục.",
    level: "medium"
    , tags: ["cong_khong_nho"]
  },
  {
    id: 72, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "fill",
    q: "Tính: 27 + 15 = ?",
    answer: "42",
    hint: "Hàng đơn vị cộng vượt qua 10, nhớ 1 sang hàng chục.",
    level: "medium"
    , tags: ["cong_co_nho"]
  },
  {
    id: 73, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "fill",
    q: "Tính: 38 + 24 = ?",
    answer: "62",
    hint: "Hàng đơn vị cộng vượt qua 10, nhớ 1 sang hàng chục.",
    level: "medium"
    , tags: ["cong_co_nho"]
  },
  {
    id: 74, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "fill",
    q: "Tính: 45 + 18 = ?",
    answer: "63",
    hint: "Hàng đơn vị cộng vượt qua 10, nhớ 1 sang hàng chục.",
    level: "medium"
    , tags: ["cong_co_nho"]
  },
  {
    id: 75, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "fill",
    q: "Tính: 56 + 27 = ?",
    answer: "83",
    hint: "Hàng đơn vị cộng vượt qua 10, nhớ 1 sang hàng chục.",
    level: "medium"
    , tags: ["cong_co_nho"]
  },
  {
    id: 76, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "fill",
    q: "Tính: 34 + 29 = ?",
    answer: "63",
    hint: "Hàng đơn vị cộng vượt qua 10, nhớ 1 sang hàng chục.",
    level: "medium"
    , tags: ["cong_co_nho"]
  },
  {
    id: 77, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "fill",
    q: "Tính: 48 + 35 = ?",
    answer: "83",
    hint: "Hàng đơn vị cộng vượt qua 10, nhớ 1 sang hàng chục.",
    level: "medium"
    , tags: ["cong_co_nho"]
  },
  {
    id: 78, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "fill",
    q: "Tính: 50 - 20 = ?",
    answer: "30",
    hint: "Trừ hàng đơn vị, rồi hàng chục.",
    level: "easy"
    , tags: ["tru_tron_chuc"]
  },
  {
    id: 79, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "fill",
    q: "Tính: 70 - 10 = ?",
    answer: "60",
    hint: "Trừ hàng đơn vị, rồi hàng chục.",
    level: "easy"
    , tags: ["tru_tron_chuc"]
  },
  {
    id: 80, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "fill",
    q: "Tính: 80 - 15 = ?",
    answer: "65",
    hint: "Trừ hàng đơn vị, rồi hàng chục.",
    level: "easy"
    , tags: ["tru_tron_chuc"]
  },
  {
    id: 81, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "fill",
    q: "Tính: 60 - 25 = ?",
    answer: "35",
    hint: "Trừ hàng đơn vị, rồi hàng chục.",
    level: "easy"
    , tags: ["tru_tron_chuc"]
  },
  {
    id: 82, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "fill",
    q: "Tính: 90 - 5 = ?",
    answer: "85",
    hint: "Trừ hàng đơn vị, rồi hàng chục.",
    level: "easy"
    , tags: ["tru_tron_chuc"]
  },
  {
    id: 83, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "fill",
    q: "Tính: 52 - 18 = ?",
    answer: "34",
    hint: "Hàng đơn vị không đủ trừ, mượn 1 chục.",
    level: "medium"
    , tags: ["tru_co_nho"]
  },
  {
    id: 84, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "fill",
    q: "Tính: 63 - 27 = ?",
    answer: "36",
    hint: "Hàng đơn vị không đủ trừ, mượn 1 chục.",
    level: "medium"
    , tags: ["tru_co_nho"]
  },
  {
    id: 85, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "fill",
    q: "Tính: 71 - 35 = ?",
    answer: "36",
    hint: "Hàng đơn vị không đủ trừ, mượn 1 chục.",
    level: "medium"
    , tags: ["tru_co_nho"]
  },
  {
    id: 86, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "fill",
    q: "Tính: 84 - 46 = ?",
    answer: "38",
    hint: "Hàng đơn vị không đủ trừ, mượn 1 chục.",
    level: "medium"
    , tags: ["tru_co_nho"]
  },
  {
    id: 87, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "fill",
    q: "Tính: 95 - 38 = ?",
    answer: "57",
    hint: "Hàng đơn vị không đủ trừ, mượn 1 chục.",
    level: "medium"
    , tags: ["tru_co_nho"]
  },
  {
    id: 88, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "mc",
    q: "Kết quả của 45 + 38 là:",
    answers: ["83", "73", "93", "82"], correct: 0,
    hint: "5 + 8 = 13, viết 3 nhớ 1; 4 + 3 + 1 = 8.",
    level: "medium"
    , tags: ["cong_co_nho"]
  },
  {
    id: 89, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 2 × 1 = ?",
    answer: "2",
    hint: "Dựa vào bảng nhân 2.",
    level: "easy"
    , tags: ["nhan_2"]
  },
  {
    id: 90, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 2 × 2 = ?",
    answer: "4",
    hint: "Dựa vào bảng nhân 2.",
    level: "easy"
    , tags: ["nhan_2"]
  },
  {
    id: 91, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 2 × 3 = ?",
    answer: "6",
    hint: "Dựa vào bảng nhân 2.",
    level: "easy"
    , tags: ["nhan_2"]
  },
  {
    id: 92, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 2 × 4 = ?",
    answer: "8",
    hint: "Dựa vào bảng nhân 2.",
    level: "easy"
    , tags: ["nhan_2"]
  },
  {
    id: 93, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 2 × 5 = ?",
    answer: "10",
    hint: "Dựa vào bảng nhân 2.",
    level: "easy"
    , tags: ["nhan_2"]
  },
  {
    id: 94, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 2 × 6 = ?",
    answer: "12",
    hint: "Dựa vào bảng nhân 2.",
    level: "medium"
    , tags: ["nhan_2"]
  },
  {
    id: 95, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 2 × 7 = ?",
    answer: "14",
    hint: "Dựa vào bảng nhân 2.",
    level: "medium"
    , tags: ["nhan_2"]
  },
  {
    id: 96, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 2 × 8 = ?",
    answer: "16",
    hint: "Dựa vào bảng nhân 2.",
    level: "medium"
    , tags: ["nhan_2"]
  },
  {
    id: 97, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 2 × 9 = ?",
    answer: "18",
    hint: "Dựa vào bảng nhân 2.",
    level: "medium"
    , tags: ["nhan_2"]
  },
  {
    id: 98, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 2 × 10 = ?",
    answer: "20",
    hint: "Dựa vào bảng nhân 2.",
    level: "medium"
    , tags: ["nhan_2"]
  },
  {
    id: 99, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 3 × 1 = ?",
    answer: "3",
    hint: "Dựa vào bảng nhân 3.",
    level: "easy"
    , tags: ["nhan_3"]
  },
  {
    id: 100, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 3 × 2 = ?",
    answer: "6",
    hint: "Dựa vào bảng nhân 3.",
    level: "easy"
    , tags: ["nhan_3"]
  },
  {
    id: 101, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 3 × 3 = ?",
    answer: "9",
    hint: "Dựa vào bảng nhân 3.",
    level: "easy"
    , tags: ["nhan_3"]
  },
  {
    id: 102, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 3 × 4 = ?",
    answer: "12",
    hint: "Dựa vào bảng nhân 3.",
    level: "easy"
    , tags: ["nhan_3"]
  },
  {
    id: 103, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 3 × 5 = ?",
    answer: "15",
    hint: "Dựa vào bảng nhân 3.",
    level: "easy"
    , tags: ["nhan_3"]
  },
  {
    id: 104, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 3 × 6 = ?",
    answer: "18",
    hint: "Dựa vào bảng nhân 3.",
    level: "medium"
    , tags: ["nhan_3"]
  },
  {
    id: 105, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 3 × 7 = ?",
    answer: "21",
    hint: "Dựa vào bảng nhân 3.",
    level: "medium"
    , tags: ["nhan_3"]
  },
  {
    id: 106, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 3 × 8 = ?",
    answer: "24",
    hint: "Dựa vào bảng nhân 3.",
    level: "medium"
    , tags: ["nhan_3"]
  },
  {
    id: 107, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 3 × 9 = ?",
    answer: "27",
    hint: "Dựa vào bảng nhân 3.",
    level: "medium"
    , tags: ["nhan_3"]
  },
  {
    id: 108, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 3 × 10 = ?",
    answer: "30",
    hint: "Dựa vào bảng nhân 3.",
    level: "medium"
    , tags: ["nhan_3"]
  },
  {
    id: 109, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 4 × 1 = ?",
    answer: "4",
    hint: "Dựa vào bảng nhân 4.",
    level: "easy"
    , tags: ["nhan_4"]
  },
  {
    id: 110, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 4 × 2 = ?",
    answer: "8",
    hint: "Dựa vào bảng nhân 4.",
    level: "easy"
    , tags: ["nhan_4"]
  },
  {
    id: 111, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 4 × 3 = ?",
    answer: "12",
    hint: "Dựa vào bảng nhân 4.",
    level: "easy"
    , tags: ["nhan_4"]
  },
  {
    id: 112, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 4 × 4 = ?",
    answer: "16",
    hint: "Dựa vào bảng nhân 4.",
    level: "easy"
    , tags: ["nhan_4"]
  },
  {
    id: 113, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 4 × 5 = ?",
    answer: "20",
    hint: "Dựa vào bảng nhân 4.",
    level: "easy"
    , tags: ["nhan_4"]
  },
  {
    id: 114, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 4 × 6 = ?",
    answer: "24",
    hint: "Dựa vào bảng nhân 4.",
    level: "medium"
    , tags: ["nhan_4"]
  },
  {
    id: 115, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 4 × 7 = ?",
    answer: "28",
    hint: "Dựa vào bảng nhân 4.",
    level: "medium"
    , tags: ["nhan_4"]
  },
  {
    id: 116, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 4 × 8 = ?",
    answer: "32",
    hint: "Dựa vào bảng nhân 4.",
    level: "medium"
    , tags: ["nhan_4"]
  },
  {
    id: 117, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 4 × 9 = ?",
    answer: "36",
    hint: "Dựa vào bảng nhân 4.",
    level: "medium"
    , tags: ["nhan_4"]
  },
  {
    id: 118, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 4 × 10 = ?",
    answer: "40",
    hint: "Dựa vào bảng nhân 4.",
    level: "medium"
    , tags: ["nhan_4"]
  },
  {
    id: 119, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 5 × 1 = ?",
    answer: "5",
    hint: "Dựa vào bảng nhân 5.",
    level: "easy"
    , tags: ["nhan_5"]
  },
  {
    id: 120, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 5 × 2 = ?",
    answer: "10",
    hint: "Dựa vào bảng nhân 5.",
    level: "easy"
    , tags: ["nhan_5"]
  },
  {
    id: 121, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 5 × 3 = ?",
    answer: "15",
    hint: "Dựa vào bảng nhân 5.",
    level: "easy"
    , tags: ["nhan_5"]
  },
  {
    id: 122, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 5 × 4 = ?",
    answer: "20",
    hint: "Dựa vào bảng nhân 5.",
    level: "easy"
    , tags: ["nhan_5"]
  },
  {
    id: 123, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 5 × 5 = ?",
    answer: "25",
    hint: "Dựa vào bảng nhân 5.",
    level: "easy"
    , tags: ["nhan_5"]
  },
  {
    id: 124, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 5 × 6 = ?",
    answer: "30",
    hint: "Dựa vào bảng nhân 5.",
    level: "medium"
    , tags: ["nhan_5"]
  },
  {
    id: 125, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 5 × 7 = ?",
    answer: "35",
    hint: "Dựa vào bảng nhân 5.",
    level: "medium"
    , tags: ["nhan_5"]
  },
  {
    id: 126, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 5 × 8 = ?",
    answer: "40",
    hint: "Dựa vào bảng nhân 5.",
    level: "medium"
    , tags: ["nhan_5"]
  },
  {
    id: 127, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 5 × 9 = ?",
    answer: "45",
    hint: "Dựa vào bảng nhân 5.",
    level: "medium"
    , tags: ["nhan_5"]
  },
  {
    id: 128, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 5 × 10 = ?",
    answer: "50",
    hint: "Dựa vào bảng nhân 5.",
    level: "medium"
    , tags: ["nhan_5"]
  },
  {
    id: 129, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 4 : 2 = ?",
    answer: "2",
    hint: "Tìm số nhân với 2 bằng 4.",
    level: "easy"
    , tags: ["chia_2"]
  },
  {
    id: 130, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 6 : 2 = ?",
    answer: "3",
    hint: "Tìm số nhân với 2 bằng 6.",
    level: "easy"
    , tags: ["chia_2"]
  },
  {
    id: 131, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 8 : 2 = ?",
    answer: "4",
    hint: "Tìm số nhân với 2 bằng 8.",
    level: "easy"
    , tags: ["chia_2"]
  },
  {
    id: 132, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 10 : 2 = ?",
    answer: "5",
    hint: "Tìm số nhân với 2 bằng 10.",
    level: "easy"
    , tags: ["chia_2"]
  },
  {
    id: 133, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 12 : 2 = ?",
    answer: "6",
    hint: "Tìm số nhân với 2 bằng 12.",
    level: "easy"
    , tags: ["chia_2"]
  },
  {
    id: 134, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 14 : 2 = ?",
    answer: "7",
    hint: "Tìm số nhân với 2 bằng 14.",
    level: "easy"
    , tags: ["chia_2"]
  },
  {
    id: 135, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 16 : 2 = ?",
    answer: "8",
    hint: "Tìm số nhân với 2 bằng 16.",
    level: "easy"
    , tags: ["chia_2"]
  },
  {
    id: 136, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 18 : 2 = ?",
    answer: "9",
    hint: "Tìm số nhân với 2 bằng 18.",
    level: "easy"
    , tags: ["chia_2"]
  },
  {
    id: 137, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 20 : 2 = ?",
    answer: "10",
    hint: "Tìm số nhân với 2 bằng 20.",
    level: "easy"
    , tags: ["chia_2"]
  },
  {
    id: 138, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 6 : 3 = ?",
    answer: "2",
    hint: "Tìm số nhân với 3 bằng 6.",
    level: "easy"
    , tags: ["chia_3"]
  },
  {
    id: 139, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 9 : 3 = ?",
    answer: "3",
    hint: "Tìm số nhân với 3 bằng 9.",
    level: "easy"
    , tags: ["chia_3"]
  },
  {
    id: 140, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 12 : 3 = ?",
    answer: "4",
    hint: "Tìm số nhân với 3 bằng 12.",
    level: "easy"
    , tags: ["chia_3"]
  },
  {
    id: 141, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 15 : 3 = ?",
    answer: "5",
    hint: "Tìm số nhân với 3 bằng 15.",
    level: "easy"
    , tags: ["chia_3"]
  },
  {
    id: 142, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 18 : 3 = ?",
    answer: "6",
    hint: "Tìm số nhân với 3 bằng 18.",
    level: "easy"
    , tags: ["chia_3"]
  },
  {
    id: 143, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 21 : 3 = ?",
    answer: "7",
    hint: "Tìm số nhân với 3 bằng 21.",
    level: "easy"
    , tags: ["chia_3"]
  },
  {
    id: 144, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 24 : 3 = ?",
    answer: "8",
    hint: "Tìm số nhân với 3 bằng 24.",
    level: "easy"
    , tags: ["chia_3"]
  },
  {
    id: 145, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 27 : 3 = ?",
    answer: "9",
    hint: "Tìm số nhân với 3 bằng 27.",
    level: "easy"
    , tags: ["chia_3"]
  },
  {
    id: 146, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 30 : 3 = ?",
    answer: "10",
    hint: "Tìm số nhân với 3 bằng 30.",
    level: "easy"
    , tags: ["chia_3"]
  },
  {
    id: 147, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 8 : 4 = ?",
    answer: "2",
    hint: "Tìm số nhân với 4 bằng 8.",
    level: "easy"
    , tags: ["chia_4"]
  },
  {
    id: 148, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 12 : 4 = ?",
    answer: "3",
    hint: "Tìm số nhân với 4 bằng 12.",
    level: "easy"
    , tags: ["chia_4"]
  },
  {
    id: 149, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 16 : 4 = ?",
    answer: "4",
    hint: "Tìm số nhân với 4 bằng 16.",
    level: "easy"
    , tags: ["chia_4"]
  },
  {
    id: 150, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 20 : 4 = ?",
    answer: "5",
    hint: "Tìm số nhân với 4 bằng 20.",
    level: "easy"
    , tags: ["chia_4"]
  },
  {
    id: 151, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 24 : 4 = ?",
    answer: "6",
    hint: "Tìm số nhân với 4 bằng 24.",
    level: "easy"
    , tags: ["chia_4"]
  },
  {
    id: 152, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 28 : 4 = ?",
    answer: "7",
    hint: "Tìm số nhân với 4 bằng 28.",
    level: "easy"
    , tags: ["chia_4"]
  },
  {
    id: 153, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 32 : 4 = ?",
    answer: "8",
    hint: "Tìm số nhân với 4 bằng 32.",
    level: "easy"
    , tags: ["chia_4"]
  },
  {
    id: 154, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 36 : 4 = ?",
    answer: "9",
    hint: "Tìm số nhân với 4 bằng 36.",
    level: "easy"
    , tags: ["chia_4"]
  },
  {
    id: 155, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 40 : 4 = ?",
    answer: "10",
    hint: "Tìm số nhân với 4 bằng 40.",
    level: "easy"
    , tags: ["chia_4"]
  },
  {
    id: 156, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 10 : 5 = ?",
    answer: "2",
    hint: "Tìm số nhân với 5 bằng 10.",
    level: "easy"
    , tags: ["chia_5"]
  },
  {
    id: 157, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 15 : 5 = ?",
    answer: "3",
    hint: "Tìm số nhân với 5 bằng 15.",
    level: "easy"
    , tags: ["chia_5"]
  },
  {
    id: 158, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 20 : 5 = ?",
    answer: "4",
    hint: "Tìm số nhân với 5 bằng 20.",
    level: "easy"
    , tags: ["chia_5"]
  },
  {
    id: 159, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 25 : 5 = ?",
    answer: "5",
    hint: "Tìm số nhân với 5 bằng 25.",
    level: "easy"
    , tags: ["chia_5"]
  },
  {
    id: 160, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 30 : 5 = ?",
    answer: "6",
    hint: "Tìm số nhân với 5 bằng 30.",
    level: "easy"
    , tags: ["chia_5"]
  },
  {
    id: 161, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 35 : 5 = ?",
    answer: "7",
    hint: "Tìm số nhân với 5 bằng 35.",
    level: "easy"
    , tags: ["chia_5"]
  },
  {
    id: 162, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 40 : 5 = ?",
    answer: "8",
    hint: "Tìm số nhân với 5 bằng 40.",
    level: "easy"
    , tags: ["chia_5"]
  },
  {
    id: 163, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 45 : 5 = ?",
    answer: "9",
    hint: "Tìm số nhân với 5 bằng 45.",
    level: "easy"
    , tags: ["chia_5"]
  },
  {
    id: 164, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "Tính: 50 : 5 = ?",
    answer: "10",
    hint: "Tìm số nhân với 5 bằng 50.",
    level: "easy"
    , tags: ["chia_5"]
  },
  {
    id: 165, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "mc",
    q: "5 được lấy 3 lần bằng phép tính nào?",
    answers: ["5 + 5 + 5", "5 + 3", "5 × 3 + 1", "3 + 3 + 3"], correct: 0,
    hint: "Lấy 3 lần nghĩa là cộng 5 với chính nó 3 lần, hay 5 × 3.",
    level: "easy"
    , tags: ["nhan_y_nghia"]
  },
  {
    id: 166, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "fill",
    q: "3 + 3 + 3 + 3 = ? (viết dưới dạng phép nhân: a × b, nhập kết quả số)",
    answer: "12",
    hint: "3 được lấy 4 lần: 3 × 4 = 12.",
    level: "easy"
    , tags: ["nhan_y_nghia"]
  },
  {
    id: 167, topic: "nhan_chia", topicName: "Phép nhân & chia", type: "mc",
    q: "Trong phép chia 20 : 4 = 5, số 5 được gọi là:",
    answers: ["Thương", "Số bị chia", "Số chia", "Tích"], correct: 0,
    hint: "Kết quả phép chia gọi là thương.",
    level: "easy"
    , tags: ["thuat_ngu"]
  },
  {
    id: 168, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Túi có 5 viên bi đỏ và 3 viên bi xanh. Lấy 1 viên bi không nhìn. Viên bi lấy được có thể là màu gì?",
    answers: ["Đỏ hoặc xanh", "Chắc chắn đỏ", "Chắc chắn xanh", "Không thể biết màu"], correct: 0,
    hint: "Có thể là đỏ hoặc xanh vì cả hai màu đều có trong túi.",
    level: "easy"
    , tags: ["co_the"]
  },
  {
    id: 169, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Túi chỉ có bi đỏ. Lấy 1 viên bi không nhìn. Viên bi lấy được chắc chắn là:",
    answers: ["Màu đỏ", "Màu xanh", "Màu vàng", "Không xác định"], correct: 0,
    hint: "Túi chỉ có bi đỏ nên chắc chắn lấy được bi đỏ.",
    level: "easy"
    , tags: ["chac_chan"]
  },
  {
    id: 170, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Túi chỉ có bi đỏ. Lấy 1 viên bi không nhìn. Viên bi lấy được có thể là màu xanh không?",
    answers: ["Không thể", "Có thể", "Chắc chắn", "Không biết"], correct: 0,
    hint: "Túi không có bi xanh nên không thể lấy được bi xanh.",
    level: "easy"
    , tags: ["khong_the"]
  },
  {
    id: 171, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Hình tam giác có bao nhiêu cạnh?",
    answers: ["3", "4", "5", "6"], correct: 0,
    hint: "Tam giác có 3 cạnh và 3 góc.",
    level: "easy"
    , tags: ["tam_giac"]
  },
  {
    id: 172, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: "Hình vuông có bao nhiêu cạnh bằng nhau?",
    answers: ["4", "3", "2", "6"], correct: 0,
    hint: "Hình vuông có 4 cạnh bằng nhau.",
    level: "easy"
    , tags: ["hinh_vuong"]
  },
  {
    id: 173, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: "Hình chữ nhật có 4 cạnh, trong đó có ? cặp cạnh bằng nhau.",
    answer: "2",
    hint: "Hai cạnh dài bằng nhau, hai cạnh ngắn bằng nhau.",
    level: "easy"
    , tags: ["hinh_chu_nhat"]
  },
  {
    id: 174, topic: "do_luong", topicName: "Đo lường & Thời gian", type: "mc",
    q: "1 giờ bằng bao nhiêu phút?",
    answers: ["60 phút", "100 phút", "30 phút", "24 phút"], correct: 0,
    hint: "1 giờ = 60 phút.",
    level: "easy"
    , tags: ["thoi_gian"]
  },
  {
    id: 175, topic: "do_luong", topicName: "Đo lường & Thời gian", type: "fill",
    q: "Đồng hồ chỉ 3 giờ. Kim ngắn chỉ số ?",
    answer: "3",
    hint: "Kim ngắn chỉ giờ.",
    level: "easy"
    , tags: ["dong_ho"]
  },
  {
    id: 176, topic: "do_luong", topicName: "Đo lường & Thời gian", type: "mc",
    q: "10 đơn vị bằng bao nhiêu chục?",
    answers: ["1 chục", "10 chục", "100 chục", "2 chục"], correct: 0,
    hint: "10 đơn vị = 1 chục.",
    level: "easy"
    , tags: ["don_vi_chuc"]
  },
  {
    id: 177, topic: "do_luong", topicName: "Đo lường & Thời gian", type: "fill",
    q: "1 trăm bằng ? chục.",
    answer: "10",
    hint: "10 chục = 1 trăm.",
    level: "easy"
    , tags: ["chuc_tram"]
  },
  {
    id: 178, topic: "do_luong", topicName: "Đo lường & Thời gian", type: "fill",
    q: "1 nghìn bằng ? trăm.",
    answer: "10",
    hint: "10 trăm = 1 nghìn.",
    level: "medium"
    , tags: ["tram_nghin"]
  },
  {
    id: 179, topic: "do_luong", topicName: "Đo lường & Thời gian", type: "mc",
    q: "Số 105 đọc là:",
    answers: ["Một trăm linh năm", "Một trăm năm mươi", "Mười linh năm", "Năm trăm linh một"], correct: 0,
    hint: "105 = 1 trăm + 0 chục + 5 đơn vị.",
    level: "medium"
    , tags: ["doc_so"]
  },
  {
    id: 180, topic: "do_luong", topicName: "Đo lường & Thời gian", type: "fill",
    q: "Thước kẻ dài 15 cm, bút chì dài 8 cm. Bút chì ngắn hơn thước kẻ ? cm.",
    answer: "7",
    hint: "Lấy chiều dài thước trừ chiều dài bút.",
    level: "easy"
    , tags: ["do_dai"]
  },
  {
    id: 181, topic: "do_luong", topicName: "Đo lường & Thời gian", type: "fill",
    q: "Thước kẻ dài 20 cm, bút chì dài 12 cm. Bút chì ngắn hơn thước kẻ ? cm.",
    answer: "8",
    hint: "Lấy chiều dài thước trừ chiều dài bút.",
    level: "easy"
    , tags: ["do_dai"]
  },
  {
    id: 182, topic: "do_luong", topicName: "Đo lường & Thời gian", type: "fill",
    q: "Thước kẻ dài 30 cm, bút chì dài 18 cm. Bút chì ngắn hơn thước kẻ ? cm.",
    answer: "12",
    hint: "Lấy chiều dài thước trừ chiều dài bút.",
    level: "easy"
    , tags: ["do_dai"]
  },
  {
    id: 183, topic: "toan_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Mẹ mua 36 quả chuối và 12 quả cam. Số quả chuối nhiều hơn số quả cam bao nhiêu quả?",
    answer: "24",
    hint: "36 - 12.",
    level: "medium"
    , tags: ["nhieu_hon"]
  },
  {
    id: 184, topic: "toan_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Năm nay cô giáo 29 tuổi, em 7 tuổi. Em ít hơn cô giáo bao nhiêu tuổi?",
    answer: "22",
    hint: "29 - 7.",
    level: "medium"
    , tags: ["it_hon"]
  },
  {
    id: 185, topic: "toan_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Lan có 15 viên bi, Hoa có 8 viên bi. Lan nhiều hơn Hoa bao nhiêu viên bi?",
    answer: "7",
    hint: "15 - 8.",
    level: "medium"
    , tags: ["nhieu_hon"]
  },
  {
    id: 186, topic: "toan_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Một lớp có 32 học sinh, trong đó có 18 học sinh nữ. Hỏi lớp đó có bao nhiêu học sinh nam?",
    answer: "14",
    hint: "32 - 18.",
    level: "medium"
    , tags: ["tim_hieu"]
  },
  {
    id: 187, topic: "toan_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Bao gạo nặng 25 kg, bao ngô nặng 18 kg. Cả hai bao nặng bao nhiêu kg?",
    answer: "43",
    hint: "25 + 18.",
    level: "medium"
    , tags: ["tong"]
  },
  {
    id: 188, topic: "toan_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Mai đọc được 28 trang sách, chiều Mai đọc thêm 15 trang. Mai đã đọc tất cả bao nhiêu trang?",
    answer: "43",
    hint: "28 + 15.",
    level: "medium"
    , tags: ["tong"]
  },
  {
    id: 189, topic: "toan_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Có 20 cái kẹo chia đều cho 4 bạn. Mỗi bạn được bao nhiêu cái kẹo?",
    answer: "5",
    hint: "20 : 4 = 5.",
    level: "medium"
    , tags: ["chia_deu"]
  },
  {
    id: 190, topic: "toan_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Mỗi hộp có 5 cái bánh, mua 3 hộp như thế. Hỏi có tất cả bao nhiêu cái bánh?",
    answer: "15",
    hint: "5 × 3 = 15.",
    level: "medium"
    , tags: ["nhan_loi_van"]
  },
  {
    id: 191, topic: "toan_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Nam có 50 nghìn đồng, mua bút hết 15 nghìn đồng. Nam còn lại bao nhiêu nghìn đồng?",
    answer: "35",
    hint: "50 - 15.",
    level: "medium"
    , tags: ["tru_loi_van"]
  },
  {
    id: 192, topic: "toan_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Một thùng có 40 quả cam, bán đi 17 quả. Còn lại bao nhiêu quả cam?",
    answer: "23",
    hint: "40 - 17.",
    level: "medium"
    , tags: ["tru_loi_van"]
  },
  {
    id: 193, topic: "toan_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "An có 3 túi bi, mỗi túi 6 viên. An có tất cả bao nhiêu viên bi?",
    answer: "18",
    hint: "6 × 3 = 18.",
    level: "medium"
    , tags: ["nhan_loi_van"]
  },
  {
    id: 194, topic: "toan_loi_van", topicName: "Toán có lời văn", type: "fill",
    q: "Lớp 2A có 35 học sinh, lớp 2B có 32 học sinh. Hai lớp có tất cả bao nhiêu học sinh?",
    answer: "67",
    hint: "35 + 32.",
    level: "medium"
    , tags: ["tong"]
  },
  {
    id: 195, topic: "toan_loi_van", topicName: "Toán có lời văn", type: "mc",
    q: "Chung em mang theo 36 quả chuối và 12 quả cam. Số quả cam ít hơn số quả chuối bao nhiêu quả?",
    answers: ["24", "36", "12", "48"], correct: 0,
    hint: "36 - 12 = 24.",
    level: "easy"
    , tags: ["nhieu_hon", "sgk"]
  },
  // Hình học bổ sung (có Shapes)
  {
    id: 196, topic: "hinh_hoc", topicName: "Hình học", type: "fill",
    q: Shapes.square(50, "3") + " Hình vuông có cạnh 3 cm. Chu vi hình vuông là ? cm.",
    answer: "12",
    hint: "Chu vi hình vuông = cạnh × 4.",
    level: "easy", tags: ["hinh_vuong", "chu_vi"]
  },
  {
    id: 197, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.rectangle(70, 40, "5", "3") + " Hình chữ nhật có chiều dài 5 cm, chiều rộng 3 cm. Chu vi là:",
    answers: ["16 cm", "15 cm", "8 cm", "10 cm"], correct: 0,
    hint: "Chu vi = (chiều dài + chiều rộng) × 2.",
    level: "medium", tags: ["hinh_chu_nhat", "chu_vi"]
  },
  {
    id: 198, topic: "hinh_hoc", topicName: "Hình học", type: "mc",
    q: Shapes.triangle(60, 0, 0, 50, "4", "", "", "3") + " Hình tam giác có đáy 4 cm, chiều cao 3 cm. Đây là hình gì?",
    answers: ["Tam giác", "Hình vuông", "Hình tròn", "Hình chữ nhật"], correct: 0,
    hint: "Hình có 3 cạnh gọi là tam giác.",
    level: "easy", tags: ["tam_giac"]
  },
  {
    id: 199, topic: "do_luong", topicName: "Đo lường & Thời gian", type: "fill",
    q: Shapes.line(80, "12", "cm") + " Đoạn thẳng dài 12 cm. Thêm 8 cm nữa thì đoạn thẳng dài ? cm.",
    answer: "20",
    hint: "12 + 8 = 20.",
    level: "easy", tags: ["do_dai"]
  },
  {
    id: 200, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "fill",
    q: "Tính: 234 + 125 = ? (phạm vi 1000, tập 2 SGK)",
    answer: "359",
    hint: "Cộng từ hàng đơn vị: 4+5=9, 3+2=5, 2+1=3.",
    level: "hard", tags: ["cong_1000", "sgk"]
  },
  {
    id: 201, topic: "cong_tru_100", topicName: "Cộng trừ có nhớ (đến 100)", type: "fill",
    q: "Tính: 567 - 234 = ?",
    answer: "333",
    hint: "Trừ từ hàng đơn vị sang trái.",
    level: "hard", tags: ["tru_1000", "sgk"]
  }
];