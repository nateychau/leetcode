// 79. Word Search
// Given an m x n board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
// Example 1:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Example 2:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Example 3:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false
 
// Constraints:
// m == board.length
// n = board[i].length
// 1 <= m, n <= 200
// 1 <= word.length <= 103
// board and word consists only of lowercase and uppercase English letters.


var exist = function(board, word) {
  for(let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[0].length; col++) {
          if (checkSquare(board, row, col, word, 0)) return true;    
      }
  }
  return false; 
};

function checkSquare(board, row, col, word, letterIdx) {
  if(letterIdx >= word.length) return true;
  
  if (row < 0 || row === board.length || col < 0 || col === board[0].length || board[row][col] !== word[letterIdx]){
    return false;  
  }     

  board[row][col] = false;
  if(checkSquare(board, row-1, col, word, letterIdx+1)) return true;
  if(checkSquare(board, row, col+1, word, letterIdx+1)) return true;
  if(checkSquare(board, row+1, col, word, letterIdx+1)) return true;
  if(checkSquare(board, row, col-1, word, letterIdx+1)) return true;
  
  board[row][col] = word[letterIdx]
  
  return false
}

