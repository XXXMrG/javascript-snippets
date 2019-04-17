/**
 * 
LazyMan('Tony');
// Hi I am Tony

LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
*/

class LazyManClass {
    constructor(name) {
        this.taskList = [];
        this.name = name;
        console.log(`Hi I am ${name}`);
        // 保证触发一次 next() 且是在主线程全部结束后触发
        setTimeout(() => {
            this.next();
        }, 0);
    }
    eat(name) {
        var that = this;
        var fn = (function(n) {
            return function() {
                console.log(`I am eating ${n}`);
                that.next();
            };
        })(name);
        this.taskList.push(fn);
        return this;
    }
    sleepFirst(time) {
        // 利用了箭头函数和闭包
        const fn = () => {
            setTimeout(() => {
                console.log(`先等待 ${time} 秒`);
                this.next();
            }, time * 1000);
        };
        // 添加到队列首
        this.taskList.unshift(fn);
        return this;
    }
    sleep(time) {
        var that = this;
        var fn = (function(t) {
            return function() {
                setTimeout(() => {
                    console.log(`等待了 ${t} 秒`);
                    that.next();
                }, t * 1000);
            };
        })(time);
        this.taskList.push(fn);
        return this;
    }
    next() {
        var fn = this.taskList.shift();
        fn && fn();
    }
}

function LazyMan(name) {
    return new LazyManClass(name);
}

LazyMan("Tony")
    .eat("lunch")
    .eat("dinner")
    .sleepFirst(5)
    .sleep(10)
    .eat("junk food");

class LazyManClass {
    constructor(props) {
        this.sub = [];
        console.log(`Hi I am ${props}`);
        setTimeout(() => {
            this.start();
        }, 0);
    }
    eat(params) {
        this.sub.push(function() {
            console.log(`I am eating ${params}`);
        });
        return this;
    }
    sleepFirst(s) {
        this.sub.unshift(this.delay(s));
        // 这边还没有返回  同步就继续执行了
        return this;
    }
    delay(s) {
        return () => {
            return new Promise(resolve => {
                setTimeout(function() {
                    console.log(`等待了${s}秒...`);
                    resolve();
                }, s * 1000);
            });
        };
    }
    sleep(s) {
        this.sub.push(this.delay(s));
        // 这边还没有返回  同步就继续执行了
        return this;
    }
    async start() {
        for (const iterator of this.sub) {
            await iterator();
        }
    }
}
function LazyMan(props) {
    return new LazyManClass(props);
}
LazyMan("Tony")
    .eat("lunch")
    .eat("diner")
    .sleepFirst(1)
    .sleep(2)
    .eat("junk food");
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
