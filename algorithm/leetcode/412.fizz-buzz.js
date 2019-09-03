/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let res = []
  let str = ""
  for (let i = 1; i < n + 1; i++) {
    str = ""
    if (i % 3 === 0) {
      str += "Fizz"
    }
    if (i % 5 === 0 ) {
      str += "Buzz" 
    }
    if (str === "") {
      str += i
    }
    res.push(str)
  }
  return res
}
