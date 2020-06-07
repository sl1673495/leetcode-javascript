let hasPathSum = function (root, sum) {
  if (!root) {
    return false
  }
  // 叶子节点 判断当前的值是否等于 sum 即可
  if (!root.left && !root.right) {
    return root.val === sum
  }

  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  )
}
