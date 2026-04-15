const board = document.getElementById('board');
const piecesContainer = document.getElementById('pieces-container');
const message = document.getElementById('message');
const levelTitle = document.getElementById('level-title');

// Pengaturan layar
const screens = {
    start: document.getElementById('start-screen'),
    image: document.getElementById('image-screen'),
    game: document.getElementById('game-screen')
};

// Daftar gambar yang bisa dibuat puzzle
const images = [
    { src: 'gambar_puzzle/gambar_puzzle1.png', label: 'One Piece' },
    // Kamu bisa tambahkan gambar baru di bawah ini!
    // { src: 'gambar_puzzle/gambar2.png', label: 'Gambar Dua' }
];

let cols = 4;
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
        message.classList.remove('hidden');
    }
}

// Inisialisasi daftar gambar dan tampilkan Start Screen
initImages();
showScreen('start-screen');