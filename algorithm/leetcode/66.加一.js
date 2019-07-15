/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const L = digits.length
  let result = []
  const func = index => {
    let sum = 0
    if (index === L - 1) {
      sum = digits[index] + 1
    } else {
      const carry = func(index + 1)
      sum = digits[index] + carry
    }
    result.unshift(sum % 10)
    return parseInt(sum / 10, 10)
  }
  if (func(0)) {
    result.unshift(1)
  }
  return result
}
