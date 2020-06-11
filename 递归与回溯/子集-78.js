/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let subsets = function (nums) {
  let res = []
  let n = nums.length
  if (n === 0) {
    return res
  }

  let helper = (start, prev, targetLength) => {
    if (start > n) {
      return
    }
    if (prev.length === targetLength) {
      res.push(prev)
      return
    }

    for (let i = start; i < n; i++) {
      let cur = nums[i]
      helper(i + 1, prev.concat(cur), targetLength)
    }
  }

  for (let j = 1; j <= nums.length; j++) {
    helper(0, [], j)
  }

  return [[], ...res]
}
