let p=document.querySelector("#display-turn");/* This selects a paragraph tag with id display-turn for displaying turns*/
let p1=document.querySelector("p");//This selects a paragraph tag for displaying choice between X or O
let btn=document.querySelectorAll("button");//This selects All button tags 

// selecting X or O and taking value of comp as per player's choice 
let player=prompt("Choose X or O");
let comp;
do{
    if(player=="X"){
        comp="O";
        break;
    }
    else if(player=="O"){
        comp="X";
        break;
    }
    else{
        alert("please enter between X or O");
        player=prompt("Choose X or O");
    }
}while(player!="X"||comp!="O")
p1.innerHTML=`player selected ${player}`;
let turn=player;
const changeTurn=()=>{
    return turn=="X"?"O":"X";
}
// const checkWin=()=>{
//     let win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// }
Array.from(btn).forEach(element=>{
    element.addEventListener("click",()=>{
        const checkWin=()=>{
            
       }
      if(element.innerText==""){
        element.innerText=turn;
        turn=changeTurn();
        checkWin();
        p.innerText=" Turn for " + turn;
      }
     
    })
})