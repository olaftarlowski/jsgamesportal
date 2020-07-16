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
            name: 'blank',
            img: 'assets/blank.png'
        },
        {
            name: 'white',
            img: 'assets/white.png'
        }
    ];

    //variables
    const grid = document.querySelector('.section-gameUI__grid');
    var cardsChosen = [];
    var cardsChosenID = [];

    //create board
function createBoard() {
    for (let i =0; i < cardArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'assets/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipcard);
        grid.appendChild(card);
    }
}

createBoard();


function flipcard() {
    var cardID = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardID].name);
    cardsChosenID.push(cardID);
    this.setAttribute('src', cardArray[cardID].img);

}



});

