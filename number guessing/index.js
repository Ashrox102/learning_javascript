let num 
let cnum


num = Number(num)

cnum = Math.floor(Math.random() * (100 - 0 + 1))
console.log(cnum)

document.getElementById("submit").onclick = function() {
    num = document.getElementById("box").value
    if (num < cnum){
        window.alert("too low");
    }
    else if (cnum < num){
        window.alert("too high");
    }
    else{
        window.alert("you win ");
    }
}