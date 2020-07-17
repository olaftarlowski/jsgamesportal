const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeleft = document.querySelector("#time-left");
let score = document.querySelector("#score");

let result = 0;

function randomSquare() {
    square.forEach(className => {
        className.classList.remove("mole");
    }) 
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");

    // assign the id of the randomPosition to hitPosition
};

randomSquare()