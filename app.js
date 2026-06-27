// app.js - Phiên bản hoàn chỉnh, hỗ trợ đa khối, lọc tag, mức độ, lưu lịch sử
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
let currentSubject = "toan";
let TOPICS = [];
let QUESTIONS = [];

const SUBJECT_NAMES = {
  toan: "Toán",
  lich_su: "Lịch sử",
  dia_ly: "Địa lý",
  khoa_hoc: "Khoa học"
};

// ==================== LƯU TRỮ THEO KHỐI / MÔN ====================
function getDataBasePath(grade, subject) {
  if (grade === "5" && subject) return `data/lop5/${subject}`;
  return `data/lop${grade}`;
}

function getStoragePrefix() {
  if (currentGrade === "5") return `${currentSubject}_5`;
  return `toan_${currentGrade}`;
}
function getHistoryKey() { return `${getStoragePrefix()}_v2`; }
function getWrongKey() { return `${getStoragePrefix()}_wrong`; }
function getSessionsKey() { return `${getStoragePrefix()}_sessions`; }

function getQuestionKey(q) {
  const prefix = currentGrade === "5" ? `${currentSubject}_` : "";
  return `${prefix}${q.topic}_${q.id}`;
}

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

// ==================== TAG FILTER (có tìm kiếm, chọn tất cả, đếm số câu) ====================
function buildTagFilter() {
  const container = document.getElementById('tag-filter');
  const searchInput = document.getElementById('tagSearch');
  if (!container) return;
  
  function renderTags(keyword = '') {
    const tagCount = new Map();
    QUESTIONS.forEach(q => {
      if (q.tags && q.tags.length) {
        q.tags.forEach(tag => {
          tagCount.set(tag, (tagCount.get(tag) || 0) + 1);
        });
      }
    });
    let allTags = Array.from(tagCount.keys()).sort();
    if (keyword.trim()) {
      allTags = allTags.filter(tag => tag.toLowerCase().includes(keyword.toLowerCase()));
    }
    if (allTags.length === 0) {
      container.innerHTML = '<div style="color:var(--muted); font-size:13px;">Không có tag nào phù hợp.</div>';
      return;
    }
    let html = `<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                  <span style="font-size:12px; font-weight:600;">🏷️ ${allTags.length} tag</span>
                  <div>
                    <button id="selectAllTags" style="background:none; border:none; color:var(--primary); cursor:pointer; font-size:11px;">Chọn tất cả</button>
                    <button id="deselectAllTags" style="background:none; border:none; color:var(--muted); cursor:pointer; font-size:11px;">Bỏ chọn</button>
                  </div>
                </div>
                <div id="tagList" style="display:flex; flex-wrap:wrap; gap:8px;"></div>`;
    container.innerHTML = html;
    
    const tagListDiv = document.getElementById('tagList');
    allTags.forEach(tag => {
      const label = document.createElement('label');
      label.className = 'topic-btn';
      label.style.background = state.selectedTags.has(tag) ? 'var(--primary-light)' : 'var(--card)';
      label.style.border = '1px solid var(--border)';
      label.style.borderRadius = '20px';
      label.style.padding = '4px 12px';
      label.style.cursor = 'pointer';
      label.style.display = 'inline-flex';
      label.style.alignItems = 'center';
      label.style.gap = '6px';
      label.style.fontSize = '13px';
      label.innerHTML = `<input type="checkbox" value="${tag}" style="margin:0;" ${state.selectedTags.has(tag) ? 'checked' : ''}> ${tag} <span style="font-size:10px; color:var(--muted);">(${tagCount.get(tag)})</span>`;
      label.querySelector('input').addEventListener('change', (e) => {
        if (e.target.checked) state.selectedTags.add(tag);
        else state.selectedTags.delete(tag);
        updateTagStyle(label, tag);
      });
      tagListDiv.appendChild(label);
    });
    
    function updateTagStyle(label, tag) {
      if (state.selectedTags.has(tag)) {
        label.style.background = 'var(--primary-light)';
        label.style.border = '2px solid var(--primary)';
      } else {
        label.style.background = 'var(--card)';
        label.style.border = '1px solid var(--border)';
      }
    }
    
    document.getElementById('selectAllTags')?.addEventListener('click', () => {
      allTags.forEach(tag => state.selectedTags.add(tag));
      tagListDiv.querySelectorAll('label').forEach(label => {
        const cb = label.querySelector('input');
        if (cb) { cb.checked = true; updateTagStyle(label, cb.value); }
      });
    });
    document.getElementById('deselectAllTags')?.addEventListener('click', () => {
      state.selectedTags.clear();
      tagListDiv.querySelectorAll('label').forEach(label => {
        const cb = label.querySelector('input');
        if (cb) { cb.checked = false; updateTagStyle(label, cb.value); }
      });
    });
  }
  
  renderTags();
  if (searchInput) {
    searchInput.removeEventListener('input', renderTags);
    searchInput.addEventListener('input', (e) => renderTags(e.target.value));
  }
}

// ==================== CHỦ ĐỀ ====================
function buildTopicGrid() {
  const g = document.getElementById('topic-grid');
  if (!g) return;
  if (!TOPICS || TOPICS.length === 0) {
    g.innerHTML = '<div style="color:red; padding:12px;">Chưa có chủ đề nào. Hãy kiểm tra topics.json</div>';
    return;
  }
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

// ==================== TẢI DỮ LIỆU THEO KHỐI / MÔN ====================
async function loadGrade(grade, subject = "toan") {
  console.log(`Đang tải dữ liệu lớp ${grade}, môn ${subject}...`);
  currentGrade = grade;
  currentSubject = grade === "5" ? subject : "toan";
  try {
    const base = getDataBasePath(grade, currentSubject);
    const topicsUrl = `${base}/topics.json`;
    const topicsRes = await fetch(topicsUrl);
    if (!topicsRes.ok) throw new Error(`HTTP ${topicsRes.status}: ${topicsUrl}`);
    TOPICS = await topicsRes.json();

    const questionsUrl = `${base}/questions.js`;
    const questionsRes = await fetch(questionsUrl);
    if (!questionsRes.ok) throw new Error(`HTTP ${questionsRes.status}: ${questionsUrl}`);
    const questionsText = await questionsRes.text();
    const match = questionsText.match(/(?:const|var|let)\s+QUESTIONS\s*=\s*(\[[\s\S]*?\]);/);
    if (match) {
      QUESTIONS = eval('(' + match[1] + ')');
    } else {
      throw new Error('Không tìm thấy mảng QUESTIONS');
    }

    state.selectedTopics.clear();
    if (TOPICS.length > 0) state.selectedTopics.add(TOPICS[0].id);
    state.selectedTags.clear();
    loadHistory();
    loadSessions();
    buildTopicGrid();
    buildTagFilter();
    updateHomeSubtitle();

    if (document.getElementById('screen-quiz').classList.contains('active')) goHome();
    else showScreen('home');
  } catch(e) {
    console.error(e);
    alert(`Lỗi tải dữ liệu lớp ${grade} (${SUBJECT_NAMES[currentSubject] || subject}): ${e.message}`);
  }
}

function updateHomeSubtitle() {
  const sub = document.getElementById('home-sub');
  if (!sub) return;
  if (currentGrade === "5") {
    sub.textContent = `Lớp ${currentGrade} — ${SUBJECT_NAMES[currentSubject] || currentSubject}`;
  } else {
    sub.textContent = `Lớp ${currentGrade} — Toán`;
  }
}

function updateSubjectSelectorVisibility(grade) {
  const wrap = document.getElementById('subjectSelectorWrap');
  if (wrap) wrap.style.display = grade === '5' ? '' : 'none';
  // reset subject pills to toan when switching away from grade 5
  if (grade !== '5') {
    document.querySelectorAll('.subject-card').forEach(c =>
      c.classList.toggle('active', c.dataset.subject === 'toan'));
  }
}

// ==================== CÁC HÀM XỬ LÝ CHÍNH ====================
function startQuiz() {
  if (!QUESTIONS || QUESTIONS.length === 0) {
    alert("Chưa có câu hỏi nào.");
    return;
  }
  state.qcount = parseInt(document.getElementById('qcount').value);
  state.timeper = parseInt(document.getElementById('timeper').value);
  state.shuffleAnswers = document.getElementById('shuffle-answers').checked;
  let pool = QUESTIONS.filter(q => state.selectedTopics.has(q.topic));
  
  const difficulty = document.getElementById('difficulty').value;
  if (difficulty !== 'all') {
    pool = pool.filter(q => (q.level || 'medium') === difficulty);
  }
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
  if (state.questions.length === 0) {
    alert("Không có câu hỏi phù hợp với bộ lọc.");
    return;
  }
  state.current = 0;
  state.score = 0;
  state.streak = 0;
  state.maxStreak = 0;
  state.answered = false;
  state.sessionWrong = [];
  state.startTime = Date.now();
  state.currentSessionDetails = [];
  showScreen('quiz');
  const _qCard = document.getElementById('question-card');
  if (_qCard) {
    _qCard.dataset.level = 'medium';
    _qCard.innerHTML = `<div class="skeleton-card">
      <div class="skeleton-line wide"></div>
      <div class="skeleton-line medium"></div>
      <div class="skeleton-line short"></div>
      <div class="skeleton-line wide" style="margin-top:20px;height:42px;border-radius:12px;"></div>
      <div class="skeleton-line wide" style="height:42px;border-radius:12px;"></div>
    </div>`;
  }
  if (state._skeletonTimer) clearTimeout(state._skeletonTimer);
  state._skeletonTimer = setTimeout(() => renderQuestion(), 250);
}

function addRipple(btn, e) {
  const r = document.createElement('span');
  r.className = 'ripple';
  const rect = btn.getBoundingClientRect();
  r.style.left = (e.clientX - rect.left - 40) + 'px';
  r.style.top  = (e.clientY - rect.top  - 40) + 'px';
  btn.appendChild(r);
  r.addEventListener('animationend', () => r.remove());
}

function renderQuestion() {
  clearInterval(state.timerInt);
  const q = state.questions[state.current];
  const total = state.questions.length;
  document.getElementById('q-counter').textContent = `${state.current+1}/${total}`;
  document.getElementById('progress-fill').style.width = `${(state.current/total)*100}%`;
  document.getElementById('streak-num').textContent = state.streak;
  
  const levelMeta = { easy: { label: '🟢 Dễ', cls: 'easy' }, medium: { label: '🟡 Trung bình', cls: 'medium' }, hard: { label: '🔴 Khó', cls: 'hard' } };
  const lv = levelMeta[q.level || 'medium'];
  const levelBadge = `<span class="level-badge ${lv.cls}">${lv.label}</span>`;
  document.getElementById('q-category').innerHTML = q.topicName + levelBadge;
  const qCard = document.getElementById('question-card');
  if (qCard) qCard.dataset.level = q.level || 'medium';
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
      for (let i=shuffledIndices.length-1; i>0; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
      }
      answers = shuffledIndices.map(idx => q.answers[idx]);
      correctIndex = shuffledIndices.indexOf(q.correct);
    } else {
      shuffledIndices = [...Array(answers.length).keys()];
    }
    state.currentShuffledIndices = shuffledIndices;
    const labels = ['A','B','C','D'];
    let html = `<div class="answers-grid">`;
    answers.forEach((a,i) => {
      html += `<button class="ans-btn" id="ans-${i}" onclick="addRipple(this, event); checkMC(${i})">
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
  if (e.key === 'Enter') { e.preventDefault(); checkFill(); }
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
  if (val === "") { alert("Vui lòng nhập đáp án!"); return; }
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
    q, userAnswer, userAnswerRaw: userAnswer, correctAnswer, isCorrect, timeSpent, viewedHint: state.currentQuestionViewedHint,
  });
  document.getElementById('streak-num').textContent = state.streak;
  const sb = document.getElementById('streak-badge');
  if (sb) sb.classList.toggle('on-fire', state.streak >= 3);
  document.getElementById('score-mini').textContent = `Điểm: ${state.score}/${state.questions.length}`;
  showFeedback(isCorrect, correctAnswer);
  document.getElementById('next-btn').style.display = 'block';
}

function showFeedback(ok, correctAns) {
  const fb = document.getElementById('feedback-box');
  fb.className = 'feedback-box ' + (ok ? 'correct' : 'wrong');
  fb.style.display = 'block';
  if (ok) {
    const msgs = ["✅ Chính xác! Giỏi lắm!", "🌟 Xuất sắc!", "🎉 Tuyệt vời!", "👏 Chuẩn!", "🔥 Đúng rồi!"];
    fb.textContent = msgs[Math.floor(Math.random()*msgs.length)];
  } else {
    fb.textContent = `❌ Chưa đúng! Đáp án đúng là: ${correctAns}`;
  }
}

function nextQuestion() {
  state.current++;
  if (state.current >= state.questions.length) { showResult(); return; }
  renderQuestion();
}

function showResult() {
  if (state._scoreRaf) { cancelAnimationFrame(state._scoreRaf); state._scoreRaf = null; }
  clearInterval(state.timerInt);
  saveCurrentSession();
  const total = state.questions.length;
  const pct = Math.round((state.score/total)*100);
  const elapsed = Math.round((Date.now()-state.startTime)/1000);
  const scoreEl = document.getElementById('rs-score');
  scoreEl.textContent = '0%';
  const _scoreDuration = 800;
  const _scoreStart = performance.now();
  function _animateScore(now) {
    const progress = Math.min((now - _scoreStart) / _scoreDuration, 1);
    scoreEl.textContent = Math.round(progress * pct) + '%';
    if (progress < 1) state._scoreRaf = requestAnimationFrame(_animateScore);
    else state._scoreRaf = null;
  }
  state._scoreRaf = requestAnimationFrame(_animateScore);
  document.getElementById('rs-correct').textContent = `${state.score}/${total}`;
  const m = Math.floor(elapsed/60), s = elapsed%60;
  document.getElementById('rs-time').textContent = m>0?`${m}p${s}s`:`${s}s`;
  let emoji='😊', title='Cố gắng hơn nhé!';
  if (pct>=90) { emoji='🏆'; title='Xuất sắc!'; }
  else if (pct>=70) { emoji='🌟'; title='Giỏi lắm!'; }
  else if (pct>=50) { emoji='👍'; title='Ổn đấy!'; }
  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-title').textContent = title;
  document.getElementById('result-sub').textContent = `Đúng ${state.score}/${total} câu — Streak cao nhất: ${state.maxStreak} 🔥`;
  const rl = document.getElementById('review-list');
  rl.innerHTML = state.questions.map((q,i)=>{
    const detail = state.currentSessionDetails.find(d => d.q.id === q.id && d.q.topic === q.topic);
    const ok = detail ? detail.isCorrect : false;
    const ans = q.type==='fill' ? q.answer : q.answers[q.correct];
    return `<div class="review-item"><div class="review-q">${i+1}. ${q.q}</div><div class="review-a ${ok?'tag-correct':'tag-wrong'}">${ok?'✓ Đúng':'✗ Sai — Đáp án: '+ans}</div></div>`;
  }).join('');
  state.history.done += total;
  state.history.correct += state.score;
  if (state.maxStreak > state.history.streak) state.history.streak = state.maxStreak;
  saveHistory();
  showScreen('result');
  if (pct>=80) spawnParticles();
}

function saveCurrentSession() {
  const total = state.questions.length;
  const correctCount = state.score;
  const percent = Math.round((correctCount/total)*100);
  const totalTimeSec = Math.round((Date.now()-state.startTime)/1000);
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
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.toggle('selected', b.dataset.mode === 'retry'));
  startQuiz();
}

function goHome() {
  if (state._skeletonTimer) { clearTimeout(state._skeletonTimer); state._skeletonTimer = null; }
  clearInterval(state.timerInt);
  loadHistory();
  showScreen('home');
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-'+id).classList.add('active');
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
  const pct = (left/total)*100;
  const fill = document.getElementById('timer-fill');
  fill.style.width = pct+'%';
  fill.style.background = pct>60?'#16A34A':(pct>30?'#D97706':'#DC2626');
}
function timeUp() {
  if (state.answered) return;
  state.answered = true;
  const q = state.questions[state.current];
  const timeSpent = state.timeper - state.timeLeft;
  state.streak = 0;
  state.sessionWrong.push({q, correct:false});
  state.wrongIds.add(getQuestionKey(q));
  const correctAns = q.type==='fill' ? q.answer : q.answers[q.correct];
  showFeedback(false, correctAns);
  state.currentSessionDetails.push({ q, userAnswer: "(Hết giờ)", userAnswerRaw: "(Hết giờ)", correctAnswer: correctAns, isCorrect: false, timeSpent, viewedHint: state.currentQuestionViewedHint });
  if (q.type === 'mc') {
    document.querySelectorAll('.ans-btn').forEach(b=>b.disabled=true);
    const cb = document.getElementById(`ans-${state.currentCorrectPos}`);
    if (cb) cb.classList.add('correct');
  } else {
    const inp = document.getElementById('fill-inp');
    if (inp) { inp.disabled=true; inp.classList.add('wrong'); }
  }
  document.getElementById('streak-num').textContent = state.streak;
  document.getElementById('next-btn').style.display = 'block';
}

function spawnParticles() {
  const emojis = ['⭐','🌟','✨','🎉','👏','🔥','💫','🎊'];
  for (let i=0;i<8;i++) {
    setTimeout(()=>{
      const p = document.createElement('div');
      p.className = 'particle';
      p.textContent = emojis[Math.floor(Math.random()*emojis.length)];
      p.style.left = Math.random()*80+10+'%';
      p.style.top = Math.random()*60+20+'%';
      document.body.appendChild(p);
      setTimeout(()=>p.remove(),1600);
    }, i*80);
  }
}

document.addEventListener('keydown', e=>{
  if (!document.getElementById('screen-quiz').classList.contains('active')) return;
  if (!state.answered) {
    const q = state.questions[state.current];
    if (q && q.type === 'mc') {
      const map = {'1':0,'2':1,'3':2,'4':3};
      if (map[e.key] !== undefined) { e.preventDefault(); checkMC(map[e.key]); }
    }
  } else {
    if (e.key === 'Enter') { e.preventDefault(); nextQuestion(); }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const gradeSelect   = document.getElementById('gradeSelect');
  const subjectSelect = document.getElementById('subjectSelect');

  // ── Grade pill buttons ──────────────────────
  document.querySelectorAll('.grade-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const grade = pill.dataset.grade;
      document.querySelectorAll('.grade-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      if (gradeSelect) { gradeSelect.value = grade; }
      updateSubjectSelectorVisibility(grade);
      const subject = grade === '5' && subjectSelect ? subjectSelect.value : 'toan';
      loadGrade(grade, subject);
    });
  });

  // ── Subject card buttons ────────────────────
  document.querySelectorAll('.subject-card').forEach(card => {
    card.addEventListener('click', () => {
      const subject = card.dataset.subject;
      document.querySelectorAll('.subject-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      if (subjectSelect) { subjectSelect.value = subject; }
      if (gradeSelect) { loadGrade(gradeSelect.value, subject); }
    });
  });

  // ── Fallback: keep native selects in sync ───
  if (gradeSelect) {
    gradeSelect.addEventListener('change', (e) => {
      const grade = e.target.value;
      document.querySelectorAll('.grade-pill').forEach(p =>
        p.classList.toggle('active', p.dataset.grade === grade));
      updateSubjectSelectorVisibility(grade);
      const subject = grade === '5' && subjectSelect ? subjectSelect.value : 'toan';
      loadGrade(grade, subject);
    });
  }
  if (subjectSelect) {
    subjectSelect.addEventListener('change', (e) => {
      const subject = e.target.value;
      document.querySelectorAll('.subject-card').forEach(c =>
        c.classList.toggle('active', c.dataset.subject === subject));
      if (gradeSelect) { loadGrade(gradeSelect.value, subject); }
    });
  }

  updateSubjectSelectorVisibility('5');
  loadGrade('5', 'toan');
});