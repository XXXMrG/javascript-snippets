/**
 * 解决常见的手写问题
 * 保你面试过关
 */

// 1.手写一个继承

function inherit(p) {
    if (p == null) throw TypeError();
    if (Object.create) {
        return Object.create(p);
    }
    var t = typeof p;
    if (t !== "object" && t !== "function") {
        throw TypeError;
    }
    function f() {}
    f.prototype = p;
    return new f();
}

// 2. 手写一个 map

var data = [1, 1, 3, 5, 5];
var myMap = Array.prototype.map
    ? (a, f) => {
          return a.map(f);
      }
    : (a, f) => {
          var results = [];
          for (var i = 0, len = a.length; i < len; i++) {
              if (i in a) results[i] = f.call(null, a[i], i, a);
          }
          return results;
      };

// 3.手写一个 bind()
const myBind = function(o) {
    let self = this;
    let outArguments = arguments;
    // 箭头函数拿不到内层 arguments 可以使用 ... 来获取参数
    return (...rest) => {
        let args = [];
        for (let i = 1; i < outArguments.length; i++) {
            args.push(outArguments[i]);
        }
        for (let i = 0; i < rest.length; i++) {
            args.push(rest[i]);
        }
        console.log(args);
        return self.apply(o, args);
    };
};
const f = function() {
    let res = 0;
    for (let i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }
    return res + this.x;
};
let o = { x: 1 };
f.myBind = myBind;
let g = f.myBind(o, 2, 3)(4, 5);
console.log(g);

/**  4. 手写一个 new 操作符
 * new操作符做了这些事：
 * 它创建了一个全新的对象。
 * 它会被执行[[Prototype]]（也就是__proto__）链接。
 * 它使this指向新创建的对象。。
 * 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。
 * 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用将返回该对象引用。
 */

function myNew(func) {
    var res = {};
    // 如果为 null 直接继承 object.prototype
    if (func.prototype !== null) {
        res.__proto__ = func.prototype;
    }
    // 这里去掉参数数组中的第一个元素同样可以通过 ... 来实现
    // 这里绑定 this
    var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
    // 如果构造函数返回一个对象，那么返回这个对象
    if (
        (typeof ret === "object" || typeof ret === "function") &&
        ret !== null
    ) {
        return ret;
    }
    return res;
}

/**
 * 手写一个 JSON.stringify
 * Boolean | Number | String 类型会被自动转换成对应的原始值
 * undefined 函数 Symbol 会被忽略，或被转换成 null
 * 不可枚举的属性会被忽略
 * 循环引用会被忽略
 */

function myStringify(obj) {
    let type = typeof obj;
    // 不是对象类型，可以直接调用 toString()
    if (obj !== "object") {
        if (/string|undefined|function/.test(type)) {
            obj = '"' + obj + '"';
        }
        return String(obj);
    } else {
        let json = [];
        let arr = Array.isArray(obj);
        for (let k in obj) {
            let v = obj[k];
            let type = typeof v;
            if (/string|undefined|function/.test(type)) {
                v = '"' + v + '"';
            } else if (type === "object") {
                v = myStringify(v);
            }
            json.push((arr ? "" : '"' + k + '":') + String(v));
        }
        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
    }
}

console.log(myStringify({ a: 1, b: 2 }));

/**
 * 手写个 call 或者 apply
 * 将函数绑定为对象的属性
 * 执行 & 删除这个函数
 * 指定 this 到函数并传入给定参数执行函数
 * 如果不传入参数 默认指向为 window
 */

// 简单版
var foo = {
    value: 1,
    bar: function() {
        console.log(this.value);
    }
};

// 正常版

Function.prototype.myCall = function(content = window) {
    // 使用隐式绑定模拟显示绑定
    content.fn = this;
    let args = [...arguments].slice(1);
    let result = content.fn(...args);
    // 删除函数 不要对原对象留下改动
    delete content.fn;
    return result;
};
let foo = {
    value: 1
};
function bar(name, age) {
    console.log(name);
    console.log(age);
    console.log(this.value);
}
// call 可以直接传参数进来
bar.myCall(foo, "black", 12);
Function.prototype.myApply = function(content = window) {
    content.fn = this;
    let result;
    result = (arguments[1] ? content.fn(...arguments[1]) : content.fn());
    delete content.fn;
    return result;
};
bar.myApply(foo, ["black", 12]);
