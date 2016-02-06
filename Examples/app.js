var app = angular.module('myApp', []);

app.controller('BaseController', function () {

this.countries = data;
this.sort = "population";
this.direction = false;

this.setSort = function(columnName) {
  if (this.sort === columnName) {
    this.direction = !this.direction; //cheat to toggle
  }
  this.sort = columnName;
});

app.controller('CountriesController', function() {

});

app.directive('countriesList', function() {
  return {
    restrict: "E",
    templateUrl: "tmpl/countries.html"
    controller: "CountriesController",
    controllerAs: 'cou'
  };
});

//country data here
var data = [
  {
    name
  }
]

});
