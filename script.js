let a=document.querySelector("h3");
let btn=document.querySelector("button");
let p=document.querySelector("p");
let p1=document.querySelector("#display-turn");
a.innerHTML="Tic-Tac-Toe";
a.style.fontSize="40px";
a.style.textAlign="center";
let Player1=prompt("enter X or O");
 let Player2;
 do{

    if(Player1=="X"){
     Player2="O";
     break;

  }
  else if(Player1=="O"){
     Player2="X";
     break;

  }
  else{
          alert("Please Enter X or O");
          Player1=prompt("enter X or O");

   }
  }while(Player1!="O" || Player1!="X")
p.innerHTML=`Player1 choose ${Player1} then Player2 = ${Player2}`;
p.style.textAlign="center";
p1.style.textAlign="center";

// let turn="Player1";
//   if(turn=="Player1"){
       
//          turn="Player2";

//   }
//   else if(turn=="Player2"){
//         turn="Player1";
// }
//   p1.innerHTML=`${turn}'s turn`;
Array.from(btn).forEach((button)=>{
 button.addEventListener("click",(e)=>{
let turn="Player1";

if(turn=="Player1"){
    e.Value=Player1;
    turn="Player2";
}
else if(turn=="Player2"){
   e.Value=Player2;
   turn="Player1";
}
p1.innerHTML=`${turn}'s turn`;
})

})