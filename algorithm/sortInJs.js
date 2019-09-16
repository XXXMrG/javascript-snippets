// 所有的排序算法 再来一遍

const data = [6, 1, 2, 7, 9, 9, 3, 4, 5, 10, 8]

/**
 * 
 * @param {[]} arr 
 * @param {number} start 
 * @param {number} end 
 */
const quick = (arr, start, end) => {
  if (start < end) {
    //const i = partition(arr, start, end)
    const i = partitionReverse(arr, start, end)
    quick(arr, start, i)
    quick(arr, i + 1, end)
  }
}

const partition = (arr, low, high) => {
  const base = low
  const pivot = arr[low]
  while (true) {
    do {
      low++
    } while (arr[low] < pivot)
    do {
      high--
    } while (arr[high] > pivot)
    if (low < high) {
      [arr[low], arr[high]] = [arr[high], arr[low]]
    } else {
      arr[base] = arr[high]
      arr[high] = pivot
      return high
    }
  }
}

const partitionReverse = (arr, low, high) => {
  high--
  const pivot = arr[high]
  for (let j = low; j < high; j++) {
    if (arr[j] >= pivot) {
      [arr[j], arr[low]] = [arr[low], arr[j]]
      low++
    }
  }
  [arr[low], arr[high]] = [arr[high], arr[low]]
  return low
}

/**
 * 
 * @param {[]} arr 
 */
const insertSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let j = i
    while (j >= 0 && arr[j] > arr[j-1]) {
      [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
      j--
    }
  }
}

const selectSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    [arr[min], arr[i]] = [arr[i], arr[min]]
  }
}


const heapSort = arr => {
  createHeap(arr)
  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]
    adjust(arr, 0, i)
  }
}

const createHeap = arr => {
  const len = arr.length
  const start = parseInt(len / 2) - 1
  for (let i = start; i >= 0; i--) {
    adjust(arr, i, len)
  }
}

const adjust = (arr, target, len) => {
  // 从 target 开始 逐层下沉 因为下沉了一个就会影响到他的所有子节点
  for (let i = target * 2 + 1; i < len; i = 2 * i + 1) {
    // find the bigger node 
    if (i + 1 < len && arr[i+1] > arr[i]) {
      i = i + 1
    }
    if (arr[i] > arr[target]) {
      [arr[i], arr[target]] = [arr[target], arr[i]]
      // i 上浮之后成为新的下沉目标节点
      target = i
    } else {
      // 只要一次不需要下沉 那么就已经结束了
      break
    }
  }
}
// ---------------- test ------------------------

const res = data.slice()
// quick(res, 0, res.length)
// insertSort(res)
// selectSort(res)
heapSort(res)
console.log(res)