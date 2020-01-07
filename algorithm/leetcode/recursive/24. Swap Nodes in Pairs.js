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
var swapPairs = function(head) {
  const recursive = node => {
    // 处理单独节点和空节点
    if (node === null || node.next === null) {
      return node;
    }
    const temp = node.next;
    node.next = recursive(node.next.next);
    temp.next = node;
    return temp;
  };
  return recursive(head);
};