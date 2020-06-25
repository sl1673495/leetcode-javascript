/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let searchMatrix = function (matrix, target) {
  let y = matrix.length
  if (!y) return false
  let x = matrix[0].length

  let row = y - 1
  let column = 0
  while (row >= 0 && column < x) {
      let val = matrix[row][column]
      if (val > target) {
          row--
      } else if (val < target) {
          column++
      } else if (val === target) {
          return true
      }
  }
  return false
};