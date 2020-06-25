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

  let dfs = (x, y, word, index) => {
    let char = board[y][x]
    let targetChar = word[index]
    if (char === targetChar) {
      if (index === word.length - 1) {
        res.push(word)
      } else {
        visited[y][x] = true
        for (let dir of dirs) {
          let [offsetY, offsetX] = dir
          let nextY = y + offsetY
          let nextX = x + offsetX
          if (isValid(nextX, nextY)) {
            dfs(nextX, nextY, word, index + 1)
          }
        }
        visited[y][x] = false
      }
    }
  }

  let prefixMap = new Map()
  for (let y = 0; y < maxY; y++) {
    for (let x = 0; x < maxX; x++) {
      let prefix = board[y][x]
      let pos = prefixMap.get(prefix)
      if (!pos) {
        prefixMap.set(prefix, [[y, x]])
      } else {
        prefixMap.set(prefix, [...pos, [y, x]])
      }
    }
  }

  let find = (word) => {
    let head = word[0]
    let pos = prefixMap.get(head)
    if (pos) {
      pos.forEach(([y, x]) => {
        dfs(x, y, word, 0)
      })
    }
  }

  words.forEach(find)

  return Array.from(new Set(res))
}

console.log(
  findWords(
    [
      ["a", "b"],
      ["a", "a"],
    ],
    ["aba", "baa", "bab", "aaab", "aaa", "aaaa", "aaba"]
  )
)
