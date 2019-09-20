/**
 *
 * @param {string} str
 * @param {number} n
 * @param {number} m
 * abcba 5 3
 */
const solution1 = (str, n, m) => {
  let hash = {}
  let min = 99999
  for (let i = 0; i < n; i++) {
    let char = str[i]
    if (!hash[char]) {
      hash[char] = Array.from({ length: n })
    }
    hash[char][i] = char
  }
  for(let ch in hash) {
    let time = 0
    const arr = hash[ch]
    let i = 0
    while(i < n) {
      let memo = i
      if (!arr[i]) {
        for (let j = 0; j < m; j++) {
          i++
          if (arr[i]) { break }
        }
        time ++
      }
      if (memo === i) { i++ }
    }
    // console.log(time);
    if (time < min) { min = time }
  }
  return min
}

const str = 'abbbcdefgh'
const n = str.length
const m = 2

const res = solution1(str, n, m)
console.log(res);
