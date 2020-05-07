/**
 * @param {number[]} nums
 * @return {boolean}
 */
let canPartition = function (nums) {
  let n = nums.length

  let sum = nums.reduce((a, b) => a + b);

  let target = sum / 2;

  // 数据不是整数 直接return
  if (Math.ceil(target) !== target) {
    return false;
  }

  let dp = new Array(n);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(target + 1).fill(false);
  }

  // 列代表可以选择去凑数的数值
  for (let i = 0; i < dp.length; i++) {
    // 行代表是否可以凑到这个数字j
    for (let j = 0; j <= target; j++) {
      // 不用当前数，直接选择前一行的结果
      let pickPrev = (dp[i - 1] ? dp[i - 1][j]: false) || false

      // 拿出当前数，并且从前一行里找其他的值能否凑成剩下的值
      let pickCurrentAndPrev = (dp[i - 1] ? dp[i - 1][j - nums[i]]: false) || false

      // 只拿的值直接去凑目标值
      let pickCurrent = j === nums[i]

      // 任意一者满足 即可理解成 「i下标的值」配合「i下标之前的数值」 可以一起凑成目标值
      let can = (
        pickPrev ||
        pickCurrent||
        pickCurrentAndPrev
      )

      dp[i][j] = can

      // 只要任意一行的 target 列满足条件 即可认为有「子数组」可以凑成目标值 直接返回 true
      if ((j === target) && can) {
        return true
      }
    }
  }
  return dp[n - 1][target]
};