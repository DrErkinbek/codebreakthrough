const fs = require('fs');

let debugMode = false;

function debug(message) {
	if (debugMode) {
		console.log('DEBUG', message)
	}
}
const data = fs.readFileSync('config.txt', 'utf8');
// console.log(data);
debugMode = data.slice(-1);

debug('debug message');
