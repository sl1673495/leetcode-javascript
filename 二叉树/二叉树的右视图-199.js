let rightSideView = function (root) {
  if (!root) return []
  let queue = [root]
  let res = []
  while (queue.length) {
    let len = queue.length
    let last
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
      if (node.val !== undefined) {
        last = node.val
      }
    }
    res.push(last)
  }
  return res
}
