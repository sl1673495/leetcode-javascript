/**
 * 二分搜索 从一个数组中搜索一个确定的数
 */

function binarySearch(arr, n, target) {
  // 在[l...r]的范围里寻找target
  let l = 0;
  let r = n - 1;
  while (l <= r) {
    let mid = Math.round((l + r) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (target > arr[mid]) {
      l = mid + 1; // 在[mid+1...r]的范围里寻找target
    } else {
      r = mid - 1;
    }
  }
  return -1;
}

console.log(console.log(binarySearch([1, 2, 3, 4, 5], 5, 2)));
