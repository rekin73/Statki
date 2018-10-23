"use strict";
exports.__esModule = true;
var Board = /** @class */ (function () {
    function Board() {
        this.size = 10;
        this.boardArray = [];
        this.generateBoard();
    }
    ;
    Board.prototype.generateBoard = function () {
        for (var i = 0; i < this.size; i++) {
            this.boardArray[i] = [];
            for (var j = 0; j < this.size; j++) {
                this.boardArray[i][j] = document.createElement("div");
                this.boardArray[i][j].className = "box";
                console.log(this.boardArray[i][j]);
            }
        }
    };
    Board.prototype.getBoard = function () {
        return this.boardArray;
    };
    Board.prototype.createRandomBoard = function () {
        var _this = this;
        var ships;
        ships = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
        ships.forEach(function (blocks) {
            var a = false;
            while (!a) {
                var dir = Math.floor(Math.random());
                var x = Math.floor(Math.random() * _this.size);
                var y = Math.floor(Math.random() * _this.size);
                if (dir == 0) {
                    //horizontal(x)
                    for (var i = 0; i;) {
                    }
                }
                else {
                }
            }
            ;
        });
    };
    return Board;
}());
exports.Board = Board;
var Ship = /** @class */ (function () {
    function Ship(size, direction) {
        this.size = size;
        this.direction = direction;
    }
    return Ship;
}());
