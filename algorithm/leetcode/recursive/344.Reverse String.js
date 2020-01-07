/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  const recursive = (str, left, right) => {
    if (left >= right) {
      return;
    }
    [ str[left], str[right] ] = [ str[right], str[left] ];
    recursive(str, ++left, --right);
  }
  recursive(s, 0, s.length - 1);
};