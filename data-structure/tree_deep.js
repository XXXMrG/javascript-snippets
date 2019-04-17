/**
 * 二叉树层次遍历，递归版本
 * 很厉害的哦
 * @param {*} pRoot 
 */

function Print(pRoot) {
    // write code here
    var res = [];
    depth(pRoot, 1);
    function depth(now, deep) {
        if (now === null) return;
        deep > res.length && res.push([]);
        res[deep-1].push(now.val);
        depth(now.left, deep + 1);
        depth(now.right, deep + 1);
    }
    return res;
}

