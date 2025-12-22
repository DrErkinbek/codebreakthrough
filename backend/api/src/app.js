import express from "express";
import Database from "better-sqlite3";
const db = new Database('favorites.db');

const app = express();
app.use(express.json());
const port = 3000;

const authenticate = (req, res, next) => {
	console.log('Pre processing');
	next();
};

app.get('/favorites', authenticate, (req, res) => {
	let query = 'SELECT * FROM favorites';
	const sort = req.query.sort;

	if (sort === 'asc') {
		query += 'ORDER BY name ASC';
	} else if (sort === 'desc') {
		query += 'ORDER BY name DESC';
	}

	const favorites = db.prepare(query).all();

	res.json({ favorites  });
});

app.post('/favorites', (req, res) => {
	const { name, url } = req.body;

	if (!name) {
		return res.status(400).json({ error: 'Name required ' });
	};

	if (!url) {
		return res.status(400).json({ error: 'Url required ' });
	}

	const result = db.prepare('INSERT INTO favorites (name, url) VALUES (?, ?)').run(name, url);
	res.status(201).json({ id: result.lastInsertRowid });
});

app.get('/favorites/:id', (req, res) => {
	try {
		const id = parseInt(req.params.id);
		const favorite = db.prepare('SELECT * FROM favorites WHERE id = ?').get(id);

		if (!favorite) {
			return res.status(404).json({ error: "Favorite not found " });
		};

		res.json({ favorite });
	} catch (err) {
		console.log('CUSTOM TO THIS ROUTE!');
		next(err);
	};

});

app.delete('/favorites/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const result = db.prepare('DELETE FROM favorites WHERE id = ?').run(id);

	if (!result.changes) {
		return res.status(404).json({ error: 'Favorite not found' });
	}

	res.sendStatus(200);
});

app.put('/favorites/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const { name, url } = req.body;

	if (!name) {
		return res.status(400).json({ error })
	}
	if (!url) {
		return res.status(400).json({ error })
	}

	const result = db.prepare('UPDATE favorites SET name=?, url=? WHERE id=?').run(name, url, id);

	if (!result.changes) {
		return res.status(404).json({ error: 'Favorite not found' });
	}

	res.sendStatus(200);
});

app.patch('/favorites/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const { name, url } = req.body;

	if (!name && !url) {
		return res.status(400).json({ error: "Name or URL required" });
	}

	// const favorite = db.prepare('SELECT * FROM favorites WHERE id = ?').get(id);

	// if (!favorite) {
	// 	return res.status(404).json({ error: 'Favorite not found' });
	// };

	// const newName = name || favorite.name;
	// const newUrl = url || favorite.url;

	const result = db.prepare('UPDATE favorites SET name=COALESCE(?, name), url=COALESCE(?, url) WHERE id=?').run(name, url, id);

	if (!result.changes) {
		return res.status(404).json({ error: "Favorite not found" })
	}
	
	res.sendStatus(200);
});

app.use((err, req, res, next) => {
	console.log(err);
	if (err.name === 'sqliteError') {
		console.log('Db error hit!')
	}
	next(err);
});


app.listen(port, () => {
	console.log(`App is running http://localhost:${port}...`)
});