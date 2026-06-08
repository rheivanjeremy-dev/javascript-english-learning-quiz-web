// ─────────────────────────────────────────────
// DATA SOAL QUIZ (Gabung Semua)
// ─────────────────────────────────────────────

const quizData = [

  {
    q: 'Ubah ke Indirect Speech:<br><em>"I am happy,"</em> she said.',
    opts: [
      'She said that she is happy.',
      'She said that she was happy.',
      'She said that she has been happy.',
      'She said that she were happy.'
    ],
    answer: 1,
    feedback: 'Present (am) berubah jadi Past (was).'
  },

  {
    q: 'Ubah ke Indirect Speech:<br><em>"I will come tomorrow,"</em> he said.',
    opts: [
      'He said that he will come the next day.',
      'He said that he came the next day.',
      'He said that he would come the next day.',
      'He said that he comes the next day.'
    ],
    answer: 2,
    feedback: '"Will" berubah jadi "would".'
  },

  {
    q: 'Mana yang termasuk DIRECT SPEECH?',
    opts: [
      'She told me she was tired.',
      'He said he would go.',
      'Rina said, "I love this class."',
      'They said that they had eaten.'
    ],
    answer: 2,
    feedback: 'Direct speech memakai tanda kutip.'
  },

  {
    q: 'Ubah ke Indirect Speech:<br><em>"Are you okay?"</em> he asked.',
    opts: [
      'He asked if I am okay.',
      'He asked if I was okay.',
      'He asked whether I am okay.',
      'He asked if I were okay.'
    ],
    answer: 1,
    feedback: 'Are → was.'
  },

  {
    q: 'Kata <em>"tomorrow"</em> berubah menjadi?',
    opts: [
      'yesterday',
      'that day',
      'the next day',
      'today'
    ],
    answer: 2,
    feedback: 'Tomorrow → the next day.'
  },

  {
    q: '<em>"She is my teacher,"</em> he said.',
    opts: [
      'He said that she is his teacher.',
      'He said that she was his teacher.',
      'He said that she were his teacher.'
    ],
    answer: 1,
    feedback: '"Is" berubah jadi "was".'
  },

  {
    q: '<em>"We will go to Bali,"</em> they said.',
    opts: [
      'They said they will go to Bali.',
      'They said they would go to Bali.',
      'They said they went to Bali.'
    ],
    answer: 1,
    feedback: 'Will → would.'
  },

  {
    q: '<em>"Where do you live?"</em> she asked.',
    opts: [
      'She asked where do I live.',
      'She asked where I lived.',
      'She asked where did I live.'
    ],
    answer: 1,
    feedback: 'Wh-question tanpa inversion.'
  },

  {
    q: '<em>"Did you eat?"</em> mom asked.',
    opts: [
      'Mom asked if I eat.',
      'Mom asked whether I had eaten.',
      'Mom asked did I eat.'
    ],
    answer: 1,
    feedback: 'Did eat → had eaten.'
  },

  {
    q: '<em>"Please sit down,"</em> the teacher said.',
    opts: [
      'The teacher said please sit down.',
      'The teacher told us to sit down.',
      'The teacher asked that we sat down.'
    ],
    answer: 1,
    feedback: 'Command memakai told + to.'
  },

  // TAMBAHAN SOAL BIAR JADI 20

  {
    q: '<em>"I can swim,"</em> she said.',
    opts: [
      'She said she can swim.',
      'She said she could swim.',
      'She said she swam.'
    ],
    answer: 1,
    feedback: 'Can → could.'
  },

  {
    q: '<em>"We are studying now,"</em> they said.',
    opts: [
      'They said they were studying then.',
      'They said they are studying now.',
      'They said they studied then.'
    ],
    answer: 0,
    feedback: 'Are studying → were studying.'
  },

  {
    q: '<em>"Do you like coffee?"</em> he asked.',
    opts: [
      'He asked if I liked coffee.',
      'He asked do I like coffee.',
      'He asked if I like coffee.'
    ],
    answer: 0,
    feedback: 'Question memakai if.'
  },

  {
    q: '<em>"Close the window,"</em> father said.',
    opts: [
      'Father said close the window.',
      'Father told me to close the window.',
      'Father asked I closed the window.'
    ],
    answer: 1,
    feedback: 'Perintah memakai told + to.'
  },

  {
    q: '<em>"I have finished my homework,"</em> she said.',
    opts: [
      'She said she had finished her homework.',
      'She said she has finished her homework.',
      'She said she finished homework.'
    ],
    answer: 0,
    feedback: 'Present perfect → past perfect.'
  },

  {
    q: '<em>"We were playing football,"</em> they said.',
    opts: [
      'They said they had been playing football.',
      'They said they were playing football.',
      'They said they played football.'
    ],
    answer: 0,
    feedback: 'Past continuous → past perfect continuous.'
  },

  {
    q: '<em>"May I enter?"</em> he asked.',
    opts: [
      'He asked if he might enter.',
      'He asked may he enter.',
      'He asked if he enters.'
    ],
    answer: 0,
    feedback: 'May → might.'
  },

  {
    q: '<em>"Please help me,"</em> she said.',
    opts: [
      'She asked me to help her.',
      'She told help me.',
      'She asked that help me.'
    ],
    answer: 0,
    feedback: 'Request memakai asked + to.'
  },

  {
    q: '<em>"I saw him yesterday,"</em> Rina said.',
    opts: [
      'Rina said she had seen him the day before.',
      'Rina said she saw him yesterday.',
      'Rina said she sees him yesterday.'
    ],
    answer: 0,
    feedback: 'Yesterday → the day before.'
  },

  {
    q: '<em>"This book is mine,"</em> Andi said.',
    opts: [
      'Andi said that book was his.',
      'Andi said this book is mine.',
      'Andi said this book was his.'
    ],
    answer: 0,
    feedback: 'This → that.'
  }

];

// ─────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────

let score = 0;
let answered = 0;

// ─────────────────────────────────────────────
// BUILD QUIZ
// ─────────────────────────────────────────────

function buildQuiz() {

  const container = document.getElementById('quizContainer');

  container.innerHTML = '';

  score = 0;
  answered = 0;

  updateScore();

  quizData.forEach((item, i) => {

    const card = document.createElement('div');

    card.className = 'quiz-card';

    let optionsHTML = '';

    item.opts.forEach((o, j) => {

      optionsHTML += `
        <button class="option-btn" onclick="answer(${i}, ${j})">
          ${String.fromCharCode(65 + j)}. ${o}
        </button>
      `;

    });

    card.innerHTML = `
      <div class="q-number">SOAL ${i + 1}</div>

      <div class="q-text">
        ${item.q}
      </div>

      <div class="options">
        ${optionsHTML}
      </div>

      <div class="feedback" id="fb${i}"></div>
    `;

    container.appendChild(card);

  });

}

// ─────────────────────────────────────────────
// ANSWER FUNCTION
// ─────────────────────────────────────────────

function answer(qIndex, selected) {

  const item = quizData[qIndex];

  const cards = document.querySelectorAll('.quiz-card');

  const card = cards[qIndex];

  const buttons = card.querySelectorAll('.option-btn');

  const fb = document.getElementById('fb' + qIndex);

  buttons.forEach(btn => btn.disabled = true);

  if (selected === item.answer) {

    buttons[selected].classList.add('correct');

    fb.className = 'feedback correct';

    fb.textContent = '✅ ' + item.feedback;

    score++;

  } else {

    buttons[selected].classList.add('wrong');

    buttons[item.answer].classList.add('correct');

    fb.className = 'feedback wrong';

    fb.textContent =
      '❌ Jawaban benar: ' +
      String.fromCharCode(65 + item.answer) +
      '. ' +
      item.feedback;

  }

  answered++;

  updateScore();

  if (answered === quizData.length) {
    showFinalScore();
  }

}

// ─────────────────────────────────────────────
// UPDATE SCORE
// ─────────────────────────────────────────────

function updateScore() {

  document.getElementById('scoreDisplay').textContent =
    score + ' / ' + answered;

}

// ─────────────────────────────────────────────
// FINAL SCORE
// ─────────────────────────────────────────────

function showFinalScore() {

  const persen =
    Math.round((score / quizData.length) * 100);

  let pesan = '';

  if (persen === 100) {
    pesan = '🎉 Perfect!';
  }

  else if (persen >= 80) {
    pesan = '👏 Great Job!';
  }

  else if (persen >= 60) {
    pesan = '👍 Good!';
  }

  else {
    pesan = '📚 Keep Learning!';
  }

  const result = document.createElement('div');

  result.className = 'quiz-card';

  result.innerHTML = `
    <h2 style="color:var(--accent);margin-bottom:1rem;">
      ${persen}%
    </h2>

    <p>${pesan}</p>

    <p style="margin-top:.5rem;color:var(--muted);">
      Benar ${score} dari ${quizData.length} soal
    </p>
  `;

  document.getElementById('quizContainer')
    .appendChild(result);

}

// ─────────────────────────────────────────────
// RESET QUIZ
// ─────────────────────────────────────────────

function resetQuiz() {
  buildQuiz();
}

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────

buildQuiz();