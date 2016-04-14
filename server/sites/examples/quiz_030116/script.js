var http = require('http');
// var express = require('express');
// var hello = express();

var info = "<h1>Hello, world. My name is Brittany.</h1>"

http.createServer(function(req, res){

  res.writeHead(200);
  res.write(info);
  res.end();

}).listen(8080);
