let data = [1, 2, 3, 4, 5];

const modify = (data, f) => {
	for (let i = 0; i < data.length; i++){
		data[i] = f(data[i]);
	}
}

const sqr = (x) => x ** 5;

modify(data, (x) => x * x);
console.log(data)

data = data.map((x) => x * x);
console.log(data)