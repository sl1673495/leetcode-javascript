/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
let minSubArrayLen = function (s, nums) {
  let n = nums.length
  // 定义[i,...j]滑动窗口 取这个窗口里的和
  let i = 0
  let j = -1

  let sum = 0
  let res = Infinity

  while (i < n) {
    if (sum < s) {
      sum += nums[++j]
    } else {
      sum -= nums[i]
      i++
    }

    if (sum >= s) {
      res = Math.min(res, j - i + 1)
    }
  }
  return res === Infinity ? 0 : res
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
