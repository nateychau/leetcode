// 387. First Unique Character in a String
// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.
 

// Note: You may assume the string contains only lowercase English letters.


//hash map to track count
var firstUniqChar = function(s) {
  let occurrences = {}
  
  for(let i = 0; i < s.length; i++) {
      if (occurrences[s[i]]) occurrences[s[i]]++;
      else occurrences[s[i]] = 1;
  }
  
  for(let i = 0; i < s.length; i++) {
      if (occurrences[s[i]] === 1) return i
  }
  
  return -1
  
};

//2 sets
var firstUniqChar = function(s) {
  let seen = new Set();
  let invalid = new Set();
  
  for(let i = 0; i < s.length; i++) {
      if (seen.has(s[i])) invalid.add(s[i]);
      else seen.add(s[i]);
  }
  
  for(let i = 0; i < s.length; i++) {
      if (!invalid.has(s[i])) return i
  }
  
  return -1
  
};

