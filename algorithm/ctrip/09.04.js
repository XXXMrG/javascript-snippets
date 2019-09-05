/**
 * 
 * @param {*} s1 
 * @param {*} s2 
 * 两个字符串寻找最长子串
 */
function longestSubStrLength(s1, s2) {
  if (s1.length === 0 || s2.length === 0) {
    return 0
  }
  if (s1 === s2) {
    return s1.length
  }
  let res = 0
  let index = 0
  // let s2 be the long side
  if (s2.length < s1.length) {
    ;[s1, s2] = [s2, s1]
  }
  
  while (index < s2.length) {
    let subIndex = 0
    while (subIndex < s1.length) {
      if (s2[index] === s1[subIndex]) {
        break
      }
      subIndex++
    }
    // 开始匹配
    if (s2[index++] === s1[subIndex++]) {
      let partRes = 1
      while (subIndex < s1.length) {
        if (s2[index] === s1[subIndex]) {
          partRes++
          index++
          subIndex++
        } else {
          break
        }
      }
      if (partRes > res) {
        res = partRes
      }
    }
    if (subIndex === s1.length) { subIndex = 0 }
  }
  return res
}
/**
 * 
 * @param {*} s1 
 * @param {*} s2 
 * 版本号从小到大排序
 */
function sortVersion(s1, s2) {
  const arr1 = s1.split('.')
  const arr2 = s2.split('.')
  let index = 0
  let flag = 0
  while (index < arr1.length && index < arr2.length) {
    let condition = parseInt(arr1[index]) - parseInt(arr2[index])
    if (condition > 0) {
      // 2 means s2 is the small one
      flag = 2
      break
    } else if (condition < 0) {
      // 1 means s1 is the small one
      flag = 1
      break
    } else {
      index++
    }
  }
  if (flag === 1) {
    return `${s1},${s2}`
  } else if (flag === 2) {
    return `${s2},${s1}`
  } else {
    // if flag still is 0 the short one is the small one
    if (s1.length > s2.length) {
      return `${s1},${s2}`
    } else {
      return `${s2},${s1}`
    }
  }
}



let data = read_line().split(' ')
data = data.map(val => parseInt(val, 10))
/**
 * 
 * @param {*} data 
 * 连续乘积最大子序列长度
 */
const maxSub = data => {
  let maxSum = data[0]
  let maxGol = data[0]
  for (let i = 1; i < data.length; i++) {
    // 在不出现 0 的情况下始终保存累乘结果
    if (maxSum * data[i] !== 0) { maxSum *= data[i] }
    // 出现 0 则重新开一个子序列
    else { maxSum = data[i] }
    // 局部最优可能是目前乘积或是新的一个子序列
    let maxHere = Math.max(maxSum, data[i] * data[i-1])
    // 保存全局最优
    maxGol = Math.max(maxHere, maxGol)
  }
  return maxGol
}
print(maxSub(data))