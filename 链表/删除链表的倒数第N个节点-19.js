const { makeListNode } = require('../工具/链表')
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let removeNthFromEnd = function (head, n) {
  let node = head
  let nodes = []
  do {
      nodes.push(node)
      node = node.next
  } while (node)

  const l = nodes.length
  const index = l - n
  const targetNode = nodes[index]
  const prevNode = nodes[index - 1]
  if (prevNode) {
      prevNode.next = targetNode.next
  }

  const tempNext = targetNode.next
  targetNode.next = null


  if (targetNode === head) {
      return tempNext
  }
  return head
};

const node = makeListNode([1, 2, 3, 4, 5])
console.log(removeNthFromEnd(node, 5))