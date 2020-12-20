/*
238. Product of Array except Self
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

var productExceptSelf = function(nums) { //5,2,6,4 //48, 120, 40, 60 //1, 120, 40, 60
  let output = [];
  for(let i = 0; i < nums.length; i++){
      output.push(1);
  }
  
  let runningProduct = 1;
  for(let i = 0; i < nums.length - 1; i++){
      runningProduct *= nums[i];
      output[i + 1] *= runningProduct;
  }
  
  runningProduct = 1;
  for(let i = nums.length - 1; i > 0; i--){
      runningProduct *= nums[i];
      output[i - 1] *= runningProduct;
  }
  
  return output;
  
};