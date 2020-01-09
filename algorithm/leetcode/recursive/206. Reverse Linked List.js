/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if(head === null || head.next === null) {
    return head;
  }
  let p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  // p 在递归中始终保持是最后一个节点，所以最后变成了头节点
  return p;
};


var reverseList2 = function(head) {
  if (head === null) return null;
  let node = head;
  let prv = null;
  while (node !== null) {
      let temp = node.next;
      node.next = prv;
      prv = node;
      node = temp;
  }
  return prv;
};