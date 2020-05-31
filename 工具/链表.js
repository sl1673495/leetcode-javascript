function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * 数组 -> 链表
 * @param {number[]} vals
 */
function makeListNode(vals) {
  let head = new ListNode(vals[0])
  let i = 1
  let cur = head
  while (i < vals.length) {
    let val = vals[i]
    cur.next = new ListNode(val)
    cur = cur.next
    i++
  }
  return head
}

module.exports = ListNode

module.exports.makeListNode = makeListNode
