export {};
class Person {
	name: string

	constructor(public firstName: string, public surName: string) {
		this.name = `${this.firstName} ${this.surName}`;
	}

	greet(){
		console.log(`Hello, my name is ${this.name}.`)
	}
}

class Student extends Person{
	college: string

	constructor(firstName: string, surName: string, college:string){
		super(firstName, surName);
		this.college=college;
	}

	greet(){
		// if we want we can reuse the parent's greet() method (if we want to extend it)
		super.greet();
		console.log(`I study in ${this.college}`)

		// or just to overwrite it
	}
}

let maria = new Person("Maria", "Popova");
let ivan = new Student("Ivan", "Ivanov", 'TU-Sofia');

maria.greet();
ivan.greet();