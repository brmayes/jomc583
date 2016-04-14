'use strict'

var data = {

  periods: [
    {
      name: "Spring 2016",
      users: [
        'andyroberson',
        'ashlenrenner',
        'brmayes',
        'cgharford',
        'chenchik',
        'katherineboliek',
        'kschmidt2',
        'lindsaycarbonell'
      ]
    }
  ]

}

exports.list = function(request, response) {

  response.send("It is working");
  response.render("list", data);

}

exports.create = function(request, response) {

  response.send("Creating...");

}

exports.update = function(request, response) {

  response.send("Updating...");

}

exports.remove = function(request, response) {

  response.send("Removing...");

}
