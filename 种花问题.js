/**
  605. 种花问题
  假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

  给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。

  示例 1:

  输入: flowerbed = [1,0,0,0,1], n = 1
  输出: True
  示例 2:

  输入: flowerbed = [1,0,0,0,1], n = 2
  输出: False
  注意:

  数组内已种好的花不会违反种植规则。
  输入的数组长度范围为 [1, 20000]。
  n 是非负整数，且不会超过输入数组的大小。
 */
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
let canPlaceFlowers = function(flowerbed, n) {
  // empty代表连续命中0的次数 命中3次就说明要回退一个种花
  let empty = 1
  let count = 0
  for (let i = 0; i < flowerbed.length; i++) {
    let has = flowerbed[i]
    if (!has) {
      empty++
      // 连续三次空白
      if (empty === 3) {
        // 回退一格种花
        flowerbed[i - 1] = 1
        count++
        // 因为这次没命中 所以又从1开始算
        empty = 1
        if (count >= n) {
          return true
        }
      }
      if (i === flowerbed.length - 1 && empty === 2) {
        count++
      }
    } else {
      empty = 0
    }
  }
  return count >= n
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2))
