import { Observable, from} from 'rxjs';

let todos = `[
	{
	  "userId": 1,
	  "id": 1,
	  "title": "delectus aut autem",
	  "completed": false
	},
	{
	  "userId": 1,
	  "id": 2,
	  "title": "quis ut nam facilis et officia qui",
	  "completed": false
	}
]`;

interface Todo{
	"userId": number,
	"id": number,
	"title": string,
	"completed": boolean
}

function fetchTodosTyped():Observable<Todo> {
	// create the observable:
	return from<Todo[]>(JSON.parse(todos));
}

function fetchTodos() {
	// create the observable:
	return from(JSON.parse(todos));
}

function getTodos() {
	let count = 1;
	const delay = 4000;

	// TS error:Property 'title' does not exist on type 'unknown'.
	// fetchTodos().subscribe(todo => console.log(todo.title));

	// OK
	fetchTodosTyped().subscribe(todo => console.log(todo.title));
}

getTodos();
