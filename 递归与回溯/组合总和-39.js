/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum = function (candidates, target) {
  let res = []

  let helper = (start, prevSum, prevArr) => {
    // 由于全是正整数 所以一旦和大于目标值了 直接结束本次递归即可。
    if (prevSum > target) {
      return
    }
    // 目标值达成
    if (prevSum === target) {
      res.push(prevArr)
      return
    }

    for (let i = start; i < candidates.length; i++) {
      // 这里还是继续从start本身开始 因为多个重复值是允许的
      let cur = candidates[i]
      let sum = prevSum + cur
      let arr = prevArr.concat(cur)
      helper(i, sum, arr)
    }
  }

  helper(0, 0, [])

  return res
}