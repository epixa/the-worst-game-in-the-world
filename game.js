'use strict';

const { readFileSync } = require('fs');
const { Readme } = require('./lib/readme');

const username = process.env["USER"]

function start() {
  setTimeout(() => {

  }, Math.random() * 42000);
  let readMe = readFileSync("./README.md", 'utf8');
}

start()
