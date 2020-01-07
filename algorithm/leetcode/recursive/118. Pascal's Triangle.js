/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    let tempRes = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        tempRes.push(1);
      }else {
        tempRes.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
    result.push(tempRes);
  }
  return result;
};