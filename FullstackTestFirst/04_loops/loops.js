function repeat(word, count){
	var done="";
	for(count;count>0;count--){
		done+=word;
	}
	return done;
}

function sum(arr){
	var sum=0;
	for(var i = 0;i<arr.length;i++){
		sum+=arr[i];
	}
	return sum;
}

function gridGenerator(size){
	var grid = "";
		for(var i = 0; i < size; i++){
			for(var j = 0; j < size; j++){
				if((i+j) % 2 === 0){
					grid += "#";	
				} else {
				grid += " ";
			}
		}
			grid += "\n";
	}	
	return grid;
}

function largestTriplet(c){
	tripArr = [0,0,0];
	function sideSqr(side){
		return side * side;
	}
	for(var a = 1; a<c ;a++){
		for(var b = 1; b<c ;b++){
			for(var count = 0; count<=c;count++){
				if(a<b && b>=tripArr[1]){
					if(sideSqr(a)+sideSqr(b)===sideSqr(count)){
						tripArr = [a,b,count];
					}
				}
			}
		}
	}
	return tripArr;
}
function join(arr, delimiter){
	var string=""
	for(var i = 0;i<arr.length;i++){
		string+=arr[i];
		if(delimiter === undefined){
			delimiter = "";
		}
		if(i<arr.length-1){
			string+=delimiter;
		}
	}
	return string;
}
/*
//first editon paramify not using join()
function paramify(obj){
	var keyCount = 0;
	var paramed=""
	for(var key in obj){
		paramed+=(key.toString()+"="+obj[key].toString());
		if(keyCount < Object.keys(obj).length-1){
			paramed+="&";
			keyCount++;
		}

	}
	return paramed
}
*/
function paramify(obj){
	paramed = [];
	for(key in obj){
		if(obj.hasOwnProperty(key)){
			paramed.push(key + "=" + obj[key]);
		}
	}
	paramed.sort();
	return join(paramed, "&")
}
