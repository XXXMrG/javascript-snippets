/**
 * 用 setTimeout 来实现一个 setInterval
 * setInterval 可能存在的问题是如果一个定时器任务的执行时间比两个任务的时间间隔还长
 * 那么某些定时器代码会被跳过，不会被添加到队列中
 * 同时也会引起某些定时器代码的执行间隔比设定的要小
 * 我们可以通过 setTimeout + 递归的方式生成定时器任务链来解决这个问题
 */

/**
 * 
 * @param {function} func the callback function
 * @param {number} w time between two function
 * @param {number} time time of execute
 */

function interval(func, w, time) {
    const inter = function() {
        // 默认不传参数的话就会一直执行，否则通过 time 的闭包变量控制次数
        if (typeof time === "undefined" || time-- > 0) {
            // 递归
            setTimeout(inter, w);
            // 差错处理
            try {
                func.call(null);
            } catch (err) {
                time = 0;
                throw err.toString();
            }
        }
    };
    // 启动函数
    setTimeout(inter, w);
}

interval(
    () => {
        console.log(new Date() + "");
    },
    1000,
);
