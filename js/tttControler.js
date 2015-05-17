angular
	.module("tttApp")
	.controller("tttController", tttController);

	tttController.$inject = ['$firebaseObject']

// establishes ttt controller
	// function tttController() {
	// 	var self = this;
	// 	self.boxes = [{select: false, status: "null"},{select: false, status: "null"},{select: false, status: "null"},
	// 				{select: false, status: "null"},{select: false, status: "null"},{select: false, status: "null"},
	// 				{select: false, status: "null"},{select: false, status: "null"},{select: false, status: "null"}]
	
		
	// 	self.serve = (function($index) {
	// 		console.log($index);
	// 		if(self.boxes[$index].select === false) {
	// 			self.boxes[$index].select = true;
	// 		}
	// 			else if (self.boxes[$index].select === false) {
	// 				(self.boxes[$index].select = true)
	// 					console.log($index);
	// 			}


	// 	});
	// };		
	// tttController is the main controller
function tttController($firebaseObject, $index) {
 	var self = this;
 		// self.ttt links to the firebase
 	var counter = 1;	
	self.ttt = getTtt();
		// self.board contains the boxes
	self.board = board();
	// self.gamePlay is the game logic
	self.gamePlay = gamePlay;
		
	// self.board.message = "";

	// self.board.message = " Player One Wins !";
		
		// get TTT links up to the firebase 
	function getTtt() {
	   	// var ref links to my firebase
	   	var ref = new Firebase("https://paulstttapp.firebaseio.com/");
	   	// ttt is refers itself to the firebase object
	   	var ttt = $firebaseObject(ref);
	   		return ttt;
		};
		// board contains an array of boxes
	function board() {

		self.ttt.boxes = [{select: false, status: ""},
                 {select: false, status: ""},
                 {select: false, status: ""},
                 {select: false, status: ""},
                 {select: false, status: ""},
                 {select: false, status: ""},
                 {select: false, status: ""},
                 {select: false, status: ""},
                 {select: false, status: ""}];
		self.ttt.$save();

	}

	// gamePlay is the main game logic
	function gamePlay($index) {
		// when a box is clicked check if it has been already clicked
		if (self.ttt.boxes[$index].select === true) { 
			alert("You're a Cheater!")
		// sets the box to true
		} else {
			self.ttt.boxes[$index].select = true;
			console.log(self.ttt.boxes[$index].select)
			
			// if its x turn 
			if (counter % 2 !== 0) {	
				self.ttt.boxes[$index].status = 'x';
				// console.log(self.ttt.boxes[$index].select);
				checkWinner();
				counter++;
			// if its o turn 
			} else {
				self.ttt.boxes[$index].status = 'o';
				checkWinner();
				counter++;
			}
		}
				self.ttt.$save();
	}
	
	// checks x and o for a winner
	function checkWinner() {
		if   (((self.ttt.boxes[0].status == 'x') 
		 	&& (self.ttt.boxes[1].status == 'x')
		 	&& (self.ttt.boxes[2].status == 'x'))
		 	
		 	|| ((self.ttt.boxes[3].status == 'x')
		 	&& (self.ttt.boxes[4].status == 'x')
		 	&& (self.ttt.boxes[5].status == 'x'))
		 	
		 	|| ((self.ttt.boxes[6].status == 'x')
		 	&& (self.ttt.boxes[7].status == 'x')
		 	&& (self.ttt.boxes[8].status == 'x'))
		 	
		 	|| ((self.ttt.boxes[0].status == 'x')
		 	&& (self.ttt.boxes[3].status == 'x')
		 	&& (self.ttt.boxes[6].status == 'x'))
		 	
		 	|| ((self.ttt.boxes[1].status == 'x')
		 	&& (self.ttt.boxes[4].status == 'x')
		 	&& (self.ttt.boxes[7].status == 'x'))

		 	|| ((self.ttt.boxes[2].status == 'x')
		 	&& (self.ttt.boxes[5].status == 'x')
		 	&& (self.ttt.boxes[8].status == 'x'))
			
			|| ((self.ttt.boxes[0].status == 'x')
			&& (self.ttt.boxes[4].status == 'x')
			&& (self.ttt.boxes[8].status == 'x'))
			
			|| ((self.ttt.boxes[2].status == 'x')
			&& (self.ttt.boxes[4].status == 'x')
			&& (self.ttt.boxes[6].status == 'x')))
			
			{console.log("Player 1 Wins!");}	

		else if (((self.ttt.boxes[0].status == 'o') 
		 	&& (self.ttt.boxes[1].status == 'o')
		 	&& (self.ttt.boxes[2].status == 'o'))
		 	
		 	|| ((self.ttt.boxes[3].status == 'o')
		 	&& (self.ttt.boxes[4].status == 'o')
		 	&& (self.ttt.boxes[5].status == 'o'))
		 	
		 	|| ((self.ttt.boxes[6].status == 'o')
		 	&& (self.ttt.boxes[7].status == 'o')
		 	&& (self.ttt.boxes[8].status == 'o'))
		 	
		 	|| ((self.ttt.boxes[0].status == 'o')
		 	&& (self.ttt.boxes[3].status == 'o')
		 	&& (self.ttt.boxes[6].status == 'o'))
		 	
		 	|| ((self.ttt.boxes[1].status == 'o')
		 	&& (self.ttt.boxes[4].status == 'o')
		 	&& (self.ttt.boxes[7].status == 'o'))

		 	|| ((self.ttt.boxes[2].status == 'o')
		 	&& (self.ttt.boxes[5].status == 'o')
		 	&& (self.ttt.boxes[8].status == 'o'))
			
			|| ((self.ttt.boxes[0].status == 'o')
			&& (self.ttt.boxes[4].status == 'o')
			&& (self.ttt.boxes[8].status == 'o'))
			
			|| ((self.ttt.boxes[2].status == 'o')
			&& (self.ttt.boxes[4].status == 'o')
			&& (self.ttt.boxes[6].status == 'o')))
			{console.log("Player 2 Wins!");}

			self.ttt.$save();
	};
};
// 		 	== self.ttt.boxes[b]).status
// 		 	&& self.ttt.boxes[a].status
// 		 	== self.ttt.boxes[c]).status
// 		 {
// 		 	console.log(self.ttt.boxes[a].status);
//    		}
// }
 


