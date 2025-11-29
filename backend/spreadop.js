// Spread operator goes from array to individual values
const data = {
	username: 'calcur',
	reputation: 90,
	birthdate: new Date(),
	address: {
		street: '123 Main st',
		city: 'Somewhere',
		zip: '12345'
	},
	hobbies: ['sleeping', 'cooking', 'swimming'],
	verified: true,
	name: null,
	email: undefined,
	speak: () => {
		console.log('hello nerds');
	},
};

const data2 = { ...data }
data2.name = 'erkinbek'
console.log(data2);

const data3 = data;
console.log(data3 === data);
console.log(data3.address === data.address);
data3.address.city = 'nowhere';
data3.hobbies[1] = 'crying';
console.log(data3.address.city);
console.log(data.hobbies[1]);

const user = {
	login: 'erkinbek',
	password: '123456',
};

const notifications = { ...user, notification: true };
console.log(notifications);

const algorithm = (f1, f2, f3) => {
	return (x) => {
		let result = f1(x);
		result = f2(result);
		result = f3(result);
		return result;
	}
}

const functions = {
	double: (x) => x * 2,
	sqr: (x) => x * x,
	half: (x) => x / 2,
}

const algo = algorithm(functions.double, functions.sqr, functions.half);
const newalgo = algorithm(...Object.values(functions));

console.log(algo(9782));

const funcs = [(x) => x * 2, (x) => x * x, (x) => x / 2];

const algojs = algorithm(...funcs);
console.log(algojs(123));

// Rest operator goes from individuals to array
const superalgo = (...steps) => {
	return (x) => steps.reduce((value, fn) => fn(value), x);
}

const f1 = (x) => x ** 4;
const f2 = (x) => x * x;
const f3 = (x) => x / 2;

// const al = superalgo(f1, f2, f3);
// console.log(al(9))


let userobj = {
	name: 'erik',
	username: 'erik4',
	age: 28
}

const { username, ...userInfo } = userobj;
console.log(username)
console.log(userInfo)