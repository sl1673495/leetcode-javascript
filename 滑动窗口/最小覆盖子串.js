/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
let minWindow = function (s, t) {
  // 先制定目标 根据t字符串统计出每个字符应该出现的个数
  let targetMap = makeCountMap(t)

  let sl = s.length
  let tl = t.length
  let left = 0 // 左边界
  let right = -1 // 右边界
  let countMap = {} // 当前窗口子串中 每个字符出现的次数
  let min = "" // 当前计算出的最小子串

  // 循环终止条件是两者有一者超出边界
  while (left <= sl - tl && right <= sl) {
    // 和 targetMap 对比出现次数 确定是否满足条件
    let isValid = true
    Object.keys(targetMap).forEach((key) => {
      let targetCount = targetMap[key]
      let count = countMap[key]
      if (!count || count < targetCount) {
        isValid = false
      }
    })

    if (isValid) {
      // 如果满足 记录当前的子串 并且左边界右移
      let currentValidLength = right - left + 1
      if (currentValidLength < min.length || min === "") {
        min = s.substring(left, right + 1)
      }
      // 也要把map里对应的项去掉
      countMap[s[left]]--
      left++
    } else {
      // 否则右边界右移
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

console.log(minWindow("aa", "a"))
