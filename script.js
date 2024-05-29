const questions = [
    {
        question: "What is my birthday?", 
        answers: [
            {text: "November 1" , correct: false},
            {text: "November 2", correct: true},
            {text: "November 3" , correct: false},
            {text: "November 4" , correct: false},
        ]
    },
    {
        question: "What dorm did I live in?", 
        answers: [
            {text: "Oak" , correct: false},
            {text: "Convos", correct: false},
            {text: "Friley" , correct: false},
            {text: "Elm" , correct: true},
        ]
    },
    {
        question: "What religion am I?", 
        answers: [
            {text: "Orthodox" , correct: true},
            {text: "Catholic", correct: false},
            {text: "Byzantine" , correct: false},
            {text: "Jewish" , correct: false},
        ]
    },
    {
        question: "What is my dream job?", 
        answers: [
            {text: "Engineer" , correct: false},
            {text: "Fireman", correct: false},
            {text: "Police Officer" , correct: false},
            {text: "Accountant" , correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestionIndex = questions[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNO + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
    });
}
