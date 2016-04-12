let idSymbol = Symbol();
class Product{
	constructor(id, name, cost){
		this[idSymbol] = id;
		this.name = name;
		this.cost = cost;
	}
	display(){
		console.log(`id = ${this[idSymbol]}, name = ${this.name}, cost = ${this.cost}`);
	}
}
export default Product;