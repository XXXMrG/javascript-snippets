// bilibili in 2019/09/10

/**
 *
 * @param {string} num1
 * @param {string} num2
 */
const solution = (num1, num2) => {
  const [a1, b1] = num1.split('+').map(val => parseInt(val, 10))
  const [a2, b2] = num2.split('+').map(val => parseInt(val, 10))
  const partOfNumber = a1 * a2 - b1 * b2
  const partOfI = a1 * b2 + a2 * b1
  const res = `${partOfNumber}+${partOfI}i`
  return res
}

/**
 *
 * @param {string} data
 * @param {number} k
 */
const solution3 = (data, k) => {
  const list = data.split(' ')
  list.pop()
  let revData = []
  let index = 0
  let indexK = k
  const L = list.length
  while (indexK <= L) {
    for (let i = indexK - 1; i >= index; i--) {
      revData.push(list[i])
    }
    index = indexK
    indexK += k
  }
  const rest = L % k
  for (let i = L - rest; i < L; i++) {
    revData.push(list[i])
  }
  return revData.join('->')
}
// const data = '1 2 3 4 5 #'
// const k = 10
// const res = solution3(data, k)
// console.log(res)

/**
 *
 * @param {string} data
 */
const solution2 = data => {
  const [year] = data.split('-')
  const firstDay = new Date(year)
  const thisDay = new Date(data)
  const oneStamp = new Date('2019-01-02') - new Date('2019-01-01')
  const res = Math.ceil((thisDay - firstDay) / oneStamp) + 1
  return res
}

// const data = '2019-01-09'
// const res = solution2(data)
// console.log(res)
