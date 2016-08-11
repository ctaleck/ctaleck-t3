'use strict';

angular.module('myApp.grid.grid-component', [])

.component('ctGrid', {
      bindings: {
        grid: '='
      },
      templateUrl: 'components/grid/grid.component.html',
      controller: function($scope) {
        var marks = { 0: '_', 1: 'X', 2: 'O'};
        this.mark = function(mark) {
          return marks[mark];
        }
    }
});
