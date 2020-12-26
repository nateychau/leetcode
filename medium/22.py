# 22. Generate Parentheses
# Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

# Example 1:

# Input: n = 3
# Output: ["((()))","(()())","(())()","()(())","()()()"]
# Example 2:

# Input: n = 1
# Output: ["()"]
 

# Constraints:

# 1 <= n <= 8


# backtrack 
class Solution(object):
    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        output = []
        self.backtrack(output, "", 0, 0, n)
        return output
    
    
    def backtrack(self, output, current, open, close, n):
        if(len(current)/2 == n):
            output.append(current)
            return 
        
        if(open < n):
            self.backtrack(output, current+"(", open+1, close, n)
        if(close < open):
            self.backtrack(output, current+")", open, close+1, n)