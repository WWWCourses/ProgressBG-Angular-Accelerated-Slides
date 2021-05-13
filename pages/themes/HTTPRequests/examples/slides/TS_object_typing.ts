interface Employee {
	name: string;
	salary: number;
}

// typing
let employee = <Employee>{};

employee.name = "Ada"; // OK
employee.salary = 1234; // OK



