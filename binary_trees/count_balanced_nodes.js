// Given a complete binary tree, count the number of nodes.

// In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

//        1
//      /   \
//     2     3
//    / \   / \
//   4   5 6   7
//  /
// 8

class Node {
  constructor(value, l, r) {
    this.value = value;
    this.left = l;
    this.right = r;
  }
}

let gcOf2b = new Node(7);
let gcOf2a = new Node(6);
let ggcOf1 = new Node(8)
let gcOf1b = new Node(5);
let gcOf1a = new Node(4, ggcOf1);
let c2 = new Node(3, gcOf2a, gcOf2b)
let c1 = new Node(2, gcOf1a, gcOf1b)
let parent = new Node(1, c1, c2);


var countNodes = function(root) {
    
};