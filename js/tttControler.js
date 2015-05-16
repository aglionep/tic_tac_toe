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

	self.images = true;
		
		
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
			alert("seats taken")
		// sets the box to true
		} else {
			self.ttt.boxes[$index].select = true;
			console.log(self.ttt.boxes[$index].select)
			
			// if its x turn 
			if (counter % 2 !== 0) {	
				self.ttt.boxes[$index].status = 'x';
				// console.log(self.ttt.boxes[$index].select);
				// self.images = true;
				counter++;
			// if its o turn 
			} else {
				self.ttt.boxes[$index].status = 'o';
				counter++;
			}


		self.ttt.$save();
		}
	}
	function getWinner() {

	}

};
