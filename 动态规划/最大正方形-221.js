/**
 * @param {character[][]} matrix
 * @return {number}
 */
let maximalSquare = function (matrix) {
  let maxY = matrix.length
  if (!maxY) return 0
  let maxX = matrix[0].length

  let dp = []
  let max = 0

  let dpBasic = (y, x) => {
    if (matrix[y][x] === "1") {
      max = 1
      dp[y][x] = 1
    } else {
      dp[y][x] = 0
    }
  }
  for (let y = 0; y < maxY; y++) {
    dp[y] = []
    dpBasic(y, 0)
  }
  for (let x = 1; x < maxX; x++) {
    dpBasic(0, x)
  }

  for (let y = 1; y < maxY; y++) {
    for (let x = 1; x < maxX; x++) {
      let val = matrix[y][x]
      if (val === "0") {
        dp[y][x] = 0
      } else {
        let left = dp[y][x - 1]
        let top = dp[y - 1][x]
        let leftTop = dp[y - 1][x - 1]
        dp[y][x] = Math.min(left, top, leftTop) + 1
        max = Math.max(max, dp[y][x])
      }
    }
  }
  return max * max
}
