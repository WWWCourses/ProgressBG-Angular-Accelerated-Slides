"use strict";
exports.__esModule = true;
// create a decorator
function logDecor(f, name) {
    return function () {
        console.log("{{{{{{{{{{{{{{{{{{{{{{{");
        f(name);
        console.log("}}}}}}}}}}}}}}}}}}}}}}}");
    };
}
//a function, to be decorated:
function foo(name) {
    console.log("Howdy " + name + "!");
}
// decorate the function:
var decoratedFoo = logDecor(foo, "Ada");
// use the decorated function
decoratedFoo();
