class Node {
    constructor(next, val) {
        this.next = next;
        this.val = val; 
    }
}

let n5 = new Node(null, 11)
let n4 = new Node(n5, 9)
let n3 = new Node(n4, 7)
let n2 = new Node(n3, 5)
let n1 = new Node(n2, 3)
let h1 = new Node(n1, 1);


//Get access to current node and next and change next to point to current

const reverseLinkedList = (curNode, nextNode) => {

    if (!nextNode.next) {
        nextNode.next = curNode;
        return;
    }

    if (curNode.next === nextNode) curNode.next = null;

    let nextNextNode = nextNode.next;
    nextNode.next = curNode;

    reverseLinkedList(nextNode, nextNextNode);
}

reverseLinkedList(h1, n1);

let result = n5;

console.log(result);

while (result) {
    console.log(result.val);
    result = result.next;
}