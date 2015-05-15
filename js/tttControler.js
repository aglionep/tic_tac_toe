angular
	.module("tttApp")
	.controller("tttController", tttController);

	// tttController.$inject = ['$firebaseArray']

// establishes ttt controller
	function tttController(){
		var self = this;
		self.boxes = [{select: false, status: "null"},{select: false, status: "null"},{select: false, status: "null"},
					{select: false, status: "null"},{select: false, status: "null"},{select: false, status: "null"},
					{select: false, status: "null"},{select: false, status: "null"},{select: false, status: "null"}]
	
		
		// self.serve = function(i) {
		// 	if(self.boxes[i].select === true){
		// 		self.boxes[i].select = false;
		// 		console.log('play');
		// 	}

		// }
		// function testFunction() {}
	};		


	


 	// function tttController($firebaseArray){
// 		var self = this;
// 		self.addTtt = addTtt;
// 		self.ttts = (function() {
// 			var ref = new Firebase("https://paulstttapp.firebaseio.com/");
// 			var ttts = $firebaseArray(ref);
// 			return ttts
// 	})();

// 	function addTtt() {
// 		self.ttts.$add({message: self.text});
// 		self.text = null;
// 	}
// }