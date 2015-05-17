function factorialIterative(n){
    var factorial = 1;
    for(var i=2;i<=n;i++){
        factorial = factorial*i;
    }
    return factorial
}

function factorial(n){
	if(n){
		return n * factorial(n-1);
	}
	return 1;
}

function fib(n){
	if(n === 0 || n === 1){
		return 1;
	}
	return fib(n-1) + fib(n-2);
}

function type(obj){
    return Object.prototype.toString.call(obj).slice(8,-1);
}


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

function stringify(obj){
	if(type(obj) === 'Undefined'){
		return obj+'';
	}
	if(type(obj)==='Null'){
		return obj+'';
	}
	if(type(obj)==='Boolean'){
		return obj+'';
	}
	if(type(obj)==='Number'){
		return obj+'';
	}
	if(type(obj)==='String'){
		return '"'+obj+'"';
	}
	if(type(obj)==='Function'){
		return obj+'';
	}
	if(type(obj)==='Array'){
		return "["+map(obj,stringify).join(',')+"]";
	}
	if(type(obj)==='Object'){
		var str = []
    	for(var i=0;i<Object.keys(obj).length;i++){
    		var key = Object.keys(obj)[i];
    		var val = stringify(obj[Object.keys(obj)[i]])
       		str.push('"'+key+'"'+": "+val);
    	}
    	return '{'+str.join(',')+'}';
	}



}








