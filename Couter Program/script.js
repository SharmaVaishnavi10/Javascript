const countLable = document.getElementById("countLable");
const decreseBtn = document.getElementById("decreseBtn");
const resetBtn = document.getElementById("resetBtn");
const increseBtn =document.getElementById("increseBtn");

let count = 0;

increseBtn.onclick = function() {
    count++;
    countLable.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    countLable.textContent = count;
}

decreseBtn.onclick = function() {
    count--;
    countLable.textContent = count;
}