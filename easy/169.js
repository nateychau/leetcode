/*
169. Majority Element  

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
*/

//NOTE: many other ways to solve this ie sorting and taking middle index, randomization, DnC
var majorityElement = function(nums) {
  let hash = {};
  for(let i = 0; i < nums.length; i++){
      if(hash[nums[i]]){
          hash[nums[i]]++;
      }else{
          hash[nums[i]] = 1;
      }
      if(hash[nums[i]] > nums.length/2) return nums[i];
  }
};