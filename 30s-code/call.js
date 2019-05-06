/*
Given a key and a set of arguments, call them when given a context. Primarily useful in composition.

Use a closure to call a stored key with stored arguments.
*/

const call = (key, ...args) => context => context[key](...args);

Promise.resolve([1, 2, 3])
    .then(
        // then 会将 resolve 中的数据传进来作为 callback 的参数
        // 实际上等于 call("map, fn")([1,2,3])
        // 因此 call 的执行上下文就是这个数组
        // 等价于 [1,2,3].map(x => 2 * x)
        call("map", x => 2 * x)
    )
    .then(console.log);

// bind 没有明确指出绑定对象的时候，会把函数绑定至执行上下文
// 因此我们定义的 map 的作用实际上就是调用当前执行上下文已经存在的 map 方法
const map = call.bind(null, "map");
Promise.resolve([1, 2, 3])
    .then(map(x => 2 * x))
    .then(console.log);
