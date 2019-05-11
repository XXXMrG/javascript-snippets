/*
chainAsync

Chains asynchronous functions.

Loop through an array of functions containing asynchronous events, calling next when each asynchronous event has completed.
*/

/**
 * 
 * @param {[function]} fns 
 */
const chainAsync = fns => {
    let curr = 0;
    const last = fns[fns.length - 1];
    const next = () => {
        // 这里递归传入下一个数组中的函数
        const fn = fns[curr++];
        fn === last ?  fn() : fn(next);
    };
    next();
};

chainAsync([
    next => {
        console.log("0 seconds");
        setTimeout(next, 1000);
    },
    next => {
        console.log("1 second");
        setTimeout(next, 1000);
    },
    () => {
        console.log("2 second");
    }
]);