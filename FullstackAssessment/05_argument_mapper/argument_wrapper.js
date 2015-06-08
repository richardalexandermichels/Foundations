function createArgumentMap(func){
	var args = Array.prototype.slice.call(arguments)
	var obj = {}
    for(var i = 0; i < args.length; i++){
        obj["a"+i] = args[i];
    }
    return obj;
}


function keyAdder(o){
	var obj = createArgumentMap(o);
    var total = 0
	for(var key in obj){
	    if(typeof obj[key] === 'number')
		    total += obj[key];
	}
	return total;
}