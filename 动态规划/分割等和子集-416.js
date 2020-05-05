/**
 * @param {number[]} nums
 * @return {boolean}
 */
let canPartition = function (nums) {
  let sum = nums.reduce((a, b) => a + b);

  let target = sum / 2;
  if (Math.ceil(target) !== target) {
    return false;
  }

  let n = nums.length;
  let dp = new Array(n);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(target + 1).fill(false);
  }

  for (let j = 0; j <= target; j++) {
    dp[0][j] = nums[0] === target ? true : false;
  }

  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = true;
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j <= target; j++) {
      let num = nums[i];

      let pick = dp[i - 1][j - num] || false;
      let notPick = dp[i - 1][j] || false;

      let result = pick || notPick;
      dp[i][j] = result;

      if (j == target && result) {
        return true;
      }
    }
  }

  return dp[n - 1][target];
};

console.log(canPartition([1, 2, 3, 5]));

/**
 * 这个问题的思路在于，先把数组之和除以二，记为target。只要任意组合的子数组能凑成target，也就说明剩下的一定也能凑成target。
 * 1. 除以二后有小数点的直接失败，因为一定不可能是两个整数子数组相凑的结果。
 * 2. 只要用任意数量的子数组可以拼凑出来target的值，也就是dp数组的任意一层的最右边的值计算出是true，那么整题的结果就为true。因为不论你用几个值凑出了target值，哪怕只用了一个值。另外剩下的值之和一定也是target。
 */
