const coinChange = (coins, targetAmount) => {
  // 初始化备忘录,用Infinity填满备忘录，Infinity说明该值不可以用硬币凑出来
  const dp = new Array(targetAmount + 1).fill(Infinity);

  // 设置初始条件为0 这一项无法用公式推导出来
  dp[0] = 0;

  for (let amount = 1; amount <= targetAmount; amount++) {
    for (let j = 0; j < coins.length; j++) {
      let coin = coins[j];
      if (coin <= amount) {
        // 根据动态转移方程 求出当前面值需要的硬币数最小值
        dp[amount] = Math.min(
          dp[amount],
          // 比如目标15元 使用5元硬币 拆分为 dp(15 - 5) + 1
          dp[amount - coin] + 1
        );
      }
    }
  }

  // 如果 `dp[amount] === Infinity`说明没有最优解返回-1,否则返回最优解
  return dp[targetAmount] === Infinity ? -1 : dp[targetAmount];
};

console.log(coinChange([1, 5, 11], 21))
