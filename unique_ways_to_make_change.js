 // *  Problem : Coin Change                                             *
 // *                                                                    *
 // *  Prompt: US Currency has coins in circulation with the             *
 // *          following value in cents: [1, 5, 10, 25, 50, 100]         *
 // *                                                                    *
 // *          Given a value, find how many unique ways to make change   *
 // *          given the coin values in circulation.                     *
 // *                                                                    *
 // *  Input:  An integer N (value from which to make change)            *
 // *  Output: An integer (number of unique ways to make change)  

// (outer most func):

  // Take highest coin from array that is < val
// Use recursive function to take highest coin (has access to coins = highest coin and on), and add all combinations of coins 
// each recursive call goes until the sum is === val, in which case you increment the combination count
// or if it exceeds it becomes a dead end
// pass the recursive call the array of coins only up until the current coin


let coins = [100, 50, 25, 10, 5, 1];

const coinChange = val => {
  let combinations = 0;

  const getCombos = (sum, coins) => {
    if (sum === val) {
      combinations++
    } else if(sum > val) return;

    coins.forEach((coin, i) => {
      getCombos(sum + coin, coins.slice(i) );
    });
  };
  getCombos(0, coins);

  return combinations;
};

let r = coinChange(1000); // 6
// 1...
// 11111 111111 5
// 11111 5 5
// 5 5 5
// 11111 10
// 5 10

console.log("r:", r);
