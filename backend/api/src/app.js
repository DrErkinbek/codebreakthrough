import express from "express";
import Database from "better-sqlite3";
import favorites from './routes/favorite.js';
const db = new Database('favorites.db');

const app = express();
const port = 3000;
app.use(express.json());

app.use('/favorites', favorites);

app.get('/', (req, res) => {
	res.json({ hello: "world" })
});

app.use((err, req, res, next) => {
	console.log(err);
	if (err.name === 'sqliteError') {
		console.log('Db error hit!');
	}
	next(err);
});

app.listen(port, () => {
	console.log(`App is running http://localhost:${port}...`)
});