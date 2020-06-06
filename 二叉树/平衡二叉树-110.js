let isBalanced = function (root) {
  if (!root) {
    return true
  }

  let isSonBalnaced =
    Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1

  return isSonBalnaced && isBalanced(root.left) && isBalanced(root.right)
}

function getHeight(node) {
  if (!node) return 0
  return Math.max(getHeight(node.left), getHeight(node.right)) + 1
}
