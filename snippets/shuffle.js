/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.arr = Array.from(nums)
}

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.arr
}

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const res = this.arr.slice()
  let L = res.length
  while (L) {
    let pos = Math.floor(Math.random() * L--)
    ;[res[pos], res[L]] = [res[L], res[pos]]
  }
  return res
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
