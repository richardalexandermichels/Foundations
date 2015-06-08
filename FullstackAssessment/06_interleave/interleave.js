function interleave(){
	var args = Array.prototype.slice.call(arguments);
	var iterTotal = 0;
	var newStr = '';
	var leftovers = ''
	if(args[0].length<args[1].length){
	    leftovers = args[1].slice(args[1].length-args[0].length-1);
	}else if(args[1].length>args[0].length){
	    leftovers = args[0].slice(args[0].length-args[1].length-1);
	}else{
	    leftovers = ''
	}
	for(var key of args){
		iterTotal+=key.length;
	}
	for(var i = 0; i < args[0].length ; i++){
	    for(j = 0; j < args.length; j++){
	        newStr = newStr + args[j][i];
	    }
	}
	return newStr+leftovers;
}