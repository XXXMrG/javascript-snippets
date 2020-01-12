/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  const memo = fn => {
    let table = {};
    return arg => table[arg] || (table[arg] = fn(arg));
  }
  const fibonacci = memo(n => {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  })
  return fibonacci(N);
};