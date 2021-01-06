# 19. Remove Nth Node From End of List
# Given the head of a linked list, remove the nth node from the end of the list and return its head.

# Follow up: Could you do this in one pass?

# Example 1:

# Input: head = [1,2,3,4,5], n = 2
# Output: [1,2,3,5]
# Example 2:

# Input: head = [1], n = 1
# Output: []
# Example 3:

# Input: head = [1,2], n = 1
# Output: [1]
 
# Constraints:

# The number of nodes in the list is sz.
# 1 <= sz <= 30
# 0 <= Node.val <= 100
# 1 <= n <= sz


#1 pass solution
class Solution(object):
    def removeNthFromEnd(self, head, n):
        """
        :type head: ListNode
        :type n: int
        :rtype: ListNode
        """
        if not head.next:
            return None
        
        counter = 0
        slow = fast = head
        while counter < n:
            fast = fast.next
            counter += 1
            
        if not fast:
            return head.next 
        
        while fast.next:
            fast = fast.next
            slow = slow.next
        
        slow.next = slow.next.next if slow.next else slow.next
        
        return head


#2 pass solution
class Solution(object):
    def removeNthFromEnd(self, head, n):
        """
        :type head: ListNode
        :type n: int
        :rtype: ListNode
        """
        if not head.next:
            return None
        
        length = 1
        node = head
        while node.next:
            node = node.next
            length += 1
        
        if length == n:
            return head.next
        
        node = head
        while length-1 > n:
            node = node.next
            length -= 1
        
        node.next = node.next.next if node.next else node.next
        return head
        