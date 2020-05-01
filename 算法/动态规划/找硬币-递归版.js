// https://juejin.im/post/5e86d0ad6fb9a03c387f3342

/**
 * 动态规划的前置思想，把问题拆分成子问题。
 * 比如f(15)，可以拆分成min(
 *   f(4) + 11 * 1,
 *   f(10) + 5 * 1,
 *   f(14) + 1 * 1
 * )
 * 然后这里的f(4)、f(10)、f(14) 进一步按照这个步骤值拆分。
 * 这种做法的缺点是容易爆栈。
 * @param {number} n
 */
function f(n) {
  if (n === 0) return 0;
  let min = Infinity;
  if (n >= 1) {
    min = Math.min(f(n - 1) + 1, min);
  }

  if (n >= 5) {
    min = Math.min(f(n - 5) + 1, min);
  }

  if (n >= 11) {
    min = Math.min(f(n - 11) + 1, min);
  }

  return min;
}

console.log(f(50)); // 3
