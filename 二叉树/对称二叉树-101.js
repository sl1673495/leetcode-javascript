/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true
  let helper = (left, right) => {
    if (!left && !right) {
      return true
    }
    if (!left || !right) {
      return false
    }
    if (left.val === right.val) {
      return helper(left.left, right.right) && helper(left.right, right.left)
    } else {
      return false
    }
  }
  return helper(root, root)
}
