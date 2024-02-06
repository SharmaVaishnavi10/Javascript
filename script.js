let boxes = document.querySelectorAll(".box");
let resetBnt = document.querySelector(".reset-bnt");
let NewGameBtn = document.querySelector(".new-btn");
let msgContaine = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX . playerO
let count = 0; // To Track Draw


//using 2d Array

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const  resetGame = () => {
    turnO = true;
    count = 0;
    enableboxes();
    msgContaine.classList.add("hide");
};

boxes.forEach(box => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            //playerO
            box.innerText = "O";
            box.style.color = "#03045e"; // Set color for O
            turnO = false;
            
        }
        else {
            //playerX
            box.innerText = "X";
            box.style.color = "#9c6644"; // Set color for X
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = cheakWinner();

        if (count === 9 && ! isWinner) {
            gameDraw();
        }

    cheakWinner ();

    });    
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContaine.classList.remove("hide");
    disableBoxes();
  };


const disableBoxes = () => { 
    for(let box of boxes) {
        box.disabled = true; 
    }
}

const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false; 
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContaine.classList.remove("hide");
    disableBoxes(); 
}

const cheakWinner = () => {
    for ( pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

NewGameBtn.addEventListener("click",resetGame);
