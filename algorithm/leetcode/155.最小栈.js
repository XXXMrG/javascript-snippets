/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.minStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    let l = this.minStack.length
    if (l == 0 || this.minStack[--l] >= x) {
      this.minStack.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const value = this.stack.pop()
    let l = this.minStack.length
    if (value === this.minStack[--l]) {
      this.minStack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let l = this.stack.length
    return this.stack[--l]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let l = this.minStack.length
    return this.minStack[--l]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

