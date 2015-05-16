var box = document.getElementsByClassName("box");
  console.log(box);

// Global variables
var player = true;
// player var true = x, false = o

var winningCombos = [
  ["1","2","3"], 
  ["4","5","6"], 
  ["7","8","9"], 
  ["1","4","7"],
  ["2","5","8"],
  ["3","6","9"],
  ["1","5","9"],
  ["3","5","7"]];

var xmoves = [];
var omoves = [];
var allmoves = [];

/* Declares a winner by a winning combination associative array
*/
function hasWinningCombo(playerMoves, winningCombos) {
   
  for(var i = 0; i <winningCombos.length; i++) {
    if (
      playerMoves.indexOf(winningCombos[i][0]) >= 0  // winningCombos[0][0]
      && playerMoves.indexOf(winningCombos[i][1]) >= 0
      && playerMoves.indexOf(winningCombos[i][2]) >= 0) {
      return true;
}
}
      return false;
}
window.addEventListener("load", function() {
  gameSetMatch();
});

/* Sets a move in the grid and increments turns
*/
function gameSetMatch() {
  
  console.log("start function");
for (var i = 0; i < box.length; i++) {
  console.log("loop called");
  box[i].addEventListener('click', function(e) {
  // console.log(box[i]);
  // alert(box[i].indexOf);
  if(
  player === true && this.innerHTML === "") {
  this.innerHTML = "<img src=images/X.png>"; 
  player = false;
  xmoves.push(e.target.id);
  allmoves.push(e.target.id);
  console.log(xmoves);
  if (
    hasWinningCombo(xmoves, winningCombos) == true) {
    alert("x wins");
}
}	
  else if(player === false && this.innerHTML === "") {
  this.innerHTML = "<img src=images/O.png>"; 
  player = true;
  omoves.push(e.target.id);
  allmoves.push(e.target.id);
  console.log(omoves);
  hasWinningCombo(omoves, winningCombos) ==true) {
  alert("o moves");
  }
} 	
  else {

// alert("Choose an empty box");
}
}
);
}
}

// var tokens = ["x", "o"];
// var 
// for(var i = 0; i < tokens.length; i++)
//   var t = tokens[i]

// if(t == "x"){
//   alert ("Player 1 Wins!");
//   self.p2score++
// }else{
//   alert ("Player 2 Wins!");
// }
// }

// winMatch();

// function winMatch() {
//          console.log ("win match!");
//    if (   ((box[0].innerHTML === "<img src=images/X.png>") && (box[1].innerHTML === "<img src=images/X.png>") && (box[2].innerHTML === "<img src=images/X.png>")) 
//         || ((box[0].innerHTML === "<img src=images/X.png>") && (box[3].innerHTML === "<img src=images/X.png>") && (box[6].innerHTML === "<img src=images/X.png>"))
//         || ((box[0].innerHTML === "<img src=images/X.png>") && (box[4].innerHTML === "<img src=images/X.png>") && (box[8].innerHTML === "<img src=images/X.png>"))
//         || ((box[1].innerHTML === "<img src=images/X.png>") && (box[4].innerHTML === "<img src=images/X.png>") && (box[7].innerHTML === "<img src=images/X.png>"))
//         || ((box[2].innerHTML === "<img src=images/X.png>") && (box[4].innerHTML === "<img src=images/X.png>") && (box[6].innerHTML === "<img src=images/X.png>"))
//         || ((box[2].innerHTML === "<img src=images/X.png>") && (box[5].innerHTML === "<img src=images/X.png>") && (box[8].innerHTML === "<img src=images/X.png>"))
//         || ((box[3].innerHTML === "<img src=images/X.png>") && (box[4].innerHTML === "<img src=images/X.png>") && (box[5].innerHTML === "<img src=images/X.png>"))
//         || ((box[6].innerHTML === "<img src=images/X.png>") && (box[7].innerHTML === "<img src=images/X.png>") && (box[8].innerHTML === "<img src=images/X.png>"))
//       ) 
//        {
//         alert("X Wins!");    
//         } 
//     else if( ((box[0].innerHTML === "o") && (box[1].innerHTML === "o") && (box[2].innerHTML === "o")) 
//         || ((box[0].innerHTML === "o") && (box[3].innerHTML === "o") && (box[6].innerHTML === "o"))
//         || ((box[0].innerHTML === "o") && (box[4].innerHTML === "o") && (box[8].innerHTML === "o"))
//         || ((box[1].innerHTML === "o") && (box[4].innerHTML === "o") && (box[7].innerHTML === "o"))
//         || ((box[2].innerHTML === "o") && (box[4].innerHTML === "o") && (box[6].innerHTML === "o"))
//         || ((box[2].innerHTML === "o") && (box[5].innerHTML === "o") && (box[8].innerHTML === "o"))
//         || ((box[3].innerHTML === "o") && (box[4].innerHTML === "o") && (box[5].innerHTML === "o"))
//         || ((box[6].innerHTML === "o") && (box[7].innerHTML === "o") && (box[8].innerHTML === "o"))          
//       )
//         {
//         alert("O Wins!");
//         }
// };  
// 