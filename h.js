// Sample quiz data
const quizData = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "Berlin", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    // Add more questions as needed
];

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;

function startQuiz() {
    showQuestion();
}

function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        answerButtons[index].textContent = answer;
        answerButtons[index].addEventListener("click", checkAnswer);
    });
}

function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        // Handle correct answer
        console.log("Correct!");
    } else {
        // Handle incorrect answer
        console.log("Incorrect!");
    }

    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        // Quiz is finished
        console.log("Quiz completed!");
    }
}

// Event listener for the next button
nextButton.addEventListener("click", showQuestion);

// Start the quiz when the page loads
document.addEventListener("DOMContentLoaded", startQuiz);
