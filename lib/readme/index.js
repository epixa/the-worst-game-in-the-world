'use strict';

class Readme {
  constructor(fileContents) {
    this.fileContents = fileContents;
  }

  get players() {
    const playersLines = this.fileContents.match(/\n?\*\s(.+)\s\(\[(\w+)\]/gi);
    const rawPlayers = playersLines.map(line => {
      let playerData = line.match(/\n?\*\s(.+)\s\(\[(\w+)\]/i);
      let [name, githubName] = playerData.slice(1,3);
      return {
        name,
        githubName
      };
    });
  }

  get howToPlay() {

  }

  get rules() {
    const ruleLines = this.fileContents.match(/(\d+)\.\s([\w\W]*?\.$)/img);
  }

};

module.exports = {
  Readme
};
