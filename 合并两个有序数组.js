/**
  88. 合并两个有序数组
  给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 num1 成为一个有序数组。

  

  说明:

  初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
  你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
  

  示例:

  输入:
  nums1 = [1,2,10,0,0,0], m = 3
  nums2 = [2,5,6,7],       n = 3

  输出: [1,2,2,3,5,6]
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  // 尾部指针
  let k = nums1.length - 1
  while (j >= 0) {
    let n1 = nums1[i]
    let n2 = nums2[j]

    if (n1 > n2) {
      nums1[k] = n1
      k--
      i--
    } else {
      nums1[k] = n2
      k--
      j--
    }
  }
}

let a = [1, 2, 10, 0, 0, 0]
merge(a, 3, [2, 5, 6, 7], 4)

console.log(a)

/**
  [1,2,10,0,0,0,0]
      ↑
  [2,5,6,7]
        ↑

  [1,2,10,0,0,0,+10]
    ↑
  [2,5,6,7]
        ↑

  [1,2,10,0,0,+7,10]
    ↑
  [2,5,6,7]
      ↑

  [1,2,10,0,+6,7,10]
    ↑
  [2,5,6,7]
    ↑  

  [1,2,0,+5,6,7,10]
    ↑
  [2,5,6,7]
  ↑  

  [1,2,+2,5,6,7,10]
    ↑
  [2,5,6,7]
  指针移动完毕   
 */

 /**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge2 = function(nums1, m, nums2, n) {
  // 初始化两个指针的指向，初始化 nums1 尾部索引k
  let i = m - 1, j = n - 1, k = m + n - 1
  // 当两个数组都没遍历完时，指针同步移动
  while(i >= 0 && j >= 0) {
      // 取较大的值，从末尾往前填补
      if(nums1[i] >= nums2[j]) {
          nums1[k] = nums1[i] 
          i-- 
          k--
      } else {
          nums1[k] = nums2[j] 
          j-- 
          k--
      }
  }
  
  // nums2 留下的情况，特殊处理一下 
  while(j>=0) {
      nums1[k] = nums2[j]  
      k-- 
      j--
  }
};

let a2= [1, 2, 0, 0, 0, 0]
merge(a2, 2, [2, 5, 6], 4)

console.log(a2)