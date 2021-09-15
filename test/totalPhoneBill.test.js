let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");


describe('The totalPhoneBill function', function(){

    it('should calculate the totalPhoneBill correctly', function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        assert.equal('R3.40', totalPhoneBill('call, sms'));
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });
});