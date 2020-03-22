/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') return 0

  var start
  for (var i = 0; i < haystack.length - needle.length + 1; i++) {
      for (var j = 0; j < needle.length; j++) {
          var hIndex = i + j
          if (hIndex > haystack.length) {
            return -1
          }
          if (needle[j] === haystack[i + j]) {
              if (j === 0) {
                  start = i
              }
              if (j === needle.length - 1) {
                  return start
              }
          }else {
              break
          }
      }
  }
  return -1
};

console.log(strStr("hello", "lo"))