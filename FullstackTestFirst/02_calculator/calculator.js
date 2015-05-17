function createCalculator(){
	var calc = {}
	calc.val = 0;
	calc.value = function(){
		return this.val;
	}
	calc.add = function(num){	
		return this.val += num;
	}
	calc.subtract = function(num){
		return this.val -= num;
	}
	return calc;
}