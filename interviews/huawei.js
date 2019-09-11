/**
 *
 * @param {string} data
 */
const solution = data => {
  const params = data.split('=')
  const reg = /(\d)/g
  let arrA = []
  let arrB = []
  const R = parseInt(params[3], 10)
  params[1].replace(reg, val1 => {
    arrA.push(parseInt(val1, 10))
  })
  params[2].replace(reg, val1 => {
    arrB.push(parseInt(val1, 10))
  })

  const LA = arrA.length
  const LB = arrB.length
  const res = []

  for (let i = 0; i < LA; i++) {
    let j
    for (j = 0; j < LB; j++) {
      if (arrA[i] <= arrB[j]) {
        break
      }
    }
    if (j === LB) {
      continue
    }
    let flag = j
    let count = 0
    while (j < LB) {
      if (arrB[j] - arrA[i] <= R) {
        count++
        res.push(`(${arrA[i]},${arrB[j]})`)
      }
      j++
    }
    if (count === 0) {
      res.push(`(${arrA[i]},${arrB[flag]})`)
    }
  }
  return res.join('')
}

// const data = 'A={2,3},B={1,1},R=1'
// const res = solution(data)
// console.log(res)

/**
 *
 * @param {string} data
 */
const solution2 = data => {
  const mapper = str => {
    const reg = /--|[^a-z 0-9 A-Z -]/
    return str.replace(reg, ' ')
  }
  const judge = str => {
    const reg = /^\-([^-]*)\-$/
    return str.replace(reg, (val, match) => match)
  }
  return data
    .split(' ')
    .map(mapper)
    .join(' ')
    .split(' ')
    .filter(val => val !== '')
    .map(judge)
    .reverse()
    .join(' ')
}

const data = 'i--am-you * * 12 1'
console.log(solution2(data))
