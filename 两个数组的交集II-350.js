/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersect = function (nums1, nums2) {
  let map1 = makeCountMap(nums1)
  let map2 = makeCountMap(nums2)
  let res = []
  for (let num of map1.keys()) {
    const count1 = map1.get(num)
    const count2 = map2.get(num)

    if (count2) {
      const pushCount = Math.min(count1, count2)
      for (let i = 0; i < pushCount; i++) {
        res.push(num)
      }
    }
  }
  return res
}

function makeCountMap(nums) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let count = map.get(num)
    if (count) {
      map.set(num, count + 1)
    } else {
      map.set(num, 1)
    }
  }
  return map
}
