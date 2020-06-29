/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let setZeroes = function (matrix) {
  let maxY = matrix.length
  if (!maxY) return
  let maxX = matrix[0].length

  let handledRows = []
  let handledColumns = []

  let zeros = []
  for (let y = 0; y < maxY; y++) {
      for (let x = 0; x < maxX; x++) {
          let val = matrix[y][x]
          if (val === 0) {
              zeros.push([y, x])
          }
      }
  }

  for (let [y, x] of zeros) {
      if (!handledRows[x]) {
          for (let i = 0; i < maxY; i++) {
              matrix[i][x] = 0
          }
          handledRows[x] = true
      }
      if (!handledColumns[y]) {
          for (let i = 0; i < maxX; i++) {
              matrix[y][i] = 0
          }
          handledColumns[y] = true
      }
  }
};