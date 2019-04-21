function findMost1 (arr) {
    var h = {};
    var maxNum = 0;
    var maxEle = null;
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i];
        h[a] === undefined ? h[a] = 1 : (h[a]++);
        if (h[a] > maxNum) {
            maxEle = a;
            maxNum = h[a];
        }
    }
    console.log(`most element: ${maxEle} : ${maxNum} times`);
}

findMost([1,2,3,4,5,6,6])

function findMost (arr) {
    var maxEle;
    var maxNum = 1;
    var obj = arr.reduce((p, k) => {
        p[k] ? p[k]++ : p[k] = 1;
        if (p[k] > maxNum) {
            maxEle = k;
            maxNum = p[k];
        }
        return p;
    }, {})
    console.log(obj);
    console.log(`most element: ${maxEle} : ${maxNum} times`);
}