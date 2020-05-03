/**
    翻转一棵二叉树。

    示例：

    输入：

        4
    /   \
    2     7
    / \   / \
    1   3 6   9
    输出：

        4
    /   \
    7     2
    / \   / \
    9   6 3   1
    备注:
    这个问题是受到 Max Howell 的 原问题 启发的 ：

    谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。
 */

/**
 * @param {*} root
 * 遍历法，先循环找出所有需要翻转的treeNode，然后遍历翻转即可
 */
let invertTree = function(root) {
  let queue = [];
  function traverse(tree) {
    if (!tree) return;
    queue.push(tree);
    traverse(tree.left);
    traverse(tree.right);
  }
  traverse(root);

  while (queue.length) {
    let node = queue.pop();
    let temp = node.right;
    node.right = node.left;
    node.left = temp;
  }
  return root;
};
