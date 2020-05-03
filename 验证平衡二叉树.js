let isValidBST = function(root) {
  function helper(node, lower, upper) {
    // 遇到空节点 直接返回true
    if (!node) return true

    let val = node.val
    // 如果当前的值比下边界还小 就失败
    if (lower !== null && val <= lower) return false
    // 如果当前的值比上边界还大 就失败
    if (upper !== null && val >= upper) return false

    // 以此检测右子树 分别以自身到上一次的上边界 作为范围
    if (node.right && !helper(node.right, val, upper)) return false
    // 以此检测左子树 分别以下边界到自身的值 作为范围
    // 也就是说 左边的子树里不能有任何超出这个范围的值
    if (node.left && !helper(node.left, lower, val)) return false

    return true
  }
  return helper(root, null, null)
}

console.log(isValidBST({
  val: 5,
  left: {
    val: 1,
    right: {
      val: 6,
      left: {
        val: 2
      }
    }
  },
})
)