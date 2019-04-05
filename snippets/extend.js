/***
 * 
 * 给 Object.prototype 添加一个不可枚举的 extend()方法
 * 这个方法继承自他调用的对象，将作为参数传入的对象的属性一一复制
 * 除了值之外，也复制属性的所有特性，除非在目标对象中存在同名的属性
 * 参数对象的所有自有对象（包括不可枚举的属性）也会一一复制
 */

 Object.defineProperty(Object.prototype, "extend", {
     writable: true,
     enumerable: false,
     configurable: true,
     value: function(o) {
         // 得到所有自有属性，包括不可枚举属性
         var names = Object.getOwnPropertyNames(o);
         for (var i = 0; i < names.length; i++){
             // 如果属性同名，那么跳过复制
             if(names[i] in this) continue;
             // 获取属性内容
             var desc = Object.getOwnPropertyDescriptor(o, names[i]);
             // 添加该属性给当前对象。
             Object.defineProperty(this, names[i], desc);
         }
     }
 });

 var a = {
     x: 1,
     y: 2,
     add: function(){
         return this.x + this.y;
     }
 }

 var b = {}
 b.extend(a);
 console.log(b.add()); // => 3