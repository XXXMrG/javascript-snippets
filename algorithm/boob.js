/**
 * 冒泡排序及优化方案
 */

// 生成从 l 到 r 的数量为 n 的随机数组
function randomArr(n, l ,r) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let _random = Math.round(l + Math.random() * (r - l));
        arr.push(_random);
    }
    return arr;
}

function bubbleSort(arr) {
    let len = arr.length;
    let sorted = true;
    for (let i = len; i >= 2; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                sorted = false;
            }
        }
        if (sorted) break;
    }
    return arr;
}

// 改进冒泡排序
function bubbleSort1(arr) {
    let i = arr.length - 1;
    // 使用 i 来标记已经有序的子数组，可以避免无意义的循环
    while (i > 0) {
        let pos = 0;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                pos = j;
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        i = pos;
    }
    console.log(arr);
}

function bubbleSort2(arr) {
    let low = 0;
    let high = arr.length - 1;
    let temp, j;
    // 二分冒泡
    while (low < high) {
        // 正排找最大
        for (j = low; j < high; ++j) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        --high;

        // 反排找最小
        for (j = high; j > low; --j) {
            if (arr[j] < arr[j - 1]) {
                temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
        ++low;
    }
    console.log(arr);
}

bubbleSort2(randomArr(10, 0, 100));