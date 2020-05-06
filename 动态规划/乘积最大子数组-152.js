let maxProduct = function (nums) {
  let dp = [];
  let n = nums.length;

  let last = nums[n - 1];
  dp[n - 1] = {
    max: last,
    min: last,
  };

  for (i = nums.length - 2; i >= 0; i--) {
    let num = nums[i];
    let withNextMin = num * dp[i + 1].min;
    let withNextMax = num * dp[i + 1].max;
    let withoutNext = num;
    dp[i] = {
      max: Math.max(withoutNext, withNextMin, withNextMax),
      min: Math.min(withoutNext, withNextMin, withNextMax),
    };
  }

  return Math.max(...dp.map(({ max }) => max));
};
