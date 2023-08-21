let ties=0;
let xWins=0;
let oWins=0;
let won=false ;
let turninfo=document.getElementById("turns");
let show_win=document.getElementById("show-win");
let player=document.getElementsByClassName("plyrs");
let tieinfo=document.getElementById("ties");
turninfo.innerHTML="×";
turninfo.style.fontSize="15vw"
//logic for clicking X
for(let i=1;i<=9;i++){
document.getElementById(i).onclick=function(){
 if(!won &&  document.getElementById(i).innerHTML===""){
  document.getElementById(i).innerHTML="×";
  
  if(!won){
  computerMove()
  
  checkWin()
  }
// Change color of X,O
if(turninfo.innerHTML==="×"){
turninfo.style.color="yellow";
document.getElementById(i).style.color="yellow";
}

}
}}

function reset(){
 document.getElementById("reset").onclick=()=>{
   for(let i=1;i<=9;i++){
   let box=
document.getElementById(i);
box.innerHTML="";
box.style.background="#507dad";
box.addEventListener('mouseover', ()=>{
 box.style.background="#325f8f";
});
box.addEventListener('mouseout', ()=>{
 box.style.background="";
});
  };
  won=false

 show_win.style.width=0;
  show_win.style.visibility="hidden";
}}
reset()
function checkWin(){
let array=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]

array.forEach(
  (e)=>{
    if((player[e[0]].innerHTML===player[e[1]].innerHTML) && (player[e[2]].innerHTML===player[e[0]].innerHTML) &&  player[e[0]].innerHTML !==""){
    
         // Update the wins count and display the winner
        if (player[e[0]].innerHTML === "×") {
            xWins+=1;
           show_win.innerHTML="Wow You Won 🎉"
        } else if (player[e[0]].innerHTML === "o") {
            oWins++;
            show_win.innerHTML="You lose 😞"
        }
        
        // Update the HTML to display wins counts
   document.getElementById("x_score").innerHTML = xWins/2;
 document.getElementById("o_score").innerHTML = oWins;
        
player[e[0]].style.background="red";
player[e[1]].style.background="red";
player[e[2]].style.background="red";
 show_win.style.visibility="visible";
  show_win.style.width="57vw";
   won=true;
   return ;
   }
  }
 );
 if(!won){
   let filledCells = Array.from(player).filter((cell) => cell.innerHTML !== "");
        if (filledCells.length === 9) {
            show_win.innerHTML = "Tie";
ties+=1;
tieinfo.innerHTML=ties;
show_win.style.fontSize = "5vw";
            show_win.style.visibility = "visible";
            show_win.style.width = "57vw";
        }
    
 }
}

function computerMove(){

  let availableCells=Array.from(player).filter((cells)=>{
      return cells.innerHTML==="";
      return true
    }
  )
  if(availableCells.length==0){
    return 
  }
  let randomIndex=Math.floor(Math.random()*availableCells.length);
   let cell=availableCells[randomIndex]
  
   setTimeout(()=>{
   cell.innerHTML="o";
   cell.style.color="aqua";
   checkWin()
   },200)
    availableCells.splice(randomIndex,1)

}
