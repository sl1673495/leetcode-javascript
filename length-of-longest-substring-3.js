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

  for (var i = 0; i < str.length; i++) {
    var char = str[i]

    // 当前窗口中的文字
    var windowsStr = str.substring(windows[0], windows[1])

    // 窗口中如果已经出现了这个文字 就需要把窗口左侧移动到「上一次出现这个文字」的右边位置
    var windowsCharIdx = windowsStr.indexOf(char)
    if (windowsCharIdx !== -1) {
      // 注意要加上窗口左侧已经移动的距离
      windows[0] += windowsCharIdx + 1
    }

    // 右边界始终后移
    windows[1]++

    var windowsLength = windows[1] - windows[0]
    if (windowsLength > max) {
      max = windowsLength
    }
  }

  return max
}
console.log(lengthOfLongestSubstring("abcabcbb"))
