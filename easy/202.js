/* 
202. Happy Number
Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.

Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/

var isHappy = function(n) {
  let set = new Set();
  set.add(n);
  
  while (n !== 1){
      
      let sum = 0;
      
      while (n !== 0){
          let ones = n%10; 
          sum += ones*ones;
          n = Math.floor(n/10);
      }
      
      n = sum;
      
      if(set.has(n)){
          return false;
      } else {
          set.add(n);
      }
  }
  
  return true;
};
