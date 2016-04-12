function Spinner(){
	var counter = 0;
	this.up = function(){
		return ++counter;
	};
	this.down = function(){
		return --counter;
	};
}

/*
Create a SalaryCalcultor (basic, hra, da, tax).  It should have the attributes, basic, hra , da, tax and salary
It should 
*/