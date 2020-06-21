/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
let longestCommonSubsequence = function (text1, text2) {
  let n1 = text1.length
  let n2 = text2.length

  let dp = []

  for (let i1 = 0; i1 <= n1; i1++) {
      dp[i1] = []
      dp[i1][0] = 0
  }
  dp[0] = Array(n2 + 1).fill(0)

  for (let i1 = 1; i1 <= n1; i1++) {
      for (let i2 = 1; i2 <= n2; i2++) {
          let str1 = text1[i1 - 1]
          let str2 = text2[i2 - 1]

          if (str1 === str2) {
              dp[i1][i2] = 1 + dp[i1 - 1][i2 - 1]
          }else {
              dp[i1][i2] = Math.max(dp[i1 - 1][i2], dp[i1][i2 - 1])
          }
      }
  }

  return dp[n1][n2]
};