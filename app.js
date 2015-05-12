var box = document.getElementsByClassName("box");
console.log(box);

var player = true;

window.addEventListener("load", function() {
	gameSetMatch();
});

gameSetMatch();

function gameSetMatch() {
	console.log("start function");
	for(var i = 0; i < box.length; i++){
		console.log("loop called");
		box[i].addEventListener('click', function(){
			console.log("x");
			if(player ===true && this.innerHTML === ""){
				this.innerHTML = "<img src=images/X.png>"; player = false;
			}	else if(player===false && this.innerHTML ===""){
				this.innerHTML = "<img src=images/O.png>"; player = true;
			} 	else {
				// alert("Choose an empty block");
			}
		}
		);
	}
}
function winMatch() {
         console.log ("win match!");
   if( 
        ( ((box[0].innerHTML === "x") && (box[1].innerHTML === "x") && (box[2].innerHTML === "x")) 
        ||((box[0].innerHTML === "x") && (box[3].innerHTML === "x") && (box[6].innerHTML === "x"))
        ||((box[0].innerHTML === "x") && (box[4].innerHTML === "x") && (box[8].innerHTML === "x"))
        ||((box[1].innerHTML === "x") && (box[4].innerHTML === "x") && (box[7].innerHTML === "x"))
        ||((box[2].innerHTML === "x") && (box[4].innerHTML === "x") && (box[6].innerHTML === "x"))
        ||((box[2].innerHTML === "x") && (box[5].innerHTML === "x") && (box[8].innerHTML === "x"))
        ||((box[3].innerHTML === "x") && (box[4].innerHTML === "x") && (box[5].innerHTML === "x"))
        ||((box[6].innerHTML === "x") && (box[7].innerHTML === "x") && (box[8].innerHTML === "x"))
 
       ) 

        ||

        ( ((box[0].innerHTML === "o") && (box[1].innerHTML === "o") && (box[2].innerHTML === "o")) 
        ||((box[0].innerHTML === "o") && (box[3].innerHTML === "o") && (box[6].innerHTML === "o"))
        ||((box[0].innerHTML === "o") && (box[4].innerHTML === "o") && (box[8].innerHTML === "o"))
        ||((box[1].innerHTML === "o") && (box[4].innerHTML === "o") && (box[7].innerHTML === "o"))
        ||((box[2].innerHTML === "o") && (box[4].innerHTML === "o") && (box[6].innerHTML === "o"))
        ||((box[2].innerHTML === "o") && (box[5].innerHTML === "o") && (box[8].innerHTML === "o"))
        ||((box[3].innerHTML === "o") && (box[4].innerHTML === "o") && (box[5].innerHTML === "o"))
        ||((box[6].innerHTML === "o") && (box[7].innerHTML === "o") && (box[8].innerHTML === "o"))          
       )
   ) 
   {
        document.getElementById('announce').style.backgroundImage = 'images/background.jpg';    
        document.getElementById('board').style.display = 'none';
        document.getElementById('ban').style.fontSize = '30vw';
        document.getElementById('ban').style.marginTop = '.5em';
        document.getElementById('ban').style.lineHeight = '1em';
            clearBoard()            
    	}else console.log("keep playing");    
}


// if (winnerIs)('x') || (winnerIs) ('o')){
// 		if (winnerIs('x')) {
// 		console.log(grid());
// 		console.log("You won!")
// 	}	else {}
// }


// function getWinner() {
// 	console.log ("get winner");
// 	if (winnerIs('x')) {
// 	}return 'x';
// }