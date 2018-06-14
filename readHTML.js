var fs = require('fs');

var readStream = function(){
var readStream = fs.createReadStream(__dirname+"/chat.html","utf8");
var str ="";
readStream.on("data", function(chunk){
    str = str + chunk;
    //console.log(str);
});

//console.log(str);
return str;
};

readStream();
module.exports.readStream = readStream;