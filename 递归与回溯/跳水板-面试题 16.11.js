/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
let divingBoard = function (shorter, longer, k) {
  if (k === 0) {
      return []
  }
  if (shorter === longer) {
      return [k * shorter]
  }

  let res = []
  for (let i = 0; i <= k; i++) {
      let longCount = i
      let shortCount = k - i
      res.push(shortCount * shorter + longCount * longer)
  }

  return res
};