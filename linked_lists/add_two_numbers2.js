// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Follow up:
// What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

// Example:

// Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 8 -> 0 -> 7

class Node {
    constructor(next, val) {
        this.next = next;
        this.val = val; 
    }
}

let n3 = new Node(null, 3);
let n2 = new Node(n3, 4);
let n1 = new Node(n2, 2);
let h1 = new Node(n1, 7);

let m2 = new Node(null, 4);
let m1 = new Node(m2, 6);
let h2 = new Node(m1, 5);


// find longer ll, and difference in lenght
// once diffeence met add
// while loop until all single digits
// subtract 10 and add 1 to previous node (stored), else create new head node that's val is 1


var addTwoNumbers = function(l1, l2) {
    let firstNumber = getNumber(l1);
    let secondNumber = getNumber(l2);

    let total = firstNumber + secondNumber;

    return createLl(total);
};

const createLl = total => {
    let totalStr = total.toString();
    let resultHead = new Node(null, parseInt(totalStr[0]));
    let resultLL = resultHead;
    for (let i = 1; i < totalStr.length; i++) {
        resultLL.next = new Node(null, parseInt(totalStr[i]));
        resultLL = resultLL.next;
    }
    return resultHead;
};

const getNumber = (node) => {
    let number = '';
    while (node) {
        number += node.val;
        node = node.next;
    }
    return parseInt(number);
};

let result = addTwoNumbers(h1, h2);
while(result) {
    console.log(result.val);
    result = result.next;
}