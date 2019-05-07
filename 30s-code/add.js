function add (a) {
    // 利用闭包来记住 a
    function sum (b) {
        a = a + b;
        return sum;
    }
    // 重写 toString 来打印结果
    sum.toString = function () {
        return a;
    }
    return sum;
}

console.log(add(1)(2));