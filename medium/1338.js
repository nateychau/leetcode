// 1338. Reduce Array Size to The Half
// Given an array arr.  You can choose a set of integers and remove all the occurrences of these integers in the array.

// Return the minimum size of the set so that at least half of the integers of the array are removed.

// Example 1:

// Input: arr = [3,3,3,3,5,5,5,2,2,7]
// Output: 2
// Explanation: Choosing {3,7} will make the new array [5,5,5,2,2] which has size 5 (i.e equal to half of the size of the old array).
// Possible sets of size 2 are {3,5},{3,2},{5,2}.
// Choosing set {2,7} is not possible as it will make the new array [3,3,3,3,5,5,5] which has size greater than half of the size of the old array.
// Example 2:

// Input: arr = [7,7,7,7,7,7]
// Output: 1
// Explanation: The only possible set you can choose is {7}. This will make the new array empty.
// Example 3:

// Input: arr = [1,9]
// Output: 1
// Example 4:

// Input: arr = [1000,1000,3,7]
// Output: 1
// Example 5:

// Input: arr = [1,2,3,4,5,6,7,8,9,10]
// Output: 5
 

// Constraints:

// 1 <= arr.length <= 10^5
// arr.length is even.
// 1 <= arr[i] <= 10^5


//O(n) solution is possible with bucket sort
var minSetSize = function(arr) {
  const counts = {}; 
for (let i = 0; i < arr.length; i++) {
      if (!counts[arr[i]]) {
          counts[arr[i]] = 1;
      } else {
          counts[arr[i]]++; 
      }
  }

  let orderedValues = Object.values(counts).sort((a,b) => {
      return a - b
  });

  let length = arr.length; 
  let count = 0;
  while (length > arr.length/2) {
      let key = orderedValues.pop();
      count++;
      length -= key;
  }

  return count; 

};