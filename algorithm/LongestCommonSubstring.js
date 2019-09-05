/**
 *
 * @param {string} s1
 * @param {string} s2
 */
const LCS = (s1, s2) => {
  const m = s1.length
  const n = s2.length
  let maxGol = 0
  let dp = [[], []]
  for (let i = 0; i < m; i++) {
    // just use to line to save the dp value
    let cur = (i + 2) % 2
    let pre = (i + 1) % 2
    for (let j = 0; j < n; j++) {
      if (s1[i] === s2[j]) {
        if (i === 0 || j === 0) {
          dp[cur][j] = 1
        } else {
          dp[cur][j] = dp[pre][j-1] + 1
        }
      } else {
        dp[cur][j] = 0
      }
      maxGol = Math.max(dp[cur][j], maxGol)
    }
  }
  return maxGol
}


const res = LCS('abcdxexxxf', 'def')
console.log(res)
