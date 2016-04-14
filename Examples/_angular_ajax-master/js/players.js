var app = angular.module('players', []);

app.controller('PlayersController', ['$http', function($http) {

    this.players = [];
    var _this = this;

    $http.get('/js/basketball.json')
        .success(function(data) {
            console.log(data);
            console.log(this);
            _this.players = data;
        })
        .error(function(msg) {
            console.log("This request failed.\n" + msg);
        });

      console.log(this.players.first);

    // this.isBlueSteel = function(player) {
    //     return (player.minutes < 15);
    // }
    //
    // this.isEveryone = function() {
    //     return true;
    // }
    //
    // this.isStarter = function(player) {
    //     return (player.minutes > 100);
    // }

}]);
