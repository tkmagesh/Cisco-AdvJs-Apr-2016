/*
Create a SalaryCalcultor (basic, hra, da, tax).  
It should have the attributes, basic, hra , da, tax and salary
It should also have a method "calculate()" which will populate the 'salary'
attribute with the calculated salary (basic + hra + da - tax(%))
*/

function SalaryCalculator(basic, hra, da, tax){
	this.basic = basic;
	this.hra = hra;
	this.da = da;
	this.tax = tax;
	this.salary = 0;
}

SalaryCalculator.prototype.calculate = function(){
	var gross = this.basic + this.hra + this.da;
	var net = gross * ((100-this.tax)/100);
	this.salary = net;
};