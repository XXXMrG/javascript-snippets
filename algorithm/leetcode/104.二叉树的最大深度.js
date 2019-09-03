/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  const func = node => {
    if (node === null) {
      return 0
    }
    let left = func(node.left) + 1
    let right = func(node.right) + 1
    return Math.max(left, right)
  }
  return func(root)
}
