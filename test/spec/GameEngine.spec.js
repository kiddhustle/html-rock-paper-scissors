var expect = require("chai").expect;
var Constants = require('../../app/scripts/Constants');
var GameEngine = require('../../app/scripts/GameEngine');

(function () {
  'use strict';
  var moves = Constants.movesStandard;
  var moves2 = Constants.movesLizard;
  var oEngine = new GameEngine(moves);

  describe('Game engine tests: rock-paper-scissors', function () {
    describe('methods', function () {
      it('rock and scissors should have equal parity', function () {
      	expect( oEngine.findMoveParity( moves[0] ) ).to.equal( oEngine.findMoveParity(moves[2]) );
      });
      it('getMoveIndex', function(){
      	expect( oEngine.getMoveIndex( moves[0] ) ).to.equal( 0 );
      	expect( oEngine.getMoveIndex( moves[1] ) ).to.equal( 1 );
      	expect( oEngine.getMoveIndex( moves[2] ) ).to.equal( 2 );
      });

    });

    describe('player 1 moves win over player 2', function(){
    	it( 'rock over scissors', function(){
    		expect( oEngine.findWinner( moves[0], moves[2] ) ).to.equal(1);
    	} );
    	it( 'paper over rock', function(){
    		expect( oEngine.findWinner( moves[1], moves[0] ) ).to.equal(1);
    	} );
    	it( 'scissors over paper', function(){
    		expect( oEngine.findWinner( moves[2], moves[1] ) ).to.equal(1);
    	} );
    });
    describe('player 2 moves win over player 1', function(){
    	it( 'rock over scissors', function(){
    		expect( oEngine.findWinner( moves[2], moves[0] ) ).to.equal(2);
    	} );
    	it( 'paper over rock', function(){
    		expect( oEngine.findWinner( moves[0], moves[1] ) ).to.equal(2);
    	} );
    	it( 'scissors over paper', function(){
    		expect( oEngine.findWinner( moves[1], moves[2] ) ).to.equal(2);
    	} );
    });

    describe('player 1 and player 2 draw', function(){
    	it( 'rock draws with rock', function(){
    		expect( oEngine.findWinner( moves[0], moves[0] ) ).to.equal(0);
    	} );
    	it( 'paper draws with paper', function(){
    		expect( oEngine.findWinner( moves[1], moves[1] ) ).to.equal(0);
    	} );
    	it( 'scissors draws with scissors', function(){
    		expect( oEngine.findWinner( moves[2], moves[2] ) ).to.equal(0);
    	} );
    });
  });
})();
