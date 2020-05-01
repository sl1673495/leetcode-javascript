/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

  每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

  注意：给定 n 是一个正整数。

  示例 1：

  输入： 2
  输出： 2
  解释： 有两种方法可以爬到楼顶。
  1.  1 阶 + 1 阶
  2.  2 阶


  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/climbing-stairs
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 爬n阶楼梯，可以拆分为
 * 爬1阶加爬f(n-1)阶 + 爬2阶加爬f(n-2)阶 的方式。
 * @param {number} n
 * @return {number}
 */
let climbStairs = function (n) {
  let dp = new Array(n + 1).fill(0);

  // 初始条件 爬一阶只有一种方式
  dp[1] = 1;
  dp[2] = 2

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

console.log(climbStairs(3))
