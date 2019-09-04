
/*
sleep 函数的作用是让线程休眠一段时间
也就是说其他语言中的 sleep 实际上是让当前的系统进程暂停一段时间
继续执行的粒度是语句级别的，而 JavaScript 是不支持直接操作系统调用的
而且 setTimeout 实际上的继续执行级别是函数级别的
同时 sleep 应该是同步的 setTimeout 是异步的
在 node 中可以通过一个 node-sleep 包来实现
而在浏览器环境中，我们可以从异步和同步两个方面实现 sleep
*/


// 最简单的异步
function sleep1 (time, cb) {
    setTimeout(cb, time);
}
sleep1(1000, () => console.log("1000  " + new Date()));
// promise
function sleep2 (time) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, time);
    })
}
sleep2(2000).then(() => console.log("2000  " + new Date()));
// async / await
async function sleep3 (time) {
    await sleep2(time);
}
sleep3(3000).then(() => console.log("3000  " + new Date()));
// 同步方法，用一个死循环直接阻塞主线程
function sleep4(time) {
    for (let t = Date.now(); Date.now() - t <= time;);
}
sleep4(4000);
// 这时输出的会把前三个一起输出，因为他们的输出都被阻塞在前面，会一起跟着输出
console.log("4000  " + new Date());




