/* 
1160. Find words that can be formed by characters
You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.

 

Example 1:

Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: 
The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
Example 2:

Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: 
The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 

Note:

1 <= words.length <= 1000
1 <= words[i].length, chars.length <= 100
All strings contain lowercase English letters only.
*/


var countCharacters = function(words, chars) {
  let charCounts = {};
  for(let i = 0; i < chars.length; i++){
      let letter = chars[i];
      if(charCounts[letter]){
          charCounts[letter]++; 
      } else {
          charCounts[letter] = 1;
      }
  }
  
  let validChars = Object.keys(charCounts);
  let total = 0;
  
  for(let i = 0; i < words.length; i++){
      
      let word = words[i];
      let letterCount = {}
      let valid = true;
      
      for(let j = 0; j < word.length; j++){
          let letter = word[j];
          if(letterCount[letter]){
              letterCount[letter]++; 
          } else {
              letterCount[letter] = 1;
          }
          if(!charCounts[letter] || letterCount[letter] > charCounts[letter]){
              valid = false;
          }
      }
      
      if(valid) total += word.length;

  }
  
  return total; 
};
