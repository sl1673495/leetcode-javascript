/**
 *
 * @param {number[]} w 物品的重量集合
 * @param {number[]} v 物品的价值集合
 * @param {number} C 背包容量
 */
let knapsack01 = function (w, v, C) {
  let n = w.length;
  if (n === 0) return 0;

  // 构建二维数组dp表
  // x轴代表背包容量 y轴代表考虑的物品情况
  // 第一行只考虑一种物品（基准情况）
  // 第二行考虑一和二两种（通过拿取二和不拿二，再去组合第一行的最佳情况来求最大值）
  // 第三行以此类推
  let memo = new Array(n);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = new Array(C + 1).fill(0);
  }

  // 基础情况 背包在各个容量的情况下 只考虑第一个物品时的最优解
  for (let j = 0; j <= C; j++) {
    memo[0][j] = j >= w[0] ? v[0] : 0;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= C; j++) {
      let weight = w[i];
      let restWeight = j - weight;
      // 有足够容量的情况下 选择当前的的物品 并且用剩余的重量去找前面几个物品组合的最优解
      let pickNow = j >= weight ? v[i] + memo[i - 1][restWeight] : 0;

      // 另一种选择 这个物品不放进背包了 直接求用这个背包容量组合前面几种物品的最优解
      let pickPrev = memo[i - 1][j];

      memo[i][j] = Math.max(pickNow, pickPrev);
    }
  }

  return memo[n - 1][C];
};

console.log(knapsack01([1, 2, 3], [6, 10, 12], 5));
