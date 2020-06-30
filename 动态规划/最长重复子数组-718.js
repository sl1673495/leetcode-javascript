/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
let findLength = function (A, B) {
  let dp = []
  let al = A.length
  let bl = B.length

  for (let i = 0; i <= al; i++) {
    dp[i] = []
    for (let j = 0; j <= bl; j++) {
      dp[i][j] = 0
    }
  }

  let max = 0
  for (let i = al - 1; i >= 0; i--) {
    for (let j = bl - 1; j >= 0; j--) {
      let a = A[i]
      let b = B[j]

      if (a === b) {
        dp[i][j] = dp[i + 1][j + 1] + 1
        max = Math.max(max, dp[i][j])
      } else {
        dp[i][j] = 0
      }
    }
  }
  return max
}
