/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
var isPalindrome = function(head) {
  if (!head) { return true }
  let fast = head
  let slow = head
  // 快慢链表找链表中点
  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }
  // 反转后半部分链表
  slow = slow.next
  fast = null
  while (slow) {
    let next = slow.next
    slow.next = fast
    fast = slow
    slow = next
  }
  // 头尾同时遍历
  slow = head
  while (fast) {
    if (slow.val !== fast.val) {
      return false
    }
    fast = fast.next
    slow = slow.next
  }
  return true
}
