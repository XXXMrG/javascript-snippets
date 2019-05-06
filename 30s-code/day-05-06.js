/*
随机生成一个长度为 10 的整数类型的数组，
例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，
要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。
就是十位相同的数字放一起
也可以理解为连续元素放在一起
*/

// 随机生成一个长度为10的数组
function buildArr() {
    var _arr = [];
    for (var i = 0; i < 10; i++) {
        _arr.push(Math.floor(Math.random() * 30));
    }
    return _arr;
}

// 排序去重
function sortArr(a) {
    var _arr = [];
    _arr = [...new Set(a)];
    _arr.sort(function(item1, item2) {
        return item1 - item2;
    });
    return _arr;
}

// 整合
function intoArr(a) {
    if (a.length < 0) return [];
    var _arr = [];
    // 全局变量，代表分组下标
    var _idx = 0;
    function p(item) {
        if (!_arr[_idx]) {
            _arr[_idx] = [];
        }
        _arr[_idx].push(item);
    }
    for (var i = 0; i < a.length; i++) {
        // 判断连续
        if (i == 0 || a[i] - a[i - 1] == 0 || a[i] - a[i - 1] == 1) {
            p(a[i]);
        } else {
            // 不连续移动到下一个分组
            _idx++;
            p(a[i]);
        }
    }
    return _arr;
}
// 按照十位数字整合
function solution(array) {
    let map = array.reduce((hash, value) => {
        let key = Math.floor(value / 10);
        let group = hash.get(key) || [];
        group.push(value);
        hash.set(key, group);
        return hash;
    }, new Map());
    // map 的 key 和 value 都是可以迭代的哦
    return [...map.values()];
}

var arr = buildArr(); // 生成长度为10的数组
console.log("生成数组", arr);
arr = sortArr(arr); // 排序去重
console.log("排序去重", arr);

let arr1 = intoArr(arr); // 整合
console.log("按照连续规则整合数组", arr1);

let arr2 = solution(arr);
console.log(`按照十位数字整合`, arr2);


