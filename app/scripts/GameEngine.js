var GameEngine = function(gamemoves){
	var self = this;
	// check we have an odd number of moves for this game
	if( gamemoves.length % 2 !== 1 ){
		throw 'A game must have an odd number of possible game moves.\n' + possiblemoves.length + ' moves were provided';
	}
	else {
		self.gamemoves = gamemoves;
	}
	

	self.name = 'engine 1';
	self.getMoveIndex = function(move){
		return self.gamemoves.indexOf( move );
	};
	self.findMoveParity = function(move){
		return self.gamemoves.indexOf( move ) % 2;
	};
	/**
	 * [findWinner description]
	 * @param  {[string]} m1 [player 1's move]
	 * @param  {[string]} m2 [player 2's move]
	 * @return {[number]}    [number indicating the winner ( 0 = draw)]
	 */
	self.findWinner = function(m1, m2){
		var result;
		if( self.getMoveIndex( m1 ) === self.getMoveIndex( m2 ) ){
			result = 0;
		}
		else {
			// if of equal parity then lowest move wins
			if( self.findMoveParity( m1 ) === self.findMoveParity( m2 ) ){
				result = self.getMoveIndex( m1 ) < self.getMoveIndex( m2 ) ? 1 : 2;
			}
			// else highest move wins
			else {
				result = self.getMoveIndex( m1 ) > self.getMoveIndex( m2 ) ? 1 : 2;
			}
		}

		return result;
	}
};

module.exports = GameEngine;