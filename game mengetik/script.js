const SCORE_PER_CORRECT = 10;

const fruits = [
  { name: "Apel", emoji: "🍎" },
  { name: "Pisang", emoji: "🍌" },
  { name: "Jeruk", emoji: "🍊" },
  { name: "Anggur", emoji: "🍇" },
  { name: "Semangka", emoji: "🍉" },
  { name: "Stroberi", emoji: "🍓" },
  { name: "Nanas", emoji: "🍍" },
  { name: "Mangga", emoji: "🥭" },
  { name: "Ceri", emoji: "🍒" },
  { name: "Lemon", emoji: "🍋" },
  { name: "Kiwi", emoji: "🥝" },
  { name: "Kelapa", emoji: "🥥" },
  { name: "Melon", emoji: "🍈" },
  { name: "Pir", emoji: "🍐" }
];

const colors = [
  { name: "Merah", code: "#ef4444" },
  { name: "Biru", code: "#3b82f6" },
  { name: "Hijau", code: "#22c55e" },
  { name: "Kuning", code: "#facc15" },
  { name: "Ungu", code: "#a855f7" },
  { name: "Oren", code: "#f97316" },
  { name: "Pink", code: "#ec4899" },
  { name: "Coklat", code: "#92400e" },
  { name: "Hitam", code: "#1e293b" },
  { name: "Putih", code: "#f8fafc" },
  { name: "Abu abu", code: "#94a3b8" },
];

const countries = [
  { name: "Indonesia", code: "id" },
  { name: "Malaysia", code: "my" },
  { name: "Singapura", code: "sg" },
  { name: "Jepang", code: "jp" },
  { name: "Korea", code: "kr" },
  { name: "Cina", code: "cn" },
  { name: "India", code: "in" },
  { name: "Arab", code: "sa" },
  { name: "Palestina", code: "ps" },
  { name: "Turki", code: "tr" },
  { name: "Amerika", code: "us" },
  { name: "Inggris", code: "gb" },
  { name: "Prancis", code: "fr" },
  { name: "Jerman", code: "de" },
  { name: "Italia", code: "it" },
  { name: "Belanda", code: "nl" },
  { name: "Rusia", code: "ru" },
  { name: "Brazil", code: "br" },
  { name: "Argentina", code: "ar" },
  { name: "Australia", code: "au" }
];

const animals = [
  { name: "Kucing", emoji: "🐱" },
  { name: "Anjing", emoji: "🐶" },
  { name: "Sapi", emoji: "🐮" },
  { name: "Kuda", emoji: "🐴" },
  { name: "Babi", emoji: "🐷" },
  { name: "Monyet", emoji: "🐒" },
  { name: "Gajah", emoji: "🐘" },
  { name: "Harimau", emoji: "🐅" },
  { name: "Singa", emoji: "🦁" },
  { name: "Katak", emoji: "🐸" },
  { name: "Panda", emoji: "🐼" },
  { name: "Pinguin", emoji: "🐧" },
  { name: "Ayam", emoji: "🐔" },
  { name: "Bebek", emoji: "🦆" },
  { name: "Ikan", emoji: "🐟" }
];

const vehicles = [
  { name: "Mobil", emoji: "🚗" },
  { name: "Bus", emoji: "🚌" },
  { name: "Ambulans", emoji: "🚑" },
  { name: "Truk", emoji: "🚚" },
  { name: "Sepeda", emoji: "🚲" },
  { name: "Motor", emoji: "🏍️" },
  { name: "Kapal", emoji: "🚢" },
  { name: "Perahu", emoji: "⛵" },
  { name: "Pesawat", emoji: "✈️" },
  { name: "Helikopter", emoji: "🚁" },
  { name: "Roket", emoji: "🚀" },
  { name: "Kereta", emoji: "🚂" },
  { name: "Traktor", emoji: "🚜" }
];

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");
const finalScoreEl = document.getElementById("final-score");
const summaryEl = document.getElementById("summary");

const questionTextEl = document.getElementById("question-text");
const visualAreaEl = document.getElementById("visual-area");
const answerInputEl = document.getElementById("answer-input");
const submitBtnEl = document.getElementById("submit-btn");
const feedbackEl = document.getElementById("feedback");

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  const now = audioCtx.currentTime;
  if (type === "correct") {
    osc.type = "sine";
    osc.frequency.setValueAtTime(440, now); // A4
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.1); // A5
    gain.gain.setValueAtTime(0.5, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.3);
    osc.start(now);
    osc.stop(now + 0.3);
  } else if (type === "win") {
    // Nada kemenangan
    osc.type = "sine";
    osc.frequency.setValueAtTime(523.25, now); // C5
    osc.frequency.setValueAtTime(659.25, now + 0.15); // E5
    osc.frequency.setValueAtTime(783.99, now + 0.3); // G5
    osc.frequency.setValueAtTime(1046.50, now + 0.45); // C6
    gain.gain.setValueAtTime(0.6, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.8);
    osc.start(now);
    osc.stop(now + 0.8);
  } else {
    osc.type = "triangle";
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(150, now + 0.2);
    gain.gain.setValueAtTime(0.5, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.3);
    osc.start(now);
    osc.stop(now + 0.3);
  }
}

let score = 0;
let remainingTime = 0;
let timerId = null;
let totalQuestions = 0;
let currentCorrectAnswer = "";

// Multiplayer Variables
let peer = null;
let connection = null;
let isMultiplayer = false;
let isHost = false;
let opponentScore = 0;
let questionSequence = [];
let currentQuestionIndex = 0;

function generateShortCode() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 5; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

// Setup PeerJS
function initPeer() {
  const statusMsg = document.getElementById("status-msg");
  
  const myShortCode = generateShortCode();
  const fullId = "play-" + myShortCode;
  
  peer = new Peer(fullId, {
    // Using default public server
  });

  peer.on("open", (id) => {
    window.myShortRoomCode = id.replace("play-", "");
    statusMsg.textContent = "Multiplayer siap! Buat atau gabung ruangan kemari.";
    document.getElementById("multiplayer-actions").style.display = "flex";
  });

  // Handle incoming connections (when Host receives Join request)
  peer.on("connection", (conn) => {
    connection = conn;
    statusMsg.textContent = `Teman terhubung! Memulai permainan...`;
    isMultiplayer = true;
    
    // Generate questions for both
    generateQuestionSequence();

    // Give some time to read before start
    setTimeout(() => {
      // Send start signal and sequence
      const selectedDuration = document.querySelector('input[name="duration"]:checked').value;
      connection.send({
        type: "START",
        sequence: questionSequence,
        duration: parseInt(selectedDuration)
      });
      
      remainingTime = parseInt(selectedDuration) * 60;
      startGame(true);
    }, 1500);

    handleConnectionData();
  });

  peer.on('error', (err) => {
    statusMsg.textContent = `Error: ${err.type}`;
  });
}

function handleConnectionData() {
  connection.on("data", (data) => {
    if (data.type === "START") {
      // Receiver side (Joiner)
      document.getElementById("status-msg").textContent = "Permainan dimulai oleh pembuat ruang!";
      questionSequence = data.sequence;
      remainingTime = data.duration * 60;
      setTimeout(() => {
        startGame(true);
      }, 1000);
    } else if (data.type === "SCORE_UPDATE") {
      opponentScore = data.score;
      document.getElementById("opponent-score").textContent = opponentScore;
    } else if (data.type === "GAME_OVER") {
      endGame(true); // From peer
    }
  });

  connection.on("close", () => {
    document.getElementById("status-msg").textContent = "Teman terputus.";
  });
}

function initHost() {
  isHost = true;
  document.getElementById("status-msg").textContent = "Menunggu teman bergabung...";
  document.getElementById("room-info").style.display = "block";
  document.getElementById("room-code").textContent = window.myShortRoomCode;
  document.getElementById("host-btn").disabled = true;
  document.getElementById("join-btn").disabled = true;
}

function joinGame() {
  const joinId = document.getElementById("join-input").value.trim().toUpperCase();
  if (!joinId) return;

  const fullJoinId = "play-" + joinId;
  document.getElementById("status-msg").textContent = "Menghubungkan ke ruang...";
  connection = peer.connect(fullJoinId);
  isMultiplayer = true;

  connection.on("open", () => {
    document.getElementById("status-msg").textContent = "Terhubung! Menunggu pembuat ruang memulai permainan...";
    document.getElementById("host-btn").disabled = true;
    document.getElementById("join-btn").disabled = true;
    
    handleConnectionData();
  });
}

document.getElementById("host-btn").addEventListener("click", initHost);
document.getElementById("join-btn").addEventListener("click", joinGame);

window.addEventListener("load", initPeer);

// End Multiplayer Logic

function showScreen(screen) {
  startScreen.classList.remove("active");
  gameScreen.classList.remove("active");
  endScreen.classList.remove("active");
  screen.classList.add("active");
}

function formatTime(seconds) {
  const min = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");
  return `${min}:${sec}`;
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function setFeedback(message, type = "") {
  feedbackEl.textContent = message;
  feedbackEl.className = `feedback ${type}`.trim();
}

function generateQuestionSequence() {
  questionSequence = [];
  const categories = ["fruit", "color", "country", "animal", "vehicle"];
  for (let i = 0; i < 500; i++) {
    const category = pickRandom(categories);
    let source;
    if (category === "fruit") source = fruits;
    else if (category === "color") source = colors;
    else if (category === "country") source = countries;
    else if (category === "animal") source = animals;
    else source = vehicles;
    
    const item = pickRandom(source);
    questionSequence.push({ category, item });
  }
}

function renderQuestion() {
  let category, item;

  if (isMultiplayer) {
    if (currentQuestionIndex >= 500) {
      endGame(false);
      return;
    }
    const q = questionSequence[currentQuestionIndex];
    category = q.category;
    item = q.item;
    currentQuestionIndex++;
  } else {
    const categories = ["fruit", "color", "country", "animal", "vehicle"];
    category = pickRandom(categories);
    if (category === "fruit") source = fruits;
    else if (category === "color") source = colors;
    else if (category === "country") source = countries;
    else if (category === "animal") source = animals;
    else source = vehicles;
    
    item = pickRandom(source);
  }

  currentCorrectAnswer = item.name;
  totalQuestions += 1;

  if (category === "fruit") {
    questionTextEl.textContent = "Ini buah apa?";
    visualAreaEl.innerHTML = `<div class="fruit-emoji">${item.emoji}</div>`;
  } else if (category === "color") {
    questionTextEl.textContent = "Ini warna apa?";
    visualAreaEl.innerHTML = `<div class="color-box" style="background:${item.code}"></div>`;
  } else if (category === "country") {
    questionTextEl.textContent = "Bendera negara apa ini?";
    visualAreaEl.innerHTML = `<img src="https://flagcdn.com/w160/${item.code}.png" alt="Bendera" style="width: 140px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.15); animation: wiggleObj 1.5s ease-in-out infinite;">`;
  } else if (category === "animal") {
    questionTextEl.textContent = "Hewan apa ini?";
    visualAreaEl.innerHTML = `<div class="fruit-emoji" style="border:none; box-shadow:none;">${item.emoji}</div>`;
  } else if (category === "vehicle") {
    questionTextEl.textContent = "Kendaraan apa ini?";
    visualAreaEl.innerHTML = `<div class="fruit-emoji" style="border:none; box-shadow:none;">${item.emoji}</div>`;
  }

  // Reset input field
  answerInputEl.value = "";
  answerInputEl.disabled = false;
  submitBtnEl.disabled = false;
  answerInputEl.focus();

  setFeedback("");
}

function handleAnswer() {
  const answer = answerInputEl.value.trim();
  if (!answer) return;

  const isCorrect = answer.toLowerCase() === currentCorrectAnswer.toLowerCase();

  answerInputEl.disabled = true;
  submitBtnEl.disabled = true;

  if (isCorrect) {
    score += SCORE_PER_CORRECT;
    setFeedback("Benar! Hebat!", "success");
    playSound("correct");
    if (isMultiplayer && connection) {
      connection.send({ type: "SCORE_UPDATE", score: score });
    }
  } else {
    setFeedback(`Belum tepat. Jawaban benar: ${currentCorrectAnswer}`, "error");
    playSound("wrong");
  }

  scoreEl.textContent = score;

  setTimeout(() => {
    if (remainingTime > 0) {
      renderQuestion();
    }
  }, 1500); // Tunggu 1.5 detik agar tulisan Benar/Salah terbaca anak
}

function tick() {
  remainingTime -= 1;
  timerEl.textContent = formatTime(Math.max(remainingTime, 0));

  if (remainingTime <= 0) {
    endGame();
  }
}

function startGame(fromMultiplayer = false) {
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  
  if (fromMultiplayer !== true) {
    isMultiplayer = false;
    const selectedDuration = document.querySelector('input[name="duration"]:checked').value;
    remainingTime = parseInt(selectedDuration) * 60;
  }
  
  score = 0;
  opponentScore = 0;
  totalQuestions = 0;
  currentQuestionIndex = 0;
  
  document.getElementById("opponent-score").textContent = opponentScore;
  document.getElementById("opponent-score-wrapper").style.display = isMultiplayer ? "block" : "none";
  
  scoreEl.textContent = score;
  timerEl.textContent = formatTime(remainingTime);

  if (timerId) {
    clearInterval(timerId);
  }

  timerId = setInterval(tick, 1000);
  showScreen(gameScreen);
  renderQuestion();
}

function endGame(fromOpponent = false) {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  
  if (isMultiplayer && !fromOpponent && connection) {
      connection.send({ type: "GAME_OVER" });
  }

  finalScoreEl.textContent = String(score);
  
  const winnerText = document.getElementById("winner-text");
  
  if (isMultiplayer) {
    document.getElementById("final-opponent-score").parentElement.style.display = "block";
    document.getElementById("final-opponent-score").textContent = opponentScore;
    
    winnerText.style.display = "block";
    if (score > opponentScore) {
      winnerText.textContent = "🏆 Kamu Menang! 🎉";
    } else if (score < opponentScore) {
      winnerText.textContent = "😅 Lawan Menang! Gapapa coba lagi!";
    } else {
      winnerText.textContent = "🤝 Seri!";
    }
  } else {
    document.getElementById("final-opponent-score").parentElement.style.display = "none";
    winnerText.style.display = "none";
  }

  summaryEl.textContent = `Kamu menjawab ${totalQuestions} soal. Terus latihan supaya makin jago!`;
  showScreen(endScreen);
  playSound("win");
  showScreen(endScreen);
  playSound("win");

  // Efek Konfeti 🎉
  if (typeof confetti === "function") {
    const duration = 3000;
    const end = Date.now() + duration;
    
    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff7f50', '#22c55e', '#3b82f6', '#facc15', '#a855f7']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff7f50', '#22c55e', '#3b82f6', '#facc15', '#a855f7']
      });
    
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }
}

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);

submitBtnEl.addEventListener("click", handleAnswer);
answerInputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleAnswer();
});

// --- ORNAMENTS & ANIMASI Latar ---
function createOrnaments() {
  const container = document.getElementById("background-ornaments");
  const emojis = ["🍎", "🍌", "🍊", "🍇", "🍉", "🍓", "🍍", "🥭", "⭐", "☁️", "🎈", "✨", "🎉"];
  const numOrnaments = 35; // Jumlah ornamen yang beterbangan

  for (let i = 0; i < numOrnaments; i++) {
    const el = document.createElement("div");
    el.className = "floating-item";
    el.textContent = pickRandom(emojis);
    
    // Properties Acak
    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = Math.random() * 2 + 1.5 + "rem"; // ukuran 1.5rem hingga 3.5rem
    el.style.animationDuration = Math.random() * 15 + 10 + "s"; // durasi terbang 10s - 25s
    el.style.animationDelay = Math.random() * -25 + "s"; // nilai negatif agar langsung muncul tersebar
    
    container.appendChild(el);
  }
}

createOrnaments();
