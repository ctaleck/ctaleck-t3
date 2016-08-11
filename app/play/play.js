'use strict';

angular.module('myApp.play', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/play', {
    templateUrl: 'play/play.html',
    controller: 'PlayCtrl',
    controllerAs: 'vm'
  });
}])

.controller('PlayCtrl', ['game', 'data', function(game, data) {
  this.game = game;

  this.doMove = function(command) {
    game.doMove(command);
    this.move = '';
  }

  this.save = function() {
    data.save(game.getState());
    game.newGame();
  }
  this.load = function() {
    if (confirm('Load last saved game?')){
      try {
        var block = data.load();
        game.setState(block);
      } 
      catch (error) {
        alert(error);
      }

    }
  }
}]);
