/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
let findLongestWord = function (s, d) {
  let n = d.length
  let points = Array(n).fill(-1)

  let find = ""
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    for (let j = 0; j < n; j++) {
      let targetChar = d[j][points[j] + 1]
      if (char === targetChar) {
        points[j]++
        let word = d[j]
        let wl = d[j].length
        if (points[j] === wl - 1) {
          let fl = find.length
          if (wl > fl || (wl === fl && word < find)) {
            find = word
          }
        }
      }
    }
  }

  return find
}