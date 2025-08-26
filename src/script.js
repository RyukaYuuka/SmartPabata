/**
 * Smart Alif Ba Ta - Arabic Learning Application
 * Main JavaScript File
 */

// Question banks for all themes
const questions = {
  tema1: {
    title: "Tema 1: Huruf Tunggal",
    subtitle: "Padankan huruf dengan bunyinya",
    draggables: [
      { id: "alif", text: "أ - Alif" },
      { id: "ba", text: "ب - Ba" },
      { id: "ta", text: "ت - Ta" },
      { id: "tha", text: "ث - Tha" },
      { id: "jim", text: "ج - Jim" },
      { id: "ha", text: "ح - Ha" },
      { id: "kha", text: "خ - Kha" },
      { id: "dal", text: "د - Dal" }
    ],
    droppables: [
      {
        id: "q1",
        match: "alif",
        question: "Huruf apakah ini? Bunyinya seperti 'a' dalam 'ayah'"
      },
      {
        id: "q2",
        match: "ba",
        question: "Huruf apakah ini? Bunyinya seperti 'b' dalam 'buku'"
      },
      {
        id: "q3",
        match: "ta",
        question: "Huruf apakah ini? Bunyinya seperti 't' dalam 'tali'"
      },
      {
        id: "q4",
        match: "tha",
        question: "Huruf apakah ini? Bunyinya seperti 'th' dalam 'think'"
      },
      {
        id: "q5",
        match: "jim",
        question: "Huruf apakah ini? Bunyinya seperti 'j' dalam 'jari'"
      },
      {
        id: "q6",
        match: "ha",
        question: "Huruf apakah ini? Bunyinya 'h' dari kerongkong"
      },
      {
        id: "q7",
        match: "kha",
        question: "Huruf apakah ini? Bunyinya seperti 'kh' dalam 'khas'"
      },
      {
        id: "q8",
        match: "dal",
        question: "Huruf apakah ini? Bunyinya seperti 'd' dalam 'dadu'"
      }
    ]
  },
  tema2: {
    title: "Tema 2: Huruf Berbaris",
    subtitle: "Padankan huruf berbaris dengan bacaan",
    draggables: [
      { id: "alif-fatha", text: "أَ" },
      { id: "ba-fatha", text: "بَ" },
      { id: "ta-kasra", text: "تِ" },
      { id: "tha-damma", text: "ثُ" },
      { id: "jim-sukun", text: "جْ" },
      { id: "ha-fathatain", text: "حً" },
      { id: "kha-kasratain", text: "خٍ" },
      { id: "dal-dammatain", text: "دٌ" }
    ],
    droppables: [
      {
        id: "q1",
        match: "alif-fatha",
        question: "Bacaan apakah ini? Bunyinya 'a' pendek"
      },
      {
        id: "q2",
        match: "ba-fatha",
        question: "Bacaan apakah ini? Bunyinya 'ba'"
      },
      {
        id: "q3",
        match: "ta-kasra",
        question: "Bacaan apakah ini? Bunyinya 'ti'"
      },
      {
        id: "q4",
        match: "tha-damma",
        question: "Bacaan apakah ini? Bunyinya 'thu'"
      },
      {
        id: "q5",
        match: "jim-sukun",
        question: "Bacaan apakah ini? Tidak ada bunyi vokal"
      },
      {
        id: "q6",
        match: "ha-fathatain",
        question: "Bacaan apakah ini? Bunyinya 'han'"
      },
      {
        id: "q7",
        match: "kha-kasratain",
        question: "Bacaan apakah ini? Bunyinya 'khin'"
      },
      {
        id: "q8",
        match: "dal-dammatain",
        question: "Bacaan apakah ini? Bunyinya 'dun'"
      }
    ]
  },
  tema3: {
    title: "Tema 3: Huruf Bersambung",
    subtitle: "Padankan bentuk huruf dengan kedudukannya",
    draggables: [
      { id: "ba-awal", text: "بـ" },
      { id: "ba-tengah", text: "ـبـ" },
      { id: "ba-akhir", text: "ـب" },
      { id: "ta-awal", text: "تـ" },
      { id: "ta-tengah", text: "ـتـ" },
      { id: "ta-akhir", text: "ـت" },
      { id: "alif", text: "أ" },
      { id: "dal", text: "د" }
    ],
    droppables: [
      {
        id: "q1",
        match: "ba-awal",
        question: "Bentuk apakah ini? Digunakan di awal perkataan"
      },
      {
        id: "q2",
        match: "ba-tengah",
        question: "Bentuk apakah ini? Digunakan di tengah perkataan"
      },
      {
        id: "q3",
        match: "ba-akhir",
        question: "Bentuk apakah ini? Digunakan di akhir perkataan"
      },
      {
        id: "q4",
        match: "ta-awal",
        question: "Bentuk apakah ini? Digunakan di awal perkataan"
      },
      {
        id: "q5",
        match: "ta-tengah",
        question: "Bentuk apakah ini? Digunakan di tengah perkataan"
      },
      {
        id: "q6",
        match: "ta-akhir",
        question: "Bentuk apakah ini? Digunakan di akhir perkataan"
      },
      {
        id: "q7",
        match: "alif",
        question: "Huruf apakah ini? Tidak berubah bentuk di awal/tengah/akhir"
      },
      {
        id: "q8",
        match: "dal",
        question: "Huruf apakah ini? Tidak bersambung dengan huruf selepasnya"
      }
    ]
  },
  tema4: {
    title: "Tema 4: Perbezaan Bacaan",
    subtitle: "Padankan dengan hukum tajwid yang betul",
    draggables: [
      { id: "madd", text: "مَدّ" },
      { id: "qalqalah", text: "قَلْقَلَة" },
      { id: "ikhfa", text: "إِخْفَاء" },
      { id: "idgham", text: "إِدْغَام" },
      { id: "iqlab", text: "إِقْلاَب" },
      { id: "izhar", text: "إِظْهَار" },
      { id: "tafkheem", text: "تَفْخِيم" },
      { id: "tarqeeq", text: "تَرْقِيق" }
    ],
    droppables: [
      {
        id: "q1",
        match: "madd",
        question: "Hukum apakah ini? Memanjangkan bacaan 2-6 harakat"
      },
      {
        id: "q2",
        match: "qalqalah",
        question: "Hukum apakah ini? Bunyi memantul ketika huruf mati"
      },
      {
        id: "q3",
        match: "ikhfa",
        question: "Hukum apakah ini? Menyembunyikan nun sakinah/tanwin"
      },
      {
        id: "q4",
        match: "idgham",
        question: "Hukum apakah ini? Memasukkan nun sakinah/tanwin ke huruf berikut"
      },
      {
        id: "q5",
        match: "iqlab",
        question: "Hukum apakah ini? Menukar nun sakinah/tanwin menjadi mim"
      },
      {
        id: "q6",
        match: "izhar",
        question: "Hukum apakah ini? Menyatakan nun sakinah/tanwin dengan jelas"
      },
      {
        id: "q7",
        match: "tafkheem",
        question: "Hukum apakah ini? Membaca huruf dengan tebal"
      },
      {
        id: "q8",
        match: "tarqeeq",
        question: "Hukum apakah ini? Membaca huruf dengan nipis"
      }
    ]
  }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  // Initialize theme if on match page
  if (document.getElementById('match-title')) {
    const urlParams = new URLSearchParams(window.location.search);
    const tema = urlParams.get('tema') || '1';
    loadQuestions(tema);
    initializeDragAndDrop();
  }
  
  // Add event listeners for buttons
  document.querySelectorAll('.check-answers').forEach(btn => {
    btn.addEventListener('click', checkAnswers);
  });
  
  document.querySelectorAll('.reset-quiz').forEach(btn => {
    btn.addEventListener('click', resetQuiz);
  });
});

// Load questions based on theme
function loadQuestions(tema) {
  const themeData = questions[`tema${tema}`];
  if (!themeData) return;

  // Update page title
  document.getElementById('match-title').textContent = themeData.title;
  document.getElementById('match-subtitle').textContent = themeData.subtitle;

  // Load draggable items
  const draggableCol = document.getElementById('draggable-col');
  draggableCol.innerHTML = themeData.draggables.map(item => `
    <div class="draggable" id="${item.id}" draggable="true">
      ${item.text}
    </div>
  `).join('');

  // Load droppable items
  const droppableCol = document.getElementById('droppable-col');
  droppableCol.innerHTML = themeData.droppables.map(item => `
    <div class="droppable" id="${item.id}" data-match="${item.match}">
      <div class="question">${item.question}</div>
      <div class="answer-slot">-- Letakkan di sini --</div>
    </div>
  `).join('');
}

// Initialize drag and drop functionality
function initializeDragAndDrop() {
  const draggables = document.querySelectorAll('.draggable');
  const droppables = document.querySelectorAll('.droppable');

  // Add drag start event to draggables
  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', function(e) {
      e.dataTransfer.setData('text/plain', e.target.id);
      setTimeout(() => {
        e.target.classList.add('dragging');
      }, 0);
    });
    
    draggable.addEventListener('dragend', function(e) {
      e.target.classList.remove('dragging');
    });
  });

  // Add drop events to droppables
  droppables.forEach(droppable => {
    droppable.addEventListener('dragover', function(e) {
      e.preventDefault();
      droppable.classList.add('drag-over');
    });
    
    droppable.addEventListener('dragleave', function() {
      droppable.classList.remove('drag-over');
    });
    
    droppable.addEventListener('drop', function(e) {
      e.preventDefault();
      droppable.classList.remove('drag-over');
      
      const id = e.dataTransfer.getData('text');
      const draggedItem = document.getElementById(id);
      const answerSlot = droppable.querySelector('.answer-slot');
      
      // Clear any previous answer
      const previousAnswer = document.querySelector(`[data-answer="${id}"]`);
      if (previousAnswer) {
        previousAnswer.querySelector('.answer-slot').textContent = '-- Letakkan di sini --';
        previousAnswer.removeAttribute('data-answer');
      }
      
      // Set new answer
      answerSlot.textContent = draggedItem.textContent;
      droppable.dataset.answer = id;
      answerSlot.classList.add('filled');
    });
  });
}

// Check answers function
function checkAnswers() {
  let correct = 0;
  const droppables = document.querySelectorAll('.droppable');

  droppables.forEach(drop => {
    const answerSlot = drop.querySelector('.answer-slot');
    answerSlot.classList.remove('correct', 'incorrect');
    
    const userAnswer = drop.dataset.answer;
    const correctAnswer = drop.dataset.match;
    
    if (userAnswer === correctAnswer) {
      correct++;
      answerSlot.classList.add('correct');
    } else if (userAnswer) {
      answerSlot.classList.add('incorrect');
    }
  });

  const score = Math.round((correct / droppables.length) * 100);
  alert(`Skor Anda: ${correct}/${droppables.length} (${score}%)`);
  
  // Show correct answers
  droppables.forEach(drop => {
    if (!drop.dataset.answer) {
      const correctId = drop.dataset.match;
      const correctItem = document.getElementById(correctId);
      drop.querySelector('.answer-slot').textContent = correctItem.textContent;
      drop.querySelector('.answer-slot').classList.add('correct');
    }
  });
}

// Reset quiz function
function resetQuiz() {
  document.querySelectorAll('.answer-slot').forEach(slot => {
    slot.textContent = '-- Letakkan di sini --';
    slot.className = 'answer-slot';
  });
  
  document.querySelectorAll('.droppable').forEach(drop => {
    delete drop.dataset.answer;
  });
}

// For Theme 2 - Bubble Pop
document.querySelectorAll('.bubble-option').forEach(option => {
  option.addEventListener('click', function() {
    if(this.classList.contains('correct')) {
      this.style.background = '#8bc34a';
      this.textContent = "Betul! 👍";
    } else {
      this.style.background = '#f44336';
      this.textContent = "Cuba lagi!";
    }
  });
});

// For Theme 3 - Connect the Dots
let selectedItem = null;

document.querySelectorAll('.connect-item').forEach(item => {
  item.addEventListener('click', function() {
    selectedItem = this;
  });
});

document.querySelectorAll('.connect-target').forEach(target => {
  target.addEventListener('click', function() {
    if(selectedItem && selectedItem.dataset.match === this.dataset.match) {
      this.textContent = selectedItem.textContent + " - " + this.textContent;
      selectedItem.style.visibility = 'hidden';
      selectedItem = null;
    }
  });
});

// For Theme 4 - Sound Matching
document.querySelectorAll('.sound-option').forEach(option => {
  option.addEventListener('click', function() {
    if(this.classList.contains('correct')) {
      this.style.transform = 'scale(1.1)';
      this.style.boxShadow = '0 0 20px #4caf50';
    } else {
      this.style.animation = 'shake 0.5s';
      setTimeout(() => { this.style.animation = ''; }, 500);
    }
  });
});