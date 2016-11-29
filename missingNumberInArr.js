
function sortNumber(a, b) {
    return a - b;
}

const missingNumber = arr => {
    let sortedArr = arr.sort(sortNumber);

    let n = arr.length;
    let idealSum = (n * (n + 1)) / 2
    
    let actualSum = arr.reduce((accum, num) => {
        return (accum + num)
    });

    return idealSum - actualSum;
} 

console.log("missingNumber([2, 3, 5, 1, 0]:", missingNumber([2, 3, 5, 1, 0]));

// 2n - 1 / 2


// =
// ==
// ===