// Invert a binary tree.

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// to
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

class Node {
  constructor(value, l, r) {
    this.value = value;
    this.left = l;
    this.right = r;
  }
}

let rcOf2 = new Node(9);
let lcOf2 = new Node(6);
let rcOf1 = new Node(3);
let lcOf1 = new Node(1);
let c2 = new Node(7, lcOf2, rcOf2)
let c1 = new Node(2, lcOf1, rcOf1)
let parent = new Node(4, c1, c2);

// recursive function switches left and right children, then passes each of the children into itself. Base case is a return when no children;

const invertTree = function(root) {

    if (!root.left && !root.right) return;

    let left = root.left;
    root.left = root.right;
    root.right = left;

    invertTree(root.left);
    invertTree(root.right);

};

invertTree(parent);

let left = parent.left;
let right = parent.right;

let lastNodes = [parent];

while (lastNodes.length !== 0) {
    nodes = lastNodes;
    lastNodes = []
    nodes.forEach(node => {
        if (node.left) { 
            console.log("left:", node.left);
            lastNodes.push(node.left)
        }
        if (node.right) { 
            console.log("right:", node.right);
            lastNodes.push(node.right)
        }
    });
};