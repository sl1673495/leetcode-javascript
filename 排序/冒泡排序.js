const swap = require("../工具/交换");
/**
 * 冒泡排序
 * @param {number[]} arr
 */
function bubbleSort(arr) {
  let n = arr.length;
  if (n <= 1) return arr;

  for (let i = 0; i < n; i++) {
    let flag = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        flag = true;
      }
    }
    if (!flag) return arr;
  }
  return arr;
}

console.log(bubbleSort([4, 5, 2, 3, 1, 6, 5, 15, 2]));
