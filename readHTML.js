var fs = require('fs');

var readStream = function(res){
var readStream = fs.createReadStream(__dirname+"/chat.html","utf8");
var str = "";
readStream.pipe(res);

return str;

};

console.log(readStream());

module.exports.readStream = readStream;