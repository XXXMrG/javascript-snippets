function add (...rest) {
    let sum = 0;
    for (let item of rest) {
        sum += item;
    }
    return sum;
}

function curry (fn, ...rest) {
    let args = rest.slice();
    //console.log(args);
    return (...rest) => {
        for (let i = 0; i < rest.length; i++) {
            args.push(rest[i]);
        }
        return fn.apply(this, args);
    }
}
let myAdd = curry(add,1,2)(3);
console.log(myAdd)