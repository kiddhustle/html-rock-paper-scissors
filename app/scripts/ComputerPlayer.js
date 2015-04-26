var ComputerPlayer = function(gamemoves){
	var self = this;
	self.gamemoves = gamemoves;
	self.pickMove = function(){
		var random = Math.random();
		random *=  self.gamemoves.length;
		random = Math.floor( random );
		return self.gamemoves[ random ];
	};
};
module.exports = ComputerPlayer;