/**
 * 数组方法实战
 */

// forEach() 不会改变数组中值类型的值，只能改变引用类型
// forEach() 不支持链式调用
var arr1 = [
    {name: "fuck", age: 16},
    {name: "xxx", age: 18}
]

var arr2 = [1,2,3];

arr1.forEach(item => {
    item.age = item.age + 1;
});

console.log(arr1);

arr2.forEach(item => {
    item = item * 2;
});
// 并不会改变哦
console.log(arr2);

// map() 新建一个数组，每个元素都设置为回调函数的返回值。不更改原数组
// 不建议使用 map 来过滤哦
let newArr = [1,2,3,4,5].map(item => {
    if (item > 3) return item;
})
console.log(newArr);

// filter() 过滤
let newArr = [1,2,3,4,5].filter(item => {
    if (item > 3) return item;
})
console.log(newArr);

// sort() 默认是按照 unicode 升序排序，会改变原数组
// 可以使用函数自定义排序规则
// some() 用于检查数组中是否有某些符合条件
// 只要有一个满足就返回 true 后面的不会被执行
var res = [
    {name: "fff", age: 12},
    {nmae: "fffs", age: 13123}
].some(item => {
    return item.age > 1231111;
});
console.log(res);

// 经典方法
// 1. 数组去重

let tempArr = new Set([1,2,3,1,2,3,4,2,5,6,1]);
console.log(Array.from(tempArr));

// 注意，引用类型并不会被 set 去重，需要对引用类型进行深比较来判断是否相等
// 有需要可以使用 Lodash 中的 _uniqWith(object, _.isEqual)

// 2. 获取数组中的指定元素

// findIndex() 或者 find() 都不支持 IE11 及更早版本
let testArr = [
    {name: "ddd", age: 12},
    {name: "dddd", age : 12}
]
let index = testArr.findIndex(item => {
    return item.name === "ddd";
});
let res = testArr.find(item => {
    return item.name === "dddd";
});
console.log(testArr[index]);
console.log(res);
