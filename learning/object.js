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

/**
 * 属性的特性。
 * 一个数据属性包含一个名字和四个特性，
 * 值(value), 可写性(writable)，可枚举性(enumerable)，可配置性(configurable)
 * 存取器属性不具有值特性和可写性，他们的可写性是由 setter 方法存在与否决定的
 * 读取(get) 写入(set) 可枚举，可配置
 */

// 使用 Object.getOwnPropertyDescriptor() 来获得属性的描述符

var x = Object.getOwnPropertyDescriptor({ x: 1 }, "x");
//console.log(x);

/**
 * 重点来了
 * 使用 Object.defineProperty() 来设置属性的特性，或是新建属性并使其具有某些特性
 * vue 2.+ 中数据的双向绑定劫持就是基于这个实现的。
 */
var o = {};
Object.defineProperty(o, "x", {
    value: 1,
    writable: true,
    // 不可枚举
    enumerable: false,
    // 可以配置
    configurable: true
});

o.x; // => 1
Object.keys(o); // => [] 因为 x 是不可枚举属性，不会被 keys 返回
Object.getOwnPropertyNames(o); // => 这个是可以返回非枚举属性的哦

// 如果要同时修改多个属性，可以使用 Object.defineProperties()

/**
 * 对象配置规则
 * 1. 如果对象是不可扩展的 (Object.preventExtensions())，则可以编辑已有的自由属性，但不能给他添加新属性。
 * 2. 如果属性是不可配置的，则不能修改他的可配置性和可枚举性
 * 3. 如果存取器属性是不可配置的，则不能修改其 getter 和 setter 方法，也不能将它转换为数据属性
 * 4. 如果数据属性是不可配置的，则不能将它转换为存取器属性
 * 5. 如果数据属性是不可配置的，则不能将它的可写性从 false 修改为 true，但可以从 true 修改为 false
 * 6. 如果数据属性是不可配置且不可写的，则不能修改他的值，然而可配置但不可写的属性的值是可以修改的
 * （实际上是先将它标记为可写的，然后修改他的值，最后转换为不可写的。）
 */

/**
 * 对象的不可拓展，封闭，冻结
 * Object.preventExtensions() 对象不可扩展，一旦转换不可扩展，就回不去了哦
 * Object.seal() 对象封闭，不但不能扩展，所有属性都配设置为不可配置，不过已有的可写属性依然可以设置
 * 同样不能解封一个已经被封闭的对象，使用 Object.isSealed() 来判断是否封闭
 * Object.freeze() 冻结一个对象，还会将所有自有的数据属性设置为只读的（如果存取器属性具有 setter 方法
 * 那么其不会收到影响，依然可以设置），同样不能解封，使用 Object.isFrozen() 来检测是否冻结
 */

var o = Object.seal(Object.create(Object.freeze({ x: 1 })), {
    y: { value: 2, writable: true }
});
