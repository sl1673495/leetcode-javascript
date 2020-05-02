/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var point = 0
  var common = ""
  var shortestStr
  var getShortestStr = false

  if (strs.length === 1) {
      return strs[0]
  }
  if (strs.length === 0) {
      return ''
  }

  while (1) {
      for (var i = 0; i < strs.length; i++) {
          var str = strs[i]
          if (i > 0 && str[point] !== strs[i - 1][point]) {
              return common
          }

          // 寻找最短的字符串
          if (!getShortestStr) {
              if (!shortestStr) {
                  shortestStr = str
              } else if (str.length < shortestStr.length) {
                  shortestStr = str
              }
          }
      }

      common += strs[0][point] || ''
      point++
      if (point > shortestStr.length) {
          return common
      }
  }
}