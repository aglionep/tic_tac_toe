var box = document.getElementsByClassName("box");
console.log(box);

var player = true;
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


function hasWinningCombo(playerMoves, winningCombos) {
   for(var i=0; i<winningCombos.length; i++){
       if (playerMoves.indexOf(winningCombos[i][0])>=0  // winningCombos[0][0]
           && playerMoves.indexOf(winningCombos[i][1])>=0
           && playerMoves.indexOf(winningCombos[i][2])>=0){
               return true;
           }
   }
   return false;
}

window.addEventListener("load", function() {
	gameSetMatch();
});

function gameSetMatch() {
	console.log("start function");
	for(var i = 0; i < box.length; i++){
		console.log("loop called");
        box[i].addEventListener('click', function(e){
			// console.log(box[i]);
            // alert(box[i].indexOf);
			if(player ===true && this.innerHTML === ""){
				this.innerHTML = "<img src=images/X.png>"; player = false;
                xmoves.push(e.target.id);
                console.log(xmoves);
                if (hasWinningCombo(xmoves, winningCombos) == true) {
                    alert("win");
                }



			}	else if(player===false && this.innerHTML ===""){
				this.innerHTML = "<img src=images/O.png>"; player = true;
                omoves.push(e.target.id);
                console.log(omoves);
                hasWinningCombo(omoves, winningCombos);
			} 	else {
				
                // alert("Choose an empty box");
			}
		}
		);
	}
    // winMatch();
}


// function winMatch() {
//          console.log ("win match!");
//    if (   ((box[0].innerHTML === "<img src=images/X.png>") && (box[1].innerHTML === "<img src=images/X.png>") && (box[2].innerHTML === "<img src=images/X.png>")) 
//         ||((box[0].innerHTML === "<img src=images/X.png>") && (box[3].innerHTML === "<img src=images/X.png>") && (box[6].innerHTML === "<img src=images/X.png>"))
//         ||((box[0].innerHTML === "<img src=images/X.png>") && (box[4].innerHTML === "<img src=images/X.png>") && (box[8].innerHTML === "<img src=images/X.png>"))
//         ||((box[1].innerHTML === "<img src=images/X.png>") && (box[4].innerHTML === "<img src=images/X.png>") && (box[7].innerHTML === "<img src=images/X.png>"))
//         ||((box[2].innerHTML === "<img src=images/X.png>") && (box[4].innerHTML === "<img src=images/X.png>") && (box[6].innerHTML === "<img src=images/X.png>"))
//         ||((box[2].innerHTML === "<img src=images/X.png>") && (box[5].innerHTML === "<img src=images/X.png>") && (box[8].innerHTML === "<img src=images/X.png>"))
//         ||((box[3].innerHTML === "<img src=images/X.png>") && (box[4].innerHTML === "<img src=images/X.png>") && (box[5].innerHTML === "<img src=images/X.png>"))
//         ||((box[6].innerHTML === "<img src=images/X.png>") && (box[7].innerHTML === "<img src=images/X.png>") && (box[8].innerHTML === "<img src=images/X.png>"))
//       ) 
//        {
//         alert("X Wins!");    
//         } 
//     else if( ((box[0].innerHTML === "o") && (box[1].innerHTML === "o") && (box[2].innerHTML === "o")) 
//         ||((box[0].innerHTML === "o") && (box[3].innerHTML === "o") && (box[6].innerHTML === "o"))
//         ||((box[0].innerHTML === "o") && (box[4].innerHTML === "o") && (box[8].innerHTML === "o"))
//         ||((box[1].innerHTML === "o") && (box[4].innerHTML === "o") && (box[7].innerHTML === "o"))
//         ||((box[2].innerHTML === "o") && (box[4].innerHTML === "o") && (box[6].innerHTML === "o"))
//         ||((box[2].innerHTML === "o") && (box[5].innerHTML === "o") && (box[8].innerHTML === "o"))
//         ||((box[3].innerHTML === "o") && (box[4].innerHTML === "o") && (box[5].innerHTML === "o"))
//         ||((box[6].innerHTML === "o") && (box[7].innerHTML === "o") && (box[8].innerHTML === "o"))          
//       )
//         {
//         alert("O Wins!");
//         }
// };  
// //    // {
// //    //      document.getElementById('announce').style.backgroundImage = 'images/background.jpg';    
// //    //      document.getElementById('board').style.display = 'none';
// //    //      document.getElementById('ban').style.fontSize = '30vw';
// //    //      document.getElementById('ban').style.marginTop = '.5em';
// //    //      document.getElementById('ban').style.lineHeight = '1em';
// //    //          clearBoard()            
// //    //  	}else console.log("keep playing");    
// // }


// // if (winnerIs)('x') || (winnerIs) ('o')){
// // 		if (winnerIs('x')) {
// // 		console.log(grid());
// // 		console.log("You won!")
// // 	}	else {}
// // }


// // function getWinner() {
// // 	console.log ("get winner");
// // 	if (winnerIs('x')) {
// // 	}return 'x';
// // }