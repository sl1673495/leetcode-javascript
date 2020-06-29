/**
 * @param {number[][]} A
 * @return {number}
 */
let minFallingPathSum = function (A) {
  let n = A.length

  let dp = []
  for (let i = 0; i < n; i++) {
    dp[i] = []
  }

  for (let j = 0; j < n; j++) {
    dp[n - 1][j] = A[n - 1][j]
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = Infinity
      let left = j - 1
      let right = j + 1
      let mid = j
      let nextRowIndexes = [left, mid, right]
      for (let nextRowIndex of nextRowIndexes) {
        if (nextRowIndex >= 0 && nextRowIndex < n) {
          dp[i][j] = Math.min(dp[i][j], A[i][j] + dp[i + 1][nextRowIndex])
        }
      }
    }
  }

  // 第一行的最小值 可以确定整体的最小路径
  return Math.min(...dp[0])
}
