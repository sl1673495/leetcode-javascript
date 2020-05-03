function ListNode(val) {
  this.val = val
  this.next = null
}

let node1 = new ListNode(1)
node1.next = new ListNode(2)
node1.next.next = new ListNode(4)

let node2 = new ListNode(1)
node2.next = new ListNode(3)
node2.next.next = new ListNode(4)
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let mergeTwoLists = function(l1, l2) {
  let arr = []
  if (!l1 && !l2) {
    return null
  }
  while (l1 || l2) {
    let runL1 = () => {
      arr.push(l1.val)
      l1 = l1.next
    }
    let runL2 = () => {
      arr.push(l2.val)
      l2 = l2.next
    }
    if (!l1) {
      runL2()
    } else if (!l2) {
      runL1()
    } else if (l1.val > l2.val) {
      runL2()
    } else {
      runL1()
    }
  }
  return arrToList(arr)
}

function arrToList(arr) {
  let i = 0
  let r = new ListNode()
  let head = r
  while (i < arr.length) {
    head.val = arr[i]
    if (++i < arr.length) {
      head.next = new ListNode()
      head = head.next
    }
  }
  return r
}

console.log(JSON.stringify(mergeTwoLists(node1, node2)))
