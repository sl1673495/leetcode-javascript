/**
 *
 * @param {number[]} w 物品的重量集合
 * @param {number[]} v 物品的价值集合
 * @param {number} C 背包容量
 */
function knapsack01(w, v, C) {
  let n = w.length - 1;

  return bestValue(w, v, n, C);
}

// 用 [0...index] 的物品
// 填充容积为c的背包的最大价值
function bestValue(w, v, index, c) {
  if (index < 0 || c <= 0) return 0;

  let max = bestValue(w, v, index - 1, c);

  // 装背包之前需要先判断这个当前背包还可以容纳下这个物品
  if (c >= w[index]) {
    max = Math.max(
      // 不装进背包
      max,
      // 装进背包
      v[index] + bestValue(w, v, index - 1, c - w[index])
    );
  }

  return max;
}

console.log(knapsack01([1, 2, 3], [6, 10, 12], 5));
