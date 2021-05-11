export {};
// create a decorator
function logDecor(f: (name:string) => void, name:string){
	return function(){
		console.log(`{{{{{{{{{{{{{{{{{{{{{{{`);
		f(name)
		console.log(`}}}}}}}}}}}}}}}}}}}}}}}`);
	}
}

//a function, to be decorated:
function foo(name:string){
	console.log(`Howdy ${name}!`);
}
// decorate the function:
const decoratedFoo = logDecor(foo,"Ada")

// use the decorated function
decoratedFoo()