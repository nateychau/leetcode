# 33. Search in Rotated Sorted Array
# You are given an integer array nums sorted in ascending order, and an integer target.

# Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

# If target is found in the array return its index, otherwise, return -1.

# Example 1:

# Input: nums = [4,5,6,7,0,1,2], target = 0
# Output: 4
# Example 2:

# Input: nums = [4,5,6,7,0,1,2], target = 3
# Output: -1
# Example 3:

# Input: nums = [1], target = 0
# Output: -1
 

# Constraints:

# 1 <= nums.length <= 5000
# -10^4 <= nums[i] <= 10^4
# All values of nums are unique.
# nums is guranteed to be rotated at some pivot.
# -10^4 <= target <= 10^4

class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
       
        if not nums:
            return -1
        
        low, high = 0, len(nums)-1
        
        while low <= high:
            mid = (low+high)//2

            if nums[mid] == target:
                return mid

            #right side of original sorted array
            #ex: [4, 5, 6, (7), 0, 1, 2]
            #need >= becuase mid will be 0 if length is 2 (high = 1 -> 1//2 = 0)
            if nums[mid] >= nums[0]: 
                if nums[low] <= target < nums[mid]:
                    high = mid - 1
                else:
                    low = mid + 1
                    
            #left side of original sorted array
            #ex: [6, 7, 0, (1), 2, 4, 5]
            elif nums[mid] < nums[0]:
                if nums[mid] < target <= nums[high]:
                    low = mid + 1
                else:
                    high = mid - 1
        
        return -1