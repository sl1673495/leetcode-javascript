const swap = require("../工具/交换")
/**
 * 冒泡排序
 * @param {number[]} arr
 */
function bubbleSort(arr) {
  let n = arr.length
  if (n <= 1) return arr

  for (let i = 0; i < n; i++) {
    let flag = false
    // 从前往后冒泡 所以已经处理过的就不用再访问了
    // 并且由于每次遍历会访问j+1项，等于提前遍历了后一项
    // 所以这里的终止条件可以是n - i再减去1
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        flag = true
      }
    }
    // 如果这次循环都没有数字被交换 说明已经是排序好的数组
    if (!flag) return arr
  }
  return arr
}

bubbleSort.sortName = "冒泡排序"

// module.exports = bubbleSort
