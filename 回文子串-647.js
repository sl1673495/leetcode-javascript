/**
 * @param {string} s
 * @return {number}
 */
let countSubstrings = function (s) {
  let n = s.length
  if (n < 2) {
    return n
  }

  let count = 0

  let spread = (start, end) => {
    while (s[start] === s[end] && start >= 0 && end < n) {
      start--
      end++
      count++
    }
  }

  for (let mid = 0; mid < n; mid++) {
    spread(mid, mid)
    spread(mid, mid + 1)
  }

  return count
}

console.log(countSubstrings("a"))
