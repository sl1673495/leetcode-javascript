/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let n = nums.length
  let res = []
  if (!n) {
      return res
  }

  nums.sort()

  let used = {}

  let helper = (start, prev, target) => {
      if (prev.length === target) {
          let key = genKey(prev)
          if (!used[key]) {
              res.push(prev)
              used[key] = true
          }
          return
      }

      for (let i = start; i < n; i++) {
          let rest = n - i
          let need = target - prev.length
          if (rest < need) {
              continue
          }
          helper(i + 1, prev.concat(nums[i]), target)
      }
  }

  for (let i = 1; i <= n; i++) {
      helper(0, [], i)
  }

  return [[], ...res]
};

function genKey(arr) {
  return arr.join('~')
}