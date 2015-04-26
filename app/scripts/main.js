/* jshint devel:true */
var GameController = require('./GameController');
var oController;
//
$(document).ready(function(){
	oController = new GameController();
	console.log(oController);
	oController.setEventListeners();
	// oController.startGame();
	$('#play_human, #play_computer').on('click', oController.startGame );
});
