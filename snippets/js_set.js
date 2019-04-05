// 使用存取器属性定义的笛卡尔点坐标的对象

var p = {
    x: 1.0,
    y: 1.0,

    get r() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    set r(newValue) {
        var oldValue = Math.sqrt(this.x * this.x + this.y * this.y);
        var ratio = newValue / oldValue;
        this.x *= ratio;
        this.y *= ratio;
    },

    get theta() {
        return Math.atan2(this.y, this.x);
    },
}

// 通过原型继承创建一个新对象
// created by Douglas Crockford (老道)
function inherit(p) {
    if (p == null) throw TypeError();
    // 如果这个方法被支持
    if (Object.create) {
        return Object.create(p);
    }
    // 否则手动建立原型继承
    var t = typeof p;
    if (t != "object" && t != "function") throw TypeError();

    function f() {}
    f.prototype = p;
    return new f();
}

var q = inherit(p);
q.x = 1, q.y = 1;
console.log(q.r);
console.log(q.theta);