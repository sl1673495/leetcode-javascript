/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
let solveSudoku = function (board) {
  let rows = initTwoDimensionalArray(9)
  let columns = initTwoDimensionalArray(9)
  let grids = initTwoDimensionalArray(3)

  // 待处理下标队列 第一次扫描的时候记录下来
  let pending = []

  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      let cell = board[y][x]
      if (cell === ".") {
        // 待填充的数独格子 记录在队列中
        pending.push([x, y])
        continue
      }
      // 记录下当前下标
      recordCell(x, y, cell)
    }
  }

  let helper = (startPendingIndex) => {
    if (startPendingIndex === pending.length) {
      return true
    }

    let [x, y] = pending[startPendingIndex]

    for (let i = 1; i <= 9; i++) {
      let cur = i.toString()
      if (isValid(x, y, cur)) {
        board[y][x] = cur
        recordCell(x, y, cur)
        if (helper(startPendingIndex + 1)) {
          return true
        } else {
          board[y][x] = "."
          restoreCell(x, y, cur)
        }
      }
    }
  }

  helper(0)

  function recordCell(x, y, cell) {
    rows[y][cell] = true
    columns[x][cell] = true
    let [gridX, gridY] = findGridIndex(x, y)
    if (!grids[gridY][gridX]) {
      grids[gridY][gridX] = new Map()
    }
    grids[gridY][gridX].set(cell, true)
  }

  function restoreCell(x, y, cell) {
    rows[y][cell] = false
    columns[x][cell] = false
    let [gridX, gridY] = findGridIndex(x, y)
    grids[gridY][gridX].set(cell, false)
  }

  function isValid(x, y, cell) {
    let isYConflict = rows[y][cell]
    let isXConflict = columns[x][cell]
    let [gridX, gridY] = findGridIndex(x, y)
    let grid = grids[gridY][gridX]
    let isGridConflict = grid && grid.get(cell)
    return !isYConflict && !isXConflict && !isGridConflict
  }
}

function initTwoDimensionalArray(length) {
  let ret = []
  for (let i = 0; i < length; i++) {
    ret.push([])
  }
  return ret
}

function findGridIndex(x, y) {
  return [Math.floor(x / 3), Math.floor(y / 3)]
}
