let T = require("../工具/二叉树")

let lowestCommonAncestor = function (root, p, q) {
  let findAndCreate = (node, target, depth) => {
    if (node !== target) {
      let findInLeft
      if (node.left) {
        node.left.parent = node
        findInLeft = findAndCreate(node.left, target, depth + 1)
      }

      if (findInLeft) {
        return findInLeft
      } else {
        if (node.right) {
          node.right.parent = node
          return findAndCreate(node.right, target, depth + 1)
        }
      }
    } else {
      return {
        depth,
        node,
      }
    }
  }

  let findP = findAndCreate(root, p, 0) || {}
  let findQ = findAndCreate(root, q, 0) || {}

  let cur = findP.depth > findQ.depth ? findQ.node : findP.node

  while (!(isAncestor(cur, p) && isAncestor(cur, q))) {
    cur = cur.parent
  }

  return cur
}

function isAncestor(node, target) {
  if (!node) {
    return false
  }
  if (node !== target) {
    return !!(isAncestor(node.left, target) || isAncestor(node.right, target))
  } else {
    return true
  }
}

let l
let r
let t = new T(3)
t.left = l = new T(5)
t.right = r = new T(1)

console.log(lowestCommonAncestor(t, l, r))
