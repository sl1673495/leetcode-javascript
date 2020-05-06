/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function(nums) {
  let n = nums.length;
  let dp = [];

  dp[n - 1] = nums[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    let pickSelf = nums[i];
    let pickWithNext = pickSelf + dp[i + 1];
    dp[i] = Math.max(pickSelf, pickWithNext);
  }

  return Math.max(...dp);
};