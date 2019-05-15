/**
 * 单例模式
 */
function getSingle(fn) {
    let instance;
    // 这里用闭包保存单例
    return function() {
        return instance || (instance = fn.apply(this, arguments));
    };
}

function createObj(name, text) {
    let obj = {
        name: name,
        text: text
    }
    return obj;
}

let res = getSingle(createObj);
let res1 = res("keith", "fuck");
// 这一次的参数是无效的哦
let res2 = res("xxx", "fuck");
console.log(res1.name);
console.log(res2.name);
console.log(res1 === res2);
