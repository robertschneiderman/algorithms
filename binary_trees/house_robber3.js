// 337. House Robber III QuestionEditorial Solution  My Submissions
// Total Accepted: 31937
// Total Submissions: 77334
// Difficulty: Medium
// Contributors: Admin
// The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

// Determine the maximum amount of money the thief can rob tonight without alerting the police.

// Example 1:
//      3
//     / \
//    2   3
//     \   \ 
//      3   1
// Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
// Example 2:
//      3
//     / \
//    4   5
//   / \   \ 
//  1   3   1
// Maximum amount of money the thief can rob = 4 + 5 = 9.


 class Node {
  constructor(value, l, r) {
    this.value = value;
    this.left = l;
    this.right = r;
  }
}

let gcOf2a = new Node(1);
let gcOf1b = new Node(3);
let gcOf1a = new Node(1);
let c2 = new Node(5, gcOf2a)
let c1 = new Node(4, gcOf1a, gcOf1b)
let parent = new Node(3, c1, c2);

 const houseRobber3 = (root) => {

     const recursiveFnc = (root, flag) => {
         flag = !flag;
         let value = flag ? root.value : 0;
         if (!root.left && !root.right) {
            return value;
         }

         if (root.left) value = value + recursiveFnc(root.left, flag);
         if (root.right) value = value + recursiveFnc(root.right, flag);

         return value;
     }

     let situation1 = recursiveFnc(root, true);
     let situation2 = recursiveFnc(root, false);

     return (situation1 > situation2) ? situation1 : situation2;

 }

 let result = houseRobber3(parent);

 console.log('result: ', result);