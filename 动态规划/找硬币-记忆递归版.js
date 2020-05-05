function f(n) {
  function makeChange(amount) {
    if (amount <= 0) return 0;

    // 校验是否已经在备忘录中存在结果,如果存在返回即可
    if (cache[amount]) return cache[amount];

    let min = Infinity;
    if (amount >= 1) {
      min = Math.min(makeChange(amount - 1) + 1, min);
    }

    if (amount >= 5) {
      min = Math.min(makeChange(amount - 5) + 1, min);
    }

    if (amount >= 11) {
      min = Math.min(makeChange(amount - 11) + 1, min);
    }

    return (cache[amount] = min);
  }
  // 备忘录
  const cache = [];
  return makeChange(n);
}

console.log(f(5000));
