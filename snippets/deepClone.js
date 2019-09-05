const clone = target => {
  let res = {}
  for (const key in target) {
    res[key] = target[key]
  }
  return res
}

const target = {
  field1: 1,
  field2: undefined,
  field3: 'ConardLi',
  field4: {
    child: 'child',
    child2: {
      child2: 'child2',
    },
  },
  field5: [1, 2, 3],
}
target.target = target

// 递归版本深拷贝 问题在于数组和循环引用
const recursiveClone = target => {
  if (typeof target === 'object') {
    let res = {}
    for (const key in target) {
      res[key] = recursiveClone(target[key])
    }
    return res
  } else {
    return target
  }
}

// 考虑数组
const arrClone = target => {
  if (typeof target === 'object') {
    let res = Array.isArray(target) ? [] : {}
    for (const key in target) {
      res[key] = arrClone(target[key])
    }
    return res
  } else {
    return target
  }
}

// 解决循环引用
const circleClone = (target, map = new WeakMap()) => {
  if (typeof target === 'object') {
    let res = Array.isArray(target) ? [] : {}
    if (map.get(target)) {
      return map.get(target)
    }
    map.set(target, res)
    // map 中的 value 是之后设置的
    for (const key in target) {
      res[key] = circleClone(target[key], map)
    }
    return res
  } else {
    return target
  }
}

// const copy = recursiveClone(target)
// const copy = arrClone(target)
const copy = circleClone(target)

console.log(copy)


