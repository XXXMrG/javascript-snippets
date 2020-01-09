/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let result = [1];
  for (let i = 1; i <= rowIndex; i++) {
    let prv = result[0];
    let cur = prv;
    for (let j = 1; j <= i; j++) {
      cur = result[j];
      if (j === i) {
        result.push(1);
      } else {
        result[j] = prv + cur;
      }
      prv = cur;
    }
  }
  return result;
};