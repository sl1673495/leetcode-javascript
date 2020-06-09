let deleteNode = function (root, key) {
  let findNodePos = (node, key) => {
    if (!node) {
      return false
    }
    if (node.left && node.left.val === key) {
      return {
        parent: node,
        pos: "left",
      }
    } else if (node.right && node.right.val === key) {
      return {
        parent: node,
        pos: "right",
      }
    } else {
      return findNodePos(node.left, key) || findNodePos(node.right, key)
    }
  }

  let findLastLeft = (node) => {
    if (!node.left) {
      return node
    }
    return findLastLeft(node.left)
  }

  let virtual = new TreeNode()
  virtual.left = root

  let finded = findNodePos(virtual, key)
  if (finded) {
    let { parent, pos } = finded
    let target = parent[pos]
    let targetLeft = target.left
    let targetRight = target.right

    if (!targetLeft && !targetRight) {
      parent[pos] = null
    } else if (!targetRight) {
      parent[pos] = targetLeft
    } else if (!targetLeft) {
      parent[pos] = targetRight
    } else {
      parent[pos] = targetRight
      let lastLeft = findLastLeft(targetRight)
      lastLeft.left = targetLeft
    }
  }

  return virtual.left
}