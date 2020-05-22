class DoubleNode {
  constructor(key, val) {
    this.key = key
    this.val = val

    this.prev = null
    this.next = null
  }
}

class LRUCache {
  constructor(max) {
    this.max = max
    this.map = new Map()

    this.head = null
    this.tail = null
  }

  get(key) {
    const node = this.map.get(key)
    if (!node) {
      return -1
    } else {
      const res = node.val
      this.remove(node)
      this.appendHead(node)
      return res
    }
  }

  put(key, value) {
    let node = this.map.get(key)
    // 有这个缓存
    if (node) {
      node.val = value
      // 新加入的 放在最前面
      this.remove(node)
      this.appendHead(node)
    } else {
      // 没有这个缓存
      node = new DoubleNode(key, value)
      // 如果超出容量了 删除最后一个 再放到头部
      if (this.map.size >= this.max) {
        this.map.delete(this.tail.key)
        this.remove(this.tail)
        this.appendHead(node)
        this.map.set(key, node)
      } else {
        // 未超出容量 就直接放到头部
        this.appendHead(node)
        this.map.set(key, node)
      }
    }
  }

  /**
   * 把头部指针的改变成新的node
   * @param {DoubleNode} node
   */
  appendHead(node) {
    if (this.head === null) {
      this.head = this.tail = node
    } else {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
  }

  /**
   * 删除某个节点
   * @param {DoubleNode} node
   */
  remove(node) {
    if (this.head === this.tail) {
      this.head = this.tail = null
    } else {
      // 删除头部
      if (this.head === node) {
        this.head = this.head.next
        node.next = null
      } else if (this.tail === node) {
        this.tail = this.tail.prev
        this.tail.next = null
        node.prev = null
      } else {
        node.prev.next = node.next
        node.next.prev = node.prev
        node.prev = node.next = null
      }
    }
  }
}
