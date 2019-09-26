// // // 写一个二叉树前序遍历非递归写法 ？

// // const node = {
// //     val: "",
// //     left: node,
// //     right: node
// // }

// // const solution = root => {
// //     if (!root) { return [] }
// //     let stack = [root]
// //     let res = []
// //     while(stack.length > 0) {
// //         let cur = stack.pop()
// //         res.push(cur.val)
// //         res.right && stack.push(res.right)
// //         res.left && stack.push(res.left)
// //     }
// //     return res
// // }

// // 2. m*n, 左上角， 右，下 走，总共几种走法 ？

// const data = [
//   [1,2,3,4],
//   [5,6,7,8]
// ]

// const solution2 = data => {
//   const m = data.length
//   const n = data[0].length
//   let time = 0
//   const func = (x, y) => {
//       if (x > n || y > m) { return }
//       if (x === n - 2 && y === m - 1 || x === n - 1 && y === m - 2) {
//           time ++
//           return
//       }
//       func(x + 1, y)
//       func(x, y + 1)
//   }
//   func(0,0)
//   return time
// }

// const res = solution2(data)
// console.log(res)

/**
 *
 * @param {number} data
 */
const solution = data => {
  if (data < 10) {
    return data
  }
  let min = 0
  let time = parseInt(data / 9)
  let high = ''
  let low = ''
  for (let i = 0; i < time; i++) {
    low += 9
  }
  high = low + 9
  low = parseInt(low)
  high = parseInt(high)
  console.log(low, high)
  for (let i = low; i < high + 1; i += Math.pow(10, time)) {
    if (sum(i) === data) {
      min = i
      break
    }
  }
  return min
}

const sum = number => {
  let data = number + ''
  return data.split('').reduce((res, val) => {
    return res + parseInt(val)
  }, 0)
}

// console.log(sum(199))

console.log(solution(Math.pow(10, 4)))
