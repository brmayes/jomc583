var express = require('express');
var users = require('./controllers/users');
var app = express();

//set templating engine
app.set('view engine', 'ejs');

//creates routes
app.get('/', users.list);

app.get('/list', users.list);
app.get('/create', users.create);
app.get('/update', users.update);
app.get('/remove', users.remove);

//start server
app.listen(8080, function(){

  console.log("Listening on port 8080...");

})
