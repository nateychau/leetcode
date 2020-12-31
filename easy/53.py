# 53. Maximum Subarray
# Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

# Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.


# Example 1:

# Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
# Output: 6
# Explanation: [4,-1,2,1] has the largest sum = 6.
# Example 2:

# Input: nums = [1]
# Output: 1
# Example 3:

# Input: nums = [0]
# Output: 0
# Example 4:

# Input: nums = [-1]
# Output: -1
# Example 5:

# Input: nums = [-2147483647]
# Output: -2147483647


# Constraints:

# 1 <= nums.length <= 2 * 104
# -231 <= nums[i] <= 231 - 1


# inefficient - we can do better
class Solution(object):
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        greatest, curr, max_val = 0, 0, float('-inf')
        for num in nums:
            max_val = max(max_val, num)
            if num > num + curr:
                curr = num
            elif num + curr < 0:
                curr = 0
            else:
                curr += num

            greatest = max(curr, greatest)

        return greatest if greatest > 0 else max_val


# faster solution, cuts out a lot of the unnecessarry stuff
class Solution(object):
  def maxSubArray(self, nums):
      """
      :type nums: List[int]
      :rtype: int
      """
      if not nums:
          return 0
      
      greatest = curr = nums[0]
      for num in nums[1:]:
          curr = max(num, curr+num)
          greatest = max(greatest, curr)
      
      return greatest
