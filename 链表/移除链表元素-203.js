let removeElements = function (head, val) {
  let root = new ListNode()
  root.next = head
  let cur = root
  while (cur) {
    let next = cur.next
    if (!next) {
      break
    }
    let nextVal = next.val
    if (nextVal === val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return root.next
}
