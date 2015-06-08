function findACount(str){
    strMatch = str.match(/a/ig)
    return (strMatch === null) ? 0 : strMatch.length;
}

function areaCodeFinder(str){
    return +str.match(/\b[0-9]{3}/)[0];
}

function adjustUrlParameter(url, param){
	urlQuery = url.match(/\?(ID)=(.+)/);
	if (!urlQuery){
		return url+"?"+param

	}else if(param.match(/[a-z]+\b/i)[0]==="TYPE"){
		return url+"&"+param
	}else{
		return url.replace(/ID=.+/, param)
	}
}

function stringPlusPlus(str){
	if(str.match(/[0-9]/) === null){
		return str+1
	}
		var val = +str.match(/[0-9]+/)[0];
		val++;
		var len = val.toString().length;
		str = str.substr(0,str.length-len);
		return str+val;	
	}
