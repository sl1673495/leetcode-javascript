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
let rob = function (root) {
  if (!root) return 0;

  // 先求出树的层级 以及每层对应的所有节点
  const { maxLevel, levelNodesMap } = makeLevelNodesMap(root);

  let getLevelValue = (level) => {
    const nodes = levelNodesMap.get(level);
    if (!nodes) {
      return 0;
    }
    let value = 0;
    for (let i = 0; i < nodes.length; i++) {
      value += nodes[i].val;
    }
    return value;
  };

  // 接下来开始进入打劫时间
  let dp = [];
  for (let i = maxLevel; i >= 0; i--) {
    let max = 0;
    // 每次需要跳过一个层级，不能打劫相邻的房子。
    for (j = i; j <= maxLevel; j++) {
      // 当前层级的价值加上跳一层后为起点的打劫的最大价值
      max = Math.max(max, getLevelValue(j) + (dp[j + 2] || 0));
    }
    dp[i] = max;
  }

  return dp[0];
};

function makeLevelNodesMap(root) {
  let queue = [root];
  // 每一层级的节点记录下来
  let levelNodesMap = new Map();
  let maxLevel = 0;
  while (queue.length) {
    // 缓存当前层级的节点长度
    let levelLen = queue.length;
    let levelNodes = [];
    for (let i = 0; i < levelLen; i++) {
      let node = queue[i];
      levelNodes.push(node);

      // 这里是下一层级了 先放入队列中
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    // 本层处理完毕 移除出数组
    for (let i = 0; i < levelLen; i++) {
      queue.shift();
    }

    levelNodesMap.set(maxLevel, levelNodes);
    if (queue.length) {
      maxLevel++;
    }
  }

  return { maxLevel, levelNodesMap };
}

// 这种情况是不对的 应该计算出7
let tree1 = new TreeNode(2);
tree1.left = new TreeNode(1);
tree1.right = new TreeNode(3);
tree1.left.left = new TreeNode(null);
tree1.left.right = new TreeNode(4);

console.log(rob(tree1));
