var vowelsCount = function(str){
	var count_arr = str.match(/[aeiou]/gi);
	if(count_arr){
		return count_arr.length
	}
	return 0

}