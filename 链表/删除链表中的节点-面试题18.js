var deleteNode = function (head, val) {
  let virtual = {
    next: head,
  }
  let cur = virtual
  while (cur) {
    if (cur.next) {
      if (cur.next.val === val) {
        cur.next = cur.next.next
      }
    }
    cur = cur.next
  }
  return virtual.next
}
