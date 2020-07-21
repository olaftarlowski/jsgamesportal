const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeleft = document.querySelector("#time-left");
let score = document.querySelector("#score");
const startButton = document.querySelectorAll(".startButton");

let result = 0;
let currentTime = timeleft.textContent;
let singleMoleClick = false;

function removeMole() {
    square.forEach(className => {
        className.classList.remove("mole");
    }) 
} 

function randomSquare() {
    singleMoleClick = false;
    removeMole();
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");

    // assign the id of the randomPosition to hitPosition

    hitPosition = randomPosition.id;
};

square.forEach(id => {
    id.addEventListener('mouseup', ()=> {
        if(id.id === hitPosition && singleMoleClick === false) {
            result = result +1;
            score.textContent= result;
            singleMoleClick = true;
            console.log('score + 1');
        } 
    });
});


var clicked = false;
let timerId;
let randomize;
function moveMole() {
    if (clicked === false) {
        timerId = setInterval(countdown, 1000);
        randomize = setInterval(randomSquare, 1000);
    }
    clicked = true;
    
};

function countdown() {
    currentTime--;
    timeleft.textContent = currentTime;

    if(currentTime === 0){
        clearInterval(timerId);
        clearInterval(randomize);
        alert("GAME OVER! Your final score is: " + result);
        currentTime = 30;
        timeleft.textContent = 30;
        score.textContent = 0;
        clicked = false;
        removeMole();
        return;
    }
}


startButton.forEach(button => {
    button.addEventListener('click', moveMole);
});




