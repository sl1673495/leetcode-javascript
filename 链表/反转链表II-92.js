/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const ListNode = require("../工具/链表")
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

let reverseBetween = function (head, m, n) {
  let i = 1
  let sliceStartPrev = null
  let sliceStart = null
  let sliceEnd = null
  let cur = head

  // 记录切分起点的前一个节点，和切分终点的后一个节点
  while (i <= n) {
    if (i === m - 1) {
      sliceStartPrev = cur
    }
    if (i === m) {
      sliceStart = cur
    }
    if (i === n) {
      sliceEnd = cur
    }
    cur = cur.next
    i++
  }

  let sliceEndNext = sliceEnd.next
  // 切断切分终点的next 防止反转的时候反转过头
  sliceEnd.next = null

  const { head: slicedHead, tail: slicedTail } = reverse(sliceStart)
  if (sliceStartPrev) {
    // 如果需要反转的部分有前一个节点 那么只需要在中间动手脚 原样返回head节点即可
    sliceStartPrev.next = slicedHead
  } else {
    // 这里需要注意的是 如果没有sliceStartPrev 说明是从第一个节点就开始反转的
    // 那么我们需要手动调整head为反转后的head
    head = slicedHead
  }
  slicedTail.next = sliceEndNext

  return head
}

function reverse(head) {
  let prev = null
  let cur = head
  while (cur) {
    let next = cur.next
    cur.next = prev

    prev = cur
    cur = next
  }
  // 返回反转后的头尾节点
  return { head: prev, tail: head }
}

let node = new ListNode(3)
node.next = new ListNode(5)

console.log(JSON.stringify(reverseBetween(node, 1, 1)))
