/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head || !head.next) { return false }
  let slow = head
  let fast = head
  while (slow && fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
    // 快指针肯定会跑到慢指针的后一个
    if (fast.next === slow) {
      return true
    }
  }
  return false
}
