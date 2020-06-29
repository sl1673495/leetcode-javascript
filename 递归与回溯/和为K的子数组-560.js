/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let subarraySum = function (nums, k) {
  let n = nums.length
  if (!n) {
      return 0
  }

  let res = 0
  for (let i = 0; i < n; i++) {
      let total = 0
      for (let j = i; j < n; j++) {
          total += nums[j]
          if (total === k) {
              res += 1
          }
      }
  }
  return res
};