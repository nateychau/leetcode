# 430. Flatten a Multilevel Doubly Linked List
# You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

# Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

 

# Example 1:

# Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
# Output: [1,2,3,7,8,11,12,9,10,4,5,6]

class Solution:
    def flatten(self, head: 'Node') -> 'Node':
        if not head:
            return head
        
        dummy = prev = Node()
        stack = [head]
        
        while stack:
            current = stack.pop()
            current.prev = prev
            prev.next = current
            
            if current.next:
                stack.append(current.next)
            if current.child:
                stack.append(current.child)
                current.child = None
            
            prev = current
        
        dummy.next.prev = None
        return dummy.next