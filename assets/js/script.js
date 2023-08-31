let currentQuestion = 0;
let score = 0;
let timer = 60; // Timer in seconds

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
