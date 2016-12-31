// Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.

// Example:

// nums = [1, 2, 3]
// target = 4

// The possible combination ways are:
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)

// Note that different sequences are counted as different combinations.

// Therefore the output is 7.


// iterate through each number, make recursive call with the rest of the numbers, return if the number is >= 4.

// begin with count = 0, if 4, then count++

const combinationSum4 = (nums, sum, target) => {
    let count = 0;
    if (sum === target) {
        return 1;
    } else if (sum > target) {
        return 0;
    }
    nums.forEach(num => {
        count += combinationSum4(nums, (sum + num), target);
    })
    return count;
}

let result = combinationSum4([1, 2, 3], 0, 4);
console.log('result: ', result);