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

const bodyParts = [
  { name: "Mata", emoji: "👀" },
  { name: "Hidung", emoji: "👃" },
  { name: "Telinga", emoji: "👂" },
  { name: "Tangan", emoji: "✋" },
  { name: "Kaki", emoji: "🦶" },
  { name: "Mulut", emoji: "👄" },
  { name: "Gigi", emoji: "🦷" },
  { name: "Lidah", emoji: "👅" }
];

const professions = [
  { name: "Dokter", emoji: "👨‍⚕️" },
  { name: "Polisi", emoji: "👮" },
  { name: "Guru", emoji: "👨‍🏫" },
  { name: "Koki", emoji: "👨‍🍳" },
  { name: "Pilot", emoji: "👨‍✈️" },
  { name: "Petani", emoji: "👨‍🌾" },
  { name: "Hakim", emoji: "👨‍⚖️" },
  { name: "Astronot", emoji: "👨‍🚀" },
  { name: "Detektif", emoji: "🕵️" }
];

const schoolSupplies = [
  { name: "Buku", emoji: "📚" },
  { name: "Pensil", emoji: "✏️" },
  { name: "Tas", emoji: "🎒" },
  { name: "Penggaris", emoji: "📏" },
  { name: "Gunting", emoji: "✂️" },
  { name: "Kertas", emoji: "📄" }
];

const clothes = [
  { name: "Baju", emoji: "👕" },
  { name: "Celana", emoji: "👖" },
  { name: "Sepatu", emoji: "👟" },
  { name: "Topi", emoji: "🧢" },
  { name: "Kacamata", emoji: "👓" },
  { name: "Jaket", emoji: "🧥" },
  { name: "Gaun", emoji: "👗" },
  { name: "Kaos kaki", emoji: "🧦" }
];

const space = [
  { name: "Bumi", emoji: "🌍" },
  { name: "Bulan", emoji: "🌙" },
  { name: "Matahari", emoji: "☀️" },
  { name: "Bintang", emoji: "⭐" },
  { name: "Meteor", emoji: "☄️" } // Roket is in vehicles
];

const foods = [
  { name: "Susu", emoji: "🥛" },
  { name: "Roti", emoji: "🍞" },
  { name: "Eskrim", emoji: "🍦" },
  { name: "Kue", emoji: "🍰" },
  { name: "Permen", emoji: "🍬" },
  { name: "Keju", emoji: "🧀" },
  { name: "Coklat", emoji: "🍫" },
  { name: "Pizza", emoji: "🍕" },
  { name: "Donat", emoji: "🍩" }
];

const startScreen = document.getElementById("start-screen");
const lobbyScreen = document.getElementById("lobby-screen");
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
let isMultiplayer = false;
let isHost = false;
let hostConnections = {}; // Simpan banyak koneksi (kalo host)
let clientConnection = null; // Koneksi ke host (kalo join)
let playersInfo = {}; // { peerId: { name: "Host", score: 0 } }
let myPlayerId = "";
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

function updateLobbyUI() {
  const playerCount = Object.keys(playersInfo).length;
  document.getElementById("lobby-players").textContent = `👥 ${playerCount} / 5 Pemain`;
  
  const listEl = document.getElementById("lobby-player-list");
  if (listEl) {
    listEl.innerHTML = "";
    for (let id in playersInfo) {
      const li = document.createElement("li");
      li.textContent = playersInfo[id].name + (id === myPlayerId ? " (Kamu)" : "");
      listEl.appendChild(li);
    }
  }

  if (isHost) {
    if (playerCount >= 2) {
      document.getElementById("lobby-start-btn").disabled = false;
      document.getElementById("lobby-status").textContent = "Pemain siap! Bisa menekan Mulai.";
    } else {
      document.getElementById("lobby-start-btn").disabled = true;
      document.getElementById("lobby-status").textContent = "Menunggu teman bergabung...";
    }
  }
}

function updateMultiplayerScoresUI() {
  const listEl = document.getElementById("multiplayer-scores-list");
  if (!listEl) return;
  listEl.innerHTML = "";
  for (let id in playersInfo) {
    if (id !== myPlayerId) {
      const p = document.createElement("div");
      p.className = "chip";
      p.textContent = `${playersInfo[id].name}: ${playersInfo[id].score}`;
      listEl.appendChild(p);
    }
  }
}

function broadcastToClients(data) {
  for (let id in hostConnections) {
    hostConnections[id].send(data);
  }
}

// Setup PeerJS
function initPeer() {
  const statusMsg = document.getElementById("status-msg");
  myPlayerId = generateShortCode();
  const fullId = "play-" + myPlayerId;
  
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
    if (Object.keys(playersInfo).length >= 5) {
      conn.send({ type: "ERROR", message: "Ruangan Penuh" });
      setTimeout(() => conn.close(), 1000);
      return;
    }
    
    // Add conn
    hostConnections[conn.peer] = conn;
    isMultiplayer = true;
    
    const playerName = `Pemain ${Object.keys(playersInfo).length + 1}`;
    playersInfo[conn.peer] = { name: playerName, score: 0 };
    
    updateLobbyUI();
    
    // Generate questions just in case it's the first join
    if (questionSequence.length === 0) generateQuestionSequence();
    
    conn.on("open", () => {
      // Send lobby update to all
      broadcastToClients({ type: "LOBBY_UPDATE", playersInfo: playersInfo });
    });

    conn.on("data", (data) => {
      if (data.type === "SCORE_UPDATE") {
        if (playersInfo[conn.peer]) playersInfo[conn.peer].score = data.score;
        broadcastToClients({ type: "SCORES_UPDATE", playersInfo: playersInfo });
        updateMultiplayerScoresUI();
      } else if (data.type === "GAME_OVER") {
        if (playersInfo[conn.peer]) playersInfo[conn.peer].finished = true;
      }
    });

    conn.on("close", () => {
      delete hostConnections[conn.peer];
      delete playersInfo[conn.peer];
      updateLobbyUI();
      broadcastToClients({ type: "LOBBY_UPDATE", playersInfo: playersInfo });
    });
  });

  peer.on('error', (err) => {
    statusMsg.textContent = `Error: ${err.type}`;
    document.getElementById("lobby-status").textContent = `Koneksi gagal: ${err.type}`;
  });
}

function handleClientConnectionData() {
  clientConnection.on("data", (data) => {
    if (data.type === "LOBBY_UPDATE") {
      playersInfo = data.playersInfo;
      updateLobbyUI();
    } else if (data.type === "START") {
      document.getElementById("lobby-status").textContent = "Permainan segera dimulai...";
      questionSequence = data.sequence;
      playersInfo = data.playersInfo;
      remainingTime = data.duration * 60;
      setTimeout(() => {
        startGame(true);
      }, 1000);
    } else if (data.type === "SCORES_UPDATE") {
      playersInfo = data.playersInfo;
      updateMultiplayerScoresUI();
    } else if (data.type === "GAME_OVER") {
      endGame(true);
    } else if (data.type === "ERROR") {
      alert(data.message);
    }
  });

  clientConnection.on("close", () => {
    document.getElementById("status-msg").textContent = "Host terputus.";
    document.getElementById("lobby-status").textContent = "Host terputus, silakan kembali.";
    document.getElementById("lobby-start-btn").disabled = true;
  });
}

function initHost() {
  isHost = true;
  isMultiplayer = true;
  playersInfo[myPlayerId] = { name: "Host", score: 0 };
  updateLobbyUI();
  
  showScreen(lobbyScreen);
  document.getElementById("lobby-role").textContent = "Kamu Pembuat Ruangan (Host)";
  document.getElementById("lobby-room-code").textContent = window.myShortRoomCode;
  document.getElementById("lobby-start-btn").style.display = "inline-block";
  document.getElementById("host-btn").disabled = true;
  document.getElementById("join-btn").disabled = true;
}

function joinGame() {
  const joinId = document.getElementById("join-input").value.trim().toUpperCase();
  if (!joinId) return;

  const fullJoinId = "play-" + joinId;
  document.getElementById("status-msg").textContent = "Menghubungkan ke ruang...";
  
  clientConnection = peer.connect(fullJoinId);
  isMultiplayer = true;
  
  // Show lobby right away
  showScreen(lobbyScreen);
  document.getElementById("lobby-role").textContent = "Kamu Bergabung dengan Ruangan";
  document.getElementById("lobby-room-code").textContent = joinId;
  document.getElementById("lobby-status").textContent = "Mencari teman...";
  document.getElementById("lobby-start-btn").style.display = "none";

  clientConnection.on("open", () => {
    document.getElementById("lobby-status").textContent = "Terhubung! Menunggu Host...";
    document.getElementById("host-btn").disabled = true;
    document.getElementById("join-btn").disabled = true;
    handleClientConnectionData();
  });
}

document.getElementById("host-btn").addEventListener("click", initHost);
document.getElementById("join-btn").addEventListener("click", joinGame);

document.getElementById("lobby-start-btn").addEventListener("click", () => {
  if (isHost && Object.keys(hostConnections).length > 0) {
    document.getElementById("lobby-status").textContent = "Memulai Permainan...";
    const selectedDuration = document.querySelector('input[name="duration"]:checked').value;
    
    if (questionSequence.length === 0) generateQuestionSequence();
    for (let id in playersInfo) { playersInfo[id].score = 0; }
    
    // Broadcast start
    broadcastToClients({
      type: "START",
      sequence: questionSequence,
      playersInfo: playersInfo,
      duration: parseInt(selectedDuration)
    });
    
    remainingTime = parseInt(selectedDuration) * 60;
    setTimeout(() => {
      startGame(true);
    }, 500);
  }
});

document.getElementById("lobby-back-btn").addEventListener("click", () => {
  // Go back to main menu
  if (isHost) {
    for (let id in hostConnections) {
      hostConnections[id].close();
    }
    hostConnections = {};
  } else if (clientConnection) {
    clientConnection.close();
  }
  
  playersInfo = {};
  isMultiplayer = false;
  isHost = false;
  document.getElementById("host-btn").disabled = false;
  document.getElementById("join-btn").disabled = false;
  document.getElementById("status-msg").textContent = "Multiplayer siap! Buat atau gabung ruangan kemari.";
  showScreen(startScreen);
});

window.addEventListener("load", initPeer);

// End Multiplayer Logic

function showScreen(screen) {
  startScreen.classList.remove("active");
  lobbyScreen.classList.remove("active");
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
  const categories = ["fruit", "color", "country", "animal", "vehicle", "bodyPart", "profession", "schoolSupply", "clothes", "space", "food", "math"];
  for (let i = 0; i < 500; i++) {
    const category = pickRandom(categories);
    let item;
    if (category === "math") {
      const ops = ["+", "-"];
      const op = pickRandom(ops);
      let a = Math.floor(Math.random() * 20) + 1;
      let b = Math.floor(Math.random() * 20) + 1;
      if (op === "-") {
        if (a < b) { let temp = a; a = b; b = temp; }
      }
      const answer = op === "+" ? a + b : a - b;
      item = { name: answer.toString(), text: `${a} ${op} ${b}` };
    } else {
      let source;
      if (category === "fruit") source = fruits;
      else if (category === "color") source = colors;
      else if (category === "country") source = countries;
      else if (category === "animal") source = animals;
      else if (category === "vehicle") source = vehicles;
      else if (category === "bodyPart") source = bodyParts;
      else if (category === "profession") source = professions;
      else if (category === "schoolSupply") source = schoolSupplies;
      else if (category === "clothes") source = clothes;
      else if (category === "space") source = space;
      else source = foods;
      item = pickRandom(source);
    }
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
    const categories = ["fruit", "color", "country", "animal", "vehicle", "bodyPart", "profession", "schoolSupply", "clothes", "space", "food", "math"];
    category = pickRandom(categories);
    if (category === "math") {
      const ops = ["+", "-"];
      const op = pickRandom(ops);
      let a = Math.floor(Math.random() * 20) + 1;
      let b = Math.floor(Math.random() * 20) + 1;
      if (op === "-") {
        if (a < b) { let temp = a; a = b; b = temp; }
      }
      const answer = op === "+" ? a + b : a - b;
      item = { name: answer.toString(), text: `${a} ${op} ${b}` };
    } else {
      let source;
      if (category === "fruit") source = fruits;
      else if (category === "color") source = colors;
      else if (category === "country") source = countries;
      else if (category === "animal") source = animals;
      else if (category === "vehicle") source = vehicles;
      else if (category === "bodyPart") source = bodyParts;
      else if (category === "profession") source = professions;
      else if (category === "schoolSupply") source = schoolSupplies;
      else if (category === "clothes") source = clothes;
      else if (category === "space") source = space;
      else source = foods;
      item = pickRandom(source);
    }
  }

  currentCorrectAnswer = item.name;
  totalQuestions += 1;

  if (category === "math") {
    questionTextEl.textContent = "Berapa hasilnya?";
    visualAreaEl.innerHTML = `<div class="fruit-emoji" style="border:none; box-shadow:none; font-family:'Courier New', monospace; font-size:120px; font-weight:bold;">${item.text}</div>`;
  } else if (category === "fruit") {
    questionTextEl.textContent = "Ini buah apa?";
    visualAreaEl.innerHTML = `<div class="fruit-emoji">${item.emoji}</div>`;
  } else if (category === "color") {
    questionTextEl.textContent = "Ini warna apa?";
    visualAreaEl.innerHTML = `<div class="color-box" style="background:${item.code}"></div>`;
  } else if (category === "country") {
    questionTextEl.textContent = "Bendera negara apa ini?";
    visualAreaEl.innerHTML = `<img src="https://flagcdn.com/w160/${item.code}.png" alt="Bendera" style="width: 140px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.15); animation: wiggleObj 5s ease-in-out infinite;">`;
  } else if (category === "animal") {
    questionTextEl.textContent = "Hewan apa ini?";
    visualAreaEl.innerHTML = `<div class="fruit-emoji" style="border:none; box-shadow:none;">${item.emoji}</div>`;
  } else if (category === "vehicle") {
    questionTextEl.textContent = "Kendaraan apa ini?";
    visualAreaEl.innerHTML = `<div class="fruit-emoji" style="border:none; box-shadow:none;">${item.emoji}</div>`;
  } else if (category === "bodyPart") {
    questionTextEl.textContent = "Bagian tubuh apa ini?";
    visualAreaEl.innerHTML = `<div class="fruit-emoji" style="border:none; box-shadow:none;">${item.emoji}</div>`;
  } else if (category === "profession") {
    questionTextEl.textContent = "Profesi apa ini?";
    visualAreaEl.innerHTML = `<div class="fruit-emoji" style="border:none; box-shadow:none;">${item.emoji}</div>`;
  } else if (category === "schoolSupply") {
    questionTextEl.textContent = "Alat sekolah apa ini?";
    visualAreaEl.innerHTML = `<div class="fruit-emoji" style="border:none; box-shadow:none;">${item.emoji}</div>`;
  } else if (category === "clothes") {
    questionTextEl.textContent = "Pakaian apa ini?";
    visualAreaEl.innerHTML = `<div class="fruit-emoji" style="border:none; box-shadow:none;">${item.emoji}</div>`;
  } else if (category === "space") {
    questionTextEl.textContent = "Benda luar angkasa apa ini?";
    visualAreaEl.innerHTML = `<div class="fruit-emoji" style="border:none; box-shadow:none;">${item.emoji}</div>`;
  } else if (category === "food") {
    questionTextEl.textContent = "Makanan/minuman apa ini?";
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
    if (isMultiplayer) {
      if (isHost) {
        playersInfo[myPlayerId].score = score;
        broadcastToClients({ type: "SCORES_UPDATE", playersInfo: playersInfo });
        updateMultiplayerScoresUI();
      } else if (clientConnection) {
        clientConnection.send({ type: "SCORE_UPDATE", score: score });
      }
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
  totalQuestions = 0;
  currentQuestionIndex = 0;
  
  document.getElementById("opponent-score-wrapper").style.display = isMultiplayer ? "block" : "none";
  if (isMultiplayer) updateMultiplayerScoresUI();
  
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
  
  if (isMultiplayer && !fromOpponent) {
      if (isHost) {
        broadcastToClients({ type: "GAME_OVER" });
      } else if (clientConnection) {
        clientConnection.send({ type: "GAME_OVER" });
      }
  }

  finalScoreEl.textContent = String(score);
  
  const winnerText = document.getElementById("winner-text");
  const finalMultiplayerScores = document.getElementById("final-multiplayer-scores");
  const finalScoresList = document.getElementById("final-scores-list");
  
  if (isMultiplayer) {
    finalMultiplayerScores.style.display = "block";
    playersInfo[myPlayerId].score = score;
    
    // Sort scores descending
    const sortedPlayers = Object.keys(playersInfo).map(id => {
      return { id, name: playersInfo[id].name, score: playersInfo[id].score };
    });
    sortedPlayers.sort((a, b) => b.score - a.score);
    
    finalScoresList.innerHTML = "";
    sortedPlayers.forEach((p, idx) => {
      const li = document.createElement("li");
      li.textContent = `${p.name} - ${p.score} poin` + (p.id === myPlayerId ? " (Kamu)" : "");
      if (idx === 0) li.style.fontWeight = "bold";
      finalScoresList.appendChild(li);
    });

    winnerText.style.display = "block";
    if (sortedPlayers[0].id === myPlayerId) {
      winnerText.textContent = "🏆 Kamu Menang! 🎉";
    } else {
      winnerText.textContent = "😅 Kamu Kalah! Coba lagi!";
    }
  } else {
    finalMultiplayerScores.style.display = "none";
    winnerText.style.display = "none";
  }

  summaryEl.textContent = `Kamu menjawab ${totalQuestions} soal. Terus latihan supaya makin jago!`;
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
