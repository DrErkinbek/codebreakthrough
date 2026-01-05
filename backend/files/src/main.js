#!/usr/bin/env node
import open, { apps } from 'open';
import dotenv from 'dotenv';
import fs from 'fs';
import * as SDK from './lib/sdk.js';

dotenv.config();

SDK.setBaseURL(process.env.API_URL || 'http://127.0.0.1:3000');

const args = process.argv.slice(2);
const command = args[0];
const favorite = args[1];
const url = args[2];

const favorites = await SDK.getFavorites();

/* ---------- Browser ---------- */

function checkBrowser() {
  const browser = process.env?.BROWSER?.toLowerCase();
  switch (browser) {
    case 'chrome': return apps.chrome;
    case 'firefox': return apps.firefox;
    case 'edge': return apps.edge;
    default: return null;
  }
}

/* ---------- Commands ---------- */

const openFavorite = async (name) => {
  const fav = favorites.find(f => f.name === name);
  if (!fav) {
    console.log(`Favorite ${name} does not exist`);
    process.exit(1);
  }

  const app = checkBrowser();
  app ? open(fav.url, { app: { name: app } }) : open(fav.url);
};

const add = async (name, url) => {
  const id = await SDK.addFavorite(name, url);
  console.log('added:', name, url, id);
};

const rm = async (name) => {
  const fav = favorites.find(f => f.name === name);
  if (!fav) {
    console.log(`Favorite ${name} does not exist`);
    process.exit(1);
  }
  await SDK.deleteFavorite(fav.id);
  console.log('removed:', name);
};

const ls = async () => {
  console.log('All favorites:');
  favorites.forEach(f => console.log(`${f.name}: ${f.url}`));
};

/* ---------- Command map ---------- */

const commands = {
  ls: { argCount: 0, f: ls },
  open: { argCount: 1, f: openFavorite },
  add: { argCount: 2, f: add },
  rm: { argCount: 1, f: rm },
};

function displayMenu() {
  console.log('ls                   : List all favorites');
  console.log('open <favorite>      : Open a saved favorite');
  console.log('add <favorite> <url> : Add a new favorite');
  console.log('rm <favorite>        : Remove a favorite');
}

/* ---------- Dispatch ---------- */

if (!command || !commands[command] || args.length - 1 < commands[command].argCount) {
  displayMenu();
  process.exit(1);
}

await commands[command].f(favorite, url);
