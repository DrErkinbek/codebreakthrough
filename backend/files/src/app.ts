#!/usr/bin/env node
import open, { apps } from 'open';
import dotenv from 'dotenv';
import fs from 'fs';
import * as SDK from './lib/sdk.js';

SDK.setBaseURL('http://127.0.0.1:3000');
dotenv.config();

const args = process.argv.slice(2);
const command = args[0];
const favorite = args[1];
const url = args[2];

interface Favorite {
  id: number;
  name: string;
  url: string;
}

const favorites: Favorite[] = await SDK.getFavorites();

/* ---------- Browser ---------- */

function checkBrowser() {
  const browser = process.env?.BROWSER?.toLocaleLowerCase();
  let appName: string | readonly string[] | undefined = browser!;

  switch (browser) {
    case 'chrome': return apps.chrome;
    case 'firefox': return apps.firefox;
    case 'edge': return apps.edge;
    default: return null;
  }
}

/* ---------- Commands ---------- */

function openFavorite(name: string){
  const favToOpen = favorites.find((fav) => fav.name === name);

  if (!favToOpen){
    console.log(`Favorite ${name} does not exist`);
    process.exit(1)
  }

  const url = favToOpen.url;
  console.log('opening', url);
  const appName = checkBrowser();

  if (appName){
    open(url, { app: { name: appName } });
  } else{
    open(url);
  }
};

const add = async (name: string, url: string) => {
  const id = await SDK.addFavorite(name, url);
  console.log('added:', favorite, url);
  if (!id){
    console.log(`Failed to add favorite ${name}`);
    process.exit(1);
  }
};

const rm = async (name: string) => {
  const favToDelete = favorites.find((fav: Favorite) => fav.name === name);

  if (!favToDelete){
    console.log(`Favorite ${name} does not exist`);
    process.exit(1);
  }
  await SDK.deleteFavorite(favToDelete.id);
  console.log('removed:', name);
};

const ls = async () => {
  console.log('All favorites:');
  favorites.forEach(f => console.log(`${f.name}: ${f.url}`));
};

/* ---------- Command map ---------- */
const argCount = args.length;

const commands = {
  ls: {f: ls, argCount: 1 },
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
