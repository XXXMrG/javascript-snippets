/*
    快速排序和 top-k 问题实现
*/

num = [5, 3, 7, 1, 8, 2, 9, 4, 7, 2, 6, 6]
let partition = function(arr, low, high) {
  // 传进来的 high 就不用再减 1 啦
  // 记录比较元素的位置
  const base = low
  const pivot = arr[low]
  while (true) {
    do {
      low++
    } while (arr[low] < pivot)
    do {
      high--
    } while (arr[high] > pivot)
    // low 和 high 不对了 那就让他们两个对换
    if (low < high) {
      var temp = arr[low]
      arr[low] = arr[high]
      arr[high] = temp
    } else {
      // 对换结束 high 此时指向 pivot 应在的位置
      arr[base] = arr[high]
      arr[high] = pivot
      return high
    }
  }
}
// 从后向前
let partitionLomuto = function(arr, low, high) {
  high--
  const pivot = arr[high]
  for (var j = low; j < high; j++) {
    // 大于 pivot 的 向前提
    if (arr[j] >= pivot) {
      var temp = arr[low]
      arr[low] = arr[j]
      arr[j] = temp
      low++
    }
  }
  // low 是 pivot 应在的位置
  temp = arr[low]
  arr[low] = arr[high]
  arr[high] = temp
  return low
}

let quick = function(arr, low, high) {
  if (low < high) {
    let i = partitionLomuto(arr, low, high)
    quick(arr, low, i)
    quick(arr, i + 1, high)
  }
}

let RS = function(arr, low, high, k) {
  let i = partitionLomuto(arr, low, high)
  let temp = i - low
  if (temp === k) {
    return
  }
  if (temp > k) {
    RS(arr, low, i, k)
  } else {
    RS(arr, i + 1, high, k - i)
  }
}
let k = 5
// RS(num, 0, num.length, k)
const num2 = [5, 3, 7, 1, 8]
console.log(num2)
quick(num2, 0, num2.length)
console.log(num2)
