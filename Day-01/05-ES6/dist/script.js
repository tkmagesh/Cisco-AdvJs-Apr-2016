"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log("Welcome to es6");
//1. Variable (let, const)
for (var i = 0; i < 10; i++) {
	console.log('something');
}
//console.log("i = ", i);
var pi = 3.14;

//2. function paramters (default values, rest operator)
function add() {
	var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	var y = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	for (var _len = arguments.length, z = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		z[_key - 2] = arguments[_key];
	}

	console.log("z = ", z);
	return x + y;
}

console.log(add(10, 20, 30, 40, 50));

//3. Arrow functions
var subtract = function subtract(x, y) {
	return x - y;
};
console.log(subtract(100, 50));

var numbers = [10, 20, 30, 40, 50];
var min = numbers.reduce(function (n1, n2) {
	return n1 < n2 ? n1 : n2;
});
console.log(min);

var max = numbers.reduce(function (n1, n2) {
	return n1 > n2 ? n1 : n2;
});
console.log(max);

var product = {
	id: 100,
	name: 'Pen',
	cost: 10,
	units: 20
};

var pid = product.id;
var pname = product.name;


console.log(pid, pname);

var first = numbers[0];
var second = numbers[1];


var s = "first = " + first + ", second = " + second;
console.log(s);

var Employee = function () {
	function Employee(id, name, salary) {
		_classCallCheck(this, Employee);

		this.id = id;
		this.name = name;
		this.salary = salary;
	}

	_createClass(Employee, [{
		key: "display",
		value: function display() {
			console.log("id = " + this.id + ", name = " + this.name + ", salary = " + this.salary);
		}
	}]);

	return Employee;
}();

var emp = new Employee(100, 'Magesh', 10000);
emp.display();