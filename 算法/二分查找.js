/**
 * 二分搜索 从一个数组中搜索一个确定的数
 */

var search = function(nums, target, offset = 0) {
  let medium = Math.floor(nums.length / 2)
  let mediumVal = nums[medium]
  let left = nums.slice(0, medium)
  let right = nums.slice(medium, nums.length)

  if (nums.length === 1 && mediumVal !== target) {
    return -1
  }

  if (mediumVal > target) {
    return search(left, target, offset)
  } else if (mediumVal < target) {
    return search(right, target, offset + left.length)
  } else if (mediumVal === target) {
    return medium + offset
  }
}
console.log(search([1, 2, 3, 4, 5], 2))
