let a = [1, 2, 3, 4, 5];
let sum = a.reduce((x, y) => {
    return x + y;
}, 0);
let product = a.reduce((x, y) => {
    return x * y;
}, 1);
let max = a.reduce((x, y) => {
    return x > y ? x : y;
});

console.log(sum, product, max);
