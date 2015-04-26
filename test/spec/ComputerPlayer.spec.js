var expect = require("chai").expect;
var Constants = require('../../app/scripts/Constants');
var ComputerPlayer = require('../../app/scripts/ComputerPlayer');

describe('ComputerPlayer test', function(){
	var aMoves = Constants.movesStandard;
	var oCP = new ComputerPlayer( aMoves );
	it('pickMove', function(){
		expect( aMoves.indexOf( oCP.pickMove() ) > -1 ).to.equal( true );
		expect( aMoves.indexOf( oCP.pickMove() ) > -1 ).to.equal( true );
		expect( aMoves.indexOf( oCP.pickMove() ) > -1 ).to.equal( true );
		expect( aMoves.indexOf( oCP.pickMove() ) > -1 ).to.equal( true );
	});
});