/**
  540. 有序数组中的单一元素
  给定一个只包含整数的有序数组，每个元素都会出现两次，唯有一个数只会出现一次，找出这个数。

  示例 1:

  输入: [1,1,2,3,3,4,4,8,8]
  输出: 2
  示例 2:

  输入: [3,3,7,7,10,11,11]
  输出: 10
  注意: 您的方案应该在 O(log n)时间复杂度和 O(1)空间复杂度中运行。
 */

function singleNonDuplicate(nums) {
  let len = nums.length

  let lo = 0
  let hi = len - 1

  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo) / 2)
    let midVal = nums[mid]

    // 被mid后的数组长度是奇数还是偶数
    let halvesAreEven = (hi - mid) % 2 == 0;
    if (midVal === nums[mid - 1]) {
      if (halvesAreEven) {
        // [0, 1, 1, 2, 2]
        //       mid
        // 显然左边是奇数 [0] hi是mid往左两位
        hi = mid - 2
      }else {
        // [0, 0, 1, 1, 2, 2, 3]
        //          mid
        // 显然右边是奇数 [2, 2, 3] lo是mid往右一位
        lo = mid + 1
      }

    }else if (midVal === nums[mid + 1]) {
      if (halvesAreEven) {
        // [0, 0, 1, 1, 2]
        //       mid
        // 右边是奇数 [2] lo是mid右移动两位
        lo = mid + 2
      }else {
         // [0, 0, 1, 2, 2, 3, 3]
         //          mid
         // 左边是奇数 [0, 0, 1] hi是mid左移一位
         hi = mid - 1
      }
    } else {
      return midVal
    }
  }
  return nums[lo]
}


console.log(singleNonDuplicate([3,3,7,7,10,11,11]))