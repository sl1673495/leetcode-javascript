const ListNode = require("../工具/链表")

let swapPairs = function (head) {
  let helper = function (node) {
    let tempNext = node.next
    if (tempNext) {
      let tempNextNext = node.next.next
      node.next.next = node
      if (tempNextNext) {
        node.next = helper(tempNextNext)
      }else {
        node.next = null
      }
    }
    return tempNext
  }

  let res = helper(head)

  return res
}

let node = new ListNode(1)
node.next = new ListNode(2)
node.next.next = new ListNode(3)
node.next.next.next = new ListNode(4)

console.log(swapPairs(node))
