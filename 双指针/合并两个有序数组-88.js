/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function (arr1, m, arr2, n) {
  // 两个指针指向数组非空位置的末尾
  let i = m - 1;
  let j = n - 1;
  // 第三个指针指向第一个数组的末尾 填充数据
  let k = arr1.length - 1;

  while (i >= 0 && j >= 0) {
    let num1 = arr1[i];
    let num2 = arr2[j];

    if (num1 > num2) {
      arr1[k] = num1;
      i--;
    } else {
      arr1[k] = num2;
      j--;
    }
    k--;
  }

  while (j >= 0) {
    arr1[k] = arr2[j];
    j--;
    k--;
  }
};
// @lc code=end
