/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = function (matrix) {
  let maxY = matrix.length
  if (!maxY) return []
  let maxX = matrix[0].length

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
  for (let y = 0; y < maxY; y++) {
      visited[y] = []
  }
  let isValid = (y, x) => {
      return y >= 0 && y < maxY && x >= 0 && x < maxX && !visited[y][x]
  }

  let targetLength = maxY * maxX
  let res = []

  let helper = (y, x) => {
      let val = matrix[y][x]
      res.push(val)

      if (res.length === targetLength) {
          return res
      }

      visited[y][x] = true
      let [diffY, diffX] = dirs[currentDirIndex % 4]
      let nextY = y + diffY
      let nextX = x + diffX
      if (!isValid(nextY, nextX)) {
          [diffY, diffX] = dirs[++currentDirIndex % 4]
          nextY = y + diffY
          nextX = x + diffX
      }
      helper(nextY, nextX)
  }

  helper(0, 0)

  return res
};