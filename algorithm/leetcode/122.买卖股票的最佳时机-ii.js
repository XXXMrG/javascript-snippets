/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let money = 0
  for (let i = 0; i < prices.length - 1; i++) {
    // 预知第二天的股票市场价格
    if (prices[i] < prices[i + 1]) {
      money += prices[i + 1] - prices[i]
    }
  }
  return money
};

