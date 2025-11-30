const user = {
	name: 'Erkinbek',
	birthdate: new Date(2020, 1),
}

console.log(user);

const now = new Date().getFullYear();
const birthYear = user.birthdate.getFullYear();
const status = now - birthYear >= 18 ? 'adult' : 'minor';

// console.log(status)

const users = [
	{
		name: 'Erik',
		age: 50,
	},
	{
		name: 'Jose',
		age: 0,
	},
	{
		name: 'Hose',
		age: 0,
	}
]

// users.map((user) => {
// 	console.log(user.birthdate.getFullYear());
// });

users.map((user) => {
	console.log(user.age || new Date());
})