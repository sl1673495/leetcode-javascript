const swap = require("../工具/交换");

/**
 *
 * @param {number[]} arr
 */
function quickSort(arr) {
  _quickSort(arr, 0, arr.length - 1);
  return arr;
}

/**
 * 对 arr[l...r] 部分进行快速排序
 * @param {number[]} arr
 * @param {number} l 左边界
 * @param {number} r 右边界
 */
function _quickSort(arr, l, r) {
  if (l >= r) {
    return;
  }
  let p = partition(arr, l, r);
  _quickSort(arr, l, p - 1);
  _quickSort(arr, p + 1, r);
}

/**
 * 对 arr[l...r] 部分进行快速排序
 * @param {number[]} arr
 * @param {number} l 左边界
 * @param {number} r 右边界
 * @returns {number} 返回索引值p，使得arr[l...p-1] < arr[p] < arr[p+1...r]
 */
function partition(arr, l, r) {
  // 取一个基准值 取第一项
  let v = arr[l];

  // arr[l+1...j] < v < arr[j+1...i) > v
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    let num = arr[i]
    if (num < v) {
      // 如果当前值小于基准值的话，就交换到j + 1后的位置去。
      // 扩充了j的范围 [j...], v, [...r]
      swap(arr, j + 1, i);
      j++;
    }
  }

  swap(arr, l, j);
  return j
}

console.log(quickSort([1, 4, 2, 5, 3]));
