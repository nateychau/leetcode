# 15. 3Sum
# Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

# Notice that the solution set must not contain duplicate triplets.

# Example 1:

# Input: nums = [-1,0,1,2,-1,-4]
# Output: [[-1,-1,2],[-1,0,1]]
# Example 2:

# Input: nums = []
# Output: []
# Example 3:

# Input: nums = [0]
# Output: []

# Constraints:

# 0 <= nums.length <= 3000
# -105 <= nums[i] <= 105

class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        output = []
        nums.sort()
        for i in range(len(nums)-2):    
            if i > 0 and nums[i] == nums[i-1]:
                continue 
                
            l,r = i+1, len(nums)-1
            while l < r:
                sum = nums[l] + nums[i] + nums[r]
                if sum > 0:
                    r -= 1
                elif sum < 0: 
                    l += 1 
                    
                else:
                    output.append([nums[l], nums[i], nums[r]])
                    while r > l and nums[r-1] == nums[r]:
                        r -= 1
                    while l < r and nums[l] == nums[l+1]:
                        l += 1
                    r -= 1
                    l += 1

        return output