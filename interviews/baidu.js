/**
 *
 * @param {number} n
 * @param {[]} data
 */
const solution = (n, data) => {
  let imax = data[0]
  let index = 0
  let time = 0
  for(let i = 0; i < n; i++) {
    if (data[i] > imax) {
      imax = data[i]
      index = i
    }
  }
  let rest = imax - n + 1
  data.forEach((val) => {
    time += val + rest  
  })
  return time
}



const data = [1,2,3]
let sum = data.reduce((prv, val) => prv + val)
console.log(sum)
