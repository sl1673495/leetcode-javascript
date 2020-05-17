class Heap {
  arr = [null];

  constructor(arr) {
    for (let num of arr) {
      debugger;
      this.insert(num);
    }
  }

  insert(data) {
    let { arr } = this;
    arr.push(data);
    let count = this.arr.length;
    let index = count - 1;
    let parentIndex = Math.round(index / 2);
    while (arr[index] > arr[parentIndex] && parentIndex > 0) {
      swap(arr, index, Math.round(index / 2));
      index = Math.round(index / 2);
      parentIndex = Math.round(index / 2);
    }
  }

  removeMax() {
    // 把最右下角的元素和顶部元素交换 然后堆化
    swap(this.arr, 1, this.arr.length - 1);
    this.arr.length -= 1;
    this.heapify()
  }

  // TODO
  heapify() {
    
  }
}

let heap = new Heap([1, 4, 2, 5, 6, 3]);
heap.removeMax();
console.log(heap);
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
