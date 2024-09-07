let box = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let NewGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],  
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enablebox();
    msgContainer.classList.add("hide");
};

box.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner(); 
    });
});

const disablebox = () => {
    for (let b of box) { 
        b.disabled = true;
    }
};

const enablebox = () => {
    for (let b of box) { 
        b.disabled = false;
        b.innerText = "";
    }
};

const showWinner = (winner) => { 
    msg.innerText = `Congratulations, winner is ${winner}`; 
    msgContainer.classList.remove("hide");
    disablebox();
};

const checkWinner = () => { 
    for (let pattern of winPatterns) { 
        let pos1Value = box[pattern[0]].innerText;
        let pos2Value = box[pattern[1]].innerText;
        let pos3Value = box[pattern[2]].innerText;

        if (pos1Value !== "" && pos2Value !== "" && pos3Value !== "") {
            if (pos1Value === pos2Value && pos2Value === pos3Value) {
                showWinner(pos1Value);
                return;
            }
        }
    }
};

NewGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);