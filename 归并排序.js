function mergeSort(arr) {
  let l = arr.length;
  if (l === 1) return arr;
  let m = Math.round(l / 2);
  let left = arr.slice(0, m);
  let right = arr.slice(m);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2) {
  let l1 = arr1.length;
  let l2 = arr2.length;
  let i1 = 0;
  let i2 = 0;
  let r = [];
  while (i1 < l1 && i2 < l2) {
    let item1 = arr1[i1];
    let item2 = arr2[i2];
    if (item1 < item2) {
      r.push(item1);
      i1++;
    } else {
      r.push(item2);
      i2++;
    }
  }

  while (i1 < l1) {
    r.push(arr1[i1++]);
  }

  while (i2 < l2) {
    r.push(arr2[i2++]);
  }

  return r;
}

console.log(mergeSort([1, 4, 2, 3, 5, 2, 7, 3, 17, 25, 19]))