/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function (nums) {
  // 快指针
  let i = 0;
  // 慢指针
  let j = 0;

  while (i < nums.length) {
    let fast = nums[i];
    let slot = nums[j];

    // 快慢不相等，说明找到了一个新的值
    // 把慢指针的位置更新，并且赋值成新的值，继续等待下一个新值。
    if (fast !== slot) {
      j++;
      nums[j] = fast;
    }
    i++;
  }

  console.log(nums);

  return j + 1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
