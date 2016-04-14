// after you install express and other packages, require it here
var express = require('express');

// tell the file which to use for REST
var app = express();

var data = {
  ashly: {
    name: "Ashly",
    age: 21,
    food: "wings"
  },
  brittany: {
    name: "Brittany",
    age: 21,
    food: "sushi"
  }
}

//set view engine
app.set('view engine', 'ejs');

// perform a get request -- this is the function to create a response when the user requests root
// http://localhost:8080
app.get('/', function(request, response){

  response.render('list', data);
}); //lines 9-13 is called a route

app.get('/brittany', function(request, response){
  response.render('index', data.brittany);
});

app.get('/ashly', function(request, response){
  response.render('index', data.ashly);
});


// perform a get request -- this is the function to create a response when the user requests hello
// http://localhost:8080/hello
app.get('/hello', function(request, response){
  response.send("Hello!");
});

app.listen(8080, function() {
  console.log('App is running on port 8080...')
});
