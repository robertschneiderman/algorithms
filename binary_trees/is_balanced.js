// create a recursive function that counts child nodes, see if left and right are ===, +- 1
// have check that sees if node has a space, it shouldn't have a grandchild'

class Node {
  constructor(value, l, r) {
    this.value = value;
    this.left = l;
    this.right = r;
  }
}

let ggcOf1 = new Node(6);
let gcOf1 = new Node(5, ggcOf1);
let gcOf2 = new Node(4);
let c2 = new Node(3, gcOf2)
let c1 = new Node(1, gcOf1)
let parent = new Node(2, c1, c2);

// parent.children.push(c1);
// c1.children.push(gcOf1);
// gcOf1.children.push(ggcOf1);
// parent.children.push(c2);
// c2.children.push(gcOf2);

        //         2
        //     1      3
        //   5      4
        // 6

const isBalancedTree = node => {
    let isBalanced = true;
    let count = 0;

    const recursiveFnc = (node) => {
        count++
        if (!node.left && !node.right) return count;

        // if (hasGrandChildAndSpace(node)) isBalanced = false;

        if (node.right) {
            recursiveFnc(node.right, count);
        }
        if (node.left) {
            recursiveFnc(node.left, count);
        }
    }

    let countLeft = recursiveFnc(node.left);
    let countRight = recursiveFnc(node.right);

    return (count);

    // let difference = countLeft - countRight;
    // if (difference > 1 || difference < -1 ) return false;
    // return isBalanced;
}

console.log("answ:", isBalancedTree(parent))

// const hasGrandChildAndSpace = node => {
//     if (node.left === null && (node.right.left || node.right.right)) return true;
//     if (node.right === null && (node.left.left || node.left.right)) return true;
//     return false;
// }