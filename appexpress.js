var express = require('express');
var url = require('url');

var app = express();

app.get('/',function(req, res){
    var reqData = url.parse(req.url,true,true);

    res.send(reqData);
});

app.listen(3000);