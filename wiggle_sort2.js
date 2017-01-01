// Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

// Example:
// (1) Given nums = [1, 5, 1, 1, 6, 4], one possible answer is [1, 4, 1, 5, 1, 6]. 
// (2) Given nums = [1, 3, 2, 2, 3, 1], one possible answer is [2, 3, 1, 3, 1, 2].

// Note:
// You may assume all input has valid answer.

// Follow Up:
// Can you do it in O(n) time and/or in-place with O(1) extra space?


const wiggleSort = arr => {
    let mean = getMedian(arr);
    let sortedNumbers = organizeNumbers(arr, mean);
    [largerArray, smallerArray] = sortedNumbers;

    let result = [];

    for (i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            result.push(largerArray.pop);
        } else {
            result.push(smallerArray.pop);
        }
    }

    return result;
}

const getMedian = arr => {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return Math.floor(sum / arr.length);
}

const organizeNumbers = (arr, median) => {
    for (i = 0; i < arr.length; i++) {
        let num = arr[i];
        let largerNums = [], smallerNums = [];
        if (num > median) {
            largerNums.push(num);
        } else {
            smallerNums.push(num);
        }
    }
    return (largerNums.length > smallerNums.length) ? [largerNums, smallerNums] : [smallerNums, largerNums];
}