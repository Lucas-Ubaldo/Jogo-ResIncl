const questions = [
    {
        question: "Qual é o nome do time abaixo?",
        image: "images/corinthians.png",
        answers: [
            {text: "São Paulo", correct: false},
            {text: "Flamengo", correct: false},
            {text: "Corinthians", correct: true},
            {text: "Athletico-PR", correct: false},
        ]
    },
    {
        question: "Qual é o nome do time abaixo?",
        image: "images/sao-paulo.png",
        answers: [
            {text: "São Paulo", correct: true},
            {text: "Bragantino", correct: false},
            {text: "Corinthians", correct: false},
            {text: "Santos", correct: false},
        ]
    },
    {
        question: "Qual é o nome da seleção abaixo?",
        image: "images/brasil.png",
        answers: [
            {text: "França", correct: false},
            {text: "Argentina", correct: false},
            {text: "Espanha", correct: false},
            {text: "Brasil", correct: true},
        ]
    },
    {
        question: "Qual é o nome do time abaixo?",
        image: "images/palmeiras.png",
        answers: [
            {text: "Guarani", correct: false},
            {text: "Palmeiras", correct: true},
            {text: "Goiás", correct: false},
            {text: "Fluminense", correct: false},
        ]
    },
    {
        question: "Qual é o nome do time abaixo?",
        image: "images/santos.png",
        answers: [
            {text: "Santos", correct: true},
            {text: "Atlético-MG", correct: false},
            {text: "Ponte preta", correct: false},
            {text: "São Paulo", correct: false},
        ]
    },
    {
        question: "Qual é o nome do time abaixo?",
        image: "images/noroeste.svg",
        answers: [
            {text: "Athletico-PR", correct: false},
            {text: "Flamengo", correct: false},
            {text: "Cruzeiro", correct: false},
            {text: "Noroeste", correct: true},
        ]
    },
    {
        question: "Qual é o objeto?",
        image: "images/apito.png",
        answers: [
            {text: "Bola de futebol", correct: false},
            {text: "Apito", correct: true},
            {text: "Gol", correct: false},
            {text: "Troféu", correct: false},
        ]
    },
    {
        question: "Qual é o objeto?",
        image: "images/bola-futebol.png",
        answers: [
            {text: "Apito", correct: false},
            {text: "Bola de basquete", correct: false},
            {text: "Bola de tênis", correct: false},
            {text: "Bola de futebol", correct: true},
        ]
    },
    {
        question: "Qual é o objeto?",
        image: "images/bandeira-impedimento.png",
        answers: [
            {text: "Bandeira de impedimento", correct: true},
            {text: "Troféu", correct: false},
            {text: "Bola de futebol", correct: false},
            {text: "Trave", correct: false},
        ]
    },
    {
        question: "Qual é o objeto?",
        image: "images/trofeu.png",
        answers: [
            {text: "Copo", correct: false},
            {text: "Troféu", correct: true},
            {text: "Bandeira de impedimento", correct: false},
            {text: "Chuteira", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    shuffleArray(questions);

    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próximo";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    const imageElement = document.createElement("img");
    imageElement.src = currentQuestion.image;
    imageElement.alt = "Imagem da questão";
    questionElement.appendChild(imageElement);

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Parabéns! Você acertou ${score} de ${questions.length} questões!`;
    nextButton.innerHTML = "Jogar Novamente";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


shuffleArray(questions);
startQuiz();