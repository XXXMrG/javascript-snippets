Array.prototype.myMap = function(fn) {
    return this.reduce((arr, val) => {
        arr.push(fn(val));
        return arr;
    }, []);
};


let res = [1,2,3].myMap((v) => 2 * v);
console.log(res);