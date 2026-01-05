import express from "express";
import Database from "better-sqlite3";
import favorites from './routes/favorite.js';
const db = new Database('favorites.db');
import cors from 'cors';


const app = express();
const port = 3000;
app.use(express.json());
app.use(cors({
	origin: ['http://localhost:3001', 'http://locahost:3002'],
	methods: ['GET', 'PUT', 'PATCH', 'DELETE'],
	allowHeader: ['Content-Type', 'Accept']
}));

// app.use((req, res, next) => {
// 	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
// 	res.setHeader('Access-Control-Allow-Header', 'Content-Type, Accept');
// 	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
// });

app.use('/favorites', favorites);

app.get('/', cors(), (req, res) => {
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