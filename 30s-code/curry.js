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
        return fn.apply(this, args.concat(rest));
    }
}
let myAdd = curry(add,1,2)(3);
console.log(myAdd)