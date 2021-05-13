var rxjs_1 = require('rxjs');
var todos = "[\n\t{\n\t  \"userId\": 1,\n\t  \"id\": 1,\n\t  \"title\": \"delectus aut autem\",\n\t  \"completed\": false\n\t},\n\t{\n\t  \"userId\": 1,\n\t  \"id\": 2,\n\t  \"title\": \"quis ut nam facilis et officia qui\",\n\t  \"completed\": false\n\t}\n]";
// interface Test{}
function fetchTodos() {
    // create the observable:
    return rxjs_1.from(JSON.parse(todos));
}
function getTodos() {
    var count = 1;
    var delay = 4000;
    fetchTodos().subscribe(function (todo) { return console.log(todo.title); });
}
getTodos();
