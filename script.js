const GAME_DURATION_SECONDS = 600;
const ROUND_DURATION_SECONDS = 30;
const REVEAL_DELAY_MS = 5000;
const FAST_ANSWER_THRESHOLD = 5;
const ADMIN_PASSWORD = "admin";

const QUESTIONS = [
  {
    battle: "niso",
    question: "Niso atrofida Jaloliddinning eng muhim maqsadi qaysi edi?",
    correct: "Qo‘shinni saqlab, xavfli yo‘ldan tez chiqish.",
    wrong: [
      "Asosiy kuch kelguncha bir joyda uzoq kutish.",
      "Maydonni tark etmay, qamalni cho‘zib yuborish.",
      "Faqat dushman bayrog‘ini qo‘lga kiritishni ko‘zlash."
    ]
  },
  {
    battle: "niso",
    question: "Niso oldida kichik dushman to‘sig‘iga duch kelinsa, qaysi usul foydaliroq?",
    correct: "Qisqa va aniq zarba bilan yo‘lni ochish.",
    wrong: [
      "Harakatni to‘xtatib, uzoq kengash bilan vaqt o‘tkazish.",
      "Qo‘shinni bo‘lib, hamma tomonga yoyib yuborish.",
      "Asosiy yo‘ldan chiqib, maqsadsiz aylanib yurish."
    ]
  },
  {
    battle: "niso",
    question: "Niso voqealarida vaqtni boy bermaslik nega muhim edi?",
    correct: "Chunki kechikish dushmanga kuch yig‘ish imkonini beradi.",
    wrong: [
      "Chunki uzoq kutish askarni avtomatik kuchaytiradi.",
      "Chunki qanchalik sekin yurilsa, yo‘l shunchalik xavfsiz bo‘ladi.",
      "Chunki faqat tun tushganda hujum qilish mumkin bo‘ladi."
    ]
  },
  {
    battle: "niso",
    question: "Niso yo‘lida to‘g‘ri qaror nimani saqlab qoladi?",
    correct: "Ham yurish tezligini, ham qo‘shin tartibini.",
    wrong: [
      "Faqat shon-shuhratni, ammo askarni emas.",
      "Faqat bayroqni, lekin yo‘lni emas.",
      "Faqat jang maydonini, lekin yurish maqsadini emas."
    ]
  },
  {
    battle: "niso",
    question: "Niso atrofidagi qarorlarda qaysi fikr to‘g‘ri?",
    correct: "Har bir to‘qnashuvni uzoq jangga aylantirish shart emas.",
    wrong: [
      "Faqat eng katta janggina g‘alaba olib keladi.",
      "Har safar orqaga qaytish eng xavfsiz yo‘ldir.",
      "Kichik to‘siq ko‘rilsa, maqsadni o‘zgartirish kerak bo‘ladi."
    ]
  },
  {
    battle: "niso",
    question: "Niso voqeasi Jaloliddin kuchining nimada ekanini ko‘rsatadi?",
    correct: "Tez baholash va aniq qaror chiqarishda.",
    wrong: [
      "Faqat son jihatdan ustun qo‘shin yig‘ishda.",
      "Faqat uzun qamalga chidashda.",
      "Faqat dushmanni ortga quvishda."
    ]
  },
  {
    battle: "valiyon",
    question: "Valiyon tomonidagi jangda qaysi maydon himoya uchun qulayroq?",
    correct: "Balandroq va ko‘rinish keng bo‘lgan joy.",
    wrong: [
      "Ko‘rinishi yopiq, past va tor botqoqli joy.",
      "Faqat daryo ichidagi harakatsiz nuqta.",
      "Dushmanga eng yaqin, lekin ochiq qoladigan tekis joy."
    ]
  },
  {
    battle: "valiyon",
    question: "Valiyon voqealarida sabr nega foydali bo‘lishi mumkin?",
    correct: "Chunki shoshgan dushman xato qilishi ehtimoli ortadi.",
    wrong: [
      "Chunki uzoq kutish har safar dushmanni qo‘rqitadi.",
      "Chunki sabr qilinsa, jang bo‘lmay qoladi.",
      "Chunki faqat eng oxirgi daqiqada qaror qilish kerak bo‘ladi."
    ]
  },
  {
    battle: "valiyon",
    question: "Valiyon atrofida dushmanni chalg‘itish nimaga xizmat qiladi?",
    correct: "Vaqt yutish va o‘z tartibini saqlab qolishga.",
    wrong: [
      "Maydonni bo‘sh qoldirib, yo‘lni dushmanga berishga.",
      "Askarning joyini tez-tez almashtirib charchatishga.",
      "Faqat shovqin ko‘paytirib, rejasizlik yaratishga."
    ]
  },
  {
    battle: "valiyon",
    question: "Valiyon jangida birlikning eng katta foydasi nimada?",
    correct: "Qo‘shin bir-birini qo‘llab, tartibli harakat qiladi.",
    wrong: [
      "Faqat tez yugurish uchun keng maydon ochiladi.",
      "Har kim alohida jang qilsa, kuch ortadi.",
      "Qaror bir emas, ko‘p markazdan chiqsa yaxshiroq bo‘ladi."
    ]
  },
  {
    battle: "valiyon",
    question: "Baland joydan qarashning asosiy foydasi qaysi?",
    correct: "Dushman harakati ertaroq ko‘rinadi va tayyorlanish osonlashadi.",
    wrong: [
      "Faqat bayroq uzoqdan yaxshi ko‘rinadi.",
      "Otlar baland joyda har doim tezroq yuguradi.",
      "U yerda jang qilinmasa ham g‘alaba yoziladi."
    ]
  },
  {
    battle: "valiyon",
    question: "Valiyon voqealarida eng yaxshi himoya qarori qaysi?",
    correct: "Joyni to‘g‘ri tanlab, shoshmasdan tartibni saqlash.",
    wrong: [
      "Darhol ochiq maydonga tushib, xavfni oshirish.",
      "Qarorni kechiktirib, hech kimga vazifa bermaslik.",
      "Faqat bir yo‘nalishga qarab, qolgan tomonni unutish."
    ]
  },
  {
    battle: "valiyon",
    question: "Valiyon atrofidagi kurashda qaysi fikr eng mantiqli?",
    correct: "Faqat kuch emas, kuzatuv va joy tanlash ham muhim.",
    wrong: [
      "Faqat oldinga yurish bo‘lsa, qolgan omillar kerak emas.",
      "Faqat qalin saf bo‘lsa, maydon farq qilmaydi.",
      "Faqat dushman soni hal qiluvchi omil bo‘lib qoladi."
    ]
  },
  {
    battle: "parvon",
    question: "Parvon jangida tor hudud Jaloliddinga qanday foyda berdi?",
    correct: "Dushmanning erkin harakatini cheklab qo‘ydi.",
    wrong: [
      "O‘z qo‘shinining ko‘rish doirasini butunlay yopdi.",
      "Hujumni to‘xtatib, faqat chekinishga majbur qildi.",
      "Faqat suvga yaqinlashish uchun qulaylik yaratdi."
    ]
  },
  {
    battle: "parvon",
    question: "Parvon jangida yer tanlash nega muhim bo‘ldi?",
    correct: "Chunki qulay joy kuchni to‘g‘ri ishlatishga yordam beradi.",
    wrong: [
      "Chunki faqat chiroyli joy askarni ruhlantiradi.",
      "Chunki yer tanlash bo‘lmasa ham natija o‘zgarmaydi.",
      "Chunki tor joyda doim jang to‘xtab qoladi."
    ]
  },
  {
    battle: "parvon",
    question: "Parvonda sabr bilan jang qilish nimaga xizmat qiladi?",
    correct: "Dushman charchashini kutib, o‘z navbatini to‘g‘ri topishga.",
    wrong: [
      "Hujumni butunlay unutib, faqat yashirinib turishga.",
      "Jangni maqsadsiz cho‘zib, askarni holdan toydirishga.",
      "Faqat vaqt tugashini kutib, qarorsiz qolishga."
    ]
  },
  {
    battle: "parvon",
    question: "Dushmanning aldov harakati sezilsa, eng to‘g‘ri yo‘l qaysi?",
    correct: "Darhol ishonmay, avval tekshirib ko‘rish.",
    wrong: [
      "Hech o‘ylamasdan butun kuch bilan quvib ketish.",
      "Barcha safni buzib, har tomonga tarqalib ketish.",
      "Faqat bitta xabarga qarab yakuniy qaror chiqarish."
    ]
  },
  {
    battle: "parvon",
    question: "Parvon jangidan keyingi eng to‘g‘ri ish qaysi bo‘ladi?",
    correct: "G‘alabadan so‘ng ham tartib va birlikni saqlash.",
    wrong: [
      "Har kim o‘ljani o‘zi xohlagandek bo‘lib olish.",
      "Natijani kutmay, darhol safni tarqatib yuborish.",
      "Qarorlarni keyinga qoldirib, boshqaruvni bo‘shatish."
    ]
  },
  {
    battle: "parvon",
    question: "Parvon voqeasida Jaloliddinning ustunligi ko‘proq nimada ko‘rindi?",
    correct: "To‘g‘ri joy, sabr va aniq boshqaruvni birlashtirishda.",
    wrong: [
      "Faqat ko‘p askar bilan maydonni to‘ldirishda.",
      "Faqat dushmanni ko‘rmay turib hujum boshlashda.",
      "Faqat tezlikni oshirib, tartibni unutishda."
    ]
  },
  {
    battle: "parvon",
    question: "Uch jangni birga qaraganda eng muhim xulosa qaysi?",
    correct: "G‘alaba ko‘pincha tez fikr, tartib va to‘g‘ri strategiya bilan keladi.",
    wrong: [
      "G‘alaba faqat eng uzun jangda qo‘lga kiradi.",
      "G‘alaba uchun bir xil usulni har joyda qo‘llash yetadi.",
      "G‘alabada maydon va vaqt omili katta ahamiyatga ega emas."
    ]
  }
];

const IMAGES = {
  niso: "images/niso.png",
  valiyon: "images/valiyon.png",
  parvon: "images/parvon.png"
};

const AUDIO = {
  bonus: "audio/game-bonus.mp3",
  victory: "audio/victory-male.mp3",
  chicken: "audio/you-win.mp3",
  timeout: "audio/time-over.mp3",
  failPair: ["audio/painful-ooh.mp3", "audio/failure.mp3"],
  failSolo: ["audio/try-again.mp3", "audio/negative-beeps.mp3", "audio/you-lost-male.mp3"]
};

const teamEls = {
  1: {
    qn: document.getElementById("team1Qn"),
    score: document.getElementById("team1Score"),
    qnum: document.getElementById("team1QuestionNumber"),
    qtext: document.getElementById("team1QuestionText"),
    map: document.getElementById("team1Map"),
    answers: document.getElementById("team1Answers"),
    overlay: document.getElementById("team1Overlay")
  },
  2: {
    qn: document.getElementById("team2Qn"),
    score: document.getElementById("team2Score"),
    qnum: document.getElementById("team2QuestionNumber"),
    qtext: document.getElementById("team2QuestionText"),
    map: document.getElementById("team2Map"),
    answers: document.getElementById("team2Answers"),
    overlay: document.getElementById("team2Overlay")
  }
};

const gameTimerEl = document.getElementById("gameTimer");
const roundTimerEl = document.getElementById("roundTimer");
const centerAnnouncementEl = document.getElementById("centerAnnouncement");
const finalScreenEl = document.getElementById("finalScreen");
const finalTeam1El = document.getElementById("finalTeam1");
const finalTeam2El = document.getElementById("finalTeam2");
const restartBtn = document.getElementById("restartBtn");
const passwordModal = document.getElementById("passwordModal");
const passwordInput = document.getElementById("passwordInput");
const passwordError = document.getElementById("passwordError");
const cancelRestartBtn = document.getElementById("cancelRestartBtn");
const confirmRestartBtn = document.getElementById("confirmRestartBtn");
const bgMusic = document.getElementById("bgMusic");
const sfx = document.getElementById("sfx");

let state = {};
let roundInterval = null;
let gameInterval = null;
let revealTimeout = null;
let audioStarted = false;
let failSoloRotation = 0;
let failPairRotation = 0;
let doubleCorrectSwap = false;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildRounds() {
  return QUESTIONS.map(q => ({
    battle: q.battle,
    question: q.question,
    options: shuffle([
      { text: q.correct, correct: true },
      ...q.wrong.map(w => ({ text: w, correct: false }))
    ])
  }));
}

function createState() {
  return {
    currentIndex: 0,
    teamScores: { 1: 0, 2: 0 },
    teamAnswers: { 1: null, 2: null },
    rounds: buildRounds(),
    roundTimeLeft: ROUND_DURATION_SECONDS,
    totalTimeLeft: GAME_DURATION_SECONDS,
    phase: "answering",
    roundStartAt: Date.now()
  };
}

function currentRound() {
  return state.rounds[state.currentIndex];
}

function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function updateTimers() {
  gameTimerEl.textContent = formatTime(state.totalTimeLeft);
  roundTimerEl.textContent = state.roundTimeLeft;
}

function updateScores() {
  teamEls[1].score.textContent = state.teamScores[1].toFixed(1);
  teamEls[2].score.textContent = state.teamScores[2].toFixed(1);
}

function setOverlay(team, text = "", type = "") {
  const el = teamEls[team].overlay;
  el.className = "team-overlay";
  el.textContent = text;
  if (text) {
    el.classList.add("show");
    if (type) el.classList.add(type);
  }
}

function showCenter(text, type) {
  centerAnnouncementEl.textContent = text;
  centerAnnouncementEl.className = `center-announcement show ${type}`;
  setTimeout(() => {
    centerAnnouncementEl.className = "center-announcement";
    centerAnnouncementEl.textContent = "";
  }, 2600);
}

function clearOverlays() {
  setOverlay(1);
  setOverlay(2);
  centerAnnouncementEl.className = "center-announcement";
  centerAnnouncementEl.textContent = "";
}

function renderRound() {
  clearOverlays();
  const round = currentRound();

  [1, 2].forEach(team => {
    const els = teamEls[team];
    els.qn.textContent = state.currentIndex + 1;
    els.qnum.textContent = `Savol ${state.currentIndex + 1}`;
    els.qtext.textContent = round.question;
    els.map.src = IMAGES[round.battle];
    els.answers.innerHTML = "";

    round.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "answer-btn";
      btn.innerHTML = `<span class="label">${String.fromCharCode(65 + idx)}</span>${opt.text}`;
      btn.onclick = () => chooseAnswer(team, idx);
      els.answers.appendChild(btn);
    });
  });

  state.teamAnswers = { 1: null, 2: null };
  state.phase = "answering";
  state.roundTimeLeft = ROUND_DURATION_SECONDS;
  state.roundStartAt = Date.now();
  updateTimers();
  updateScores();
}

function startBackgroundMusic() {
  if (audioStarted) return;
  audioStarted = true;
  bgMusic.volume = 0.10;
  bgMusic.play().catch(() => {});
}

function playSfx(path) {
  sfx.pause();
  sfx.currentTime = 0;
  sfx.src = path;
  sfx.play().catch(() => {});
}

function duckMusic() {
  bgMusic.volume = 0.04;
  setTimeout(() => {
    if (state.phase !== "ended") bgMusic.volume = 0.10;
  }, 1800);
}

function chooseAnswer(team, optionIndex) {
  if (state.phase !== "answering") return;
  if (state.teamAnswers[team] !== null) return;

  startBackgroundMusic();

  state.teamAnswers[team] = {
    optionIndex,
    answeredAt: (Date.now() - state.roundStartAt) / 1000
  };

  const buttons = [...teamEls[team].answers.querySelectorAll(".answer-btn")];
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === optionIndex) btn.classList.add("selected");
  });

  const otherTeam = team === 1 ? 2 : 1;
  if (state.teamAnswers[otherTeam] === null) {
    setOverlay(team, `${otherTeam}-jamoani kuting`, "wait");
  }

  if (state.teamAnswers[1] && state.teamAnswers[2]) {
    state.phase = "revealing";
    revealTimeout = setTimeout(() => revealAnswers(false), REVEAL_DELAY_MS);
  }
}

function revealAnswers(isTimeout) {
  clearTimeout(revealTimeout);
  const round = currentRound();
  const correctIndex = round.options.findIndex(o => o.correct);

  const results = {
    1: getResultForTeam(1, correctIndex, isTimeout),
    2: getResultForTeam(2, correctIndex, isTimeout)
  };

  [1, 2].forEach(team => {
    const buttons = [...teamEls[team].answers.querySelectorAll(".answer-btn")];
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === correctIndex) btn.classList.add("correct");
      if (state.teamAnswers[team] && idx === state.teamAnswers[team].optionIndex && idx !== correctIndex) {
        btn.classList.add("wrong");
      }
    });
  });

  if (isTimeout) {
    [1, 2].forEach(team => setOverlay(team, "TRY AGAIN", "fail"));
    duckMusic();
    playSfx(AUDIO.timeout);
    showCenter("VAQT TUGADI", "timeout");
    setTimeout(nextRoundOrFinish, 2600);
    return;
  }

  if (results[1].correct) state.teamScores[1] += 0.5;
  if (results[2].correct) state.teamScores[2] += 0.5;
  updateScores();

  const bothCorrect = results[1].correct && results[2].correct;
  const bothWrong = !results[1].correct && !results[2].correct;

  if (bothCorrect) {
    assignDoubleCorrectLabels(results);
    setOverlay(1, results[1].label.text, results[1].label.type);
    setOverlay(2, results[2].label.text, results[2].label.type);

    duckMusic();
    if (results[1].label.type === "bingo" || results[2].label.type === "bingo") {
      playSfx(AUDIO.bonus);
    } else {
      playSfx(AUDIO.victory);
    }
    showCenter("TO‘G‘RI JAVOB!", "victory");
    setTimeout(nextRoundOrFinish, 2600);
    return;
  }

  if (bothWrong) {
    setOverlay(1, "TRY AGAIN", "fail");
    setOverlay(2, "TRY AGAIN", "fail");
    duckMusic();
    playSfx(AUDIO.failPair[failPairRotation % AUDIO.failPair.length]);
    failPairRotation++;
    showCenter("TRY AGAIN", "fail");
    setTimeout(nextRoundOrFinish, 2600);
    return;
  }

  [1, 2].forEach(team => {
    const other = team === 1 ? 2 : 1;
    results[team].label = classifyLabel(results[team], results[other]);
  });

  [1, 2].forEach(team => {
    if (results[team].correct) {
      setOverlay(team, results[team].label.text, results[team].label.type);
    } else {
      setOverlay(team, "TRY AGAIN", "fail");
    }
  });

  const correctTeam = results[1].correct ? 1 : 2;
  const label = results[correctTeam].label;

  duckMusic();
  if (label.type === "bingo") playSfx(AUDIO.bonus);
  else if (label.type === "chicken") playSfx(AUDIO.chicken);
  else playSfx(AUDIO.victory);

  showCenter(label.text, label.type);
  setTimeout(nextRoundOrFinish, 2600);
}

function getResultForTeam(team, correctIndex, isTimeout) {
  const ans = state.teamAnswers[team];
  if (!ans || isTimeout) {
    return {
      correct: false,
      answeredAt: Infinity,
      label: null
    };
  }
  return {
    correct: ans.optionIndex === correctIndex,
    answeredAt: ans.answeredAt,
    label: null
  };
}

function classifyLabel(result, otherResult) {
  if (!result.correct) return { text: "TRY AGAIN", type: "fail" };
  if (!otherResult.correct && result.answeredAt <= FAST_ANSWER_THRESHOLD) {
    return { text: "BINGO BANGO BONGO!", type: "bingo" };
  }
  if (!otherResult.correct) {
    return { text: "WINNER WINNER CHICKEN DINNER!", type: "chicken" };
  }
  return { text: "VICTORY!", type: "victory" };
}

function assignDoubleCorrectLabels(results) {
  const firstTeam = results[1].answeredAt <= results[2].answeredAt ? 1 : 2;
  const secondTeam = firstTeam === 1 ? 2 : 1;

  const bothFast =
    results[1].answeredAt <= FAST_ANSWER_THRESHOLD &&
    results[2].answeredAt <= FAST_ANSWER_THRESHOLD;

  if (bothFast) {
    if (doubleCorrectSwap) {
      results[firstTeam].label = { text: "WINNER WINNER CHICKEN DINNER!", type: "chicken" };
      results[secondTeam].label = { text: "BINGO BANGO BONGO!", type: "bingo" };
    } else {
      results[firstTeam].label = { text: "BINGO BANGO BONGO!", type: "bingo" };
      results[secondTeam].label = { text: "WINNER WINNER CHICKEN DINNER!", type: "chicken" };
    }
    doubleCorrectSwap = !doubleCorrectSwap;
    return;
  }

  if (results[firstTeam].answeredAt <= FAST_ANSWER_THRESHOLD) {
    results[firstTeam].label = { text: "BINGO BANGO BONGO!", type: "bingo" };
    results[secondTeam].label = { text: "VICTORY!", type: "victory" };
    return;
  }

  results[firstTeam].label = { text: "VICTORY!", type: "victory" };
  results[secondTeam].label = { text: "WINNER WINNER CHICKEN DINNER!", type: "chicken" };
}

function nextRoundOrFinish() {
  if (state.phase === "ended") return;

  state.currentIndex += 1;
  if (state.currentIndex >= state.rounds.length || state.totalTimeLeft <= 0) {
    finishGame();
    return;
  }
  renderRound();
}

function finishGame() {
  state.phase = "ended";
  clearInterval(roundInterval);
  clearInterval(gameInterval);
  clearTimeout(revealTimeout);
  clearOverlays();

  finalTeam1El.textContent = state.teamScores[1].toFixed(1);
  finalTeam2El.textContent = state.teamScores[2].toFixed(1);
  finalScreenEl.classList.remove("hidden");

  bgMusic.volume = 0.05;
  playSfx(AUDIO.chicken);
}

function forceTimeUp() {
  if (state.phase !== "answering") return;
  state.phase = "revealing";
  revealAnswers(true);
}

function startTimers() {
  clearInterval(roundInterval);
  clearInterval(gameInterval);

  roundInterval = setInterval(() => {
    if (state.phase !== "answering") return;
    state.roundTimeLeft -= 1;
    if (state.roundTimeLeft < 0) state.roundTimeLeft = 0;
    updateTimers();
    if (state.roundTimeLeft <= 0) forceTimeUp();
  }, 1000);

  gameInterval = setInterval(() => {
    if (state.phase === "ended") return;
    state.totalTimeLeft -= 1;
    if (state.totalTimeLeft < 0) state.totalTimeLeft = 0;
    updateTimers();
    if (state.totalTimeLeft <= 0) finishGame();
  }, 1000);
}

function resetGame() {
  clearInterval(roundInterval);
  clearInterval(gameInterval);
  clearTimeout(revealTimeout);

  finalScreenEl.classList.add("hidden");
  passwordModal.classList.add("hidden");
  passwordInput.value = "";
  passwordError.textContent = "";

  state = createState();
  renderRound();
  updateTimers();
  updateScores();
  startTimers();
}

restartBtn.addEventListener("click", () => {
  passwordModal.classList.remove("hidden");
  passwordInput.value = "";
  passwordError.textContent = "";
  setTimeout(() => passwordInput.focus(), 30);
});

cancelRestartBtn.addEventListener("click", () => {
  passwordModal.classList.add("hidden");
});

confirmRestartBtn.addEventListener("click", () => {
  if (passwordInput.value === ADMIN_PASSWORD) {
    resetGame();
  } else {
    passwordError.textContent = "Parol noto‘g‘ri.";
  }
});

passwordInput.addEventListener("keydown", e => {
  if (e.key === "Enter") confirmRestartBtn.click();
  if (e.key === "Escape") cancelRestartBtn.click();
});

document.addEventListener(
  "click",
  () => {
    startBackgroundMusic();
  },
  { once: true }
);

resetGame();