const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = Array(questions.length).fill(null);

function displayQuestion() {
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const currentQuestion = questions[currentQuestionIndex];

    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const optionLabel = document.createElement('label');
        const optionInput = document.createElement('input');
        
        optionInput.type = 'radio';
        optionInput.name = 'option';
        optionInput.value = option;
        optionInput.checked = userAnswers[currentQuestionIndex] === option;

        optionInput.onclick = () => {
            userAnswers[currentQuestionIndex] = option;
        };

        optionLabel.appendChild(optionInput);
        optionLabel.append(option);
        optionsEl.appendChild(optionLabel);
        optionsEl.appendChild(document.createElement('br'));
    });

    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-btn').disabled = currentQuestionIndex === questions.length - 1;
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

function submitQuiz() {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            correctAnswers++;
        }
    });

    score = (correctAnswers / questions.length) * 100;
    document.getElementById('score').textContent = score;
    document.getElementById('score-container').style.display = 'block';
    document.querySelector('.question-container').style.display = 'none';
    document.querySelector('.navigation').style.display = 'none';
}

displayQuestion();
