const memoized = (fn) => {
    // 利用闭包的作用域来记忆结果，减少不必要的重复运算。
    const lookupTable = {};
    return (arg) => lookupTable[arg] || (lookupTable[arg] = fn(arg));
}

let fastFactorial = memoized((n) => {
    if (n === 0) {
        return 1;
    }
    return n * fastFactorial(n - 1);
})

var res = fastFactorial(1);
console.log(res);
