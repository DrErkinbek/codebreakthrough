import open, { apps } from 'open';
import dotenv from 'dotenv';
import Database from 'better-sqlite3';
import fs from 'fs';

let db;
const dbPath = 'favorites.db'
dotenv.config();

const args = process.argv.slice(2);
const command = args[0];
const favorite = args[1];
const url = args[2];

function init() {
	console.log('initializing database...');
	db = new Database(dbPath);

	const createTable = `
		CREATE TABLE IF NOT EXISTS favorites (
			id INTEGER PRIMARY KEY,
			name TEXT NOT NULL,
			url TEXT NOT NULL
		)
	`;

	db.exec(createTable);

	const data = [
		{ name: 'goog', url: 'https://google.com' },
		{ name: 'social', url: 'https://instagram.com' },
		{ name: 'news', url: 'https://yahoo.com' }
	];

	const insertData = db.prepare(
		'INSERT INTO favorites (name, url) VALUES (?, ?)'
	);

	data.forEach((favorite) => {
		insertData.run(favorite.name, favorite.url);
	});

}

function checkBrowser() {
	const browser = process.env?.BROWSER?.toLocaleLowerCase();
	let appName = browser;
	console.log(appName);

	switch (browser) {
		case 'chrome':
			appName = apps.chrome;
			break;
		case 'firefox':
			appName = apps.firefox;
			break;
		case 'edge':
			appName = apps.edge;
			break;
	}
	return appName;

}

function displayMenu() {
	console.log('open <favorite> 		: Open a saved favorite');
	console.log('add <favorite> <url> 	: add a new favorite for some URL');
	console.log('rm <favorite> 			: remove a saved favorite.');
}

function openFavorite(favorite) {
	const row = db.prepare('SELECT * FROM favorites WHERE name = ?').get(favorite);

	const url = row.url;
	console.log('opening', url);
	const appName = checkBrowser();

	if (appName) {
		open(url, {app: {name: appName }});
	} else {
		open(url);
	}

}

function add(favorite, url) {
	console.log('adding', favorite, url);
}

function rm() {
	console.log('rm', favorite);
}

if (!FileSystem.existsSync(dbPath)) {
	init();
} else {
	db = new Database(dbPath);
}

if (!command || !favorite || command === 'help') {
	displayMenu();
} else {
	switch (command) {
		case 'open':
			openFavorite(favorite);
			break;
		case 'add':
			if (!url) {
				throw new Error('url required');
			}
			add(favorite, url);
			break;
		case 'rm':
			rm(favorite);
			break;
	}
}
