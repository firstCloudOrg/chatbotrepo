var http = require('http');
var fs = require('fs');
var url = require('url');
var readHTML = require('./readHTML');

var server = http.createServer(function(req,res){
    //console.log('request was made :'+ req.url);

    //console.log(readHTML.readStream());

    res.writeHead(200, {'Content-Type':'text/plain'});
    var reqData = url.parse(req.url,true,true);

    //console.log('reqData is '+reqData);
    
    //console.log('my firstName is ' +reqData.query.firstName);
    //console.log('my lastName is '+reqData.query.lastName);


    var newObj = {
        firstName:`${reqData.query.firstName}`,
        lastName:`${reqData.query.lastName}`
    };

    //res.end(JSON.stringify(newObj));
    res.end(readHTML.readStream());
});

server.listen(3000,'127.0.0.1');
console.log('listening on port 3000');