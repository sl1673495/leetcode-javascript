/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
let combine = function (n, k) {
  let ret = []

  let helper = (start, prev) => {
    let len = prev.length
    if (len === k) {
      ret.push(prev)
      return
    }

    if (start > n) {
      return
    }

    // 还有 rest 个位置待填补
    let rest = k - prev.length
    for (let i = start; i <= n; i++) {
      if (n - i + 1 < rest) {
        continue
      }
      helper(i + 1, prev.concat(i))
    }
  }
  helper(1, [])
  return ret
}

console.log(combine(4, 2))
