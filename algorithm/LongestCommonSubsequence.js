/**
 *
 * @param {string} s1
 * @param {string} s2
 * 最长子序列 可以不连续
 */
const LCS = (s1, s2) => {
  const m = s1.length + 1
  const n = s2.length + 1
  let dp = makeArray(m, n)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0
      } else if (s1[i-1] === s2[j-1]) {
        // cur char equal means value plus
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        // not equal means use front value
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[m - 1][n - 1]
}

const makeArray = (m, n) => {
  let a = []
  for (let i = 0; i < m; i++) {
    a.push([])
    for (let j = 0; j < n; j++) {
      a[i].push([])
    }
  }
  return a
}

const res = LCS('abcde', 'def')
console.log(res)
