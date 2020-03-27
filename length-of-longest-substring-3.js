/**
 * 3. 无重复字符的最长子串
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

    示例 1:

    输入: "abcabcbb"
    输出: 3 
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
    示例 2:

    输入: "bbbbb"
    输出: 1
    解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
    示例 3:

    输入: "pwwkew"
    输出: 3
    解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
         请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

var lengthOfLongestSubstring = function(str) {
  if (str.length === 1) {
    return 1
  }
  // 滑动窗口
  var windows = [0, 0]
  var max = 0

  // 出现过的字符保存在set中 便于匹配是否出现过此字符串
  var set = new Set()
  for (var i = 0; i < str.length; i++) {
    var char = str[i]

    // 如果匹配过了这个字符 窗口左边界+1
    if (set.has(char)) {
      windows[0]++
    }

    // 右边界一直后移
    windows[1]++

    var windowsLength = windows[1] - windows[0]
    if (windowsLength > max) {
      max = windowsLength
    }
    set.add(char)
  }

  return max
}
console.log(lengthOfLongestSubstring("abcabcbb"))
