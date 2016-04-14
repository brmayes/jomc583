//require MongoDB
var db = require('../config/db');

exports.list = function(req, res) {
  var collection = db.get().collection('users');
  //translated to the command line: use test | db.users

  collection.find({}).toArray(function(err, results){
    res.render('user/list', {users: results});
  });
};



exports.form = function(req, res) {
  res.render('user/form');
};

exports.create = function(req, res) {
  var collection = db.get().collection('users');

  //note about xss and sanitization
  collection.insert({
    name: req.body.name,
    username: req.body.username,
    link: req.body.link
  });

  res.redirect('/users');
};
