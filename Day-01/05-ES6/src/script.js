console.log("Welcome to es6");
//1. Variable (let, const)
for(let i=0; i<10; i++){
	console.log('something');
}
//console.log("i = ", i);
const pi = 3.14;

//2. function paramters (default values, rest operator)
function add(x=0,y=0,...z){
	console.log("z = ", z);
	return x + y;
} 

console.log(add(10,20,30,40,50));

//3. Arrow functions
var subtract = (x,y) => x - y;
console.log(subtract(100,50));

let numbers = [10,20,30,40,50];
var min = numbers.reduce((n1, n2) => n1 < n2 ? n1 : n2);
console.log(min);

var max = numbers.reduce((n1, n2) => n1 > n2 ? n1 : n2 );
console.log(max);

var product = {
	id : 100,
	name : 'Pen',
	cost : 10,
	units : 20
};

var {id : pid,name : pname} = product;

console.log(pid, pname);

let [first, second] = numbers;

var s = `first = ${first}, second = ${second}`
console.log(s);

class Employee{
	constructor(id, name, salary){
		this.id = id;
		this.name = name;
		this.salary = salary;
	}
	display(){
		console.log(`id = ${this.id}, name = ${this.name}, salary = ${this.salary}`)
	}
	static isEmployee(obj){
		return obj instanceof Employee;
	}
}

var emp = new Employee(100, 'Magesh', 10000);
emp.display();
console.log(Employee.isEmployee(emp));

import Product from './Product.js'
var p = new Product(100, 'Pen', 10);
p.display();

console.log('modifying id');
p.id = 200;
p.display();