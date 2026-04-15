const board = document.getElementById('board');
const piecesContainer = document.getElementById('pieces-container');
const message = document.getElementById('message');
const levelTitle = document.getElementById('level-title');

// Pengaturan layar
const screens = {
    start: document.getElementById('start-screen'),
    image: document.getElementById('image-screen'),
    game: document.getElementById('game-screen'),
    lobby: document.getElementById('lobby-screen')
};

// Daftar gambar yang bisa dibuat puzzle
const images = [
    { src: 'gambar_puzzle/gambar_puzzle1.png', label: 'One Piece' },
    // Kamu bisa tambahkan gambar baru di bawah ini!
    // { src: 'gambar_puzzle/gambar2.png', label: 'Gambar Dua' }
];

let cols = 3;
let rows = 3;
let pieceWidth = 200;
let pieceHeight = 150;
let currentImage = '';
let pieces = [];

function initImages() {
    const grid = document.getElementById('image-grid');
    grid.innerHTML = '';
    images.forEach(img => {
        const card = document.createElement('div');
        card.className = 'preview-card';
        card.onclick = () => startGameWithImage(img.src, img.label);
        
        const thumb = document.createElement('img');
        thumb.src = img.src;
        thumb.alt = img.label;
        
        const title = document.createElement('h3');
        title.textContent = img.label;
        
        card.appendChild(thumb);
        card.appendChild(title);
        grid.appendChild(card);
    });
}

function showScreen(screenId) {
    Object.values(screens).forEach(screen => screen.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
}

function startGameWithImage(imageSrc, label) {
    currentImage = imageSrc;
    levelTitle.textContent = `Bongkar Pasang: ${label}`;
    
    // Ukuran papan 800x450
    pieceWidth = 800 / cols;
    pieceHeight = 450 / rows;
    
    board.style.gridTemplateColumns = `repeat(${cols}, ${pieceWidth}px)`;
    board.style.gridTemplateRows = `repeat(${rows}, ${pieceHeight}px)`;

    showScreen('game-screen');
    initGame();
}

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageUrl = e.target.result;
            // Memulai game langsung dengan gambar yang diupload
            startGameWithImage(imageUrl, 'Gambar Sendiri');
        }
        reader.readAsDataURL(file);
    }
}

// Fungsi untuk menggambar Emoji berukuran raksasa ke dalam format gambar
function getEmojiImage(emoji) {
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');

    // Latar belakang gradient untuk emoji
    const getGradientColor = () => `hsl(${Math.random() * 360}, 80%, 70%)`;
    const gradient = ctx.createLinearGradient(0, 0, 600, 600);
    gradient.addColorStop(0, getGradientColor());
    gradient.addColorStop(1, getGradientColor());
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 600, 600);

    // Render Emoji raksasa
    ctx.font = '450px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(emoji, 600 / 2, 600 / 2 + 40); // Sedikit diturunkan agar pas di tengah

    // Kembalikan format base64
    return canvas.toDataURL('image/png');
}

// Koleksi emoji seru yang jauh lebih banyak
const emojisList = ['🚀', '🦕', '🌮', '🎨', '🐯', '🤖', '🧸', '🌈', '🐳', '⚽', '🍕', '🌵', '🦄', '🍔', '🎸', '🐢', '🍣', '🐧', '🎁'];

// ==== Sistem Mode Arcade (Seperti Game Mengetik) ====
let isArcadeMode = false;
let arcadeLevel = 1;
let arcadeScore = 0;
let arcadeTimeLeft = 60;
let arcadeTimer;
let currentArcadeEmoji = '';

function getSelectedDuration() {
    const radio = document.querySelector('input[name="duration"]:checked');
    return radio ? parseInt(radio.value) : 60;
}

function updateArcadeUI() {
    document.getElementById('arcade-level').textContent = arcadeLevel;
    document.getElementById('arcade-score').textContent = arcadeScore;
    document.getElementById('arcade-time').textContent = Math.floor(arcadeTimeLeft);
}

function startArcadeMode() {
    isArcadeMode = true;
    isOnline = false;
    arcadeLevel = 1;
    arcadeScore = 0;
    arcadeTimeLeft = getSelectedDuration();
    
    document.getElementById('arcade-header').classList.remove('hidden');
    document.getElementById('multiplayer-scores').classList.add('hidden');
    document.getElementById('gameover-message').classList.add('hidden');
    message.classList.add('hidden');
    
    // Set 3 baris 3 kolom (3x3 aspect ratio) untuk awal
    cols = 3; 
    rows = 3;

    loadNextArcadeEmoji();
}

function loadNextArcadeEmoji() {
    currentArcadeEmoji = emojisList[Math.floor(Math.random() * emojisList.length)];
    const emojiImageUrl = getEmojiImage(currentArcadeEmoji);
    
    updateArcadeUI();
    startGameWithImage(emojiImageUrl, `Emoji ${currentArcadeEmoji}`);
    
    // Pastikan header arcade terlihat (tertutup jika memanggil startGameWithImage langsung)
    document.getElementById('arcade-header').classList.remove('hidden');
    
    clearInterval(arcadeTimer);
    arcadeTimer = setInterval(function() {
        if(document.getElementById('game-screen').classList.contains('hidden')) {
            clearInterval(arcadeTimer); // Batalkan jika user keluar (Kembali)
            return;
        }

        arcadeTimeLeft--;
        updateArcadeUI();

        if(arcadeTimeLeft <= 0) {
            clearInterval(arcadeTimer);
            handleArcadeGameOver();
        }
    }, 1000);
}

function handleArcadeGameOver() {
    isArcadeMode = false; // Matikan logic menang arcade
    document.getElementById('gameover-message').classList.remove('hidden');
    message.classList.add('hidden');
    piecesContainer.innerHTML = ''; // Hapus sisa puzzle agar tidak bisa ditarik
    
    // Ganti fungsi tombol Ulangi jadi Lanjut Arcade Baru
    const restartBtn = document.getElementById('restart-btn');
    restartBtn.textContent = 'Mulai Arcade Baru';
    restartBtn.onclick = function() {
        startArcadeMode();
        restartBtn.textContent = 'Ulangi Puzzle'; // kembalikan text
        restartBtn.onclick = initGame; // kembalikan logic biasa
    };
}

// Mulai game biasa (Mode Santai / Pilih Gambar / Emoji Acak)
function startEmojiGame() {
    isArcadeMode = false;
    document.getElementById('arcade-header').classList.add('hidden');
    const randomEmoji = emojisList[Math.floor(Math.random() * emojisList.length)];
    const emojiImageUrl = getEmojiImage(randomEmoji);
    startGameWithImage(emojiImageUrl, `Emoji ${randomEmoji}`);
}

function getPolygon(w, h, ox, top, right, bottom, left) {
    // ox adalah "offset" ukuran tonjolan puzzle (misalnya 20px)
    let pts = [];
    pts.push(`${ox}px ${ox}px`); // Sudut kiri-atas dasar

    // Sisi atas (Kiri ke Kanan)
    if(top === 1) { // Tonjolan keluar
        pts.push(`${ox + w/2 - 15}px ${ox}px`, `${ox + w/2 - 10}px 0px`, `${ox + w/2 + 10}px 0px`, `${ox + w/2 + 15}px ${ox}px`);
    } else if (top === -1) { // Tonjolan masuk
        pts.push(`${ox + w/2 - 15}px ${ox}px`, `${ox + w/2 - 10}px ${ox + 20}px`, `${ox + w/2 + 10}px ${ox + 20}px`, `${ox + w/2 + 15}px ${ox}px`);
    }
    pts.push(`${ox + w}px ${ox}px`); // Sudut kanan-atas dasar
    
    // Sisi Kanan (Atas ke Bawah)
    if(right === 1) { // Keluar
        pts.push(`${ox + w}px ${ox + h/2 - 15}px`, `${ox + w + 20}px ${ox + h/2 - 10}px`, `${ox + w + 20}px ${ox + h/2 + 10}px`, `${ox + w}px ${ox + h/2 + 15}px`);
    } else if(right === -1) { // Masuk
        pts.push(`${ox + w}px ${ox + h/2 - 15}px`, `${ox + w - 20}px ${ox + h/2 - 10}px`, `${ox + w - 20}px ${ox + h/2 + 10}px`, `${ox + w}px ${ox + h/2 + 15}px`);
    }
    pts.push(`${ox + w}px ${ox + h}px`); // Sudut kanan-bawah dasar
    
    // Sisi Bawah (Kanan ke Kiri)
    if(bottom === 1) { 
        pts.push(`${ox + w/2 + 15}px ${ox + h}px`, `${ox + w/2 + 10}px ${ox + h + 20}px`, `${ox + w/2 - 10}px ${ox + h + 20}px`, `${ox + w/2 - 15}px ${ox + h}px`);
    } else if (bottom === -1) {
        pts.push(`${ox + w/2 + 15}px ${ox + h}px`, `${ox + w/2 + 10}px ${ox + h - 20}px`, `${ox + w/2 - 10}px ${ox + h - 20}px`, `${ox + w/2 - 15}px ${ox + h}px`);
    }
    pts.push(`${ox}px ${ox + h}px`); // Sudut kiri-bawah dasar
    
    // Sisi Kiri (Bawah ke Atas)
    if(left === 1) {
        pts.push(`${ox}px ${ox + h/2 + 15}px`, `0px ${ox + h/2 + 10}px`, `0px ${ox + h/2 - 10}px`, `${ox}px ${ox + h/2 - 15}px`);
    } else if(left === -1) {
        pts.push(`${ox}px ${ox + h/2 + 15}px`, `${ox + 20}px ${ox + h/2 + 10}px`, `${ox + 20}px ${ox + h/2 - 10}px`, `${ox}px ${ox + h/2 - 15}px`);
    }
    return `polygon(${pts.join(', ')})`;
}

function initGame() {
    board.innerHTML = '';
    piecesContainer.innerHTML = '';
    message.classList.add('hidden');
    pieces = [];

    // Membuat slot kosong di dalam papan (Drop Zone)
    for (let i = 0; i < cols * rows; i++) {
        const slot = document.createElement('div');
        slot.classList.add('board-slot');
        slot.style.width = `${pieceWidth}px`;
        slot.style.height = `${pieceHeight}px`;
        slot.dataset.index = i;
        
        slot.addEventListener('dragover', dragOver);
        slot.addEventListener('dragenter', dragEnter);
        slot.addEventListener('drop', drop);
        
        board.appendChild(slot);
    }

    // Setup bentuk tabs Jigsaw secara acak supaya pas berpasangan
    let hTabs = Array.from({length: cols - 1}, () => Array.from({length: rows}, () => Math.random() > 0.5 ? 1 : -1));
    let vTabs = Array.from({length: cols}, () => Array.from({length: rows - 1}, () => Math.random() > 0.5 ? 1 : -1));

    // Membuat kepingan puzzle (Draggable)
    for (let i = 0; i < cols * rows; i++) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.draggable = true;
        piece.dataset.index = i;
        
        // Offset 20px di semua sisi untuk memperbolehkan tab menggeliat (keluar area dasar puzzle)
        const offset = 20; 
        
        piece.style.backgroundImage = `url('${currentImage}')`;
        piece.style.width = `${pieceWidth + (offset * 2)}px`;
        piece.style.height = `${pieceHeight + (offset * 2)}px`;
        
        // Memotong dan memposisikan gambar sesuai offset
        const originalRow = Math.floor(i / cols);
        const originalCol = i % cols;
        
        const bgPosX = offset - (originalCol * pieceWidth);
        const bgPosY = offset - (originalRow * pieceHeight);
        
        piece.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
        piece.style.backgroundSize = `${cols * pieceWidth}px ${rows * pieceHeight}px`;

        // Bangun logika tonjolan pinggiran puzzle-nya
        let topTab = (originalRow === 0) ? 0 : -vTabs[originalCol][originalRow - 1]; 
        let bottomTab = (originalRow === rows - 1) ? 0 : vTabs[originalCol][originalRow];
        let leftTab = (originalCol === 0) ? 0 : -hTabs[originalCol - 1][originalRow];
        let rightTab = (originalCol === cols - 1) ? 0 : hTabs[originalCol][originalRow];

        piece.style.clipPath = getPolygon(pieceWidth, pieceHeight, offset, topTab, rightTab, bottomTab, leftTab);

        // Event listener saat dipindahkan
        piece.addEventListener('dragstart', dragStart);
        piece.addEventListener('dragend', dragEnd);

        pieces.push(piece);
    }

    // Mengacak susunan kepingan di container samping
    pieces.sort(() => Math.random() - 0.5);
    pieces.forEach(piece => piecesContainer.appendChild(piece));
}

let draggedPiece = null;

function dragStart() {
    draggedPiece = this;
    setTimeout(() => this.style.display = 'none', 0);
}

function dragEnd() {
    this.style.display = 'block';
    draggedPiece = null;
    checkWin();
}

function dragOver(e) {
    e.preventDefault(); // Wajib agar drop diizinkan
}

function dragEnter(e) {
    e.preventDefault();
}

function drop() {
    // Jika slot papan sudah berisi puzzle lain, kembalikan isinya ke tempat semula
    if (this.children.length > 0) {
        piecesContainer.appendChild(this.children[0]);
    }
    // Tempatkan potongan di papan yang sedang didrop
    this.appendChild(draggedPiece);
    
    // Memberikan efek interaktif "snap" saat dilepas (scale bounce)
    const p = draggedPiece;
    p.style.transform = 'scale(1.1)';
    p.style.transition = 'transform 0.15s ease-out';
    setTimeout(() => {
        if(p) p.style.transform = 'scale(1)';
    }, 150);
}

// Container samping juga harus dapat menerima kembali puzzle yang dibatalkan
piecesContainer.addEventListener('dragover', dragOver);
piecesContainer.addEventListener('drop', function() {
    this.appendChild(draggedPiece);
});

// Cek apakah semua puzzle berada di tempat yang tepat
function checkWin() {
    const slots = board.querySelectorAll('.board-slot');
    let isWin = true;

    slots.forEach((slot, index) => {
        // Jika masih ada slot/papan yang kosong
        if (slot.children.length === 0) {
            isWin = false;
        } else {
            // Jika isi di papan indeksnya tidak pada tempatnya
            const pieceIndex = parseInt(slot.children[0].dataset.index);
            if (pieceIndex !== index) {
                isWin = false;
            }
        }
    });

    if (isWin && slots.length === cols * rows) {
        if(isArcadeMode){
            clearInterval(arcadeTimer); // Stop timer sebentar
            message.textContent = `Hebat! Lanjut ke Level ${arcadeLevel + 1} 🎯`;
            message.classList.remove('hidden');
            fireConfetti();
            
            // Tambah skor dan sedikit waktu bonus 
            arcadeScore += 100 * arcadeLevel;
            myScore = arcadeScore; // Update local online score parameter
            
            // Beritahu teman online tentang skor baru kita
            if(isOnline && conn) {
                conn.send({ type: 'UPDATE_SCORE', score: myScore });
                if(isHost) {
                    document.getElementById('p1-score').textContent = myScore;
                } else {
                    document.getElementById('p2-score').textContent = myScore;
                }
            }

            arcadeTimeLeft += 5; // Kurangi bonus durasi untuk arcade 2x3 agar imbang
            arcadeLevel++;
            updateArcadeUI();

            // Lanjut ke puzzle baru setelah 2.5 detik
            setTimeout(() => {
                message.classList.add('hidden');
                message.textContent = 'Selamat! Kamu Menang! 🎉'; // Kembalikan pesan aslinya
                loadNextArcadeEmoji();
            }, 2500);

        } else {
            message.classList.remove('hidden');
            fireConfetti();
        }
    }
}

// ==== Sistem Multiplayer (Daur Ulang dari Game Mengetik) ====
let isOnline = false;
let peer = null;
let conn = null;
let isHost = false;
let myScore = 0;
let opponentScore = 0;

document.getElementById('multiplayer-actions').style.display = 'block';

document.getElementById('host-btn').addEventListener('click', () => {
    setupMultiplayer(true);
});

document.getElementById('join-btn').addEventListener('click', () => {
    const code = document.getElementById('join-input').value.trim();
    if(code) setupMultiplayer(false, code);
});

function setupMultiplayer(host, code = null) {
    if(peer) peer.destroy();
    isHost = host;
    
    // Ganti status UI
    document.getElementById('status-msg').textContent = host ? "Menghubungkan ke server..." : "Mencari ruangan...";

    // inisialisasi peerjs
    peer = new Peer();
    
    peer.on('open', (id) => {
        showScreen('lobby-screen');
        isOnline = true;
        
        if(isHost) {
            document.getElementById('lobby-room-code').textContent = id;
            document.getElementById('lobby-status').textContent = "Menunggu pemain lain bergabung...";
            document.getElementById('lobby-players').textContent = "Pemain: 1 / 2";
            document.getElementById('lobby-start-btn').style.display = 'inline-block';
            document.getElementById('lobby-start-btn').disabled = true;
        } else {
            document.getElementById('lobby-room-code').textContent = code;
            document.getElementById('lobby-status').textContent = "Menghubungkan ke Pemain 1...";
            
            conn = peer.connect(code);
            setupConnection();
        }
    });

    if(isHost) {
        peer.on('connection', (connection) => {
            conn = connection;
            setupConnection();
            document.getElementById('lobby-status').textContent = "Pemain 2 Bergabung! Siap untuk mulai!";
            document.getElementById('lobby-players').textContent = "Pemain: 2 / 2";
            document.getElementById('lobby-start-btn').disabled = false; // Host sudah bisa start
        });
    }
}

function setupConnection() {
    conn.on('open', () => {
        if(!isHost) {
            document.getElementById('lobby-status').textContent = "Berhasil tersambung. Menunggu Host memulai!";
            document.getElementById('lobby-players').textContent = "Pemain: 2 / 2";
        }
    });
    
    conn.on('data', (data) => {
        if(data.type === 'START_GAME') {
            startOnlineMatch(data.duration, data.emojiParams);
        } else if(data.type === 'UPDATE_SCORE') {
            if(isHost) {
                opponentScore = data.score;
                document.getElementById('p2-score').textContent = opponentScore;
            } else {
                opponentScore = data.score;
                document.getElementById('p1-score').textContent = opponentScore;
            }
        }
    });
}

function disconnectMultiplayer() {
    isOnline = false;
    if(conn) { conn.close(); conn = null; }
    if(peer) { peer.destroy(); peer = null; }
}

function startOnlineGame() {
    if(!isHost || !conn) return;
    
    const randomEmojiSeed = emojisList[Math.floor(Math.random() * emojisList.length)];
    const timeSelected = getSelectedDuration();
    
    // Beritahu teman online untuk masuk ke game
    conn.send({ type: 'START_GAME', duration: timeSelected, emojiParams: randomEmojiSeed });
    
    // Mulai dari sisi host
    startOnlineMatch(timeSelected, randomEmojiSeed);
}

function startOnlineMatch(time, startingEmoji) {
    isArcadeMode = true;
    arcadeTimeLeft = time;
    arcadeLevel = 1;
    arcadeScore = 0;
    myScore = 0;
    opponentScore = 0;
    
    // Setup Tampilan Layar Online
    document.getElementById('arcade-header').classList.remove('hidden');
    document.getElementById('multiplayer-scores').classList.remove('hidden');
    document.getElementById('gameover-message').classList.add('hidden');
    
    document.getElementById('p1-score').textContent = "0";
    document.getElementById('p2-score').textContent = "0";
    
    message.classList.add('hidden');
    cols = 3; 
    rows = 3; // 3x3 style yang diminta user
    
    // Setel puzzle menggunakan emoji sama dengan lawannya
    currentArcadeEmoji = startingEmoji;
    
    const emojiImageUrl = getEmojiImage(currentArcadeEmoji);
    startGameWithImage(emojiImageUrl, `Emoji ${currentArcadeEmoji}`);
    
    document.getElementById('arcade-header').classList.remove('hidden');
    
    clearInterval(arcadeTimer);
    arcadeTimer = setInterval(function() {
        if(document.getElementById('game-screen').classList.contains('hidden')) {
            clearInterval(arcadeTimer); 
            return;
        }

        arcadeTimeLeft--;
        updateArcadeUI();

        if(arcadeTimeLeft <= 0) {
            clearInterval(arcadeTimer);
            handleArcadeGameOver();
        }
    }, 1000);
}

// ==== Akhir MultiPlayer ====


function stopAllTimersOnExit() {
    clearInterval(arcadeTimer);
    isArcadeMode = false;
    document.getElementById('arcade-header').classList.add('hidden');
}

// Override showScreen to stop timers
const originalShowScreen = showScreen;
showScreen = function(screenId) {
    if(screenId !== 'game-screen') stopAllTimersOnExit();
    originalShowScreen(screenId);
};

function fireConfetti() {
    const container = document.getElementById('confetti-container');
    if(!container) return;
    
    container.innerHTML = '';
    const colors = ['#f44336', '#007bff', '#28a745', '#ffc107', '#17a2b8', '#e83e8c', '#6f42c1'];
    
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = Math.random() * 8 + 5 + 'px';
            confetti.style.height = Math.random() * 15 + 10 + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-20px';
            confetti.style.opacity = Math.random() + 0.5;
            confetti.style.borderRadius = (Math.random() > 0.5 ? '50%' : '0');
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            // Animasi turun
            confetti.style.transition = `top ${Math.random() * 2 + 2}s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform ${Math.random() * 2 + 2}s linear`;
            container.appendChild(confetti);

            setTimeout(() => {
                confetti.style.top = '110vh';
                confetti.style.transform = `rotate(${Math.random() * 720}deg)`;
            }, 10); // sedikit delay trigger animation
            
            // Bersihkan memori usai animasi
            setTimeout(() => confetti.remove(), 4000);
        }, i * 20); // Keluarnya mencicil (Air mancur confetti)
    }
}

// Inisialisasi daftar gambar dan tampilkan Start Screen
initImages();
showScreen('start-screen');