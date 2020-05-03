/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let twoSum = function(nums, target) {
  let map = new Map()
  let results = []
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let result = map.get(target - num)
    if (result !== undefined) {
      results.push([nums[result], num])
    }
    map.set(num, i)
  }
  return results
}

let threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  let set = new Set()
  let results = []
  for (let i = 0; i < nums.length - 2; i++) {
    let find = twoSum(nums.slice(i + 1), -nums[i])
    if (find) {
      find.forEach((arr) => {
        if (!set.has(arr.join(''))) {
          results.push([nums[i], ...arr])
        }
        set.add(arr.join(''))
      })
    }
  }
  return results
}

console.log(threeSum([-1,0,1,2,-1,-4]))

/**
 * 利用两数之和的变形来求解，循环判断第三个数的负数是否能和另外两个数相加得到。
 */