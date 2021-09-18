let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('The fromWhere function', function(){

    it('should return "fromWhere" after checking regNumber', function(){
      assert.equal('regNumber CY, Bellville', fromWhere('Bellville'));
    });
    it('should return "fromWhere" after checking regNumber', function(){
        assert.equal('regNumber(CJ), Paarl',fromWhere('Paarl'));
    });
    it('should return "fromWhere" after checking regNumber', function(){  
        assert.equal('regNumber(CA), Cape Town', fromWhere ('Cape Town'));
    });
    it('should return "fromWhere" after checking regNumber', function(){
        assert.equal('regNumber(CC), Some other place!', fromWhere ('Some other place!'));        
    });
    })
