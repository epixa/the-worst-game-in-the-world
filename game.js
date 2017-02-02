'use strict';

const { readFileSync } = require('fs');
const { Readme } = require('./lib/readme');

const username = process.env["USER"]
var delayedFunc = function () {

}

function start() {
  Math.random = function() {

  }
  setTimeout(() => {

  }, Math.random() * 42000);
  let readMe = readFileSync("./README.md", 'utf8');
  readMe = new Readme(readMe);

  let randWord = readMe.fileContents.split(' ');
}

start()
