let binaryTreePaths = function (root) {
  let res = []
  let dfs = (node, path = "") => {
    if (!node) {
      return
    }

    let newPath = path ? `${path}->${node.val}` : `${node.val}`
    if (!node.left && !node.right) {
      res.push(newPath)
    }

    dfs(node.left, newPath)
    dfs(node.right, newPath)
  }
  dfs(root)
  return res
}
