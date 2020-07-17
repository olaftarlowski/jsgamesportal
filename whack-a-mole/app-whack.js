const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeleft = document.querySelector("#time-left");
let score = document.querySelector("#score");
const startButton = document.querySelectorAll(".startButton");

let result = 0;
let currentTime = timeleft.textContent;

function randomSquare() {
    square.forEach(className => {
        className.classList.remove("mole");
    }) 
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");

    // assign the id of the randomPosition to hitPosition

    hitPosition = randomPosition.id;
};

square.forEach(id => {
    id.addEventListener('mouseup', ()=> {
        if(id.id === hitPosition) {
            result = result +1;
            score.textContent= result;
        }
    });
});


var clicked = false;
let timerId;
function moveMole() {
    if (clicked === false) {
        let timerId = setInterval(countdown, 1000);
        timerId = setInterval(randomSquare, 1000);
    }
    clicked = true;
    
};

function countdown() {
    currentTime--;
    timeleft.textContent = currentTime;

    if(currentTime === 0){
        clearInterval(timerId);
        alert("GAME OVER! Your final score is: " + result);
        return;
    }
}


startButton.forEach(button => {
    button.addEventListener('click', moveMole);
});




