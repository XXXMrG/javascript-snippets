/*
    Splits values into two groups. If an element infilteris truthy, the corresponding element in the collection belongs to the first group; 
    otherwise, it belongs to the second group.
    UseArray.prototype.reduce() and Array.prototype.push()to add elements to groups, based onfilter.
 */

/**
 * 
 * @param {[]} data 
 * @param {[]} filters 
 */
const bifurcate = (data, filters) => {
    // 逗号运算符返回最后一个结果哦
    return data.reduce((acc, val, i) => (acc[filters[i] ? 0 : 1].push(val), acc), [[], []])
}

let res = bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); // [ ['beep', 'boop', 'bar'], ['foo'] ]

console.log(res);