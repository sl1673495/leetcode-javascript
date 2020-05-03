/**
 * 您需要在二叉树的每一行中找到最大的值。

  示例：

  输入: 

            5
           / \
          14   2
         / \    \  
        1   3    9 

  输出: [1, 3, 9]

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let largestValues = function (root) {
  if (!root) return [];
  let queue = [root];
  let maximums = [];

  while (queue.length) {
    let max = Number.MIN_SAFE_INTEGER;
    // 这里需要先缓存length 这个length代表当前层级的所有节点
    // 在循环开始后 会push新的节点 length就不稳定了
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue[i];
      max = Math.max(node.val, max);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    // 本「层级」处理完毕，截取掉。
    queue.splice(0, len);

    // 这个for循环结束后 代表当前层级的节点全部处理完毕
    // 直接把计算出来的最大值push到数组里即可。
    maximums.push(max);
  }

  return maximums;
};

/** test case **/
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/** 预期：[1, 3, 9] */
let root = new TreeNode(1);
root.left = new TreeNode(3);
root.right = new TreeNode(2);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(9);

/**
       5
      /
    14
   /
  1

 */
/** 预期：[5, 14, 1] */
let root2 = new TreeNode(5);
root2.left = new TreeNode(14);
root2.left.left = new TreeNode(1);

console.log(largestValues(root));
console.log(largestValues(root2));
