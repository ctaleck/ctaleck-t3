'use strict';

angular.module('myApp.game', [
])

.service('game', function(){
    var moves = {};
    var grid = [];
    var current = '';

    var players = { 'x': 1, 'o': 2 };

    var getState = function() {
        return {
            grid: this.grid,
            moves: this.moves,
            current: this.current
        }
    };

    var setState = function(state) {
        this.grid = state.grid;
        this.moves = state.moves;
        this.current = state.current;
    };

    var togglePlayer = function(){
        console.log(this.current);
        if (this.current === 'o') {
            this.current = 'x';
        } else if (this.current === 'x') {
            this.current = 'o';
        }
    }
    var doMove = function(move) {
        if (move === '') return;
        move = move.toLowerCase();
        if (move in this.moves) {
            if (this.grid[this.moves[move]] === 0) {
                this.grid[this.moves[move]] = this.players[this.current];
                this.togglePlayer();
                delete this.moves[move];
            }
        }
    }
    var isOver = function() {
        return Object.keys(this.moves).length === 0;
    }
    var newGame = function() {
        this.grid = [0,0,0,0,0,0,0,0,0];
        this.current = 'x';
        this.moves = {'nw': 0,
                    'n': 1, 
                    'ne': 2, 
                    'w': 3, 
                    'c': 4, 
                    'e': 5, 
                    'sw': 6,
                    's': 7,
                    'se': 8 };
    }
    return {
        grid: grid,
        moves: moves,
        current: current,
        players: players,
        setState: setState,
        getState: getState,
        togglePlayer: togglePlayer,
        doMove: doMove,
        isOver: isOver,
        newGame: newGame
    }
});
