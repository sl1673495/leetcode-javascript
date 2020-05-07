/**
 * @param {number} N
 * @return {number}
 */
let fib = function (N) {
  let prev = 1n
  let prevPrev = 1n

  for (let i = 2; i <= N; i++) {
    let current = prev + prevPrev
    prevPrev = prev
    prev = current
  }

  return prev
};

// let fib = function (N) {
//   let dp = []

//   dp[0] = 0n;
//   dp[1] = 1n;

//   for (let i = 2; i <= N; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }

//   return dp[N];
// };

// let fib = (function () {
//   let memo = new Map();
//   return function (n) {
//     // 优先从记忆里取 找到就直接 return
//     // 否则又要进入下面的递归逻辑 非常耗时
//     let memorized = memo.get(n);
//     if (memorized) {
//       return memorized;
//     }

//     if (n == 1 || n == 2) {
//       return 1;
//     }

//     let f1 = fib(n - 1)
//     let f2 = fib(n - 2)

//     // 记忆下来
//     memo.set(n - 1, f1)
//     memo.set(n - 2, f2)

//     return f1 + f2
//   };
// })();

console.log(fib(100000));
