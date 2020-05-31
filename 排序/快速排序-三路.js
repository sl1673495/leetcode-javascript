const swap = require("../工具/交换")
const random = require("../工具/随机值")

/**
 * 三路快速排序
 * 将 arr[l...r] 分为 < v, === v, > v三部分
 * 之后递归的对 < v, > v 两部分三路快排
 * @param {number[]} arr
 */
function quickSort(arr) {
  _quickSort(arr, 0, arr.length - 1)
  return arr
}

/**
 * 对 arr[l...r] 部分进行快速排序
 * @param {number[]} arr
 * @param {number} l 左边界
 * @param {number} r 右边界
 */
function _quickSort(arr, l, r) {
  if (l >= r) {
    return
  }
  let [p, q] = partition(arr, l, r)
  _quickSort(arr, l, p)
  _quickSort(arr, q, r)
}

/**
 * 对 arr[l...r] 部分进行快速排序
 * @param {number[]} arr
 * @param {number} l 左边界
 * @param {number} r 右边界
 * @returns {number} 返回索引值p，使得arr[l...p-1] < arr[p] < arr[p+1...r]
 */
function partition(arr, left, right) {
  // 取一个基准值 取随机值
  let rand = random(left, right)
  swap(arr, left, rand)
  let pivot = arr[left]

  // 三路 注意看注释里的区间
  let lt = left // arr[left + 1...lt] < v
  let gt = right + 1 // arr[gt...r] > v
  let index = left + 1 // arr[lt + 1...index) === v

  while (index < gt) {
    let num = arr[index]
    if (num < pivot) {
      swap(arr, index, lt + 1)
      lt++
      index++
    } else if (num > pivot) {
      swap(arr, index, gt - 1)
      gt--
    } else if (num === pivot) {
      index++
    }
  }
  swap(arr, left, lt)

  return [lt - 1, gt]
}

quickSort.sortName = "快速排序（三路）"

module.exports = quickSort
