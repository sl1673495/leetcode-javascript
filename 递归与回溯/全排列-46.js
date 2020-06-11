/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function (nums) {
  let n = nums.length
  if (n === 1) {
    return [nums]
  }

  let res = []
  for (let i = 0; i < n; i++) {
    let use = nums[i]
    let rest = nums.slice(0, i).concat(nums.slice(i + 1, n))
    let restPermuteds = permute(rest)
    for (let restPermuted of restPermuteds) {
      res.push(restPermuted.concat(use))
    }
  }

  return res
}

console.log(permute([1, 2, 3]))
