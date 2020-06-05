/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let maxDepth = function (root) {
  let max = 0
  let helper = (node, depth) => {
    if (!node) return
    max = Math.max(max, depth)
    if (node.left) {
      helper(node.left, depth + 1)
    }
    if (node.right) {
      helper(node.right, depth + 1)
    }
  }
  helper(root, 1)
  return max
}
// @lc code=end
