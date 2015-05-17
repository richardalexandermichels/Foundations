// 06_Functional 
function doubler(n){return n *2}

function map(arr,func,newArr){
    newArr = newArr || [];
    newArr.push(func(arr[0]));
    var remainingArr = arr.slice(1);
    if(remainingArr.length>0){
        return map(remainingArr, func, newArr);
    }else{
    return newArr;
    }
}

function filter(arr, func){
    for(var i = 0;i<arr.length;i++){
        if(!func(arr[i])){
            arr.splice(i,1);
        }
    }
    return arr;
}
function contains(coll, val){
    if(typeof coll === 'object'){
        for(var key in coll){
            if (coll[key]===val){
                return true;   
            }
        }
        return false;
    }else{
        for(var i = 0;i<coll.length;i++){
            if(coll[i]=== val){
                return true;
            }
        }
        return false;
    }
}

function countWords(str){
	return str.match(/\S+/g).length;
}

function reduce(arr, startVal, func){
	var currentVal = startVal;
	for (var i = 0; i <arr.length; i++) {
		currentVal = func(currentVal,arr[i])
	};
	return currentVal
}

function countWordsInReduce(x,y){
	return x+countWords(y);
}

function sum(arr){
		return reduce(arr, 0,function(a, b) {
      		return a + b;
    	});
	}

function every(arr,func){
    for(var i=0;i<arr.length;i++){
        if(!func(arr[i])){
            return false;
        }
    }
    return true;
}

function any(arr,func){
    for(var i=0;i<arr.length;i++){
        if(func(arr[i])){
            return true;
        }
    }
    return false;
}









