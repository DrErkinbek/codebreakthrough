#!/usr/bin/env node
import open, { apps } from 'open';
import dotenv from 'dotenv';
import fs from 'fs';
import { Favorite } from './types.js';
import * as SDK from './lib/sdk.js';

SDK.setBaseURL('http://127.0.0.1:3000');
dotenv.config();

const args = process.argv.slice(2);
const command = args[0];
const favorite = args[1];
const url = args[2];



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

interface Command {
  f: Function;
  argCount: number;
}

interface Commands {
  [key: string]: Command;
}

const commands = {
  ls: {f: ls, argCount: 1 },
  open: {f: openFavorite, argCount: 2  },
  add: { f: add, argCount: 3 },
  rm: { f: rm, argCount: 4 },
} as Commands;

function displayMenu() {
  console.log('ls                   : List all favorites');
  console.log('open <favorite>      : Open a saved favorite');
  console.log('add <favorite> <url> : Add a new favorite');
  console.log('rm <favorite>        : Remove a favorite');
}

/* ---------- Dispatch ---------- */
if (argCount === 0 || !commands[command]
  || argCount < commands[command].argCount) {
  displayMenu();
  process.exit(1);
}

await commands[command].f(favorite, url);
