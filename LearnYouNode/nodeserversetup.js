var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  //response.write("Hello, this is dog");
  fs.readFile('BS_E1.html',function(error, contents){
  		response.write(contents);
  		response.end();
  	});
}).listen(8080);
