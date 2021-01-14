// 515. Find Largest Value in Each Tree Rowe
// Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).
// Example 1:
// Input: root = [1,3,2,5,3,null,9]
// Output: [1,3,9]
// Example 2:

// Input: root = [1,2,3]
// Output: [1,3]
// Example 3:

// Input: root = [1]
// Output: [1]
// Example 4:

// Input: root = [1,null,2]
// Output: [1,2]
// Example 5:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree will be in the range [0, 104].
// -231 <= Node.val <= 231 - 1

var largestValues = function (root) {
  if (!root) return [];

  const output = [];
  dfs(root, 0, output);

  return output;
};

function dfs(node, row, output) {
  if (output[row] === undefined) {
    output[row] = node.val;
  } else {
    output[row] = Math.max(output[row], node.val);
  }

  if (node.left) {
    dfs(node.left, row + 1, output);
  }

  if (node.right) {
    dfs(node.right, row + 1, output);
  }
}
