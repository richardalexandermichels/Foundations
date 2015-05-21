var fs = require('fs');
var csvFile = fs.readFileSync("friend_list.csv","utf8");
var csvFile = csvFile.split(/[\n,]+/);

function csvParse(file,data,arr){
	var data = {};
	var arr = arr || []
	if(file.length<=4){
		return arr
	}
	for(var i = 4;i<8;i++){
		data[file[i%4]] = file[i];
	}
	arr.push(data);
	file.splice(4,4);
	return csvParse(file,data,arr);
}
//console.log(csvParse(csvFile));
csvParse(csvFile);