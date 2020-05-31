function quickSort(arr) {
  if (arr.length === 1 || arr.length === 0) {
    return arr
  }
  const left = []

  const right = []
  const ref = arr[0]

  for (let i = 1; i < arr.length; i++) {
    let num = arr[i]
    if (num < ref) {
      left.push(num)
    } else {
      right.push(num)
    }
  }

  return [...quickSort(left), ref, ...quickSort(right)]
}

quickSort.sortName = "快速排序（空间版）"

// module.exports = quickSort
