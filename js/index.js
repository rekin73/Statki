"use strict";
exports.__esModule = true;
var classes_1 = require("./classes");
var Plansza = new classes_1.Board();
window.onload = function () {
    var container = document.getElementById("Plansza");
    Plansza.getBoard().forEach(function (element) {
        element.forEach(function (box) {
            container.appendChild(box);
        });
    });
};
