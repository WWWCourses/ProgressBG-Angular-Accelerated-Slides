"use strict";
exports.__esModule = true;
var Duck = /** @class */ (function () {
    function Duck(name) {
        this.name = name;
    }
    Duck.prototype.quacks = function () { };
    Duck.prototype.swim = function () { };
    return Duck;
}());
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.quacks = function () { };
    return Cat;
}());
function isItDuck(obj) {
    obj.quacks ?
        console.log(obj.name + " is a Duck") :
        console.log("Not a Duck");
}
var donald = new Duck('Donald');
var tom = new Cat('Tom');
isItDuck(donald);
isItDuck(tom);
