angular
	.module("tttApp")
	.controller("tttController", tttController);

	tttController.$inject = ['$firebaseArray']

//
	function tttController()



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