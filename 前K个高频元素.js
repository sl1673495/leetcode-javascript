/**
 * 
  347. 前 K 个高频元素
  给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

  示例 1:

  输入: nums = [1,1,1,2,2,3], k = 2
  输出: [1,2]
  示例 2:

  输入: nums = [1], k = 1
  输出: [1]
  说明：

  你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
  你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
 */

let topKFrequent = function(nums, k) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let count = map.get(num)
    if (!count) {
      map.set(num, 1)
    } else {
      map.set(num, count + 1)
    }
  }
  let sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1])
  let result = []
  for (let i = 0; i < k; i++) {
    result.push(sorted[i][0])
  }
  return result
}
console.log(topKFrequent([1, 2, 3, 3, 3, 4, 4, 4, 4, 5, 1, 2], 2))
