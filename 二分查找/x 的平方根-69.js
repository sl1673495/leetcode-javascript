/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function (x) {
  let left = 0;
  let right = x;
  let ans = -1
  while (left <= right) {
      let mid = Math.round((left + right) / 2);
      let product = mid * mid;
      if (product < x) {
          ans = mid
          left = mid + 1;
      } else if (product > x) {
          right = mid - 1;
      } else if (product === x) {
          return mid;
      }
  }

  return ans
};

console.log(mySqrt(200));
