// Merge two sorted linked lists and return it as a new list.
// The new list should be made by splicing together the nodes of the first two lists.

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

let m5 = new Node(null, 12)
let m4 = new Node(m5, 10)
let m3 = new Node(m4, 8)
let m2 = new Node(m3, 6)
let m1 = new Node(m2, 4)
let h2 = new Node(m1, 2);

const mergeTwoLists = (h1, h2) => {
    let sortedList;
    while (h1 || h2) {
        if (!h1) {
            sortedList = appendToList(sortedList, h2);        
            h2 = h2.next;            
        } else if (!h2) {
            sortedList = appendToList(sortedList, h1);
            h1 = h1.next;            
        } else if (h1.val < h2.val) {
            sortedList = appendToList(sortedList, h1);
            h1 = h1.next;
        } else {
            sortedList = appendToList(sortedList, h2);        
            h2 = h2.next;
        }
    }
    return sortedList;
}

const appendToList = (sortedList, node) => {
    let list = sortedList;
    if (!list) {
        return new Node(null, node.val);
    }
    while (true) {
        if (!list.next) {
            list.next = new Node(null, node.val);
            break;
        }
        list = list.next;
    }
    return sortedList;
}

let result = mergeTwoLists(h1, h2);

// result = h2;

console.log(result);

while (result) {
    console.log(result.val);
    result = result.next;
}

