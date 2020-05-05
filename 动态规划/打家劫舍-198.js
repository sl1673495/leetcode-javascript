let assert = require("assert");

/**
 * 打家劫舍 递归版
 * @param {number[]} nums
 * @return {number}
 */
let robRecurision = function (nums) {
  // 考虑从 index 开始到 nums - 1 为止
  // 打劫的最高价值
  let tryRob = function (nums, index) {
    // 超出边界了
    if (index >= nums.length) {
      return 0;
    }

    let max = 0;
    // 从 index,...n 分别选作起点开始抢劫
    // 求出各个值作为起点的最优解
    for (let i = index; i < nums.length; i++) {
      let value = nums[i];

      // 不能打劫邻舍 所以要 +2
      max = Math.max(max, value + tryRob(nums, i + 2));
    }

    return max;
  };

  return tryRob(nums, 0);
};

assert(robRecurision([1, 2, 3, 1]) === 4);
assert(robRecurision([2, 7, 9, 3, 1]) === 12);

/**
 * 打家劫舍-递归版2
 * 把打劫细分为
 *
 * 1. 打劫当前房子 那么下次就要从start + 2开始
 * 2. 打劫下一个房子 那么就直接从start + 1开始
 *
 * 求这两者间的最大值
 * @param {*} nums
 */
let robRecurision2 = function (nums) {
  let memo = [];
  function tryRob(nums, start) {
    let memorized = memo[start];
    if (memorized) return memorized;

    if (start > nums.length - 1) return 0;

    let robNow = nums[start] + tryRob(nums, start + 2);
    let robNext = tryRob(nums, start + 1);

    let best = Math.max(robNext, robNow);
    memo[start] = best;

    return best;
  }

  return tryRob(nums, 0);
};

assert(robRecurision2([1, 2, 3, 1]) === 4);
assert(robRecurision2([2, 7, 9, 3, 1]) === 12);

/**
 * 打家劫舍 DP版
 * @param {number[]} nums
 * @return {number}
 */
let rob = function (nums) {
  if (!nums.length) {
    return 0;
  }
  let dp = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    let max = 0;
    for (let index = i; index < nums.length; index++) {
      let value = nums[index];
      max = Math.max(max, value + (dp[index + 2] || 0));
    }
    dp[i] = max;
  }

  return dp[0];
};

assert(rob([1, 2, 3, 1]) === 4);
assert(rob([2, 7, 9, 3, 1]) === 12);

/**
 * 打家劫舍 DP版2
 * @param {number[]} nums
 * @return {number}
 */
let rob2 = function (nums) {
  if (!nums.length) {
    return 0;
  }
  let dp = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    let robNow = nums[i] + (dp[i + 2] || 0)
    let robNext = dp[i + 1] || 0

    dp[i] = Math.max(robNow, robNext)
  }

  return dp[0];
};


console.log(rob2([1, 10, 3, 1, 5]));
