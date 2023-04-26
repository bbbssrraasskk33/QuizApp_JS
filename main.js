const quizData = [
  {
    question: "Tarihte Türk adıyla kurulan ilk Türk devleti hangisidir?",
    a: "İskitler",
    b: "Göktürk",
    c: "Türgişler",
    d: "Sasaniler",
    e: "Asya Hun",
    correct: "b",
  },
  {
    question: " “Sinekli Bakkal” Romanının Yazarı Aşağıdakilerden Hangisidir?",
    a: "Reşat Nuri Güntekin",
    b: "Halide Edip Adıvar",
    c: "Ziya Gökalp",
    d: "Ömer Seyfettin",
    e: "Recaizade Mahmud Ekrem",
    correct: "b",
  },
  {
    question:
      "2003 Yılında Euro Vizyon Şarkı Yarışmasında Ülkemizi Temsil Eden ve Yarışmada Birinci Gelen Sanatçımız Kimdir?",
    a: "Grup Athena",
    b: "Ajda Pekkan",
    c: "Hadise",
    d: "Sertap Erener",
    e: "Grup Manga",
    correct: "d",
  },
  {
    question: " Mustafa Kemal Atatürk’ün Nüfusa Kayıtlı Olduğu İl Hangisidir?",
    a: "Bursa",
    b: "Ankara",
    c: "Gaziantep",
    d: "İstanbul",
    e: "Samsun",
    correct: "c",
  },
  {
    question: " İkinci Dünya Savaşında Hangi Ülkeye Atom Bombası Atılmıştır",
    a: "Kore",
    b: "Hindistan",
    c: "Çin",
    d: "Tayland",
    e: "Japonya",
    correct: "e",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  deselectedAnswers();

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  e_text.innerText = currentQuizData.e;
}

function deselectedAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer == quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2 class="color1"> Test Tamamlandı, ${score * 20} Puan Aldınız 🥳 </h2>
        <button class="submit" onClick ="location.reload()">Tekrar Dene 🥳 </button>
        `;
    }
  }
});
