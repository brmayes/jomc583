//first, require http
var http = require('http');

//variables
var details = {
  "name": "Brittany",
  "age": 21,
};

http.createServer(function(request, response){

  //built in browser code telling the brower this is good.
  response.writeHead(200);
  response.write("Hello, world. My name is " + details.name + ", and I am " + details.age + " years old.");
  response.end();

}).listen(8080, function() {

  console.log("Listening on port 8080...");

});
