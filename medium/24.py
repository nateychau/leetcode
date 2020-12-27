# 24. Swap nodes in pairs 
# Given a linked list, swap every two adjacent nodes and return its head.

# You may not modify the values in the list's nodes. Only nodes itself may be changed.

# Example 1:

# Input: head = [1,2,3,4]
# Output: [2,1,4,3]
# Example 2:

# Input: head = []
# Output: []
# Example 3:

# Input: head = [1]
# Output: [1]
 

# Constraints:

# The number of nodes in the list is in the range [0, 100].
# 0 <= Node.val <= 100

class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution(object):
    def swapPairs(self, head):
        dummy = pre = ListNode(0) #dummy to hold return value
        pre.next = head
        
        #pre -> a -> b -> b.next to pre -> b -> a -> b.next
        while pre.next and pre.next.next:
            a = pre.next
            b = a.next
            pre.next, b.next, a.next = b, a, b.next
            pre = a #skip over b
        return dummy.next