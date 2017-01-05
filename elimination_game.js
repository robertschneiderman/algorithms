// There is a list of sorted integers from 1 to n. Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
// Repeat the previous step again, but this time from right to left, remove the right most number and every other number from the remaining numbers.
// We keep repeating the steps again, alternating left to right and right to left, until a single number remains.
// Find the last number that remains starting with a list of length n.

// Example:

// Input:
// n = 9,

// 1 2 3 4 5 6 7 8 9 10 11 12
// 2 4 6 8 10 12
// 2 6 10
// 6

// Output:
// 6


const eliminationGame = n => {
    let arr = []
    for (i = 1; i <= n; i++) {
        arr.push(i);
    }

    while (arr.length !== 1) {
        for (let i = 0; i < arr.length; i++) {
            arr.splice(i, 1);
        }

        if (arr.length === 1) return arr[0];

        for (let i = arr.length-1; i >= 0; i -= 2) {
            arr.splice(i, 1);
        }
    }
    return arr[0];
}

let result = eliminationGame(12);
console.log('result: ', result);