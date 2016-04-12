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
		function sort(){
			for(var i=0; i < products.length-1; i++)
				for(var j=i+1; j < products.length; j++)
					if (products[i].id > products[j].id){
						var temp = products[i];
						products[i] = products[j];
						products[j] = temp;
					}
		}
		sort();
		console.table(products);
	});

	print("Any list by any attribute", function(){
		function sort(list, attrName){
			for(var i=0; i < list.length-1; i++)
				for(var j=i+1; j < list.length; j++)
					if (list[i][attrName] > list[j][attrName]){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
		}
		print("Products by cost", function(){
			sort(products, "cost");
			console.table(products);
		})
		print("Products by units", function(){
			sort(products, "units");
			console.table(products);
		})
	})
	print("Any list by anything", function(){
		function sort(list, comparerFn){
			for(var i=0; i < list.length-1; i++)
				for(var j=i+1; j < list.length; j++)
					if (comparerFn(list[i], list[j]) > 0){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
		}
		print("Products by value [cost * units]", function(){
			var productComparerByValue = function(p1, p2){
				var p1Value = p1.cost * p1.units,
					p2Value = p2.cost * p2.units;
				if (p1Value < p2Value) return -1;
				if (p1Value === p2Value) return 0;
				return 1;
			}
			sort(products, productComparerByValue);
			console.table(products);
		})
		
	})
});

//print("Filtering", )

