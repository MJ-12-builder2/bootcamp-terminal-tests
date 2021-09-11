describe('The isWeekday function' , function(){
    it('should return "Weekday" that startsWith Mon,' , function(){

        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Monday'), true);

    
    });

});
