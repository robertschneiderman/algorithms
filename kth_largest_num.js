// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// For example,
// Given [3,2,1,5,6,4] and k = 2, return 5.

[3,2,1,5,6,4]

var findKthLargest = function(nums, k) {
    let largestNums = [];
    nums.forEach(num => {
        if (largestNums.length === 0) {
            largestNums.push(num)
        } else {
            // [6, 4, 3]
            for (i = 0; i < largestNums.length; i++) {
                let largestNum = largestNums[i];
                if (num > largestNum) {
                    largestNums = largestNums.slice(0, i)
                    .concat([num])
                    .concat(largestNums.slice(i, k));
                    break;
                } else if (largestNums.length < k && i === largestNums.length-1) {
                    largestNums.push(num);
                }
            }
        }
    });
    return largestNums[k-1];
};

let result = findKthLargest([3,2,1,5,6,4], 2);

console.log('result: ', result);