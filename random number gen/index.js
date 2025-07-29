let lower;
let higher;


let num;

document.getElementById("submit").onclick = function () {

    lower = document.getElementById("lower").value;
    higher = document.getElementById("higher").value;

    console.log(lower);
    console.log(higher);


    lower = Number(lower);
    higher = Number(higher);

    num = Math.floor(Math.random() * (higher - lower + 1)) + lower;
    document.getElementById("num").textContent = num;
    console.log(num);
}





