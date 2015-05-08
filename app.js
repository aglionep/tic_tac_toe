var boxes = document.getElementsByClassName("box)");
console.log(boxes);

var player = true;

inputPlayers();

function inputPlayers () {
for(var i = 0; i<boxes.lenght; i++){
				console.log("loop called");
				boxes[i].addeventlistener('click', function(){
					console.log("x");
					if(player ===true && this.innerHTML === ""){
					this.innerHTML = "x"; player = false;
				}	else if(player===false && this.innerHTML ===""){
					this.innerHTML = "o"; player = true;
				} 	else {
					alert("Choose an empty block);");
				}
		}
	);
}
}