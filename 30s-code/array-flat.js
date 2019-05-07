/**
 *
 * @param {[[]]} array
 *
 * 扁平化并排序去重
 */

// function myFlat(arr) {
//     // 使用 ES6 语法
//     return Array.from(new Set(arr.flat(Infinity))).sort((a, b) => {
//         return a - b;
//     });
// }

// 腻子函数

/**
 * 
 * @param {[]} arr 
 */

function myFlat1(arr) {
    // 递归直到不存在数组说明扁平化完成
    return arr.reduce((acc, val) => {
        return Array.isArray(val) ? acc.concat(myFlat1(val)) : acc.concat(val);
    }, []);
}

let data = [
    [1, 2, 2],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
    10
];

console.log(myFlat1(data));

