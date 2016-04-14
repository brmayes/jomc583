//requires modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//custom modules
var db = require('./config/db');
var users = require('./controllers/user');

//enables packages
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//set view engine
app.set('view engine', 'ejs');

//routes
app.get('/users', user.list); //list page

app.get('/user/new', user.form); //new action
app.post('/users', user.create); //new action

//connects to mongo
db.connect('mongodb://localhost:27017/test', function(err) {
    console.log("MongoDB connected...");
    app.listen(8080, function() {
        console.log("Express started...");
    });
});
