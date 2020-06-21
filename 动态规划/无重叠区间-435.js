/**
 * @param {number[][]} intervals
 * @return {number}
 */
let eraseOverlapIntervals = function (intervals) {
  let n = intervals.length
  if (!n) {
      return 0
  }

  // 按照起始点排序
  intervals.sort((a, b) => a[0] - b[0])

  // dp[i] 表示从 [0, i] 能构成的最长的无重叠区间的个数
  let dp = []
  dp[0] = 1

  for (let i = 1; i < n; i++) {
      let max = 1
      let [curStart] = intervals[i]
      for (let j = 0; j < i; j++) {
          let [prevStart, prevEnd] = intervals[j]
          if (prevEnd <= curStart) {
              max = Math.max(max, dp[j] + 1)
          }
      }
      dp[i] = max
  }

  return n - Math.max(...dp)
};