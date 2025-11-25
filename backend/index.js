// function greeting() {
// 	console.log("Hello World")
// }

// greeting()

const greet = (name) => {
	console.log('greetings...')
	return 'hello  ' + name
}

greet('Erkinbek')

const functions = {
	double: (x) => x * 2,
	sqr: (x) => x * x,
	half: (x) => x/2,
}

// console.log(functions.half(5));

const crypto = require('crypto')

function sha256(data) {
	if (!sha256.cache) {
		console.log('initializing cache');
		sha256.cache = {};
	}


	if (!sha256.cache[data]) {
		const hash = crypto.createHash('sha256')
		hash.update(data)
		sha256.cache[data] = hash.digest('hex')
	} else {
		console.log('cache hit!')
	}
	return sha256.cache[data]
}

console.log(sha256("hello1"))
console.log(sha256("hello2"))
console.log(sha256("hello3"))
console.log(sha256("hello4"))
console.log(sha256("hello5"))
console.log(sha256("hello6"))