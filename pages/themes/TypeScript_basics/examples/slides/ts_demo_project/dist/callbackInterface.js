"use strict";
exports.__esModule = true;
function getData(callback) {
    var data = {
        'id': 1
    };
    callback(data);
}
getData(function (data) {
    console.log(data);
});
// getData("Do something else with data")
// error TS2345: Argument of type '"Do something else with data"' is not assignable to parameter of type 'Callback'
