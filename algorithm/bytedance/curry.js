/**
 *
 * @param {function} fn
 * @param {[]} arr
 * 前面这两个 curry 需要初始参数是个数组哦
 */
function curry(fn, arr = []) {
    return fn.length === arr.length
        ? fn.apply(null, arr)
        : function(...args) {
              return curry(fn, arr.concat(args));
          };
}

const curry1 = (fn, arr = []) =>
    fn.length === arr.length
        ? fn(...arr)
        : (...args) => curry1(fn, [...arr, ...args]);
// 我这个就不用哈哈哈哈哈
function curry2(fn, ...rest) {
    let args = rest.slice();
    return function(...rest) {
        args = args.concat(rest);
        fn.apply(null, args);
    };
}

function add(...aru) {
    console.log(aru.reduce((a, b) => a + b));
}

let cu = curry(add, [1]);
cu(1, 2);

/**
 *
 * @param {function} fn
 * 柯里化累加函数，用闭包保存参数
 */

function currysum(fn) {
    const args = [];
    return function result(...rest) {
        if (rest.length === 0) {
            return fn(...args);
        } else {
            args.push(...rest);
            return result;
        }
    };
}

let superSum = currysum(add);

superSum(1, 2)(2);

function threeAdd (a, b, c) {
    console.log(a + b + c);
}
const trueCurry = fn =>
    (judge = (...outArgs) =>
        outArgs.length >= fn.length
            ? fn(...outArgs)
            : (...inArgs) => fn(...outArgs, ...inArgs));

let foo = trueCurry(threeAdd);
foo(1,2)(3,4);
