# Readme

Have you ever played Minesweeper? It's a WINDOWS own game, It mainly tests the player's ability to think logically.
Here are some rules of the game that, maybe helpful to someone who hasn't played Minesweeper: ![Minesweeper game](https://i.imgur.com/3W4hpEW.png)

The goal of the game is to uncover all the squares that do not contain mines without being "blown up" by clicking on a square with a mine underneath. The location of the mines is discovered by a process of logic. Clicking on the game board will reveal what is hidden underneath the chosen square or squares (a large number of blank squares may be revealed in one go if they are adjacent to each other). Some squares are blank but some contain numbers (1 to 8), each number being the number of mines adjacent to the uncovered square. To help avoid hitting a mine, the location of a suspected mine can be marked by flagging it with the right mouse button. The game is won once all blank squares have been uncovered without hitting a mine, any remaining mines not identified by flags being automatically flagged by the computer. However, if a game is lost and the player mistakenly flags a safe square, that square will either appear with a red X covering the mine (denoting it as safe) or just a red X (also denoting it as safe).

## Task

In this kata, I'll give you a string map as a game map, and a number `n` means the total number of mines. like this:

```
map =
? ? ? ? ? ?
? ? ? ? ? ?
? ? ? 0 ? ?
? ? ? ? ? ?
? ? ? ? ? ?
0 0 0 ? ? ?

n = 6
```

Yes, you always get a matrix with some question marks, except for some 0(because I think you need a place to start your logical reasoning.).

Digit 0 means that no mine around here, so you can safely open the grids around 0. How to open the grid? I've preloaded a method `open`, and usage is `open(row, column)` (for Java users: `Game.open(int row, int column)`). It will return a number that is how many mines are around this grid. If there is an error in your logical reasoning, when you use the open method to open a grid, but there is a mine hidden in this grid, then the test will fail. Please note that the method `open` only returns a number, but does not modify the map, you should modify the map by yourself.

You opening more and more grids... Until all safe grids are opened and all mines in the grid are marked by 'x'. then return the result like this:

```
1 x 1 1 x 1
2 2 2 1 2 2
2 x 2 0 1 x
2 x 2 1 2 2
1 1 1 1 x 1
0 0 0 1 1 1
```

If the game can not get a valid result, should return "?". See following:

```
map =
0 ? ?
0 ? ?
n = 1

First you open two middle grids(get them using method
`open(0,1)` and `open(1,1)`), then got:

map =
0 1 ?
0 1 ?

Now, there is only one mine left, but there are two `?` left.
The mine can be hidden in any of them.

So you should return "?" as the result.
```

## Domain

We have a board of dimensions m \* n squares  
We have x number of mines where x is 1 or more shown as 💣  
We have a number of flags ☢️ which is also x to match the number of mines  
If a mine is exposed, it is shown as 💥
We start the game with an empty board visible to the user and a board with the mines set
The positions of each mine are known by the game at the start  
A turn is taken by either:

- guessing where a mine is by marking it with ☢️
- uncovering a square

There are 3 levels to the game:

- beginner uses a 9x9 board containing 10 mines
- intermediate uses a 16x16 board containing 40 mines
- expert uses a 30x16 board containing 99 mines

When a square is uncovered it can be:

- an exploding mine that ends the game
- show a number denoting the number of mines around that square
  - if there are no mines around the square, then further squares are uncovered until squares with bombs around them are shown

The game ends when:

- All the mines are flagged and there are no squares to uncover
- A mine explodes as we uncover it

### Entities

game

- board
  - squares
  - mines
  - flags
- status
- open square
- flag square
