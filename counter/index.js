let count = 0;
count = Number(count);

document.getElementById("add").onclick = function () {
    count++;
    document.getElementById("num").textContent = count;
}
document.getElementById("sub").onclick = function () {
    if (count == 0) {
        alert("too low bro")
    }
    else {
        count--;
        document.getElementById("num").textContent = count;
    }
}
document.getElementById("reset").onclick = function () {
    count = 0;
    document.getElementById("num").textContent = count;
}
