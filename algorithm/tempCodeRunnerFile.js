console.time();
let obj = { 1: 222, 2: 123, 5: 888 };
let res = Array.from({ length: 12 }).fill(null);
Object.keys(obj).forEach(it => (res[it - 1] = obj[it]));
console.log(res);
// default: 0.7451171875ms
console.timeEnd();