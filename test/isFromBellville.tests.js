        
    
    var isFromBellville = require('../isFromBellville');
   

describe('isFromBellville function' , function(){
    it('should return "regNo" that startsWith CY', function(){
        assert.equal(regNo('CY 123'), true);
        assert.equal(regNo('CY 785'), true);
    });
    
})