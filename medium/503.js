// 503. Next Greater Element II
// Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element. The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, output -1 for this number.

// Example 1:
// Input: [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2; 
// The number 2 can't find next greater number; 
// The second 1's next greater number needs to search circularly, which is also 2.
// Note: The length of given array won't exceed 10000.

// ---------------NOTE----------------
// The below can be optimized by doing just two linear passes, saving greatest to stack 

var nextGreaterElements = function(nums) {
  if(!nums.length) return [];
  let max = -Infinity;
  for(let i = 0; i < nums.length; i++) {
      max = Math.max(max, nums[i]);
  }
 

  const output = new Array(nums.length);
  const stack = [];
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] === max) {
          output[i] = -1; 
          while(stack.length) {
              output[stack.pop()] = i;
          }
      } else {
          if(nums[i] < nums[i+1]) {
              output[i] = nums[i+1];
              while(nums[stack[stack.length-1]] < nums[i+1]) {
                  output[stack.pop()] = nums[i+1];
              }
          }
          else {
              stack.push(i);
          }
      }
  }

  while(stack.length) {
          let num = stack.pop();
          for(let i = 0; i < nums.length; i++){
              if(nums[num] < nums[i]) {
                  output[num] = nums[i];
                  break;
              }
          }
      }
  
  return output;
};


// scan through array looking for max
// scan through array again:
//     if element is max, set -1 in output array
//         mark max's index for all other elements in stack
//     else compare element with next
//         if its less or equal
//             add element to stack
//         if next is greater
//             mark next's in output
//             while the top element is less than next
//                 mark next's output in output