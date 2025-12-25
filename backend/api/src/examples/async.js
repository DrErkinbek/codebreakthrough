try {
	const response = await fetch('https://google.com');
	const data = await response.text();
	console.log(data);
} catch (err) {
	console.log(err.message);
}

const getData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject(new Error('Not complete...'))
		}, 2000);
	});
}

const processData = async () => {
	try {
		const data = await getData();
		console.log(data);
	} catch (err) {
		console.log(err.message);
	}
}

console.log(1);

await processData();

console.log(2);