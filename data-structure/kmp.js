/**
 * 
 * @param {string} str 
 * 由模式字符串构造 next 数组
 */
const getNext = str => {
  const next = []
  // 第一个如果不匹配直接重新开始匹配下一个
  next[0] = -1
  let j = 0
  // k 指向模式前缀
  let k = -1
  // 求解 next[j+1]
  while (j < str.length - 1) {
    // 回退到第一个元素或者相等了
    if (k === -1 || str[j] === str[k]) {
      // 这个判断这里已经都为二者递增了一下
      if (str[++j] === str[++k]) {
        // 在回退一步
        next[j] = next[k]
      } else {
        next[j] = k
      }
    } else {
      // k 递归回退一步
      k = next[k]
    }
  }
  return next
}

/**
 * 
 * @param {string} str 
 * @param {string} partStr 
 * @param {Array} next 
 * 利用 next 数据进行 kmp 匹配
 */
const kmp = (str, partStr, next) => {
  let strIndex = 0
  let partStrIndex = 0
  while (strIndex < str.length && partStrIndex < partStr.length) {
    if (partStrIndex === -1 || str[strIndex] === partStr[partStrIndex]) {
      partStrIndex++
      strIndex++
    } else {
      partStrIndex = next[partStrIndex]
    }
  }
  if (partStrIndex === partStr.length) {
    return strIndex - partStrIndex
  } else {
    return -1
  }
}
const str = 'abcabcabcedabcabcddd'
const partStr = 'abcabcd'
const next = getNext(partStr)
const res = kmp(str, partStr, next)
console.log(res)