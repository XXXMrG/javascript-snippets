/**
 * 
 * @param {object} left 
 * @param {object} right 
 * 遍历对象的原型链，看 right 的原型是否出现在该原型链中
 */
function myInstanceof (left, right) {
    let rightProto = right.prototype;
    let leftValue = left.__proto__;
    while (true) {
        if (leftValue === null) {
            return false;
        }
        if (leftValue === rightProto) {
            return true;
        }
        leftValue = leftValue.__proto__;
    }
}

console.log(myInstanceof(Array, Object));