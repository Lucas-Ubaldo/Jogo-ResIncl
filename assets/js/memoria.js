const menuContainer = document.querySelector(".menu");
const gameContainer = document.querySelector(".game-container");
const gridContainer = document.querySelector(".grid-container");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;
let currentLevel;

document.querySelector(".score").textContent = score;

function startGame(level) {
    currentLevel = level;
    fetch("../assets/data/cards.json")
        .then((res) => res.json())
        .then((data) => {
            let uniqueCards;
            let numColumns;
            let levelText;
            if (level === 1) {
                uniqueCards = getRandomUniqueCards(data, 3); 
                numColumns = 3;
                levelText = "Nível 1";
            } else if (level === 2) {
                uniqueCards = getRandomUniqueCards(data, 4); 
                numColumns = 4;
                levelText = "Nível 2";
            } else if (level === 3) {
                uniqueCards = getRandomUniqueCards(data, 6); 
                numColumns = 4;
                levelText = "Nível 3";
            } else {
                console.error("Nível de dificuldade inválido!");
                return;
            }

            cards = [...uniqueCards, ...uniqueCards];

            // Ajusta dinamicamente o tamanho do grid
            const numRows = Math.ceil(uniqueCards.length / numColumns);
            gridContainer.style.gridTemplateColumns = `repeat(${numColumns}, min-content)`;
            gridContainer.style.gridTemplateRows = `repeat(${numRows}, min-content)`;

            document.querySelector('.game-container h2').textContent = levelText;
        
            shuffleCards();
            generateCards();
            
            menuContainer.style.display = 'none';
            gameContainer.style.display = 'block';

            document.querySelectorAll('.card').forEach(card => card.classList.add('flipped'));

            setTimeout(() => {
                document.querySelectorAll('.card').forEach(card => card.classList.remove('flipped'));
            }, 7000); // Tempo de exposição das cartas em milissegundos (7 segundos no exemplo)
        });
}

function getRandomUniqueCards(cards, count) {
    const uniqueCards = [];
    const shuffledCards = cards.sort(() => Math.random() - 0.5); 
    for (let i = 0; i < count; i++) {
        uniqueCards.push(shuffledCards[i]); 
    }
    return uniqueCards;
}

function shuffleCards() {
    let currentIndex = cards.length,
        randomIndex,
        temporaryValue;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }
}

function generateCards() {
    for (let card of cards) {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.setAttribute("data-name", card.name);
        cardElement.innerHTML = `
      <div class="front">
        <img class="front-image" src=${card.image} />
        <span class="card-name">${card.name}</span>
      </div>
      <div class="back"></div>
    `;
        gridContainer.appendChild(cardElement);
        cardElement.addEventListener("click", flipCard);
    }
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flipped");

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;

    if (isMatch) {
        disableCards();
        score++; 
        document.querySelector(".score").textContent = score;
        if (score === cards.length / 2) {
            const congratsMessage = document.querySelector('.congrats-message');
            congratsMessage.style.display = 'block';
            setTimeout(() => {
                congratsMessage.style.display = 'none';
            }, 5000); // Tempo de exibição da mensagem em milissegundos (2 segundos no exemplo)
        }
    } else {
        lockBoard = true;
        setTimeout(unflipCards, 100);
    }
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        resetBoard();
    }, 500);
}

function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

function restart() {
    resetBoard();
    score = 0;
    document.querySelector(".score").textContent = score;
    gridContainer.innerHTML = "";
    startGame(currentLevel);

    document.querySelectorAll('.card').forEach(card => card.classList.add('flipped'));

    setTimeout(() => {
        document.querySelectorAll('.card').forEach(card => card.classList.remove('flipped'));
    }, 7000); // Tempo de exposição das cartas em milissegundos (2 segundos no exemplo)
}

function returnToMenu() {
    gameContainer.style.display = 'none';
    menuContainer.style.display = 'block';
    resetBoard();
    score = 0;
    document.querySelector(".score").textContent = score;
    gridContainer.innerHTML = "";
}
