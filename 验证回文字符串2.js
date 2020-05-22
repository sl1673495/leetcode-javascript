/**
 * @param {string} s
 * @return {boolean}
 */
let validPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;

  // 两个指针往中间缩进
  while (i < j && s[i] === s[j]) {
    i++;
    j--;
  }

  // 遇到相对位置不相等了 判断删除一位后的情况
  if (isPalindrome(i + 1, j)) {
    return true;
  }
  if (isPalindrome(i, j - 1)) {
    return true;
  }

  // 工具方法，用于判断字符串是否回文
  function isPalindrome(st, ed) {
    while (st < ed) {
      if (s[st] !== s[ed]) {
        return false;
      }
      st++;
      ed--;
    }
    return true;
  }

  // 这样都不满足 那就不符合要求了
  return false;
};
