var boxes = document.getElementsByClassName("box");
console.log(boxes);

var player = true;

window.addEventListener("load", function() {
	inputPlayers();
});

inputPlayers();

function inputPlayers () {
	console.log("start function");
	for(var i = 0; i < boxes.length; i++){
		console.log("loop called");
		boxes[i].addEventListener('click', function(){
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
function getWinner() {
	if (isWinner('x')) {
		return 'x';
	}
	if (isWinner('o')) {
		return 'o';
	}
	return null;
};
