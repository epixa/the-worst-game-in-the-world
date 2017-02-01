'use strict';

class Readme {
  constructor(fileContents) {
    this.fileContents = fileContents;
  }

  get players() {
    const playersLines = this.fileContents.match(/\n?\*\s(.+)\s\(\[(\w+)\]/gi);
  }
};

module.exports = {
  Readme
};
