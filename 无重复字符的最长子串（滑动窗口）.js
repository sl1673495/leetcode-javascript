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
let lengthOfLongestSubstring = function(str) {
  if (str.length === 1) {
    return 1
  }
  // 滑动窗口
  let windows = [0, 0]
  let max = 0

  for (let i = 0; i < str.length; i++) {
    let char = str[i]

    // 当前窗口中的文字
    let windowsStr = str.substring(windows[0], windows[1])

    // 窗口中如果已经出现了这个文字 就需要把窗口左侧移动到「上一次出现这个文字」的右边位置
    let windowsCharIdx = windowsStr.indexOf(char)
    if (windowsCharIdx !== -1) {
      // 注意要加上窗口左侧已经移动的距离
      windows[0] += windowsCharIdx + 1
    }

    // 右边界始终后移
    windows[1]++

    let windowsLength = windows[1] - windows[0]
    if (windowsLength > max) {
      max = windowsLength
    }
  }

  return max
}
console.log(lengthOfLongestSubstring("abcabcbb"))

/**
 * 参考
 *  什么是「滑动窗口算法」（sliding window algorithm），有哪些应用场景？ - 程序员吴师兄的回答 - 知乎
    https://www.zhihu.com/question/314669016/answer/663930108

   注意边界情况很坑，比如'pwwkew'这种，在i = 2遇到第二个w的时候，窗口中的文字是pw，
   
   要把左边界移动到第一个w的右边一位，也就是[2, 2]再继续开始匹配，此时会从第二个w继续向右滑动。

   再比如'abcdbacd'这种，在i = 4遇到第二个b的时候，窗口中是[a, b, c, d]，此时也不能只单纯向后移动一位，而是需要后移到第一个b的右边

   也就是[2, 4]再开始匹配， 也就是从[c, d, b] 再继续往后查找最大的子串。
 */