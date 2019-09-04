/**
 * 
 * @param {string} str 
 * 判断字符串中括号是否匹配
 */
function judge(str) {
    let stack = [];
    for (let item of str) {
        if (item === "(") {
            stack.push(item);
        }
        else if (item === ")") {
            // 左括号不够了
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    // 判断左括号会不会多
    return stack.length === 0;
}

console.log(judge("(()"));