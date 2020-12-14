/* 
5. Longest palindromic substring
Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters (lower-case and/or upper-case),
*/

class Solution {
  public String longestPalindrome(String s) {
      if(s == null || s.length() < 1) return "";
      int start = 0; //keep track of start and end index of longest palindromic substring
      int end = 0;
      
      for(int i = 0; i < s.length(); i++){
         //expand from middle using i as the middle element (results in palindrome with odd length)
          int oddLength = expandFromMiddle(s, i, i);
          //expand from middle using starting with characters on the left and right 
          //of the midpoint of a palindrome (results in even length)
          int evenLength = expandFromMiddle(s, i, i+1); 
          int longerLength = Math.max(oddLength, evenLength);
          if(longerLength > end - start + 1){
              end = i + longerLength/2; //end index of palindrome is half its length away from i
              start = i - (longerLength-1)/2; //-1 to account for string indexing
          }
      }
     
      
      return s.substring(start, end+1);
      
  }
  
  private int expandFromMiddle(String s, int left, int right){
      while(left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)){
          left--;
          right++;
      }
      //length would  be (right - 1) - (left + 1) + 1 because
      //we need to readjust right and left to account for 
      //the extra increment/decrement that happens before exiting loop
      return right - left - 1; 
  }
}