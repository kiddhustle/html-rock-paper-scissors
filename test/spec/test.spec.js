/* global describe, it */
var expect = require("chai").expect;
var GameEngine = require('../../app/scripts/GameEngine');

(function () {
  'use strict';
  var moves = ['rock','paper', 'scissors'];
  var moves2 = ['rock','paper', 'scissors', 'lizard', 'spock'];
  var oEngine = new GameEngine(moves);

  describe('Game engine tests', function () {
    describe('properties', function () {
      it('name should equal: engine 1', function () {
      	expect( oEngine.name ).to.equal( 'engine 1' )
      });
    });
  });
})();
