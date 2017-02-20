// a line of n houses, there is a burgular trying to steal, each house has a number (any number) the burgular can steal from any house, but cannot steal from two consecutive houses.a

// what is the maximum value that hte burgular can steal


// [4, 2]
// 4
// [1, 10, 3, 2, 12]

// [3, 2, 12]
// 5

// [12]
// 8


const burgular = (arr, count) => {

    if (arr.length === 2) return count + Math.max(arr[0], arr[1]);
    if (arr.length === 1) return count + arr[0];

    let take = burgular(arr.slice(2), count + arr[0]); //taking
    let skip = burgular(arr.slice(1), count); //skip

    return Math.max(take, skip);

};

let result = burgular([1, 10, 3, 20, 12], 0);

console.log('result: ', result);
