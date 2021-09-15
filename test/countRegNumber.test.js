    var countRegNumber = require('../countRegNumber')

    describe('The countRegNumber function' , function(){

    it('should return "registrationNumber.split(",").length"', function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);

        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });
}); 