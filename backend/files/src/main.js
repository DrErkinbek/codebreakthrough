// import { exec } from 'child_process';
import open from 'open';
const args = process.argv.slice(2);
const command = args[0];
const favorite = args[1];
const url = args[2];

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
	open(url);
}

function add(favorite, url) {
	console.log('adding', favorite, url);
}

function rm() {
	console.log('rm', favorite);
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
