# 2. Add Two Numbers
# You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

# You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

# Example 1:


# Input: l1 = [2,4,3], l2 = [5,6,4]
# Output: [7,0,8]
# Explanation: 342 + 465 = 807.
# Example 2:

# Input: l1 = [0], l2 = [0]
# Output: [0]
# Example 3:

# Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
# Output: [8,9,9,9,0,0,0,1]
 

# Constraints:

# The number of nodes in each linked list is in the range [1, 100].
# 0 <= Node.val <= 9
# It is guaranteed that the list represents a number that does not have leading zeros.

class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        dummy = curr = ListNode()
        carry = 0
        while l1 or l2:
            if l1 and l2:
                sum = l1.val + l2.val + carry
            elif l1:
                sum = l1.val + carry
            else: #l2 is not null
                sum = l2.val + carry
                
            if sum >= 10:
                carry = sum // 10
                sum %= 10
            else:
                carry = 0
           
            curr.next = ListNode(sum)
            curr = curr.next
           
            if l1:
                l1 = l1.next
            if l2: 
                l2 = l2.next
                
        if carry:
            curr.next = ListNode(carry)
            
        return dummy.next