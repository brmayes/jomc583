var app = angular.module('players', []);

app.controller('PlayersController', ['$http', function($http){

  this.players = [];
  var _this = this;

  $http.get('js/basketball.json')
    .success(function(data) {
      console.log("success");
      _this.players = data;
    })
    .error(function(msg){
      console.log("failed");
    });

  this.message = "Ready";
  this.players = data;
  this.sort = "last";
  this.reverse = false;
  this.showPlayerDetails = true;
  this.playerLast = "";

  // Sorting function
  this.setSort = function(colNam) {

    if (this.sort === colNam) {
      this.reverse = !this.reverse;
    }

    this.sort = colNam;

  };

  // Show and hide functions
  this.moreInfo = function(playerLastName){
      //toggles player details

      for (var i = 0; i < this.players.length; i++) {
        // console.log(i);
        if (playerLastName == this.players[i].last) {
          this.currentPlayer = this.players[i];
          var playerInfo = "";

          var shootingPercent = Math.round(((this.players[i].twoPoints + this.players[i].threePoints + this.players[i].freeThrows)/(this.players[i].twoPointsAttempted + this.players[i].threePointsAttempted + this.players[i].freeThrowsAttempted))*100);

          if (this.players[i].images[0] !== undefined) {

            playerInfo += '<img src="' + this.players[i].images[0] + '" width="60%"><br />';

          }

          playerInfo += '<h3>' + this.players[i].first + ' ' + this.players[i].last + ', ' + this.players[i].position + '</h3>';
          playerInfo += '<p>Shooting Percentage: ' + shootingPercent + '%</p>';

          document.getElementById("playerInfo").innerHTML = playerInfo;
        }

      }

  }

}]);
