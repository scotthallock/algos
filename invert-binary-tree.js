/*
https://leetcode.com/problems/invert-binary-tree/

Given the root of a binary tree, invert the tree, and return its root.
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const invertTree = (root) => {
  // Base case: if the root is null, return
  if (root === null) return root;

  // Swap the left and right pointers
  [root.left, root.right] = [root.right, root.left];

  // Invoke invertTree on the left and right children to continue...
  invertTree(root.left);
  invertTree(root.right);

  return root;
};
