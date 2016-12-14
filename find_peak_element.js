// A peak element is an element that is greater than its neighbors.

// Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.

// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

// You may imagine that num[-1] = num[n] = -∞.

// For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.


// my examples
 // [2, 4, 1, 5, 2, 1, 2, 1, 4, 2, 3]
 // [2, 4, 5, 6, 7, 8, 9, 1, 4, 2, 3]

const findPeakElement = nums => {
    i = 1;
    j = nums.length - 2;

    const find = (i, j) => {
        let m = Math.floor((j+i) / 2);
        if (nums[i] > nums[i-1] && nums[i] > nums[i+1]) return i;
        if (nums[j] > nums[j-1] && nums[j] > nums[j+1]) return j;
        if (nums[m] > nums[m-1] && nums[m] > nums[m+1]) return m;
        if (i === m) return null; 

        let res;
        if (nums[i] > nums[i+1] && nums[m-1] < nums[m]) { // is trough & peak
            res = find(i, m)
        } else if (nums[i] < nums[i+1] && nums[m-1] > nums[m]) {  // is trough & peak
            res = find(i, m)
        } else if(nums[m] > nums[m+1] && nums[j-1] < nums[j+1]) { // is trough & peak
            res = find(m, j)
        } else if(nums[m] < nums[m+1] && nums[j-1] > nums[j+1]) { // is peak & trough
            res = find(m, j)            
        } else { // no lead
            res = find(i, m);
            if (!res) {            
                res = find(m, j);
            }            
        }
        return res;
    }

    return find(i, j);
}
// let nums = [2, 4, 5, 6, 7, 8, 9, 1, 4, 2, 3];
let nums = [2, 4, 5, 6, 7, 8, 9, 2, 1, 2, 3];
let result = findPeakElement(nums);

console.log(result);