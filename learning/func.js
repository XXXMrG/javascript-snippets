/**
 * 函数和上下文闭包
 * 2019/04/11 by keith
 */

// 1.两种声明方式

console.log(a)//?
a();//?
var a =3;
function a(){
   console.log(10);
}
console.log(a);//?
a = 6;
a();//?

// 上面的代码等价与
function a () {
    console.log(10);
}
var a;          // 变量与函数重名的时候优先考虑函数的哦，这个 a 是不能覆盖函数的
console.log(a); // 输出函数 Function
a();            // 执行函数 => 10
a = 3;          // a 赋值，函数被覆盖，现在 a 是 3 了
console.log(a); // => 3
a = 6;          // a 赋值
a();            // 函数早就被覆盖，报错！

/**
 * 函数的四种调用方式
 * 1. 函数形式调用
 * 2. 作为方法调用
 * 3. 作为构造函数调用
 * 4. 通过他们的 call() 和 apply() 方法调用
 */

var o = {
    m: function() {
        var self = this;
        console.log(this === o); // => true
        f();

        function f() {
            console.log(this === o); // => false
            console.log(self === o); // => true
        }
    }
};

o.m();

// 2.函数的实参和形参

// 可选参数
// 将对象 o 中可枚举的属性名追加到数组 a 中，并返回这个数组 a
// 如果省略 a ，则创建一个新数组并返回这个新数组
function getPropertyNames(o, /* optional */ a) {
    a = a || [];
    for(var property in o) {
        a.push(property);
    }
    return a;
}

// 可变长参数

function max (/* ... */) {
    var max = Number.NEGATIVE_INFINITY;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) max = arguments[i];
    }
    return max;
}

// 3.函数闭包
function counter() {
    var n = 0;
    return {
        count: function() {
            return n++;
        },
        reset: function() {
            n = 0;
        }
    }
}
// c 和 d 是两个互不干扰的计数器
var c = counter(), d = counter();
c.count();
d.count();
c.reset();
c.count();
d.count();

// 存取器方法改写
function counter(n) {
    return {
        get count() {
            return n++;
        },
        set count(m) {
            if (m >= n) n = m;
            else throw Error("count can only be set to a larget value");
        }
    }
}
// 迭代
function addPrivateProperty(o, name, predicate) {
    var value;
    o["get" + name] = function(){return value;};
    o["set" + name] = function(v) {
        if(predicate && !predicate(v)) {
            throw Error(`set + ${name} + 错啦 ${v}`);
        }
        else {
            value = v;
        }
    }
}
var o = {};
addPrivateProperty(o, "Name", (x) => {return typeof x == "string"});
o.setName("fuck");
console.log(o.getName());
o.setName(o);

// 防止闭包中的变量的不恰当共享
function constfunc(v) {return () => {return v}};

var funcs = [];
for (var i = 0; i < 10; i++) {
    funcs[i] = constfunc(i);
}
console.log(funcs[5]());

// 尽量避免在循环中使用闭包，可能会产生闭包中变量的错误共享
// 下面这个例子中 10 个闭包共享同一个变量
function constfuncs() {
    var funcs = [];
    for (var i = 0; i < 10; i++){
        // 最后一个闭包将变量 i 改为10，因此所有的闭包中的变量都会跟着改变.
        funcs[i] = function() {return i;};
    }
    return funcs;
}
var funcs = constfuncs();
console.log(funcs[5]());

// 4.自定义函数属性，可以用于缓存结果

function factorial(n) {
    if (isFinite(n) && n > 0 && n == Math.round(n)) {
        if (!(n in factorial)) {
            factorial[n] = n * factorial(n - 1);
        }
        return factorial[n];
    } else return NaN;
}
factorial[1] = 1;
console.log(factorial(30));

// bind()

function f(y) {
    return this.x + y;
}
var o = { x: 1 };
var g = f.bind(o);
g(2); // => 3

// 手写一个 bind()

function bind(f, o) {
    if (f.bind) return f.bind(o);
    else
        return function() {
            return f.apply(o, arguments);
        };
}

// 柯里化 bind()
const bind = function(o /*, args */) {
    var self = this,
        boundArgs = arguments;

    return function() {
        var args = [],
            i;
        // 保存 bind 时的参数列表, 柯里化参数绑定
        for (i = 1; i < boundArgs.length; i++) {
            args.push(boundArgs[i]);
        }
        // 保存返回值调用时的参数列表
        for (i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        // 将 self 作为 o 的方法来调用，传入实参
        return self.apply(o, args);
    };
};

// 5. 函数式编程

var sum = (x, y) => {return x + y;};
var square = (x) => {return x * x;};

var data = [1,1,3,5,5];
var mean = data.reduce(sum) / data.length;
var deviations = data.map((x) => {return x - mean});
var stddev = Math.sqrt(deviations.map(square).reduce(sum) / data.length - 1);

// 手写一个 map
var data = [1, 1, 3, 5, 5];
var myMap = Array.prototype.map ? (a, f) => {return a.map(f);} : (a, f) => {
    var results = [];
    for (var i = 0, len = a.length; i < len; i++) {
        if (i in a) results[i] = f.call(null, a[i], i, a);
    }
    return results;
}

// 手写一个 reduce

var myReduce = (a, f, initial) => {
    var i = 0, len = a.length, accumulator;
    if (arguments.length > 2) accumulator = initial;
    else {
        if (len == 0) throw TypeError();
        while (i < len) {
            if (i in a) {
                accumulator = a[i++];
                break;
            }
            else i++;
        }
        // 数组中没有已经定义的元素
        if (i == len) throw TypeError();
    }
    while (i < len) {
        if (i in a) {
            // 参与运算的两个参数是 accumulator 和 下一个 a[i]
            accumulator = f.call(null, accumulator, a[i], i, a);
        }
        i++;
    }
    return accumulator;
}


