let obj = {1:222, 2:123, 5:888}
obj.length = 12;
// slice 可以将一个类数组转换为一个数组，还可以采用 bind() 实现
let _obj = [].slice.call(obj);
console.log(_obj);

a = [1,2,3];

console.time();
let data = { 1: 222, 2: 123, 5: 888 };
let arr = Array.from({ length: 12 }).map((_, i) => data[i + 1] || null);
console.log(arr);
// default: 2.119873046875ms
console.timeEnd();

console.time();
let obj = { 1: 222, 2: 123, 5: 888 };
let res = Array.from({ length: 12 }).fill(null);
Object.keys(obj).forEach(it => (res[it - 1] = obj[it]));
console.log(res);
// default: 0.7451171875ms
console.timeEnd();

