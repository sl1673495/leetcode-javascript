let TreeNode = require('../工具/二叉树.js')

var pathSum = function (root, sum) {
  let res = [];
  let search = function (node, paths) {
    if (!node.val) return
    paths.push(node.val);
    if (node.left) {
      search(node.left, paths);
    }
    if (node.right) {
      search(node.right, paths);
    }
    if (!node.left && !node.right) {
      if (sumVals(paths) === sum) {
        res.push(paths.slice());
      }
    }
    paths.pop();
  };
  search(root, []);
  return res;
};

function sumVals(nodes) {
  return nodes.reduce((prev, val) => {
    prev += val;
    return prev;
  }, 0);
}


var t = new TreeNode(5)
t.left = new TreeNode(4)
t.left.left = new TreeNode(11)
t.left.left.left = new TreeNode(7)
t.left.left.right = new TreeNode(2)

t.right = new TreeNode(8)
t.right.left = new TreeNode(13)
t.right.right = new TreeNode(4)
t.right.right.left = new TreeNode(5)
t.right.right.right = new TreeNode(1)

console.log(pathSum(new TreeNode(), 22))
