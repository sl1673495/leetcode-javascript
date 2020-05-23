function reverse(head) {
  let prev = null
  let cur = head
  while (cur) {
    let next = cur.next
    cur.next = prev

    prev = cur
    cur = next
  }
  // 返回反转后的头节点
  return prev
}
