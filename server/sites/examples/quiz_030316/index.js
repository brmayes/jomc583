var express = require("express");
var app = express();

var data = {
  types: "Read, Post, Put, Oh Delete"
}

app.set("view engine", "ejs");

app.get("/rest", function(request, response){

  response.render("index", data);

});

app.listen(8080, function(){

  console.log("listening on port 8080....");

})
