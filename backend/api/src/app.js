import express from "express";

const app = express();

const port = 3000;

const favorites = [
	{	id: 1,
		name: "google",
		url: "https://google.com"
	},
	{	id: 2,
		name: "social",
		url: "https://instagram.com"
	},
	{	id: 3,
		name: "news",
		url: "https://yahoo.com"
	}
];


// app.get('/favorites/:id', (req, res) => {

// 	const id = parseInt(req.params.id);

// 	const favorite = favorites.find((fav) => fav.id === id);

// 	if (!favorite) {
// 		return res.status(404).json({ error: "Favorite not found " });
// 	};

// 	res.json({ favorite });
// });

app.get('/favorites', (req, res) => {
	const favoritesCopy = [...favorites];
	const sort = req.query.sort;

	if (sort === 'asc') {
		favoritesCopy.sort((a, b) =>  a.name.localeCompare(b.name));

	} else if (sort === 'desc') {
		favoritesCopy.sort((a, b) => b.name.localeCompare(a.name));
	}

	res.json({ favorites: favoritesCopy });
});

app.listen(port, () => {
	console.log(`App is running http://localhost:${port}...`)
});