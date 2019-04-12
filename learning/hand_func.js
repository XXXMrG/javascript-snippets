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
var myMap = Array.prototype.map ? (a, f) => {return a.map(f);} : (a, f) => {
    var results = [];
    for (var i = 0, len = a.length; i < len; i++) {
        if (i in a) results[i] = f.call(null, a[i], i, a);
    }
    return results;
}