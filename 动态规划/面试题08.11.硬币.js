let coins = [1, 5, 10, 25];
let waysToChange = function (n) {
  let cl = coins.length;
  if (n === 0) return 0;

  let dp = new Array(cl);
  for (let i = 0; i < cl; i++) {
    dp[i] = new Array(n + 1);
  }

  for (let i = 0; i < cl; i++) {
    dp[i][0] = 1
  }

  for (let i = 0; i < dp.length; i++) {
    for (let j = 1; j <= n; j++) {
      let coin = coins[i];
      let dpPrev = dp[i - 1];
      // 考虑不用当前硬币
      let pickPrev = dpPrev ? dpPrev[j] : 0;

      // 考虑加上当前硬币
      let pickCurrentAndPrev = 0;
      if (j >= coin) {
        // 用了当前的硬币以后 剩余的面值
        let rest = j - coin;
        let pickRest = dp[i][rest];
        if (pickRest > 0) {
          // 这个方式数其实就是凑剩余硬币的方式数
          // 比如 以硬币5和面值10来说
          // 拿出了5 发现剩余面值是5
          // 凑剩余面值5的情况是 5 + 11111
          // 所以拿出5来凑的方式是1种
          pickCurrentAndPrev = pickRest;
        }
      }

      dp[i][j] = (pickPrev + pickCurrentAndPrev) % 1000000007;
    }
  }

  return dp[cl - 1][n];
};

console.log(waysToChange(61)); // 73
