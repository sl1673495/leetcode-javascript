/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
let findAnagrams = function (s, p) {
  let sl = s.length
  let pl = p.length
  let last = sl - pl + 1

  let res = []
  for (let i = 0; i < last; i++) {
    if (isAnagrams(s, p, i)) {
      res.push(i)
    }
  }

  return res
}

let isAnagrams = function (s, p, start) {
  let pl = p.length
  let end = start + pl

  let sub = s.substring(start, end)
  let subMap = {}
  let pMap = {}

  countStr(sub, subMap)
  countStr(p, pMap)

  let subKeys = Object.keys(subMap)
  for (let subKey of subKeys) {
    if (!pMap[subKey] || subMap[subKey] !== pMap[subKey]) {
      return false
    }
  }
  return true

  function countStr(str, map) {
    for (let i = 0; i < str.length; i++) {
      if (!map[str[i]]) {
        map[str[i]] = 1
      } else {
        map[str[i]]++
      }
    }
  }
}
