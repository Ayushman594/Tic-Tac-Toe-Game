let p=document.querySelector("#display-turn");/* This selects a paragraph tag with id display-turn for displaying turns*/
let p1=document.querySelector("p");//This selects a paragraph tag for displaying choice between X or O
let btn=document.querySelectorAll(".boxtext");//This selects All button tags 
let reset=document.getElementById("reset");//This code selects reset button

// selecting X or O 
let player1=prompt("Choose X or O");
let player2;


/*This code checks if the user entered X or O and 
assign player2 value according to the entered choice.

This code also checks and alerts you if you enter any value 
other than X or O and ask you to enter X or O again*/

do{
    if(player1=="X"){
        player2="O";
        break;
    }
    else if(player1=="O"){
        player2="X";
        break;
    }
    else{
        alert("please enter between X or O");
        player1=prompt("Choose X or O");
    }
}while(player1!="X"||player2!="O")


// This code displays what you entered as player1 and the value player2 gets
p1.innerHTML=`player1 = ${player1} and player2 = ${player2} `;

let turn=player1;
const changeTurn=()=>{
    return turn=="X"?"O":"X";
}
const checkWin=()=>{
    let box=document.getElementsByClassName("boxtext");
    let win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    win.forEach(e=>{
      if(box[e[0]].innerText=="O" && box[e[1]].innerText=="O" && box[e[2]].innerText=="O"){
        if(player1=="O"){
            p.innerText=`player1(${player1}) won`;
        }
        else{
            p.innerText=`player2(${player2}) won`;
        }
      }
      else if(box[e[0]].innerText=="X" && box[e[1]].innerText=="X" && box[e[2]].innerText=="X"){
        if(player1=="X"){
            p.innerText=`player1(${player1}) won`;
        }
        else{
            p.innerText=`player2(${player2}) won`;
        }
      }
    })
}

Array.from(btn).forEach(element=>{
    element.addEventListener("click",()=>{
      if(element.innerText==""){
        element.innerText=turn;
        turn=changeTurn();
        p.innerText="TURN FOR "+turn;
        checkWin();
      }
      else if(element.innerText!=""){
        p.innerText="Please Reset or click on remaining empty cell";
      }
      reset.addEventListener("click",()=>{
         element.innerText="";
         p.innerText="";
      })
      
    })
})