var fs = require('fs');
buf = fs.readFileSync(process.argv[2]);
buf = buf.toString().split("\n").length - 1;
console.log(buf);