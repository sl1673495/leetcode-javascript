/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    var values = []
    dfs(root, values)
    var first = values[0]
    return values.every(val => val === first)
};

function dfs(node, values) {
    if (!node) return
    values.push(node.val)
    dfs(node.left, values)
    dfs(node.right, values)
}



var TreeNode = require('./二叉树.js')

var treeNode = new TreeNode(1)

treeNode.left = new TreeNode(1)
treeNode.right = new TreeNode(1)

treeNode.left.left = new TreeNode(1)

treeNode.left.right = new TreeNode(2)


console.log(isUnivalTree(treeNode))