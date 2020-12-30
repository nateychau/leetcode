# 46. Permutations
# Example 1:

# Input: nums = [1,2,3]
# Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
# Example 2:

# Input: nums = [0,1]
# Output: [[0,1],[1,0]]
# Example 3:

# Input: nums = [1]
# Output: [[1]]
 

# Constraints:

# 1 <= nums.length <= 6
# -10 <= nums[i] <= 10
# All the integers of nums are unique.

class Solution(object):
    def permute(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        output = []
        self.backtrack(nums, output, [])
        return output
    
    def backtrack(self, nums, output, current):
        if not nums:
            output.append(current)
        
        for i in range(len(nums)):
            el = nums[i]
            self.backtrack(nums[:i] + nums[i+1:], output, current + [el])