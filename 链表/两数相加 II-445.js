var reverseList = function (head) {
  if (!head) return null
  let res = null
  let dfs = function (node) {
      if (node.next) {
          dfs(node.next)
          node.next.next = node
      } else {
          res = node
      }
  }

  dfs(head)

  head.next = null

  return res
};

var addTwoNumbers = function (l1, l2) {
  l1 = reverseList(l1)
  l2 = reverseList(l2)

  let i = 0
  let root = new ListNode()
  let cur = root
  let plus = false

  let traverse = (node1, node2) => {
      let isDouble = !!node2
      while (isDouble ? (node1 && node2) : node1) {
          cur.next = new ListNode()
          cur = cur.next

          let sum = node1.val + (plus ? 1 : 0)
          if (isDouble) {
              sum += node2.val
          }

          if (sum >= 10) {
              sum %= 10
              plus = true
          } else {
              plus = false
          }
          cur.val = sum

          node1 = node1.next
          if (isDouble) {
              node2 = node2.next
          }
      }

      if (node1) {
          traverse(node1)
      }
      if (node2) {
          traverse(node2)
      }
  }

  traverse(l1, l2)

  if (plus) {
      cur.next = new ListNode(1)
  }

  return reverseList(root.next)
};
