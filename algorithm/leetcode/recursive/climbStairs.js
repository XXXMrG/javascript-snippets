/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 2) {
    return n;
  }
  let first = 1;
  let second = 2;
  let sum = 0;
  for (let i = 3; i <= n; i++) {
    sum = first + second;
    first = second;
    second = sum;
  }
  return sum;
};