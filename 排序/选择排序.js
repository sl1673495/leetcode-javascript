const swap = require("../工具/交换")

function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    swap(arr, i, min)
  }
  return arr
}

selectSort.sortName = "选择排序"

// module.exports = selectSort
