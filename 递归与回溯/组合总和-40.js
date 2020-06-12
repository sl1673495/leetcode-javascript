let genKey = (arr) => arr.join("~")
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum2 = function (candidates, target) {
  let res = []

  if (!candidates.length) {
    return res
  }

  candidates.sort()

  let used = {}

  let helper = (start, prevSum, prevArr) => {
    // 由于全是正整数 所以一旦和大于目标值了 直接结束本次递归即可。
    if (prevSum > target) {
      return
    }
    // 目标值达成
    if (prevSum === target) {
      let key = genKey(prevArr)
      if (!used[key]) {
        res.push(prevArr)
        used[key] = true
      }
      return
    }

    for (let i = start; i < candidates.length; i++) {
      // 这里还是继续从start本身开始 因为多个重复值是允许的
      let cur = candidates[i]
      let sum = prevSum + cur
      let arr = prevArr.concat(cur)
      helper(i + 1, sum, arr)
    }
  }

  helper(0, 0, [])

  return res
}

console.log(combinationSum2([2, 1, 2, 1, 3], 6))
