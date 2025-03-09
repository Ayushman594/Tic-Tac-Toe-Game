let p = document.querySelector("#display-turn"); // Displays current turn
let p1 = document.querySelector("p"); // Displays player choices
let btn = document.querySelectorAll(".boxtext"); // Selects all Tic-Tac-Toe buttons
let reset = document.getElementById("reset"); // Reset button
p.style.color="hotpink";
p1.style.color="hotpink";
p.style.fontSize="20px";
p1.style.fontSize="23px";

//Selecting X or O
let player1 = prompt("Choose X or O");
let player2;

do {
   if (player1 == "X") {
        player2 = "O";
            break;
        } 
    else if (player1 == "O") {
          player2 = "X";
         break;
        } 
    else {
          alert("Please enter X or O");
        player1 = prompt("Choose X or O");
     }
} while (player1 != "X" && player1 != "O");

// Display player selections
p1.innerHTML = `Player1 = ${player1} and Player2 = ${player2}`;

let turn = player1;
let isgameover = false;

const changeTurn = () => {
    return turn == "X" ? "O" : "X";
};

// Function to check if a player has won
const checkWin = () => {
    let box = document.getElementsByClassName("boxtext");
    let win = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let e of win) {
        if (box[e[0]].innerText === "O" && box[e[1]].innerText === "O" && box[e[2]].innerText === "O") {
            box[e[0]].style.backgroundColor = "red";
            box[e[0]].style.color = "rgba(255,255, 255, 0.74)";
            box[e[1]].style.backgroundColor = "red";
            box[e[1]].style.color = "rgba(255, 255, 255, 0.74)";
            box[e[2]].style.backgroundColor = "red";
            box[e[2]].style.color="rgba(255, 255, 255, 0.74)";
            p.innerText = (player1 == "O") ? `Player1 (${player1}) won` : `Player2 (${player2}) won`;
            isgameover = true;
            return;
        }
        else if (box[e[0]].innerText === "X" && box[e[1]].innerText === "X" && box[e[2]].innerText === "X") {
            box[e[0]].style.backgroundColor = "red";
            box[e[0]].style.color = "rgba(255, 255, 255, 0.74)";
            box[e[1]].style.backgroundColor = "red";
            box[e[1]].style.color = "rgba(255, 255, 255, 0.74)";
            box[e[2]].style.backgroundColor = "red";
            box[e[2]].style.color="rgba(255, 255, 255, 0.74)"; 
            p.innerText = (player1 == "X") ? `Player1 (${player1}) won` : `Player2 (${player2}) won`;
            isgameover = true;
            return;
        }
    }
};

// **Function to check for a draw**
const checkDraw = () => {
    let box = document.getElementsByClassName("boxtext");
    let isFull = true;
    
    for (let i = 0; i < box.length; i++) {
        if (box[i].innerText === "") {
            isFull = false;
            break;
        }
    }

    if (isFull && !isgameover) {
        p.innerText = "It's a Draw!";
        isgameover = true;
    }
};

// Main game logic
Array.from(btn).forEach(element => {
    element.addEventListener("click", () => {
        if (element.innerText == "" && !isgameover) {
            element.innerText = turn;
            checkWin();
            checkDraw(); // Check for a draw after every move
            if (!isgameover) {
                turn = changeTurn();
                p.innerText = "TURN FOR " + turn;
            }
        } else if (element.innerText != "") {
            p.innerText = "Please reset or click on a remaining empty cell if no one won the game yet";
        }
    });

    // Reset the game
    reset.addEventListener("click", () => {
        element.innerText = "";
        element.style.backgroundColor = "";
        element.style.color="";
        p.innerText = "";
        isgameover = false;
        turn = player1; // Reset turn to player1
    });
});
