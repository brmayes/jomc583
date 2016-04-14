var express = require('express');
var app = express();

var data = {
  name: "Brittany",
  age: 21
}

app.set('view engine', 'ejs');

app.get('/', function(request, response){

  response.render('index', data);

});

app.listen(8080, function(){

  console.log("Running on port 8080...")

});
