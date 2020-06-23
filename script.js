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


//listen to clicks to turn images around
function ClickListener(elm) {
    return function () {
        Memory.flipTile(elm.className);
    };
}
aTag.onclick = ClickListener(image);
const cards = document.querySelectorAll('.memory-card');

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

let inputs = document.querySelectorAll('.back');
    inputs.forEach(input => {
        input.addEventListener('click', () => {
            //turn image
        })
    })

