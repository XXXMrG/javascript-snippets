/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // 注意 这里如果使用 fill 来生成数组会出现引用的是同一个对象的问题
  let row = Array.from({length: 9}).map(val => { return {} })
  let col = Array.from({length: 9}).map(val => { return {} })
  let box = Array.from({length: 9}).map(val => { return {} })
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const box_index = parseInt(i / 3) * 3 + parseInt(j / 3)
      const value = board[i][j]
      if (value !== ".") {
        row[i][value] = row[i][value] ? ++row[i][value] : 1
        col[j][value] = col[j][value] ? ++col[j][value] : 1
        box[box_index][value] = box[box_index][value] ? ++box[box_index][value] : 1
        if (row[i][value] > 1 || col[j][value] > 1 || box[box_index][value] > 1) {       
          return false
        }
      }
    }
  }
  return true
}
