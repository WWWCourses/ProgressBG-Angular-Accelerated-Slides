// class Engine{
// 	constructor(fuel)
// }

// class Tires{
// 	constructor(size)
// }

// class Car{
// 	engine;
// 	tires;

// 	constructor(){
// 		// if we change the dependancy we MUST change the dependant class
// 		this.engine = new Engine();
// 		this.tires = new Tires(36);
// 	}
// }


class Engine{
	constructor(fuel)
}

class Tires{
	constructor(size)
}

class Car{
	engine;
	tires;

	constructor(engine, tires){
		this.engine = engine;
		this.tires = tires;
	}
}
// The dependacy are decoupled, now:
let engine = new Engine('fule1');
let tires = new Tires(36);

let ford = new Car(engine, tires);