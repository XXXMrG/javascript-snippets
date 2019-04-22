/**
 * 
 * 第 59 题：给定两个数组，写一个方法来计算它们的交集。
 * 例如：给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。
 */

// hash 表，思路类似寻找数组中出现次数最多的元素
function inter (nums1, nums2) {
    const map = {};
    const res = [];
    for (let n of nums1) {
        map[n] ? map[n]++ : map[n] = 1;
    }
    for (let n of nums2) {
        if (map[n] > 0) {
            res.push(n);
            map[n]--;
        }
    }
    return res;
}

console.log(inter([1,2,2,1], [1,2]));
// 操作原数组方法，避免了相同元素的重复
function union (nums1, nums2) {
    return nums1.filter(item => {
        let idx = nums2.indexOf(item);
        if (idx !== -1) {
            nums2.splice(idx, 1);
            return item;
        }
    })
}

console.log(union([1, 2, 2, 1], [2,2]));
