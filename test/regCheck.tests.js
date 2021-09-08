      var regCheck = require('../regCheck');


describe('The regCheck function', function(){

    it('should return regNo.endsWith(regEnd)', function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true)
    }),

    it('should return regNo.endsWith(regEnd)', function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    }),

    it('should return regNo.endsWith(regEnd)', function(){
        assert.equal(regCheck('5566 L', 'L'), true);
    }),

    it('should return regNo.endsWith(regEnd)', function(){
      assert.equal(regCheck('5566 L', 'M'), false); 
    }),

    it('should return regNo.endsWith(regEnd)', function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
      }),

    it('should return regNo.endsWith(regEnd)', function(){
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
      }),

    it('should return regNo.endsWith(regEnd)', function(){
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
     }),

     it('should return regNo.endsWith(regEnd)', function(){
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    })
})