var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('Hi there');
    
});

app.get('/routing',function(req,res){
    res.send('Hi there. This is a routing test.');
    
});

var port = process.env.PORT;
app.listen(port,function(err){
    console.log('This server is running on port:' + port);
});