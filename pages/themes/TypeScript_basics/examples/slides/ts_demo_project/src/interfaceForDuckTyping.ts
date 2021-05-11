export {};
interface IDuck{
	name: string
	quacks():void
}

class Duck implements IDuck{
	constructor(public name:string) {}

	quacks(){}
	swim(){}
}

class Cat {
	constructor(public name:string) {}

	quacks(){}
}


function isItDuck(obj:IDuck) {
	obj.quacks?
		console.log(`${obj.name} is a Duck`):
		console.log(`Not a Duck`);
}

let donald = new Duck('Donald');
let tom = new Cat('Tom');

isItDuck(donald);
isItDuck(tom);
