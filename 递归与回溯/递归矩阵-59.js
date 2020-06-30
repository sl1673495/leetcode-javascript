/**
 * @param {number} n
 * @return {number[][]}
 */
let generateMatrix = function (n) {
  // 记录一个 visited 数组
  // 按照 右 -> 下 -> 左 -> 上 的方向不断前进
  // 直到遇到边界或者已经访问过的元素 则切换成下一个方向
  let dirs = [
    [0, 1], // 右
    [1, 0], // 下
    [0, -1], // 左
    [-1, 0], // 上
  ]

  let currentDirIndex = 0

  let visited = []
  for (let y = 0; y < n; y++) {
    visited[y] = []
  }
  let isValid = (y, x) => {
    return y >= 0 && y < n && x >= 0 && x < n && !visited[y][x]
  }

  let targetLength = n * n
  let res = []
  for (let y = 0; y < n; y++) {
    res[y] = []
  }

  let helper = (y, x, num) => {
    res[y][x] = num

    if (num === targetLength) {
      return res
    }

    visited[y][x] = true
    let [diffY, diffX] = dirs[currentDirIndex % 4]
    let nextY = y + diffY
    let nextX = x + diffX
    if (!isValid(nextY, nextX)) {
      ;[diffY, diffX] = dirs[++currentDirIndex % 4]
      nextY = y + diffY
      nextX = x + diffX
    }
    helper(nextY, nextX, num + 1)
  }

  helper(0, 0, 1)

  return res
}
