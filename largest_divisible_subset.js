// Given a set of distinct positive integers, find the largest subset such that every pair (Si, Sj) of elements in this subset satisfies: Si % Sj = 0 or Sj % Si = 0.
// If there are multiple solutions, return any subset is fine.

// nums: [1,2,3]
// Result: [1,2] (of course, [1,3] will also be ok)

// nums: [1,2,4,8]
// Result: [1,2,4,8]

const largestDivisibleSubset = arr => {
    let largestDivisibleSubset = [];
    let j = 1;
    for (let i = 0; i < arr.length; i++) {
        let divisibleSubset = [];
        while (true) {
            isDivisibleSubset = getDivisbleSubset(arr.slice(i, j+1));
            if (!isDivisibleSubset || j === arr.length) break
            divisibleSubset = arr.slice(i, j+1);
            j++;
        }
        if (largestDivisibleSubset.length < divisibleSubset.length) largestDivisibleSubset = divisibleSubset;
    }
    return largestDivisibleSubset;
}

const getDivisbleSubset = subset => {
    for (let i = 0; i < subset.length; i++) {
        let curNum = subset[i];
        for (j = (i+1); j < subset.length; j++) {
            let subsNum = subset[j];
            if (subsNum % curNum !== 0 && curNum % subsNum !== 0) return false;
        }
    }
    return true;
}

let result = largestDivisibleSubset([1, 2, 4, 8, 9, 10]);
console.log('result: ', result);