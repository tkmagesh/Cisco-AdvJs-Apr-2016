var products = [
	{id : 6, name : 'Pen', cost : 10, units : 30, category : 1},
	{id : 3, name : 'Hen', cost : 80, units : 80, category : 1},
	{id : 7, name : 'Ten', cost : 90, units : 60, category : 2},
	{id : 2, name : 'Den', cost : 60, units : 70, category : 2},
	{id : 9, name : 'Zen', cost : 20, units : 50, category : 1}
];

/*
sort
filter
all
any
sum
min
max
avg
countBy
aggregate
transform
groupBy
*/

function print(title, fn){
	console.group(title);
	fn();
	console.groupEnd();
}

print("Default list", function(){
	console.table(products);
});

print("Sorting", function(){
	print("Default [products by id]", function(){
		//Sort the product by id
		console.table(products);
	});

	print("Any list by any attribute", function(){
		function sort(){

		}
		print("Products by cost", function(){
			//sort(...);
			console.table(products);
		})
		print("Products by units", function(){
			//sort(...);
			console.table(products);
		})
	})
	print("Any list by anything", function(){
		function sort(){

		}
		print("Products by value [cost * units]", function(){
			//sort(...);
			console.table(products);
		})
		
	})
})

