# Merge Two Sorted Lists

# Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

# Example 1:


# Input: l1 = [1,2,4], l2 = [1,3,4]
# Output: [1,1,2,3,4,4]
# Example 2:

# Input: l1 = [], l2 = []
# Output: []
# Example 3:

# Input: l1 = [], l2 = [0]
# Output: [0]
 

# Constraints:

# The number of nodes in both lists is in the range [0, 50].
# -100 <= Node.val <= 100
# Both l1 and l2 are sorted in non-decreasing order.

# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution(object):
    def mergeTwoLists(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        dummy = current = ListNode()
        node_a = l1
        node_b = l2
        
        while node_a and node_b:
            if node_a.val < node_b.val:
                current.next = node_a
                node_a = node_a.next
            else: 
                current.next = node_b
                node_b = node_b.next
            current = current.next
        
        current.next = node_a if node_a else node_b
        
        return dummy.next

    