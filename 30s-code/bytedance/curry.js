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
function curry2 (fn, ...rest) {
    let args = rest.slice();
    return function(...rest) {
        args = args.concat(rest)
        fn.apply(null, args);
    }
}

function add (a, b, c) {
    console.log(a + b + c);
}

let cu = curry(add,[1]);
cu(1,2)
