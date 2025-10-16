let computer
let user
let result

function compute() {
    computer = Math.floor(Math.random() * (3 + 1 - 1)) + 1
    document.getElementById("computer").textContent = computer
    document.getElementById("user").textContent = user
    if (user == computer){
        result = "YOU WIN"
    }
    else{
        result = "YOU LOSE"
    }
    document.getElementById("result").textContent = result
}

document.getElementById("1").onclick = function() {
    user = 1
    compute()
}

document.getElementById("2").onclick = function() {
    user = 2
    compute()
}

document.getElementById("3").onclick = function() {
    user = 3
    compute()
}

