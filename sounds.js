// sounds.js — Kenney Interface Sounds (CC0), https://kenney.nl/assets/interface-sounds
const SoundFX = (() => {
  const BASE = 'assets/sounds/';
  const CLIPS = {
    correct:         'confirmation_002.wav', // ding vui khi đúng
    wrong:           'back_003.wav',         // nhẹ nhàng khi sai (không gắt)
    resultExcellent: 'maximize_006.wav',     // ≥90% — fanfare
    resultGood:      'confirmation_004.wav', // ≥70%
    resultOkay:      'open_002.wav',         // ≥50%
    resultLow:       'open_001.wav',         // <50% — khích lệ nhẹ
  };
  const VOLUME = {
    correct: 0.65, wrong: 0.45,
    resultExcellent: 0.75, resultGood: 0.65, resultOkay: 0.55, resultLow: 0.5,
  };

  let enabled = localStorage.getItem('soundEnabled') !== 'false';
  const pool = {};

  function preload() {
    Object.entries(CLIPS).forEach(([key, file]) => {
      if (pool[key]) return;
      const a = new Audio(BASE + file);
      a.preload = 'auto';
      pool[key] = a;
    });
  }

  function play(key) {
    if (!enabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    preload();
    const src = pool[key];
    if (!src) return;
    const a = new Audio(src.src);
    a.volume = VOLUME[key] ?? 0.6;
    a.play().catch(() => {});
  }

  function playAnswer(ok) { play(ok ? 'correct' : 'wrong'); }

  function playResult(pct) {
    if (pct >= 90) play('resultExcellent');
    else if (pct >= 70) play('resultGood');
    else if (pct >= 50) play('resultOkay');
    else play('resultLow');
  }

  function setEnabled(v) {
    enabled = v;
    localStorage.setItem('soundEnabled', String(v));
    if (v) preload();
  }

  function isEnabled() { return enabled; }

  // ponytail: unlock Audio on first user gesture (browser autoplay policy)
  function unlock() { preload(); }

  return { playAnswer, playResult, setEnabled, isEnabled, unlock };
})();
