let computer;
let user;
let sum;
let items = ["ROCK", "PAPER", "SCISSOR"];

function compute() {
    computer = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    console.log("computer value - ", computer);
    sum = user - computer;
    document.getElementById("computer").textContent = ("computer chose ", items[computer - 1]);
}

function answer() {
    if (sum == 0) {
        document.getElementById("win").textContent = "DRAW";
    }
    else if (sum == 2 || sum == -1) {
        document.getElementById("win").textContent = "YOU LOSE";
    }
    else if (sum == 1 || sum == -2) {
        document.getElementById("win").textContent = "YOU WIN";
    }
}

document.getElementById("rock").onclick = function () {
    user = 1;
    compute();
    answer();
}
document.getElementById("paper").onclick = function () {
    user = 2;
    compute();
    answer();
}
document.getElementById("scissors").onclick = function () {
    user = 3;
    compute();
    answer();
}
