/*
1315. Sum of nodes with even-valued grandparents
Given a binary tree, return the sum of values of nodes with even-valued grandparent.  (A grandparent of a node is the parent of its parent, if it exists.)

If there are no nodes with an even-valued grandparent, return 0.

Example 1:
Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 18
Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.
 

Constraints:

The number of nodes in the tree is between 1 and 10^4.
The value of nodes is between 1 and 100.
*/

var sumEvenGrandparent = function (root) {
  let toBeSummed = 0;
  let i = 0;
  let queue = [root];
  while (i < queue.length) {
    let node = queue[i];
    i++;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    if (node.val % 2 === 0) {
      if (node.left) {
        if (node.left.left) toBeSummed += node.left.left.val;
        if (node.left.right) toBeSummed += node.left.right.val;
      }
      if (node.right) {
        if (node.right.left) toBeSummed += node.right.left.val;
        if (node.right.right) toBeSummed += node.right.right.val;
      }
    }
  }
  return toBeSummed;
};
