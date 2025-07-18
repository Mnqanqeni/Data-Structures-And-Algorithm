/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

/*
1290. Convert Binary Number in a Linked List to Integer

Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

The most significant bit is at the head of the linked list.
*/
let getDecimalValue = function(head) {
    
    let myList=[];
    let tmp= head
    tmp=head;
    while(tmp.next !== null){
        myList.unshift(tmp.val);
        tmp=tmp.next;
    }
    myList.unshift(tmp.val);

    let sum=0
    let base2=1;
    for(let i=0;i<myList.length;i++){
        sum= sum + (myList[i])*(2**i);
    }
    return sum;
};
