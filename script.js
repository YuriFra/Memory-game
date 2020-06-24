//create images array & double it
let imgArray = ["img/front1.png", "img/front2.png", "img/front3.png", "img/front4.png", "img/front5.png", "img/front6.png", "img/front7.png", "img/front8.png"];
let allImg = [...imgArray, ...imgArray];

//shuffle array to get random order
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(allImg);
console.log(allImg);
//assign images to html
let fronts = Array.from(document.getElementsByTagName('img'));
let index = 0;
fronts.forEach(front => {
    front.src = allImg[index++];
});

//listen clicks to turn images around
const cards = document.querySelectorAll('.flip-card');
let flippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let tryCount = 0;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');
    if (!flippedCard) {
        flippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    lockBoard = true;
    checkMatch();
}

function checkMatch() {
    //count attempts
    tryCount++;
    document.getElementById('yourScore').innerText = tryCount.toString();
    let img1 = firstCard.children[0].src;
    console.log(img1);
    let img2 = secondCard.children[0].src;
    console.log(img2);
    let isMatch = (img1 === img2);
    isMatch ? disableCards() : unflipCards();
}

//if match remove listener
function disableCards() {
    firstCard.removeEventListener('click', flipCard());
    secondCard.removeEventListener('click', flipCard());
    resetBoard();
}

//else timeout to unflip cards
function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
        }, 1500);
}

//reset board
function resetBoard() {
    [flippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

cards.forEach(card => card.addEventListener('click', flipCard));

//reset button
document.getElementById('reset').addEventListener('click', () => {
    location.reload();
});

