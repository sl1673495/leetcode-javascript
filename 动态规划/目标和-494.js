/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
let findTargetSumWays = function (nums, S) {
  let ns = nums.length
  if (!ns) {
    return 0
  }
  let min = nums.reduce((sum, cur) => sum - cur, 0)
  let max = nums.reduce((sum, cur) => sum + cur, 0)

  let dp = []
  for (let n = 0; n < ns; n++) {
    dp[n] = []
  }

  // 基础状态
  for (let s = min; s <= max; s++) {
    let num = nums[0]
    let pickPositive = s === num ? 1 : 0
    // 选负数形态
    let pickNegative = -s === num ? 1 : 0
    dp[0][s] = pickPositive + pickNegative
  }

  for (let n = 1; n < ns; n++) {
    for (let s = min; s <= max; s++) {
      let num = nums[n]
      // 选正数形态
      let pickPositive = dp[n - 1][s - num] || 0
      // 选负数形态
      let pickNegative = dp[n - 1][s + num] || 0
      dp[n][s] = pickNegative + pickPositive
    }
  }
  return dp[ns - 1][S] || 0
}
