/*
200. Number of Islands

Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
*/


/*
general strategy: 
scan through matrix, looking for land (1's). When you encounter land, 
recursively visit all adjacent elements to figure out how far that island extends

*DFS*
-for adjacent elements: 
  -if water, stop searching in that direction (return)
  -if land, change to water (0) to prevent visiting that square again, and then 
    visit that squares adjacent squares
*/
var numIslands = function(grid) {
  if (!grid.length) return 0;
  
  let x = grid.length; //width of matrix
  let y = grid[0].length; //height of matrix
  let count = 0; //counter to keep track of islands
  
  for(let i = 0; i < x; i++){ //double for loop to scan matrix
      for(let j = 0; j < y; j++){
          if(grid[i][j] === '1'){ //when  you encounter land, recursively check adjacent squares
              dfs(grid, i, j);
              count++; //increment count to show that this is all 1 island visited
          }   
      }
  }
  return count; 
};

//helper function to visit adjacent squares
var dfs = function(grid, i, j){
  //dont visit this square (or keep visiting squares adjacent to this one) if
  //it doesnt exist (i or j is not on the grid)
  //its already been visited/its water (grid value is 0)
  if(i < 0 || j < 0 || i >= grid.length || j >=grid[0].length || grid[i][j] === '0') return; 

  //otherwise mark it is visited by changing it to water
  grid[i][j] = '0';

  //then continue searching adjacent squares
  dfs(grid, i+1, j);
  dfs(grid, i, j+1);
  dfs(grid, i-1, j);
  dfs(grid, i, j-1);
}