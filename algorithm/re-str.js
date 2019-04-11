/**
 * 反转字符串
 * 字符串移位
 * 数组移位
 * two-sum
 * three-sum
 */

function reStr(str) {
    var arr = str.split("");
    arr = arr.reverse();
    str = arr.join("");
    return str;
}

reStr("fuckyou you"); // => uoy uoykcuf

function goStr(str, step){
    step = step % str.length;
    var left = str.slice(0, step);
    var right = str.slice(step);
    str = reStr(left) + reStr(right);
    return reStr(str);
}

goStr("123456", 3); // => "456123"

function goArray(arr, step){
    step = step % arr.length;
    var left = arr.slice(0, step);
    var right = arr.slice(step);
    arr = left.reverse().concat(right.reverse());
    return arr.reverse();
}

goArray([1,2,3,4,5,6], 3); // => [4,5,6,1,2,3]

// hash map
function twoSum(arr, target) {
    const map = {}
    for (let i = 0; i < arr.length; i++){
        if(map.hasOwnProperty(target - arr[i])){
            return [i, map[target-arr[i]]];
        }
        map[arr[i]] = i;
    }
}

console.log(twoSum([2,7,11,9], 18)); // => [2,1]
