// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

// Basically, the deletion can be divided into two stages:

// Search for a node to remove.
// If the node is found, delete the node.
// Note: Time complexity should be O(height of tree).

// Example:

// root = [5,3,6,2,4,null,7]
// key = 3

//     5
//    / \
//   3   6
//  / \   \
// 2   4   7

// Given key to delete is 3. So we find the node with value 3 and delete it.

// One valid answer is [5,4,6,2,null,null,7], shown in the following BST.

//     5
//    / \
//   4   6
//  /     \
// 2       7

// Another valid answer is [5,2,6,null,4,null,7].

//     5
//    / \
//   2   6
//    \   \
//     4   7

class Node {
  constructor(value, l, r) {
    this.value = value;
    this.left = l;
    this.right = r;
  }
}

let rcOf2 = new Node(7);
let rcOf1 = new Node(4);
let lcOf1 = new Node(2);
let c2 = new Node(6, null, rcOf2);
let c1 = new Node(3, lcOf1, rcOf1);
let parent = new Node(5, c1, c2);

// dfs to find key. store reference to parent node
// when found, "save grandchildren" by connecting one to parent, and other becomes

const deleteNodeInBst = (prev, node, key) => {
    if (node.val === key) {

    }
};