/**
输入包括一个字符串s,字符串s的长度length(1 ≤ length ≤ 50),s只含小写字母('a'-'z')
输出一个整数,表示所有碎片的平均长度,四舍五入保留两位小数。
如样例所示: s = "aaabbaaac"
所有碎片的平均长度 = (3 + 2 + 3 + 1) / 4 = 2.25
 */
const str = readline().split('')
let cur = str[0]
let time = 0
let res = str.reduce((res, val) => {
    if (val === cur) {
        time++
    } else {
        res.push(time)
        time = 1
        cur = val
    }
    return res
}, [])
res.push(time)
let result = res.reduce((num, val) => num + val) / res.length
print(result.toFixed(2))