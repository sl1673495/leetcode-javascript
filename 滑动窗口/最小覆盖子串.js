/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
let minWindow = function (s, t) {
  // 先制定目标 根据t字符串统计出每个字符应该出现的个数
  let targetMap = makeCountMap(t)

  let sl = s.length
  let left = 0
  let right = -1
  let countMap = {}
  let min = ""

  while (left <= sl && right <= sl) {
    let isValid = true
    Object.keys(targetMap).forEach((key) => {
      let targetCount = targetMap[key]
      let count = countMap[key]
      if (!count || count < targetCount) {
        isValid = false
      }
    })

    if (isValid) {
      let currentValidLength = right - left + 1
      if (currentValidLength < min.length || min === "") {
        min = s.substring(left, right + 1)
      }
      // 也要把map里对应的项去掉
      countMap[s[left]]--
      left++
    } else {
      addCountToMap(countMap, s[right + 1])
      right++
    }
  }

  return min
}

function addCountToMap(map, str) {
  if (!map[str]) {
    map[str] = 1
  } else {
    map[str]++
  }
}

function makeCountMap(strs) {
  let map = {}
  for (let i = 0; i < strs.length; i++) {
    let letter = strs[i]
    addCountToMap(map, letter)
  }
  return map
}

console.log(minWindow("ADOBECODEBANC", "ABC"))
