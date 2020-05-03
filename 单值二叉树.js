/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isUnivalTree = function(root) {
    let values = []
    dfs(root, values)
    let first = values[0]
    return values.every(val => val === first)
};

function dfs(node, values) {
    if (!node) return
    values.push(node.val)
    dfs(node.left, values)
    dfs(node.right, values)
}



let TreeNode = require('./工具/二叉树.js')

let treeNode = new TreeNode(1)

treeNode.left = new TreeNode(1)
treeNode.right = new TreeNode(1)

treeNode.left.left = new TreeNode(1)

treeNode.left.right = new TreeNode(2)


console.log(isUnivalTree(treeNode))