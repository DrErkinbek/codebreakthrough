const http = require('http');
const fs = require('fs');

http.get('http://localhost:3000', (res) => {
	console.log('Status Code', res.statusCode);

	res.on('data', (chunk) => {
		const data = fs.readFileSync('users.json', 'utf8');
		data = JSON.parse(chunk.toString());

		data.users.forEach((user) => {
			console.log('User info', user.name);
		})
	});
});
