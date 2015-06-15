var hash = function(input){
	var sum = 0;
	for(var i = 0; i < input.length;i++){
		sum+= input.charCodeAt(i)l
	}
	return sum % 26
}