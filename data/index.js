// data/index.js - Gộp câu hỏi từ các chủ đề và gán tag mặc định

// Hàm gán ID duy nhất
function assignUniqueIds(...questionArrays) {
  let nextId = 1;
  let all = [];
  for (let arr of questionArrays) {
    for (let q of arr) {
      let newQ = { ...q, id: nextId++ };
      all.push(newQ);
    }
  }
  return all;
}

// Hàm gán tag mặc định (nếu câu hỏi chưa có tags)
function assignDefaultTags(questions) {
  return questions.map(q => {
    if (!q.tags) {
      q.tags = [q.topic];
    }
    return q;
  });
}

// Gộp và gán tags
const QUESTIONS = assignUniqueIds(
  assignDefaultTags(SO_TU_NHIEU),
  assignDefaultTags(PHAN_SO),
  assignDefaultTags(SO_THAP_PHAN),
  assignDefaultTags(HINH_HOC),
  assignDefaultTags(THONG_KE),
  assignDefaultTags(DO_LUONG),
  assignDefaultTags(TOAN_VAN)
);

console.log(`Đã tạo bộ đề với ${QUESTIONS.length} câu hỏi, ID từ 1 đến ${QUESTIONS.length}.`);