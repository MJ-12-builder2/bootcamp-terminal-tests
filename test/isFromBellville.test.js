let assert = require("assert"); 
    let isFromBellville = require('../isFromBellville');
   

describe('isFromBellville function' , function(){
    it('should return regNumber.startsWith(CY)', function(){
        assert.equal(regNumber('CY 123'), true);
        assert.equal(regNumber('CY 785'), true);
    });
    
})
