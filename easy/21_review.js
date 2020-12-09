/*
21. Merge 2 Sorted Lists

Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

 

Example 1:


Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: l1 = [], l2 = []
Output: []
Example 3:

Input: l1 = [], l2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.
*/

var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(0); //dummy node useful when merging LL
  let current = dummy; 
  while (l1 && l2){
      if(l1.val < l2.val){
          current.next = l1;
          l1 = l1.next;
      } else {
          current.next = l2;
          l2 = l2.next;
      }
      current = current.next;
  }
  current.next = l1 ? l1 : l2; 
  return dummy.next;
};