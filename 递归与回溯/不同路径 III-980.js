/**
 * @param {number[][]} grid
 * @return {number}
 */
let uniquePathsIII = function (grid) {
  let maxY = grid.length
  if (!maxY) return 0
  let maxX = grid[0].length

  let validCellsCount = 0
  let entry
  let visited = []
  for (let y = 0; y < maxY; y++) {
    visited[y] = []
    for (let x = 0; x < maxX; x++) {
      let val = grid[y][x]
      if (val === 0) {
        validCellsCount++
      }
      if (val === 1) {
        entry = [y, x]
      }
    }
  }

  let isValid = (y, x) => {
    return (
      y >= 0 &&
      y < maxY &&
      x >= 0 &&
      x < maxX &&
      !visited[y][x] &&
      grid[y][x] !== -1
    )
  }

  let dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  let res = 0

  let dfs = (y, x, passCount) => {
    let val = grid[y][x]
    if (val === 2) {
      if (passCount === validCellsCount) {
        res++
      }
      return
    } else if (val === 0) {
      passCount += 1
    }

    for (let [diffY, diffX] of dirs) {
      let nextY = y + diffY
      let nextX = x + diffX
      if (isValid(nextY, nextX)) {
        visited[nextY][nextX] = true
        dfs(nextY, nextX, passCount)
        visited[nextY][nextX] = false
      }
    }
  }

  let [entryY, entryX] = entry
  visited[entryY][entryX] = true
  dfs(entryY, entryX, 0)

  return res
}
