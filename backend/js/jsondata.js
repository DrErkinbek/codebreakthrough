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
delete data.email;

console.log(data);

console.log(JSON.stringify(data))
console.log(JSON.stringify(data, null, 4));

// Check JSOn data for valid

// What is the difference of between null and undefined?
// Both indicates the absent of value
//  NULL not providing a value to property.
