/*
20. Valid parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

var isValid = function(s) {
  if(!s.length) return false;
  let chars = {
      '(': ')',
      '[': ']',
      '{': '}'
  }
  
  let stack = [];
  for(let i = 0; i<s.length; i++){
      if(Object.keys(chars).includes(s[i])){
          stack.push(s[i]);
      } else{
          if(s[i] !== chars[stack.pop()]) return false;
      }
  }
  return stack.length === 0;
};