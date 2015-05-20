/*//problem: Need a simple way to look at user
//badge count and javascript points from broweser
//solution: Use Node.js to perform the profile
//look ups and serve our template via HTTP
*/
var router = require("./router.js");
//create a web server
var http = require('http');
http.createServer(function (request, response){
  router.home(request, response);
  router.user(request, response);
}).listen(3000);
console.log("Server running at http://<worspace url>/")


