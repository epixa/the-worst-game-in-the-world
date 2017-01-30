# The worst game in the world

This software is not a game. The game is *writing* this software.

Software is the worst, and JavaScript is the worst way to create it, so this is
the worst game in the world.

## The Players

* Celso Dantas ([celsodantas](https://github.com/celsodantas))
* Court Ewing ([epixa](https://github.com/epixa))
* Kurt Funai ([kurtfunai](https://github.com/kurtfunai))
* Uri Gorelik ([uri](https://github.com/uri))
* Alex "Iceman" Pilon ([madmub](https://github.com/MadMub))
* Pat Vice ([patvice](https://github.com/patvice))

## How to Play

The players each take turns in sequence. The current player writes a statement
in JavaScript and commits that statement to the repo. The next player
contributes to the program by writing a new statement in JavaScript and
committing that to the repo. This process continues indefinitely.

Run the game with:

```
node game
```

Note: The game will try to track the latest stable version of node.js.

## The Goal

There is no goal.

## The Rules

1. At no time can any players discuss potential outcomes or goals of this
program with any other player.
2. Players cannot modify existing statements other than to fix compiler errors
or to add to things like destructuring assignments, arguments, or imports.
3. Fixing compiler errors in existing code does not count as a turn, and anyone
can do it at any time.
4. Any player that contributes code that results in a compiler error is to be
mocked mercilessly and publicly, where possible.
5. New players can join the game at any time by submitting a pull request to
this readme with their github information.
6. The rules of the game can change at any time so long as there is consensus
amongst the players.
7. Players should attempt to format code in such away to encourage
contributions from other players. In other words, leave space in your blocks
for more code.
8. Adding or modifying import statements must be done in the same turn as the
creation of the shell of the corresponding export.
9. Wherever possible, players should attempt to "complete" dangling code paths
rather than adding new ones. For example, if there is an empty or clearly
useless `if` statement, contribute to that `if` statement rather than starting
some new block.
10. Players must always use brackets for loops and conditionals so other
players can add new statements if they desire.
11. Each player must complete their turn in 24 hours otherwise their turn is
skipped.
12. Players must be in the spirit of the game and must not intentionally make
the next player's turn more difficult.
13. Any disputes about turn duration, overlap, skipping, code quality, code
style shall be resolved with loud arguments and/or civil pull requests to
clarify rules. However, loud pull requests and civil arguments will not be
tolerated.
14. Files should `'use strict';`, which does not count as a turn.
15. Player order is alphabetical by last name.
16. So players can forever reference them by number, game rules should always
be added as new numbers. If any game rule is removed, it should be crossed out
to preserve both subsequent rule numbers and the shame of the person that wrote
the original, now-rejected rule.
17. It is up to the player who has the next turn to merge the commit from the
previous turn. If that player who is merging the commit thinks that a rule has
been broken within the commit, they may initiate a vote on wether or not the
commit should be merged. The player that initiated the vote should state what
rule they think has been broken, and why. The player that made the pr should make a
case for why their commit did not break the previously stated rule (unless they
 do not want there commit to be merged :stuck_out_tongue:).
**Voting:** The commit will be merged if there is an even or great number of
votes in favour of merging the commit. If the vote fails, the "evil" commit
is not merged, the pr is closed and the player that initiated the vote may continue
there turn as normal.
**Note:** Even though it is up to the person merging the commit to initiate the
 vote, discussion are always welcome / encourage in turn pr's. Players may also
 try to convince other players to initiate a vote.

## Examples of legal turns

```js
const foo = 'bar';
```

```js
while (true) {

}
```

```js
function nowai() {

}
```

```js
const foo = require('./foo');

// only if you also create a foo.js file with a default export:
// foo.js
module.exports = function () {

};
```

## Examples of illegal turns

```js
// too much for one turn
while (true) {
  const foo = 'bar';
}
```

```js
// compiler error
const foo =
```

```js
// leave the brackets open for future code
if (foo) {}

// no brackets AND two statements, jerk
if (foo) return;
```
