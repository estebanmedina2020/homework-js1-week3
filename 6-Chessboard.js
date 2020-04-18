/*
Chessboard
Write a program that creates a string that represents an 8�8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height
*/

// Initialize the board
let board = "";
let rows = 0;

// Iterate through rows
while (rows < 8) {
  let cols = 0;
  let previousHashed;

  if (rows % 2 === 0) {
    previousHashed = true;
  } else {
    previousHashed = false;
  }

  while (cols < 8) {
    if (previousHashed) {
      board += " ";
    } else {
      board += "#";
    }
    previousHashed = !previousHashed;
    cols++;
  }
  board += "\n";
  rows++;
}
// Print out the chessboard
console.log(board);

/*
// Initialize the board
var board = "";
var rows = 0;

// Iterate through rows
while (rows < 8) {

    // Reset the columns counter
    var cols = 0;

    var previousHashed;

    // Seed the previousHashed to indicate if the previous was a hash or empty
    if (rows % 2 === 0) {
        previousHashed = true
    } else {
        previousHashed = false;
    }

    // Iterate through the columns
    while (cols < 8) {


        if (previousHashed) {
            // If the last was a hash, this should be an empty string
            board += ' ';
        } else {
            // Follow empty strings with hashes
            board += '#';
        }

        // Switch the previousHashed for use in the next decision
        previousHashed = !previousHashed;

        // Increment the columns counter
        cols++;
    }

    // Add a new line after each column
    board += "\n";

    // Increment the rows
    rows++;
}

// Print out the chessboard
console.log(board);
*/
