/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let pos = {}
  let curLength = 0
  let maxLength = 0
  for (let i = 0; i < s.length; i++) {
    let cur = s[i]
    if (!pos.hasOwnProperty(cur) || i - pos[cur] > curLength) {
      curLength++
    } else {
      // 重制以 i 为结尾字符的子串
      curLength = i - pos[cur]
    }
    pos[cur] = i
    maxLength = Math.max(curLength, maxLength)
  }
  return maxLength
}
