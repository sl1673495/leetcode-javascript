let sumOfLeftLeaves = function (root) {
  let sum = 0

  let dfs = (node) => {
    if (!node) return

    if (isLeaf(node.left)) {
      sum += node.left.val
    }

    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)

  return sum
}

function isLeaf(node) {
  return !!node && !node.left && !node.right
}
