/*
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const lowestCommonAncestor = (root, p, q) => {
  // If p.val or q.val is equal to root.val,
  // that means the root is the answer!
  if (p === root || q === root) {
    return root;
  }

  const smaller = Math.min(p.val, q.val);
  const larger = Math.max(p.val, q.val);

  // If p and q are on different subtrees,
  // that means the root is the answer!
  if (smaller < root.val && larger > root.val) {
    return root;
  }

  if (smaller < root.val && larger < root.val) {
    // Both p and q exist in the left subtree
    return lowestCommonAncestor(root.left, p, q);
  }
  // Both p and q exist in the right subtree
  return lowestCommonAncestor(root.right, p, q);
};
