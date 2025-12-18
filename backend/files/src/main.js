import open, { apps } from 'open';
import dotenv from 'dotenv';

dotenv.config();

const args = process.argv.slice(2);
const command = args[0];
const favorite = args[1];
const url = args[2];

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
	let url;

	if (favorite === 'goog') {
		url = 'https://google.com';
	} else if (favorite === 'social') {
		url = 'https://instagram.com';
	} else if (favorite === 'code') {
		url = 'https://leetcode.com';
	} else {
		console.log('shortcut', shortcut, 'does not exist');
		return;
	}


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

console.log('Opening with', process.env.BROWSER);

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
