function delay(message) {
	setTimeout(() => {
		console.log(message);
	}, 10000)
}

delay('hello will be printed every 2 second')