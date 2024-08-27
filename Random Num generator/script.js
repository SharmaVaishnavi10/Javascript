const mybutton = document.getElementById("mybutton");
const myLable = document.getElementById("myLable");

const min = 0;
const max = 100;

let randomNum;

mybutton.onclick = function() {
    randomNum = Math.floor(Math.random() *max) + min;
    myLable.textContent = randomNum;
}