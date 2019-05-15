/*
Flip takes a function as an argument, then makes the first argument the last.

Return a closure that takes variadic inputs, and splices the last argument 
to make it the first argument before applying the rest.
*/

const flip = fn => (first, ...rest) => fn(...rest, first);

let a = { name : "John Smith" };
let b = {};
const mergeFrom = flip(Object.assign);
// 这里是利用了 bind 构造了柯里化函数，默认第一个参数是 a 
let mergePerson = mergeFrom.bind(null, a);
// 实际上就是 mergeFrom(b, a) 我们的函数会把第一个参数移动到最后
console.log(mergePerson(b));
b = {};
console.log(Object.assign(b, a));
