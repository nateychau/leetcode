/*
17. Letter combinations of a phone number

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 
Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
*/

const map = {
  2: ['a','b','c'],
  3: ['d','e','f'],
  4: ['g','h','i'],
  5: ['j','k','l'],
  6: ['m','n','o'],
  7: ['p','q','r','s'],
  8: ['t','u','v'],
  9: ['w','x','y','z']
}


var letterCombinations = function(digits) { 
  
  let allPossible = [];
  
  if(!digits.length) return [];
  if(digits.length === 1) return map[parseInt(digits[0])]; 
  
  let remainingPossible = letterCombinations(digits.slice(1, digits.length));  
 
  let possibleLetters = map[digits[0]]; 

  for( let i = 0; i < possibleLetters.length; i++) {
      let letter = possibleLetters[i]; 
      let copy = [...remainingPossible]; 
      for(let n = 0; n < copy.length; n++) {
          copy[n] = letter + copy[n]; 
      }
      allPossible = allPossible.concat(copy);
  }
  return allPossible; 
  
};