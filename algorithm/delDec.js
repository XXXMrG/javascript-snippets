var del = function(nums) {
    var set = new Set();
    for (var i = 0; i < nums.length; i++){
        set.add(nums[i]);
    }
    return [...set];
};

var num = [1,2,3,4,3,2,1,2,3,4,5,8,6];
console.log(del(num));