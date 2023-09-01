let currentQuestion = 0;
let score = 0;
let timer = 60; // Timer in seconds

const questions = [
  {
    question: "What does JS stand for in JavaScript?",
    options: ["JavaSource", "JustScript", "JumboScript", "JavaScript"],
    answer: 3,
  },
  {
    question: "Which of the following is a valid JavaScript data type?",
    options: ["Character", "String", "Number", "All of the above"],
    answer: 1,
  },

  {
    question: "How can you write a comment in JavaScript?",
    options: [
      "//This is a comment",
      "<!--This is a comment-->",
      "/*This is a comment*/",
      "Both 1 and 3",
    ],
    answer: 3,
  },

  {
    question: "What is the correct way to create an array in JavaScript?",
    options: [
      'var colors = ("red", "green", "blue")',
      'var colors = ["red", "green", "blue"]',
      'var colors = "red", "green", "blue"',
      'var colors = array("red", "green", "blue")',
    ],
    answer: 1,
  },

  {
    question: "Which of the following is not a valid JavaScript operator?",
    options: ["+", "&", "%", "/"],
    answer: 1,
  },

  {
    question: "How do you declare a variable in JavaScript?",
    options: [
      "var myVariable;",
      "myVariable;",
      "variable myVariable;",
      "declare myVariable;",
    ],
    answer: 0,
  },

  {
    question:
      "Which of the following will write 'Hello World' in an alert box?",
    options: [
      "alertBox('Hello World')",
      "msgAlert('Hello World')",
      "msg('Hello World')",
      "alert('Hello World')",
    ],
    answer: 3,
  },
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const resultsElement = document.getElementById("results");
const scoreElement = document.getElementById("score");

function displayQuestion() {
  if (currentQuestion < questions.length) {
    questionElement.textContent = questions[currentQuestion].question;

    optionsElement.innerHTML = "";

    questions[currentQuestion].options.forEach((option, index) => {
      const optionElement = document.createElement("div");

      optionElement.textContent = option;

      optionElement.addEventListener("click", () => checkAnswer(index));

      optionsElement.appendChild(optionElement);
    });
  } else {
    displayResults();
  }
}

function checkAnswer(selectedOption) {
  if (selectedOption === questions[currentQuestion].answer) {
    score++;
  } else {
    timer ;
  }
  currentQuestion++;
  displayQuestion();
}

function displayResults() {
  questionElement.style.display = "none";
  optionsElement.style.display = "none";
  submitButton.style.display = "none";
  resultsElement.style.display = "block";
  scoreElement.textContent = `Your score: ${score} out of ${questions.length}`;

  const initials = prompt("Please enter your initials:");
  localStorage.setItem("initials", initials);
  localStorage.setItem("score", score);
}

function updateTimer() {
  const timerElement = document.getElementById("timer");
  timerElement.textContent = `Time remaining: ${timer} seconds`;
  if (timer === 0) {
    displayResults();
    clearInterval(interval);
  }
  timer--;
}

displayQuestion();
const interval = setInterval(updateTimer, 1000);

submitButton.addEventListener("click", () => displayResults());
