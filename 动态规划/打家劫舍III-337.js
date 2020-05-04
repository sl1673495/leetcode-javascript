/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const TreeNode = require("../工具/二叉树");

/**
 * 65 / 124 个通过测试用例
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let memo = new WeakMap()
let rob = function (root) {
  if (!root) {
    return 0;
  }

  let memorized = memo.get(root)
  if (memorized) {
    return memorized
  }

  let notRob = rob(root.left) + rob(root.right);
  let robNow =
    (root.val || 0) +
    (root.left ? rob(root.left.left) + rob(root.left.right) : 0) +
    (root.right ? rob(root.right.left) + rob(root.right.right) : 0);

  let max = Math.max(notRob, robNow);
  memo.set(root, max)
  return max;
};

// 这种情况是不对的 应该计算出7
let tree1 = new TreeNode(2);
tree1.left = new TreeNode(1);
tree1.right = new TreeNode(3);
tree1.left.left = new TreeNode(null);
tree1.left.right = new TreeNode(4);

console.log(rob(tree1));
