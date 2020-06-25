/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = new TrieNode()
}

var TrieNode = function () {
  this.children = new Map()
  this.isEnd = false
}

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root

  for (let i = 0; i < word.length; i++) {
    let { children } = node
    let trieNode = children.get(word[i])
    if (!trieNode) {
      trieNode = new TrieNode()
      children.set(word[i], trieNode)
    }
    node = trieNode

    if (i === word.length - 1) {
      node.isEnd = true
      node.word = word
    }
  }
}

let dirs = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
]
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
let findWords = function (board, words) {
  let maxY = board.length
  if (!maxY) return []
  let maxX = board[0].length

  let rootTrie = new Trie()
  for (let word of words) {
    rootTrie.insert(word)
  }

  // 记录已访问过的二维下标
  let visited = []
  for (let y = 0; y < maxY; y++) {
    visited[y] = []
  }

  let isValid = (x, y) => {
    return x >= 0 && x < maxX && y >= 0 && y < maxY && !visited[y][x]
  }

  // 返回结果
  let res = []

  let dfs = (x, y, trie) => {
    let char = board[y][x]
    let children = trie.children
    let nextTrie = children && children.get(char)
    if (nextTrie) {
      if (nextTrie.word) {
        res.push(nextTrie.word)
        nextTrie.word = null
      } else {
        visited[y][x] = true
        for (let dir of dirs) {
          let [offsetY, offsetX] = dir
          let nextY = y + offsetY
          let nextX = x + offsetX
          if (isValid(nextX, nextY)) {
            dfs(nextX, nextY, nextTrie)
          }
        }
        visited[y][x] = false
      }
    }
  }

  for (let y = 0; y < maxY; y++) {
    for (let x = 0; x < maxX; x++) {
      if (y === 1 && x === 0) debugger
      dfs(x, y, rootTrie.root)
    }
  }

  return Array.from(new Set(res))
}

console.log(
  findWords(
    [
      ["a", "b"],
      ["a", "a"],
    ],
    ["aaba"]
  )
)
