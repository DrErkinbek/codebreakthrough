// Object Destructering
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

const { birthdate, name } = data;

const { address: { city: c }, } = data;

const { hobbies: [hobby] } = data;

console.log(c);
console.log(hobby);
