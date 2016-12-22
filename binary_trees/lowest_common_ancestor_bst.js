// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

//         _______6______
//        /              \
//     ___2__          ___8__
//    /      \        /      \
//    0      _4       7       9
//          /  \
//          3   5
// For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2.


class Node {
  constructor(value, l, r) {
    this.value = value;
    this.left = l;
    this.right = r;
  }
}

let gcOf1b = new Node(5);
let gcOf1a = new Node(3);
let rcOf2 = new Node(9);
let lcOf2 = new Node(7);
let rcOf1 = new Node(4, gcOf1a, gcOf1b);
let lcOf1 = new Node(0);
let c2 = new Node(8, lcOf2, rcOf2)
let c1 = new Node(2, lcOf1, rcOf1)
let parent = new Node(6, c1, c2);


const lowestCommonAncestor = (root, p, q) => {
    if (p.value < root.value && root.value < q.value ||
        q.value < root.value && root.value < p.value) {
            return root;
        }
    
    let lSearch, rSearch;
    if (root.left) lSearch = lowestCommonAncestor(root.left, p, q);
    if (root.right) rSearch = lowestCommonAncestor(root.right, p, q);

    if (lSearch) {
        return lSearch;
    } else if (rSearch) {
        return rSearch;
    }
}

let result = lowestCommonAncestor(parent, lcOf1, gcOf1b);

console.log('result.value: ', result.value);