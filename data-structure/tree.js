/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 二叉树前序遍历迭代法
 * 使用堆栈，同时右子树先入栈，保证左子树先出栈。
 */
var preorderTraversal = function (root) {
    if (!root) return [];
    let res = [];
    let stack = [root];
    while (stack.length > 0) {
        let top = stack.pop();
        res.push(top.val);
        top.right && stack.push(top.right);
        top.left && stack.push(top.left);
    }
    return res;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 二叉树中序遍历迭代法
 * 使用堆栈，先将左子树全部压进栈，出栈时将右子树压入堆栈。
 */
var inorderTraversal = function (root) {
    if (!root) return [];
    let res = [];
    let now = root;
    let stack = [];
    while (now !== null || stack.length != 0) {
        if (now !== null) {
            stack.push(now);
            now = now.left;
        } else {
            now = stack.pop();
            res.push(now.val);
            now = now.right;
        }
    }

    return res;
};