function merge_sort(arr){
	if(arr.length === 0 || arr.length === 1){
		return arr
	}

}

function merge(left, right){
	var result = []
	while(left.length && right.length){
		var toPush = left[0] < right[0] ? left.shift() : right.shift()
		result.push(toPush)
	}
	return merged.concat(right).concat(left)
}

function halve(arr){
	var middle = arr.length/2;
	var right = arr;
	var left = right.splice(0, middle)
	return [left, right]
}

function merge_sort(arr){
	if(arr.length <= 1){return arr}
	var halves = halve(arr)
	var left = merge_sort(halves[0])
	var right = merge_sort(halves[1])
	return merge(left,right)

}