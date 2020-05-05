/**
 * @param {number[]} cost
 * @return {number}
 */
let minCostClimbingStairs = function (cost) {
  let dp = [];

  for (let i = cost.length - 1; i >= 0; i--) {
    let oneStep = cost[i] + (dp[i + 1] || 0);
    let twoStep = cost[i] + (dp[i + 2] || 0);

    dp[i] = Math.min(oneStep, twoStep);
  }

  return Math.min(dp[0], dp[1]);
};