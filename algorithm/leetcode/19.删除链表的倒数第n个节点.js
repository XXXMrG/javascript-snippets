/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head) { return }
  let fast = head
  let slow = head
  let time = n
  while (time > 0) {
    fast = fast.next
    time--
  }
  // 头节点被删除
  if (fast === null) {
    head = head.next
    return head
  }
  while(fast.next !== null) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return head
}
