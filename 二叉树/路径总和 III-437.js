let pathSum = function (root, sum) {
  if (!root) return 0
  return (
    countSum(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
  )
}

let countSum = (node, sum) => {
  let count = 0
  let dfs = (node, target) => {
    if (!node) return

    if (node.val === target) {
      count += 1
    }

    dfs(node.left, target - node.val)
    dfs(node.right, target - node.val)
  }
  dfs(node, sum)
  return count
}
