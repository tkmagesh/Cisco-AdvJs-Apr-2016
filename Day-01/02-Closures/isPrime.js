create a function "isPrime" that return t/f dependening on the given number is a prime number or not. the algo should not run more than once or a given number.

isPrime(100) //run the algo
isPrime(101) //run the algo
isPrime(102) //run the algo

isPrime(100) //DO NOT run the algo
isPrime(101) //DO NOT run the algo
isPrime(102) //DO NOT run the algo

var isPrime = (function(){
	var cache = {};
	function checkPrime(n){
		console.log('processing ', n);
		if (n <= 3) return true;
		for(var i=2; i<=Math.sqrt(n); i++)
			if (n % i === 0) return false
		return true;
	}
	return function(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = checkPrime(n);
		return cache[n];
	}
})();


var isOddOrEven = (function(){
	var cache = {};
	function isOddOrEven(n){
		console.log('processing ', n);
		if (n % 2 === 0)
			return 'even';
		return 'odd';
	}
	return function(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = isOddOrEven(n);
		return cache[n];
	}
})()

