/*
Groups the elements of an array based on the given function.

Use Array.prototype.map() to map the values of an array to a function or property name. 
Use Array.prototype.reduce() to create an object, where the keys are produced from the mapped results.
*/

/**
 *
 * @param {[]} arr
 * @param {} fn
 * @returns {}
 * fn 可以是一个函数，也可以是一个对象所拥有的属性
 */
const groupBy = (arr, fn) => {
    // 先用 map 来提取 fn 结果作为键
    return arr
        .map(typeof fn === "function" ? fn : val => val[fn])
        .reduce((acc, val, i) => {
            // 拓展返回的对象
            acc[val] = (acc[val] || []).concat(arr[i]);
            return acc;
        }, {});
};

let res = groupBy([6.1, 4.2, 6.3], Math.floor); // {4: [4.2], 6: [6.1, 6.3]}
console.log(res);
res = groupBy(['one', 'two', 'three'], 'length'); // {3: ['one', 'two'], 5: ['three']}
console.log(res);
