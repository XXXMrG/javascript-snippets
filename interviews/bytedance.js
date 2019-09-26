function commafy(num) {
  if (num) {
    let str = `${num}`
    str = str.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    return str
  }
  return 0
}

// const res = commafy(10000)
// // console.log(res)

// let obj = {
//   a: 12,
//   [Symbol.iterator]() {

//   }
// }

// let proto = {
//   b: 23
// }

// let val = Object.assign(Object.getPrototypeOf(obj), proto)
// // for in 是可以遍历到原型链上的属性的
// for (key in obj) {
//   console.log(key)
// }

// class A {

// }

// class B extends A{

// }
// // 构造函数的继承
// console.log(B.__proto__ === A)
// // 方法的继承
// console.log(B.prototype.__proto__ === A.prototype)

function People() {
  this.type = 'prople'
}

People.prototype.eat = function() {
  console.log('吃东西啦')
}

function Man(name) {
  People.call(this)
  this.name = name
  this.color = 'black'
}
Man.prototype = People.prototype

let person = new Man('byte')
// person.eat()
// console.log(person instanceof People)

const curry = (fn, ...args) => {
  if (args.length >= fn.length) {
    return fn(...args)
  } else {
    // args save in 闭包
    return (...rest) => curry(fn, ...args, ...rest)
  }
}

const foo = (a, b, c) => {
  return a + b + c
}

const fooWithCurry = curry(foo)
let res = fooWithCurry(1)(2)
// console.log(res)


const lastRoot = (root) => {
  let stack = [root]
  let res = []
  while(stack.length > 0) {
    let now = stack.pop()
    now.left && stack.push(now.left)
    now.right && stack.push(now.right)
    res.unshift(now.val)
  }
  return res
}

const midRoot = root => {
  let stack = []
  let res = []
  let node = root
  while (stack.length > 0 || node !== null) {
    while(node !== null) {
      stack.push(node)
      node = node.left
    }
    let cur = stack.pop()
    res.push(cur.val)
    node = node.right
  }
}




