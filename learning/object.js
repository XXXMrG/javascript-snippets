
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

/**
 * 创建对象
 */

// 工厂模式

function createPerson (name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.say = function () {
        console.log(this.name);
    }
    return o;
}

var p1 = createPerson("fuck", 121, "alibaba");
var p2 = createPerson("fff", 12121, "bytedance");
console.log(p1 === p2);

// 构造函数模式

function Person (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.say = function() {
        console.log(this.name);
    }
}
var p1 = new Person("fuck", 121, "alibaba");
var p2 = new Person("ff", 212, "f");
console.log(p1.constructor === p2.constructor);

// 原型模式

function Person() {

}

Person.prototype = {
    name: "fukc",
    age: 123,
    job: "alibaba",
    say: function() {
        console.log(this.name);
    }
}

var p = new Person();
console.log(p.age);

// 组合使用构造函数模式和原型模式
// 既保证了实例属性的可初始化和唯一性
// 又能保证方法的统一性，不会重复建立相同的方法占用内存

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["12e3", "1231"];
}

Person.prototype = {
    constructor: Person,
    say: function () {
        console.log(this.name);
    }
}

// 继承

// 原型链继承

function SuperType() {
    this.property = true;
}
SuperType.prototype.getSuper = function() {
    return this.property;
}
function SubType() {
    this.subproperty = false;
}
SubType.prototype = new SuperType();
SubType.prototype.getSub = function() {
    return this.subproperty;
}

var instance = new SubType();
console.log(instance.getSuper() + "\n" + instance.getSub()); // => true false
/**
 * 原型链继承的几个问题
 * 1. 由于是将原型替换成父原型的实例，那么原来类型中的实例属性和原型属性都会成为新类型的原型属性
 * 带来的后果就是新类型继承而来的属性都在原型上，也就是所有实例都会共享属性，那么对于对象类型的属性就会
 * 出现牵一发而动全身的后果。
 * 2. 在创建子类型的实例时，不能向超类型的构造函数中传递参数，没有办法在不影响所有对象实例的情况下
 * 给超类型的构造函数传递参数
 */

// 借用构造函数完成继承
// 问题在于不能服用方法，因为方法还是定义在原型上的话就不能继承过来，用在构造函数里就不能复用
function SuperType() {
    this.colors = [1,2,3];
}
function SubType() {
    SuperType.call(this);
}

var instance1 = new SubType();
instance1.colors.push(6,7);
console.log(instance1.colors);  // => [1,2,3,6,7]
var instance2 = new SubType();
console.log(instance2.colors);  // => [1,2,3]

// 组合继承
// 使用原型链继承原型属性和方法，使用构造函数继承实例属性

function SuperType(name) {
    this.name = name;
    this.colors = [1,2,3];
}

SuperType.prototype.say = function() {
    console.log(this.name);
}
// 使用构造函数继承实例属性
function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}
// 使用原型链继承方法
SubType.prototype = new SuperType();
SubType.prototype.say = function() {
    console.log(this.age);
}

var instance1 = new SubType("fuck", 121);
var instance2 = new SubType("hhh", 222);
instance1.colors.push(5,6);
instance1.say();
instance2.say();
console.log(instance1.colors);
console.log(instance2.colors);
// 组合继承避免了原型链继承和构造函数继承的缺陷，成为最常用的继承方式，而且 instanceof 和 isPrototypeOf() 也能
// 用于识别基于组合继承创建的对象

// 老道的两种继承方式
// 原型继承，缺点依然是实例属性共享
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

// 寄生式继承

function createAnother(original) {
    var clone = inherit(original);
    clone.sayHi = function() {
        console.log("fuckkkk");
    }
    return clone;
}

// 寄生式继承更多用于拓展已有对象的功能，不一定非要继承一个对象，任何可以返回一个新对象的方式都可以用来寄生

// 组合寄生式继承
// 组合继承虽然用的多，但是我们可以发现，一次继承过程中需要两次调用超类型的构造函数，我们实际上是通过第二次调用
// 构造函数屏蔽了第一次继承到子类型原型上的属性，并使其成为实例属性，也就是说最终的对象有两组实例属性，一组在
// 原型上，会被所有实例改变，一组在实例上，每个实例独享。

function suInherit(subType, superType) {
    var prototype = inherit(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

// 使用 suInherit 来代替组合继承时的第一次 new 超类实例，减少了重复的实例属性。
