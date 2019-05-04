/*
Chunks an array into smaller arrays of a specified size.
Use Array.from() to create a new array, that fits the number of chunks that will be produced. 
Use Array.prototype.slice() to map each element of the new array to a chunk the length of size. 
If the original array can't be split evenly, the final chunk will contain the remaining elements.

把一个大数组按照指定大小重新分割成小块
 */

const chunk = (arr, size) => {
    // 长度要向上取整
    return Array.from({length : Math.ceil(arr.length / size)}, (v, i) => {
        // 用 slice 和 from 的 mapfn 功能生成数组。
        return arr.slice(i * size, i * size + size)
    });
};

let res = chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]
console.log(res);