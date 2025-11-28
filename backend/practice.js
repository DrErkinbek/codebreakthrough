const functions = {
	double: (x) => x ** 3,
	sqr: (x) => x * x,
	half: (x) => x / 2,
};

const algorithm = (functions) => {
	return (x) => {
		let result = functions.double(x);
		result = functions.sqr(result);
		result = functions.half(result);
		return result;
	}
};

const algo = algorithm(functions);
console.log(algo(123));