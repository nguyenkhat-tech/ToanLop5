// app.js - Ôn tập Toán đa khối lớp (3,4,5)
let state = {
  selectedTopics: new Set(),
  selectedTags: new Set(),
  mode: "normal",
  qcount: 10,
  timeper: 30,
  shuffleAnswers: false,
  questions: [],
  current: 0,
  score: 0,
  streak: 0,
  maxStreak: 0,
  answered: false,
  timerInt: null,
  timeLeft: 0,
  startTime: 0,
  history: { done: 0, correct: 0, streak: 0 },
  wrongIds: new Set(),
  sessionWrong: [],
  currentSessionDetails: [],
  currentQuestionStartTime: 0,
  currentQuestionViewedHint: false,
  currentShuffledIndices: null,
  currentCorrectPos: 0,
};

let allSessions = [];
let currentGrade = "5";
let TOPICS = [];
let QUESTIONS = [];

// ==================== LƯU TRỮ THEO KHỐI ====================
function getStoragePrefix() { return `toan_${currentGrade}`; }
function getHistoryKey() { return `${getStoragePrefix()}_v2`; }
function getWrongKey() { return `${getStoragePrefix()}_wrong`; }
function getSessionsKey() { return `${getStoragePrefix()}_sessions`; }

function getQuestionKey(q) { return `${q.topic}_${q.id}`; }

function loadHistory() {
  try {
    const h = JSON.parse(localStorage.getItem(getHistoryKey()) || '{}');
    state.history = { done: h.done || 0, correct: h.correct || 0, streak: h.streak || 0 };
    const wi = JSON.parse(localStorage.getItem(getWrongKey()) || '[]');
    state.wrongIds = new Set(wi);
  } catch(e) { }
  document.getElementById('hs-done').textContent = state.history.done;
  document.getElementById('hs-correct').textContent = state.history.correct;
  document.getElementById('hs-streak').textContent = state.history.streak;
}

function saveHistory() {
  try {
    localStorage.setItem(getHistoryKey(), JSON.stringify(state.history));
    localStorage.setItem(getWrongKey(), JSON.stringify(Array.from(state.wrongIds)));
  } catch(e) { }
}

function loadSessions() {
  try {
    const saved = localStorage.getItem(getSessionsKey());
    if (saved) allSessions = JSON.parse(saved);
    else allSessions = [];
  } catch(e) { allSessions = []; }
}

function saveSessions() {
  try {
    if (allSessions.length > 30) allSessions = allSessions.slice(0, 30);
    localStorage.setItem(getSessionsKey(), JSON.stringify(allSessions));
  } catch(e) { }
}

function addSession(session) { allSessions.unshift(session); saveSessions(); }

function clearAllHistory() {
  if (confirm("Bạn có chắc muốn xoá toàn bộ lịch sử làm bài của khối này?")) {
    allSessions = [];
    state.wrongIds.clear();
    state.history = { done: 0, correct: 0, streak: 0 };
    saveHistory();
    saveSessions();
    showHistory();
    loadHistory();
  }
}

// ==================== HIỂN THỊ LỊCH SỬ ====================
function showHistory() { renderHistoryList(); showScreen('history'); }

function renderHistoryList() {
  const container = document.getElementById('history-list-container');
  if (!container) return;
  if (allSessions.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:20px;color:var(--muted)">📭 Chưa có bài làm nào. Hãy bắt đầu ôn tập!</div>';
    return;
  }
  let html = '';
  allSessions.forEach(s => {
    const dateStr = new Date(s.timestamp).toLocaleString('vi-VN');
    html += `<div class="history-item" onclick="viewSessionDetail(${s.id})">
      <div class="history-date">${dateStr}</div>
      <div class="history-score">🎯 ${s.correct}/${s.totalQ} (${s.scorePercent}%)</div>
      <div class="history-detail">⏱ ${Math.floor(s.totalTimeSec / 60)}m${s.totalTimeSec % 60}s | 💡 Xem gợi ý: ${s.totalHintUsed}</div>
    </div>`;
  });
  container.innerHTML = html;
}

function viewSessionDetail(sessionId) {
  const session = allSessions.find(s => s.id === sessionId);
  if (!session) return;
  let detailsHtml = `<div class="review-section"><div class="review-title">📌 Chi tiết bài làm ngày ${new Date(session.timestamp).toLocaleString('vi-VN')}</div>`;
  detailsHtml += `<table class="detail-table"><tr><th>Câu hỏi</th><th>Đáp án HS</th><th>Đáp án đúng</th><th>KQ</th><th>Thời gian</th><th>Gợi ý</th></tr>`;
  session.details.forEach(d => {
    const timeDisplay = d.timeSpent !== undefined ? `${d.timeSpent}s` : '--';
    const hintIcon = d.viewedHint ? '✅' : '❌';
    const resultClass = d.isCorrect ? 'tag-correct' : 'tag-wrong';
    const resultText = d.isCorrect ? 'Đúng' : 'Sai';
    let userAnswerDisplay = d.userAnswer;
    if (d.qType === 'mc' && !isNaN(parseInt(d.userAnswer))) {
      const letter = ['A', 'B', 'C', 'D'][parseInt(d.userAnswer)];
      if (letter) userAnswerDisplay = `${letter} (${d.userAnswerRaw || d.userAnswer})`;
    }
    detailsHtml += `<tr>
        <td>${d.qText.substring(0, 60)}${d.qText.length > 60 ? '...' : ''}</td>
        <td>${userAnswerDisplay || '—'}</td>
        <td>${d.correctAnswer}</td>
        <td class="${resultClass}">${resultText}</td>
        <td>${timeDisplay}</td>
        <td>${hintIcon}</td>
      </tr>`;
  });
  detailsHtml += `</table></div><button class="btn-home" style="width:100%;margin-top:8px;" onclick="showHistory()">⬅ Quay lại</button>`;
  document.getElementById('detail-content').innerHTML = detailsHtml;
  showScreen('detail');
}

// ==================== TAG FILTER ====================
function getAllTags() {
  const tagsSet = new Set();
  QUESTIONS.forEach(q => {
    if (q.tags && q.tags.length) q.tags.forEach(t => tagsSet.add(t));
  });
  return Array.from(tagsSet).sort();
}

function buildTagFilter() {
  const container = document.getElementById('tag-filter');
  if (!container) return;
  const allTags = getAllTags();
  container.innerHTML = '';
  if (allTags.length === 0) {
    container.innerHTML = '<div style="color:var(--muted); font-size:13px;">Chưa có tag nào.</div>';
    return;
  }
  allTags.forEach(tag => {
    const label = document.createElement('label');
    label.className = 'topic-btn';
    label.style.display = 'inline-block';
    label.style.marginRight = '8px';
    label.style.marginBottom = '8px';
    label.innerHTML = `<input type="checkbox" value="${tag}" style="margin-right:6px;"> ${tag}`;
    label.querySelector('input').addEventListener('change', (e) => {
      if (e.target.checked) state.selectedTags.add(tag);
      else state.selectedTags.delete(tag);
    });
    container.appendChild(label);
  });
}

// ==================== CHỦ ĐỀ ====================
function buildTopicGrid() {
  const g = document.getElementById('topic-grid');
  if (!g) return;
  g.innerHTML = '';
  TOPICS.forEach(t => {
    const cnt = QUESTIONS.filter(q => q.topic === t.id).length;
    const d = document.createElement('div');
    d.className = state.selectedTopics.has(t.id) ? 'topic-btn selected' : 'topic-btn';
    d.dataset.tid = t.id;
    d.innerHTML = `<div class="topic-icon">${t.icon}</div><span class="topic-name">${t.name}</span><span class="topic-count">${cnt} câu</span>`;
    d.onclick = () => toggleTopic(d, t.id);
    g.appendChild(d);
  });
}

function toggleTopic(el, tid) {
  const multi = document.getElementById('multiTopics');
  if (!multi) return;
  if (multi.checked) {
    if (state.selectedTopics.has(tid)) {
      if (state.selectedTopics.size <= 1) return;
      state.selectedTopics.delete(tid);
      el.classList.remove('selected');
    } else {
      state.selectedTopics.add(tid);
      el.classList.add('selected');
    }
  } else {
    state.selectedTopics.clear();
    state.selectedTopics.add(tid);
    document.querySelectorAll('.topic-btn').forEach(btn => btn.classList.remove('selected'));
    el.classList.add('selected');
  }
}

// ==================== TẢI DỮ LIỆU THEO KHỐI ====================
async function loadGrade(grade) {
  currentGrade = grade;
  try {
    const topicsRes = await fetch(`data/lop${grade}/topics.js`);
    const topicsText = await topicsRes.text();
    eval(topicsText); // TOPICS được định nghĩa
    const questionsRes = await fetch(`data/lop${grade}/questions.json`);
    QUESTIONS = await questionsRes.json();

    // Reset state
    state.selectedTopics.clear();
    if (TOPICS.length > 0) state.selectedTopics.add(TOPICS[0].id);
    state.selectedTags.clear();
    state.wrongIds.clear();
    state.history = { done: 0, correct: 0, streak: 0 };
    allSessions = [];
    saveHistory();
    saveSessions();
    loadHistory();
    loadSessions();
    buildTopicGrid();
    buildTagFilter();
    // Cập nhật số lượng câu hiển thị trên mỗi topic
    document.querySelectorAll('.topic-btn').forEach(btn => {
      const tid = btn.dataset.tid;
      const cnt = QUESTIONS.filter(q => q.topic === tid).length;
      const countSpan = btn.querySelector('.topic-count');
      if (countSpan) countSpan.textContent = `${cnt} câu`;
    });
    if (document.getElementById('screen-quiz').classList.contains('active')) goHome();
    else showScreen('home');
  } catch(e) {
    console.error(`Lỗi tải dữ liệu cho lớp ${grade}:`, e);
    alert(`Không thể tải dữ liệu cho lớp ${grade}. Hãy đảm bảo thư mục data/lop${grade}/ có topics.js và questions.json.`);
  }
}

// ==================== CÁC HÀM XỬ LÝ CHÍNH ====================
function startQuiz() {
  state.qcount = parseInt(document.getElementById('qcount').value);
  state.timeper = parseInt(document.getElementById('timeper').value);
  state.shuffleAnswers = document.getElementById('shuffle-answers').checked;
  let pool = QUESTIONS.filter(q => state.selectedTopics.has(q.topic));
  if (state.selectedTags.size > 0) {
    pool = pool.filter(q => q.tags && q.tags.some(t => state.selectedTags.has(t)));
  }
  if (state.mode === 'retry') {
    const wrongKeys = Array.from(state.wrongIds);
    pool = pool.filter(q => wrongKeys.includes(getQuestionKey(q)));
  }
  if (state.mode === 'random' || state.mode === 'retry') {
    pool.sort(() => Math.random() - 0.5);
  }
  state.questions = pool.slice(0, state.qcount);
  state.current = 0;
  state.score = 0;
  state.streak = 0;
  state.maxStreak = 0;
  state.answered = false;
  state.sessionWrong = [];
  state.startTime = Date.now();
  state.currentSessionDetails = [];
  showScreen('quiz');
  renderQuestion();
}

function renderQuestion() {
  clearInterval(state.timerInt);
  const q = state.questions[state.current];
  const total = state.questions.length;
  document.getElementById('q-counter').textContent = `${state.current + 1}/${total}`;
  document.getElementById('progress-fill').style.width = `${(state.current / total) * 100}%`;
  document.getElementById('streak-num').textContent = state.streak;
  document.getElementById('q-category').textContent = q.topicName;
  document.getElementById('q-text').innerHTML = q.q;
  document.getElementById('score-mini').textContent = `Điểm: ${state.score}/${total}`;
  document.getElementById('feedback-box').style.display = 'none';
  document.getElementById('next-btn').style.display = 'none';
  state.answered = false;
  state.currentQuestionViewedHint = false;
  state.currentQuestionStartTime = Date.now();

  if (q.type === 'mc') {
    let answers = [...q.answers];
    let correctIndex = q.correct;
    let shuffledIndices = null;
    if (state.shuffleAnswers) {
      shuffledIndices = [...Array(answers.length).keys()];
      for (let i = shuffledIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
      }
      const newAnswers = shuffledIndices.map(idx => answers[idx]);
      answers = newAnswers;
      correctIndex = shuffledIndices.indexOf(q.correct);
    } else {
      shuffledIndices = [...Array(answers.length).keys()];
    }
    state.currentShuffledIndices = shuffledIndices;
    const labels = ['A', 'B', 'C', 'D'];
    let html = `<div class="answers-grid">`;
    answers.forEach((a, i) => {
      html += `<button class="ans-btn" id="ans-${i}" onclick="checkMC(${i})">
        <span class="ans-label">${labels[i]}</span>${a}
      </button>`;
    });
    html += `</div>`;
    if (q.hint) html += `<button class="hint-btn" onclick="toggleHint()">💡 Xem gợi ý</button>
      <div class="hint-text" id="hint-text">${q.hint}</div>`;
    document.getElementById('q-body').innerHTML = html;
    state.currentCorrectPos = correctIndex;
  } else {
    let html = `<div class="fill-wrap">
      <input class="fill-input" id="fill-inp" type="text" placeholder="Nhập đáp án..." autocomplete="off"/>
      <button class="submit-btn" onclick="checkFill()"><i class="ti ti-check"></i></button>
    </div>`;
    if (q.hint) html += `<button class="hint-btn" onclick="toggleHint()">💡 Xem gợi ý</button>
      <div class="hint-text" id="hint-text">${q.hint}</div>`;
    document.getElementById('q-body').innerHTML = html;
    const inp = document.getElementById('fill-inp');
    if (inp) {
      inp.focus();
      inp.removeEventListener('keydown', fillEnterHandler);
      inp.addEventListener('keydown', fillEnterHandler);
    }
  }
  startTimer(state.timeper);
}

function fillEnterHandler(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    checkFill();
  }
}

function toggleHint() {
  const h = document.getElementById('hint-text');
  if (h) {
    h.style.display = h.style.display === 'block' ? 'none' : 'block';
    state.currentQuestionViewedHint = true;
  }
}

function checkMC(idx) {
  if (state.answered) return;
  clearInterval(state.timerInt);
  state.answered = true;
  const q = state.questions[state.current];
  const timeSpent = state.timeper - state.timeLeft;
  const isCorrect = (idx === state.currentCorrectPos);
  const originalAnswers = q.answers;
  const shuffledIndices = state.currentShuffledIndices;
  let selectedOriginalIndex = shuffledIndices ? shuffledIndices[idx] : idx;
  const userAnswerRaw = originalAnswers[selectedOriginalIndex];
  const correctAnswerRaw = originalAnswers[q.correct];
  document.querySelectorAll('.ans-btn').forEach(btn => btn.disabled = true);
  const selectedBtn = document.getElementById(`ans-${idx}`);
  if (selectedBtn) selectedBtn.classList.add(isCorrect ? 'correct' : 'wrong');
  if (!isCorrect) {
    const correctBtn = document.getElementById(`ans-${state.currentCorrectPos}`);
    if (correctBtn) correctBtn.classList.add('correct');
  }
  handleResult(isCorrect, q, correctAnswerRaw, userAnswerRaw, selectedOriginalIndex, timeSpent);
}

function checkFill() {
  if (state.answered) return;
  const inp = document.getElementById('fill-inp');
  if (!inp) return;
  const val = inp.value.trim().replace(/\s/g, '');
  if (val === "") {
    alert("Vui lòng nhập đáp án!");
    return;
  }
  clearInterval(state.timerInt);
  state.answered = true;
  const q = state.questions[state.current];
  const timeSpent = state.timeper - state.timeLeft;
  const isCorrect = (val === q.answer.replace(/\s/g, ''));
  inp.disabled = true;
  inp.classList.add(isCorrect ? 'correct' : 'wrong');
  handleResult(isCorrect, q, q.answer, val, null, timeSpent);
}

function handleResult(isCorrect, q, correctAnswer, userAnswer, answerIndex, timeSpent) {
  if (isCorrect) {
    state.score++;
    state.streak++;
    if (state.streak > state.maxStreak) state.maxStreak = state.streak;
    state.wrongIds.delete(getQuestionKey(q));
    if (state.streak >= 3) spawnParticles();
  } else {
    state.streak = 0;
    state.sessionWrong.push({ q, correct: false });
    state.wrongIds.add(getQuestionKey(q));
  }
  state.currentSessionDetails.push({
    q: q,
    userAnswer: userAnswer,
    userAnswerRaw: userAnswer,
    correctAnswer: correctAnswer,
    isCorrect: isCorrect,
    timeSpent: timeSpent,
    viewedHint: state.currentQuestionViewedHint,
  });
  document.getElementById('streak-num').textContent = state.streak;
  document.getElementById('score-mini').textContent = `Điểm: ${state.score}/${state.questions.length}`;
  showFeedback(isCorrect, correctAnswer);
  document.getElementById('next-btn').style.display = 'block';
}

function showFeedback(ok, correctAns) {
  const fb = document.getElementById('feedback-box');
  fb.className = 'feedback-box ' + (ok ? 'correct' : 'wrong');
  fb.style.display = 'block';
  if (ok) {
    const msgs = ["✅ Chính xác! Giỏi lắm!", "🌟 Xuất sắc! Tiếp tục nhé!", "🎉 Tuyệt vời! Đúng rồi!", "👏 Chuẩn! Bạn thật thông minh!", "🔥 Đúng rồi! Tiếp tục phát huy!"];
    fb.textContent = msgs[Math.floor(Math.random() * msgs.length)];
  } else {
    fb.textContent = `❌ Chưa đúng! Đáp án đúng là: ${correctAns}`;
  }
}

function nextQuestion() {
  state.current++;
  if (state.current >= state.questions.length) {
    showResult();
    return;
  }
  renderQuestion();
}

function showResult() {
  clearInterval(state.timerInt);
  saveCurrentSession();
  const total = state.questions.length;
  const pct = Math.round((state.score / total) * 100);
  const elapsed = Math.round((Date.now() - state.startTime) / 1000);
  document.getElementById('rs-score').textContent = pct + '%';
  document.getElementById('rs-correct').textContent = `${state.score}/${total}`;
  const m = Math.floor(elapsed / 60), s = elapsed % 60;
  document.getElementById('rs-time').textContent = m > 0 ? `${m}p${s}s` : `${s}s`;
  let emoji = '😊', title = 'Cố gắng hơn nhé!';
  if (pct >= 90) { emoji = '🏆'; title = 'Xuất sắc! Tuyệt vời!'; }
  else if (pct >= 70) { emoji = '🌟'; title = 'Giỏi lắm! Tiếp tục nhé!'; }
  else if (pct >= 50) { emoji = '👍'; title = 'Ổn đấy! Cần ôn thêm!'; }
  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-title').textContent = title;
  document.getElementById('result-sub').textContent = `Đúng ${state.score}/${total} câu — Streak cao nhất: ${state.maxStreak} 🔥`;
  const rl = document.getElementById('review-list');
  rl.innerHTML = state.questions.map((q, i) => {
    const detail = state.currentSessionDetails.find(d => d.q.id === q.id && d.q.topic === q.topic);
    const ok = detail ? detail.isCorrect : false;
    const ans = q.type === 'fill' ? q.answer : q.answers[q.correct];
    return `<div class="review-item"><div class="review-q">${i + 1}. ${q.q}</div><div class="review-a ${ok ? 'tag-correct' : 'tag-wrong'}">${ok ? '✓ Đúng' : '✗ Sai — Đáp án: ' + ans}</div></div>`;
  }).join('');
  state.history.done += total;
  state.history.correct += state.score;
  if (state.maxStreak > state.history.streak) state.history.streak = state.maxStreak;
  saveHistory();
  showScreen('result');
  if (pct >= 70) spawnParticles();
}

function saveCurrentSession() {
  const total = state.questions.length;
  const correctCount = state.score;
  const percent = Math.round((correctCount / total) * 100);
  const totalTimeSec = Math.round((Date.now() - state.startTime) / 1000);
  const totalHintUsed = state.currentSessionDetails.filter(d => d.viewedHint === true).length;
  const session = {
    id: Date.now(),
    timestamp: Date.now(),
    totalQ: total,
    correct: correctCount,
    scorePercent: percent,
    totalTimeSec: totalTimeSec,
    totalHintUsed: totalHintUsed,
    details: state.currentSessionDetails.map(d => ({
      qId: d.q.id,
      qTopic: d.q.topic,
      qText: d.q.q,
      qType: d.q.type,
      userAnswer: d.userAnswer,
      userAnswerRaw: d.userAnswerRaw,
      correctAnswer: d.correctAnswer,
      isCorrect: d.isCorrect,
      timeSpent: d.timeSpent,
      viewedHint: d.viewedHint,
    }))
  };
  addSession(session);
}

function retryWrong() {
  state.mode = 'retry';
  document.querySelectorAll('.mode-btn').forEach(b => {
    b.classList.toggle('selected', b.dataset.mode === 'retry');
  });
  startQuiz();
}

function goHome() {
  clearInterval(state.timerInt);
  loadHistory();
  showScreen('home');
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
}

function selectMode(el) {
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  state.mode = el.dataset.mode;
}

function startTimer(sec) {
  state.timeLeft = sec;
  updateTimerUI(sec, sec);
  state.timerInt = setInterval(() => {
    if (state.timeLeft <= 1) {
      clearInterval(state.timerInt);
      if (!state.answered) timeUp();
    } else {
      state.timeLeft--;
      updateTimerUI(state.timeLeft, sec);
    }
  }, 1000);
}

function updateTimerUI(left, total) {
  document.getElementById('timer-sec').textContent = left;
  const pct = (left / total) * 100;
  const fill = document.getElementById('timer-fill');
  fill.style.width = pct + '%';
  fill.style.background = pct > 60 ? '#16A34A' : (pct > 30 ? '#D97706' : '#DC2626');
}

function timeUp() {
  if (state.answered) return;
  state.answered = true;
  const q = state.questions[state.current];
  const timeSpent = state.timeper - state.timeLeft;
  state.streak = 0;
  state.sessionWrong.push({ q, correct: false });
  state.wrongIds.add(getQuestionKey(q));
  const correctAns = q.type === 'fill' ? q.answer : q.answers[q.correct];
  showFeedback(false, correctAns);
  state.currentSessionDetails.push({
    q: q,
    userAnswer: "(Hết giờ)",
    userAnswerRaw: "(Hết giờ)",
    correctAnswer: correctAns,
    isCorrect: false,
    timeSpent: timeSpent,
    viewedHint: state.currentQuestionViewedHint,
  });
  if (q.type === 'mc') {
    document.querySelectorAll('.ans-btn').forEach(b => b.disabled = true);
    const cb = document.getElementById(`ans-${state.currentCorrectPos}`);
    if (cb) cb.classList.add('correct');
  } else {
    const inp = document.getElementById('fill-inp');
    if (inp) { inp.disabled = true; inp.classList.add('wrong'); }
  }
  document.getElementById('streak-num').textContent = state.streak;
  document.getElementById('next-btn').style.display = 'block';
}

function spawnParticles() {
  const emojis = ['⭐', '🌟', '✨', '🎉', '👏', '🔥', '💫', '🎊'];
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const p = document.createElement('div');
      p.className = 'particle';
      p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      p.style.left = Math.random() * 80 + 10 + '%';
      p.style.top = Math.random() * 60 + 20 + '%';
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 1600);
    }, i * 80);
  }
}

// Bàn phím
document.addEventListener('keydown', e => {
  const quizScreen = document.getElementById('screen-quiz');
  if (!quizScreen || !quizScreen.classList.contains('active')) return;
  if (!state.answered) {
    const q = state.questions[state.current];
    if (q && q.type === 'mc') {
      const map = { '1': 0, '2': 1, '3': 2, '4': 3 };
      if (map[e.key] !== undefined) {
        e.preventDefault();
        checkMC(map[e.key]);
      }
    }
  } else {
    if (e.key === 'Enter') {
      e.preventDefault();
      nextQuestion();
    }
  }
});

// Khởi tạo khi trang load
document.addEventListener('DOMContentLoaded', () => {
  const gradeSelect = document.getElementById('gradeSelect');
  if (gradeSelect) {
    gradeSelect.addEventListener('change', (e) => loadGrade(e.target.value));
    loadGrade('5');
  }
});