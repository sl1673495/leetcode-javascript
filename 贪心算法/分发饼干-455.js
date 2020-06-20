/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
let findContentChildren = function (g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  let i = 0
  let j = 0

  let count = 0
  while (j < s.length && i < g.length) {
    let need = g[i]
    let cookie = s[j]

    if (cookie >= need) {
      count++
      i++
      j++
    } else {
      j++
    }
  }

  return count
}
