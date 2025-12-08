// // map function
let data = [1, 2, 3, 4, 5, 6];

data = data.map((x) => x * x);

console.log(data);

// filter function
let newData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let squares = newData.filter((x) => Math.sqrt(x) % 1 == 0);
console.log(squares);

// Reduce function
let nums = [5, 10, 15, 20];
const result = nums.reduce((prev, current) => {
	console.log(prev);
	prev += current;
	console.log('returned value', prev)
	return prev;
});

console.log(result);

// apply 10% coupon


const products = [
	{ name: 'laptop charger', price: 25 },
	{ name: 'keyboard', price: 22 },
	{ name: 'mouse', price: 18 },
	{ name: 'monitor', price: 30 },
	{name: 'cable', price: 5},
]

const discounted = products.map((product) => ({
	name: product.name,
	price: product.price * 0.9,
}));

console.log(discounted);

// remove any over $20

const cheap = discounted.filter((product) => product.price <= 20);
console.log(cheap);

// setup cost and calculate average
const total = cheap.reduce((prev, current) => {
	prev += current.price;
	return prev;
}, 0);

console.log(total);
console.log('average:', total / cheap.length);
