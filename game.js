'use strict';

const { readFileSync } = require('fs');
const { Readme } = require('./lib/readme');

const username = process.env["USER"]

function start() {
  let readMe = readFileSync("./README.md", 'utf8');
}

start()
