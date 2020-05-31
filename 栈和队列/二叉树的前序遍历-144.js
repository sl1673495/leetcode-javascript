const TreeNode = require("../工具/二叉树")

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let preorderTraversal = function (root) {
  let res = []
  let stack = [
    {
      type: "go",
      node: root,
    },
  ]

  while (stack.length) {
    let { type, node } = stack.pop()

    if (!node) continue

    if (type === "print") {
      res.push(node.val)
    }

    if (type === "go") {
      stack.push({ type: "print", node })

      if (node.right) {
        stack.push({ type: "go", node: node.right })
      }
      
      if (node.left) {
        stack.push({ type: "go", node: node.left })
      }
    }
  }

  return res
}

const tree = new TreeNode(1)
tree.left = new TreeNode(4)
tree.left.left = new TreeNode(5)
tree.right = new TreeNode(6)
tree.right.right = new TreeNode(7)

console.log(preorderTraversal(tree))
