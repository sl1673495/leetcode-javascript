let maxSlidingWindow = function (nums, k) {
  if (k === 0 || !nums.length) {
      return []
  }
  let left = 0
  let right = k - 1
  let res = [findMax(nums, left, right)]

  while (right < nums.length - 1) {
    right++
    left++
    res.push(findMax(nums, left, right))
  }

  return res
}

function findMax(nums, left, right) {
  let max = -Infinity
  for (let i = left; i <= right; i++) {
    max = Math.max(max, nums[i])
  }
  return max
}