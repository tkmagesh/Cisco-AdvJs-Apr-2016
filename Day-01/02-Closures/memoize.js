function memoize(fn){
	var cache = {};
	
	return function(n){
		console.log(cache);
		if (typeof cache[n] === 'undefined')
			cache[n] = fn(n);
		console.log(cache);
		return cache[n];
	}
}

var isPrime = memoize(function checkPrime(n){
	console.log('processing ', n);
	if (n <= 3) return true;
	for(var i=2; i<=Math.sqrt(n); i++)
		if (n % i === 0) return false
	return true;
});

var isEvenOrOdd = memoize(function isOddOrEven(n){
	console.log('processing ', n);
	if (n % 2 === 0)
		return 'even';
	return 'odd';
})