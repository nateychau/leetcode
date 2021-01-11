// This question is about implementing a basic elimination algorithm for Candy Crush.

// Given a 2D integer array board representing the grid of candy, different positive integers board[i][j] represent different types of candies. A value of board[i][j] = 0 represents that the cell at position (i, j) is empty. The given board represents the state of the game following the player's move. Now, you need to restore the board to a stable state by crushing candies according to the following rules:

// If three or more candies of the same type are adjacent vertically or horizontally, "crush" them all at the same time - these positions become empty.
// After crushing all candies simultaneously, if an empty space on the board has candies on top of itself, then these candies will drop until they hit a candy or bottom at the same time. (No new candies will drop outside the top boundary.)
// After the above steps, there may exist more candies that can be crushed. If so, you need to repeat the above steps.
// If there does not exist more candies that can be crushed (ie. the board is stable), then return the current board.
// You need to perform the above rules until the board becomes stable, then return the current board.


var candyCrush = function(board) {
  let keepCrushing = true;
  
  //any time candies are crushed, reset keepCrushing to true to search again
  while (keepCrushing) {
      keepCrushing = false;
      
      //scan through board, looking for triplets to crush.
      //To mark positions as crushable, flip them to negative
      for(let row = 0; row < board.length; row++) {
          for(let col = 0; col < board[0].length; col++){
              const candy = Math.abs(board[row][col]);
              if (!candy) continue; 

              if (Math.abs(board[row][col+1]) === candy && Math.abs(board[row][col+2]) === candy) {
                  keepCrushing = true;
                  board[row][col+1] = -1 * Math.abs(board[row][col+1]);
                  board[row][col+2] = -1 * Math.abs(board[row][col+2]);
                  board[row][col] = -1 * Math.abs(board[row][col]);
              }

              if (board[row+1] && Math.abs(board[row+1][col]) === candy && board[row+2] && Math.abs(board[row+2][col]) === candy) {
                  keepCrushing = true;
                  board[row+1][col] = -1 * Math.abs(board[row+1][col]);
                  board[row+2][col] = -1 * Math.abs(board[row+2][col]);
                  board[row][col] = -1 * Math.abs(board[row][col]);
              }
          }
      }
  
      //loop through each columns rows, saving positive values to a stack,
      //and then fill up the column with remaining candies, starting from bottom
      for(let col = 0; col < board[0].length; col++) {
          let candies = [];
          for (let row = 0; row < board.length; row++) {
              if(board[row][col] > 0) candies.push(board[row][col]);
          }
      
          for (let row = board.length - 1; row >= 0; row--) {
              board[row][col] = candies.length ? candies.pop() : 0;
          }
      }
  }
  
  return board;
};