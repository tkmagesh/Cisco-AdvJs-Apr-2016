function memoize(fn){
	var cache = {};
	
	return function(n){
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

function memoize(fn){
	var cache = {};
	return function(){
		var key = JSON.stringify(arguments);
		if (typeof cache[key] === 'undefined')
			cache[key] = fn.apply(this,arguments);
		return cache[key];
	}
}

var cachedAdd = memoize(function(x,y){
  console.log('processing ', x , ' and ', y);
  return x + y;
});

cachedAdd(10,20);
cachedAdd(10,200);
cachedAdd(100,20);
cachedAdd(100,200);

cachedAdd(10,20);
cachedAdd(10,200);
cachedAdd(100,20);
cachedAdd(100,200);