const menuContainer = document.querySelector(".menu");
const gameContainer = document.querySelector(".game-container");
const gridContainer = document.querySelector(".grid-container");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

document.querySelector(".score").textContent = score;

function startGame(level) {
    fetch("../assets/data/cards.json")
        .then((res) => res.json())
        .then((data) => {
            // Filtra o conjunto de cartas com base no nível escolhido
            let uniqueCards;
            if (level === 1) {
                uniqueCards = getRandomUniqueCards(data, 3); // Seleciona 3 cartas únicas aleatoriamente
                gridContainer.style.gridTemplateColumns = "repeat(3, 140px)"; // Define 3 colunas para o nível 1
                gridContainer.style.gridTemplateRows = "repeat(2, calc(140px / 2 * 3))"; // Define 2 linhas para o nível 1
            } else if (level === 2) {
                uniqueCards = getRandomUniqueCards(data, 4); // Seleciona 4 cartas únicas aleatoriamente
                gridContainer.style.gridTemplateColumns = "repeat(4, 140px)"; // Define 3 colunas para o nível 1
                gridContainer.style.gridTemplateRows = "repeat(2, calc(140px / 2 * 3))"; // Define 2 linhas para o nível 1
            } else if (level === 3) {
                uniqueCards = getRandomUniqueCards(data, 6); // Seleciona 6 cartas únicas aleatoriamente
                gridContainer.style.gridTemplateColumns = "repeat(4, 140px)"; // Define 3 colunas para o nível 1
                gridContainer.style.gridTemplateRows = "repeat(2, calc(140px / 2 * 3))"; // Define 2 linhas para o nível 1
            } else {
                // Se o nível for inválido, exibe uma mensagem de erro ou fallback para um nível padrão
                console.error("Nível de dificuldade inválido!");
                return;
            }

            // Duplica o conjunto de cartas para que haja pares de cada tipo
            cards = [...uniqueCards, ...uniqueCards];

            shuffleCards();
            generateCards();
            // Oculta o menu e exibe o jogo
            menuContainer.style.display = 'none';
            gameContainer.style.display = 'block';

            // Vira todas as cartas
            document.querySelectorAll('.card').forEach(card => card.classList.add('flipped'));

            // Vira as cartas de volta após um tempo
            setTimeout(() => {
                document.querySelectorAll('.card').forEach(card => card.classList.remove('flipped'));
            }, 7000); // Tempo de exposição das cartas em milissegundos (7 segundos no exemplo)
        });
}

// Função para selecionar aleatoriamente um número específico de cartas exclusivas
function getRandomUniqueCards(cards, count) {
    const uniqueCards = [];
    const shuffledCards = cards.sort(() => Math.random() - 0.5); // Embaralha as cartas
    for (let i = 0; i < count; i++) {
        uniqueCards.push(shuffledCards[i]); // Adiciona as cartas embaralhadas à lista de cartas exclusivas
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
        score++; // Incrementa o score apenas se houver um acerto
        document.querySelector(".score").textContent = score;
        if (score === cards.length / 2) {
            // Todos os pares foram encontrados, exibe a mensagem de parabéns
            const congratsMessage = document.querySelector('.congrats-message');
            congratsMessage.style.display = 'block';
            setTimeout(() => {
                congratsMessage.style.display = 'none';
            }, 2000); // Tempo de exibição da mensagem em milissegundos (2 segundos no exemplo)
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
    shuffleCards();
    score = 0;
    document.querySelector(".score").textContent = score;
    gridContainer.innerHTML = "";
    generateCards();

    // Vira todas as cartas após um breve atraso
    document.querySelectorAll('.card').forEach(card => card.classList.add('flipped'));

    // Vira as cartas de volta após um tempo
    setTimeout(() => {
        document.querySelectorAll('.card').forEach(card => card.classList.remove('flipped'));
    }, 7000); // Tempo de exposição das cartas em milissegundos (2 segundos no exemplo)
}

function returnToMenu() {
    // Oculta o jogo e exibe o menu
    gameContainer.style.display = 'none';
    menuContainer.style.display = 'block';
    // Reseta o jogo
    resetBoard();
    score = 0;
    document.querySelector(".score").textContent = score;
    gridContainer.innerHTML = "";
}
