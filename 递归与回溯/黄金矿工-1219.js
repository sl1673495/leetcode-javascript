/**
 * @param {number[][]} grid
 * @return {number}
 */
let getMaximumGold = function (grid) {
  let maxY = grid.length
  if (maxY === 0) {
    return 0
  }
  let maxX = grid[0].length

  let visited = []
  for (let y = 0; y < maxY; y++) {
    visited[y] = []
  }

  let dirs = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ]

  // 验证是否能走入这个格子
  // 1. 范围不能越界
  // 2. 本轮递归中未访问过
  // 3. 格子的值不能为 0
  let isValid = (y, x) => {
    return (
      y >= 0 &&
      y < maxY &&
      x >= 0 &&
      x < maxX &&
      grid[y][x] !== 0 &&
      !visited[y][x]
    )
  }

  let maxGold = 0
  let helper = (y, x, prevGold) => {
    let val = grid[y][x]
    let curGold = prevGold + val
    if (curGold === 0) {
      return
    }

    for (let dir of dirs) {
      let [diffY, diffX] = dir
      let nextY = y + diffY
      let nextX = x + diffX
      if (isValid(nextY, nextX)) {
        visited[y][x] = true
        helper(nextY, nextX, curGold)
        visited[y][x] = false
      } else {
        // 走到尽头或者不符合条件的了
        maxGold = Math.max(maxGold, curGold)
      }
    }
  }

  for (let y = 0; y < maxY; y++) {
    for (let x = 0; x < maxX; x++) {
      helper(y, x, 0)
    }
  }

  return maxGold
}
