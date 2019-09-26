/**
 *
 * @param {[]} arr
 * @param {{number: string}} hash
 */
const solution1 = (arr, hash, n) => {
  let time = 0
  for (let i = 0; i < n; i++) {
    let range = ''
    for (j = i; j < n; j++) {
      range += arr[i]
      if (hash[arr[j]]) {
        const str = hash[arr[j]]
        let flag = false
        for (let k = 0; k < str.length; k++) {
          if (range.indexOf(str[k]) !== -1) {
            flag = true
            break
          }
        }
        if (flag) {
          break
        }
      } else {
        time++
      }
    }
  }
  return time
}
/**
 *
 * @param {number} y
 * @param {number} m
 * @param {number} d
 */
const solution2 = (y, m, d) => {
  const date = new Date(y, m - 1, d)
  const year = date.getFullYear()
  let month = date.getMonth() + 1
  month = month < 10 ? `0${month}` : month
  let day = date.getDate()
  day = day < 10 ? `0${day}` : day
  return `${year}-${month}-${day}`
}

// console.log(solution2(3200, 2, 29))

const solution3 = (str, limit) => {
  const tips = '\n\nToo l'
  if (str.length > limit) {
    let res = str.substring(0, limit - tips.length)
    res += tips
    return res
  } else {
    return str
  }
}

// console.log(solution3('asdfasf2222', 10))

const data = [
  [1],
  [3],
  [4],
  [5],
  [6]
]

const print = data => {
  let res = []
  const m = data.length
  const n = data[0].length
  for (
    let i = 0, j = m;
    i < Math.ceil(n / 2), j > Math.floor(m / 2);
    i++, j--
  ) {
    for(let cur = i; cur < n - i; cur++) {
      res.push(data[i][cur])
    }
    for(let cur = m - j + 1; cur < j; cur++) {
      res.push(data[cur][n-i-1])
    }
    for(let cur = n - i - 2; cur >= i && m > 1; cur--) {
      res.push(data[j-1][cur])
    }
    for(let cur = j - 2; cur >= m - j + 1; cur--) {
      res.push(data[cur][i])
    }
  }
  return res
}

const res = print(data)
console.log(res)