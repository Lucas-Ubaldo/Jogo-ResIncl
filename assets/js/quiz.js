const objetoQuestions = [
    { //1
        question: "Qual é o objeto?",
        image: "images/objetos/apito.png",
        answers: [
            {text: "Bola de futebol", correct: false},
            {text: "Apito", correct: true},
            {text: "Gol", correct: false},
            {text: "Troféu", correct: false},
        ]
    },
    { //2
        question: "Qual é o objeto?",
        image: "images/objetos/bola-futebol.png",
        answers: [
            {text: "Apito", correct: false},
            {text: "Bola de basquete", correct: false},
            {text: "Bola de tênis", correct: false},
            {text: "Bola de futebol", correct: true},
        ]
    },
    { //3
        question: "Qual é o objeto?",
        image: "images/objetos/bandeira-impedimento.png",
        answers: [
            {text: "Bandeira de impedimento", correct: true},
            {text: "Trófeu", correct: false},
            {text: "Bola de futebol", correct: false},
            {text: "Trave", correct: false},
        ]
    },
    { //4
        question: "Qual é o objeto?",
        image: "images/objetos/gol-de-futebol.png",
        answers: [
            {text: "Apito", correct: false},
            {text: "Chuteira", correct: false},
            {text: "Troféu", correct: false},
            {text: "Gol/Trave", correct: true},
        ]
    },
    { //5
        question: "Qual é o objeto?",
        image: "images/objetos/trofeu.png",
        answers: [
            {text: "Copo", correct: false},
            {text: "Troféu", correct: true},
            {text: "Bandeira de impedimento", correct: false},
            {text: "Chuteira", correct: false},
        ]
    },
];

const timesQuestions = [
    { //1
        question: "Qual é o nome do time abaixo?",
        image: "images/times/corinthians.png",
        answers: [
            {text: "São Paulo", correct: false},
            {text: "Flamengo", correct: false},
            {text: "Corinthians", correct: true},
            {text: "Athletico-PR", correct: false},
        ]
    },
    { //2
        question: "Qual é o nome do time abaixo?",
        image: "images/times/sao-paulo.png",
        answers: [
            {text: "São Paulo", correct: true},
            {text: "Bragantino", correct: false},
            {text: "Corinthians", correct: false},
            {text: "Santos", correct: false},
        ]
    },
    { //3
        question: "Qual é o nome da seleção abaixo?",
        image: "images/times/brasil.png",
        answers: [
            {text: "França", correct: false},
            {text: "Argentina", correct: false},
            {text: "Espanha", correct: false},
            {text: "Brasil", correct: true},
        ]
    },
    { //4
        question: "Qual é o nome do time abaixo?",
        image: "images/times/noroeste.svg",
        answers: [
            {text: "Athletico-PR", correct: false},
            {text: "Noroeste", correct: true},
            {text: "Flamengo", correct: false},
            {text: "Cruzeiro", correct: false},
        ]
    },
    { //5
        question: "Qual é o nome do time abaixo?",
        image: "images/times/santos.png",
        answers: [
            {text: "Ponte Preta", correct: false},
            {text: "São Paulo", correct: false},
            {text: "Santos", correct: true},
            {text: "Atlético-MG", correct: false},
        ]
    },
    { //6
        question: "Qual é o nome do time abaixo?",
        image: "images/times/palmeiras.png",
        answers: [
            {text: "Guarani", correct: false},
            {text: "Goiás", correct: false},
            {text: "Fluminense", correct: false},
            {text: "Palmeiras", correct: true},
        ]
    },
    { //7
        question: "Qual é o nome do time abaixo?",
        image: "images/times/flamengo.png",
        answers: [
            {text: "Flamengo", correct: true},
            {text: "Internacional", correct: false},
            {text: "Fluminense", correct: false},
            {text: "Vasco", correct: false},
        ]
    },
    { //8
        question: "Qual é o nome do time abaixo?",
        image: "images/times/real-madrid.png",
        answers: [
            {text: "Barcelona", correct: false},
            {text: "Manchester City", correct: false},
            {text: "Real Madrid", correct: true},
            {text: "Atlético Madrid", correct: false},
        ]
    },
    { //9
        question: "Qual é o nome do time abaixo?",
        image: "images/times/barcelona.png",
        answers: [
            {text: "Real Madrid", correct: false},
            {text: "Barcelona", correct: true},
            {text: "Real Sociedad", correct: false},
            {text: "Sevilla", correct: false},
        ]
    },
    { //10
        question: "Qual é o nome do time abaixo?",
        image: "images/times/manchester-city.png",
        answers: [
            {text: "Manchester City", correct: true},
            {text: "Manchester United", correct: false},
            {text: "Arsenal", correct: false},
            {text: "Real Madrid", correct: false},
        ]
    },
    
    
];

const conhecimentoQuestions = [
    { //1
        question: "Qual jogador brasileiro foi o ultimo a ser eleito o melhor do mundo?",
        
        answers: [
            {text: "Ronaldo Fenômeno", correct: false},
            {text: "Ronaldinho Gaúcho", correct: false},
            {text: "Kaká", correct: true},
            {text: "Neymar", correct: false},
        ]
    },
    { //2
        question: "Em que ano o Brasil conquistou a quinta Copa do Mundo?",
        
        answers: [
            {text: "1994", correct: false},
            {text: "2002", correct: true},
            {text: "2006", correct: false},
            {text: "2010", correct: false},
        ]
    },
    { //3
        question: "Qual time brasileiro foi campeão mundial de clubes FIFA em 2012?",
        
        answers: [
            {text: "Corinthians", correct: true},
            {text: "Santos", correct: false},
            {text: "Internacional", correct: false},
            {text: "São Paulo", correct: false},
        ]
    },
    { //4
        question: "Em que ano o Noroeste-Bauru ganhou o campeonato paulista A3 pela última vez?",
        
        answers: [
            {text: "2020", correct: false},
            {text: "2022", correct: true},
            {text: "2021", correct: false},
            {text: "2018", correct: false},
        ]
    },
    { //5
        question: "Como se chama o clássico entre Corinthians X São Paulo?",
        
        answers: [
            {text: "Clássico Rei", correct: false},
            {text: "Derby", correct: false},
            {text: "Majestoso", correct: true},
            {text: "Duelo das massas", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let currentQuizType = "";

function startQuiz(quizType) {
    currentQuizType = quizType;

    if (quizType === 'objeto') {
        questions = objetoQuestions;
    } else if (quizType === 'times') {
        questions = timesQuestions;
    } else if (quizType === 'conhecimento') {
        questions = conhecimentoQuestions;
    }
    
    shuffleArray(questions);
    
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próximo";
    
    document.getElementById('button-container').style.display = 'none';
    document.querySelector('.quiz').style.display = 'block';
    
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Adicionar imagem apenas se não for quiz de conhecimento
    if (currentQuizType !== 'conhecimento') {
        const imageElement = document.createElement("img");
        imageElement.src = currentQuestion.image;
        imageElement.alt = "Imagem da questão";
        questionElement.appendChild(imageElement);
    }

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    setTimeout(() => { 
        handleNextButton();
    }, 3000); 
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Parabéns! Você acertou ${score} de ${questions.length} questões!`;
    nextButton.innerHTML = "Jogar Novamente";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function goBack() {
    document.getElementById('button-container').style.display = 'block';
    document.querySelector('.quiz').style.display = 'none';
    resetState();
}

nextButton.addEventListener("click", () => {
    if (nextButton.innerHTML === "Jogar Novamente") {
        startQuiz(currentQuizType);
    } else {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            goBack();
        }
    }
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
