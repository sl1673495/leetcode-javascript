/**
 * @param {number} n
 * @return {string[][]}
 */
let solveNQueens = function (n) {
  let res = []

  // 已摆放皇后的的列下标
  let columns = []
  // 已摆放皇后的对角线1下标 左下 -> 右上
  // 计算某个坐标是否在这个对角线的方式是「行下标 + 列下标」是否相等
  let dia1 = []
  // 已摆放皇后的对角线2下标 左上 -> 右下
  // 计算某个坐标是否在这个对角线的方式是「行下标 - 列下标」是否相等
  let dia2 = []

  // 尝试在一个n皇后问题中 摆放第index行内的皇后位置
  let putQueen = (rowIndex, row) => {
    if (rowIndex === n) {
      res.push(generateBoard(row))
      return
    }

    // 尝试摆第index行的皇后 尝试[0, n-1]列
    for (let columnIndex = 0; columnIndex < n; columnIndex++) {
      // 在列上不冲突
      let columnNotConflict = !columns[columnIndex]
      // 在对角线1上不冲突
      let dia1NotConflict = !dia1[rowIndex + columnIndex]
      // 在对角线2上不冲突
      let dia2NotConflict = !dia2[rowIndex - columnIndex]

      if (columnNotConflict && dia1NotConflict && dia2NotConflict) {

        columns[columnIndex] = true
        dia1[rowIndex + columnIndex] = true
        dia2[rowIndex - columnIndex] = true

        putQueen(rowIndex + 1, row.concat(columnIndex))

        columns[columnIndex] = false
        dia1[rowIndex + columnIndex] = false
        dia2[rowIndex - columnIndex] = false
      }
    }
  }

  putQueen(0, [])

  return res
}

function generateBoard(row) {
  let n = row.length
  let res = []
  for(let y = 0; y < n; y++) {
    let cur = ''
    for (let x = 0; x < n; x++) {
      if (x === row[y]) {
        cur += 'Q'
      }else {
        cur += '.'
      }
    }
    res.push(cur)
  }
  return res
}

console.log(solveNQueens(4))
