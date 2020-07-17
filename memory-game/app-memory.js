document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'fries',
            img: 'assets/fries.png'
        },
        {
            name: 'hotdog',
            img: 'assets/hotdog.png'
        },
        {
            name: 'cheeseburger',
            img: 'assets/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'assets/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'assets/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'assets/pizza.png'
        },
        {
            name: 'fries',
            img: 'assets/fries.png'
        },
        {
            name: 'hotdog',
            img: 'assets/hotdog.png'
        },
        {
            name: 'cheeseburger',
            img: 'assets/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'assets/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'assets/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'assets/pizza.png'
        },
    ];

    cardArray.sort(() => 0.5 - Math.random());

    //variables
    const grid = document.querySelector('.section-gameUI__grid');
    const playerResult = document.querySelector('#result');

    var cardsChosen = [];
    var cardsChosenID = [];
    var cardsWON = [];

    //create board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'assets/blank.png');
        card.setAttribute('data-id', i);
        card.setAttribute('style', 'border: 1px solid black');
        // card.setAttribute('style', 'box-sizing: border-box');
        card.addEventListener('click', flipcard);
        grid.appendChild(card);
    }
}

//check matches
function checkForMatch() {
    var cards = document.querySelectorAll('img'); // it is an arrary
    const optionOneID = cardsChosenID[0];
    const optionTwoID = cardsChosenID[1];

    if (optionOneID == optionTwoID) {

        cards[optionOneID].setAttribute('src', 'assets/blank.png')
        cards[optionTwoID].setAttribute('src', 'assets/blank.png')
        alert('You have clicked the same image!')

    } else if (cardsChosen[0] === cardsChosen[1]) {
        alert("It's a match");
        cards[optionOneID].setAttribute('src', 'assets/white.png');
        cards[optionTwoID].setAttribute('src', 'assets/white.png');
        cards[optionOneID].removeEventListener('click', flipcard);
        cards[optionTwoID].removeEventListener('click', flipcard);
        cardsWON.push(cardsChosen);
    } else {
        cards[optionOneID].setAttribute('src', 'assets/blank.png');
        cards[optionTwoID].setAttribute('src', 'assets/blank.png');
        alert('try again');
    };
    cardsChosen = [];
    cardsChosenID = [];
    playerResult.textContent = cardsWON.length;

    if(cardsWON.length === cardArray.length/2) {
        playerResult.textContent = "Congrats !";
    }

};

//card flip
function flipcard() {
    var cardID = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardID].name);
    cardsChosenID.push(cardID);
    this.setAttribute('src', cardArray[cardID].img);

    if(cardsChosenID.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}


createBoard();
});

