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

    for (let i = start; i <= n; i++) {
      helper(i + 1, prev.concat(i))
    }
  }
  helper(1, [])
  return ret
}

console.log(combine(4, 2))
