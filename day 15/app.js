// =======================
// Quiz Data
// =======================
const quizData = [
  {
    question: "Which language runs in the browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correct: 3
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Digital Object Management",
      "Desktop Oriented Mode"
    ],
    correct: 0
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "Apple"],
    correct: 2
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["var", "let", "const", "static"],
    correct: 2
  }
];

// =======================
// DOM Elements
// =======================
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

// =======================
// State Variables
// =======================
let currentQuestion = 0;
let score = 0;
let selectedOption = null;

// =======================
// Load Question
// =======================
function loadQuestion() {
  nextBtn.disabled = true;
  selectedOption = null;

  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className =
      "w-full text-left px-4 py-2 border rounded hover:bg-gray-100";

    btn.addEventListener("click", () => selectOption(index, btn));
    optionsEl.appendChild(btn);
  });
}

// =======================
// Select Option
// =======================
function selectOption(index, button) {
  selectedOption = index;
  nextBtn.disabled = false;

  Array.from(optionsEl.children).forEach(btn => {
    btn.classList.remove("bg-blue-100", "border-blue-500");
  });

  button.classList.add("bg-blue-100", "border-blue-500");
}

// =======================
// Next Button Logic
// =======================
nextBtn.addEventListener("click", () => {
  if (selectedOption === quizData[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

// =======================
// Show Result
// =======================
function showResult() {
  document.querySelector(".bg-white").innerHTML = `
    <h2 class="text-2xl font-bold text-center">Quiz Completed 🎉</h2>

    <p class="mt-4 text-center text-lg">
      Your Score:
      <span class="font-semibold">${score} / ${quizData.length}</span>
    </p>

    <button
      class="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      onclick="location.reload()"
    >
      Restart Quiz
    </button>
  `;
}

// =======================
// Initialize Quiz
// =======================
loadQuestion();
