const getData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Timeout complete');
		}, 2000);
	})
}

fetch('https://google.com').then((response) => {
	return response.text();
}).then((data) => {
	console.log(data);
}).catch((err) => {
	console.log(err.message);
});