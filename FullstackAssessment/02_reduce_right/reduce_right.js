var reduceRight = function(arr, start, func){
	var current = start;
	for (var i = arr.length - 1; i >= 0; i--) {
		current = func(current,arr[i]);
	};
	return current
}




var reduceRightRecursive = function(arr, start, func){
	if(arr.length === 0){
		return start;
	}
	var next = func(start, arr.pop());
	return reduceRightRecursive(arr,next,func)
}
