let assert = require("assert"); 
    let isFromBellville = require('../isFromBellville');
   

describe('The isFromBellville function' , function(){
    it('should return isFromBellville', function(){
        assert.equal(regNumber('CY 123'), true);
        assert.equal(regNumber('CY 785'), true);
    });
    
})
