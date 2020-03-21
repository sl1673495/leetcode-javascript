function mergeSort(arr) {
  var l = arr.length;
  if (l === 1) return arr;
  var m = Math.round(l / 2);
  var left = arr.slice(0, m);
  var right = arr.slice(m);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2) {
  var l1 = arr1.length;
  var l2 = arr2.length;
  var i1 = 0;
  var i2 = 0;
  var r = [];
  while (i1 < l1 && i2 < l2) {
    var item1 = arr1[i1];
    var item2 = arr2[i2];
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