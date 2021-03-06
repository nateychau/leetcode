// 349. Intersection of Two Arrays
// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:

// Each element in the result must be unique.
// The result can be in any order.

var intersection = function(nums1, nums2) {
  const intersectionSet = new Set();
  const outputSet = new Set();
  for(let i = 0; i < nums1.length; i++) {
      intersectionSet.add(nums1[i]);
  }
  
  for(let i = 0; i < nums2.length; i++) {
      if (intersectionSet.has(nums2[i])) {
          outputSet.add(nums2[i]);
      }
  }
  
  return Array.from(outputSet);
};