        
    var isFromBellville = require('../isFromBellville');
    let assert = require("assert");
    const regNo = 'CY 235';

describe('isFromBellville function' , function(){
    it('should return "regNo" that startsWith CY', function(){
        assert.equal(regNo('CY 123'), true);
        assert.equal(regNo('CY 785'), true);
    });
    
})