// Given a nested list of integers represented as a string, implement a parser to deserialize it.

// Each element is either an integer, or a list -- whose elements may also be integers or other lists.

// Note: You may assume that the string is well-formed:

// String is non-empty.
// String does not contain white spaces.
// String contains only digits 0-9, [, - ,, ].
// Example 1:

// Given s = "324",

// You should return a NestedInteger object which contains a single integer 324.
// Example 2:

// Given s = "[123,[456,[789]]]",

// Return a NestedInteger object containing a nested list with 2 elements:

// 1. An integer containing value 123.
// 2. A nested list containing two elements:
//     i.  An integer containing value 456.
//     ii. A nested list with one element:
//          a. An integer containing value 789.


"[123,[456,[789]]]"

// put in original string without outer brackets
// if first character number... extractNumber
// if first character bracket... extractArray
// extractArray keeps track of open brackets. and returns when === 0
// push numbers into result array, recursive call on array

const miniParser = str => {
    let result = [];
    let strCopy = str.slice(1, str.length-1)

    while (strCopy.length > 0) {
        if (strCopy[0] === '[') {
            let array = extractArray(strCopy);
            array = miniParser(array);
            result.push(array);
        } else {
            let number = extractNumber(strCopy);
            strCopy = strCopy.slice(number.length+1)
            result.push(parseInt(number));
        }
    }
    return result;
}

const extractArray = str => {
    let openParens = ['['];

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === '[') openParens.push('[');
        if (char === ']') openParens.pop();
        if (openParens.length === 0) return str.slice(0, i+1);
    }
}

const extractNumber = str => {
    let i = 0;
    while (str[i] !== ',' || !str[i]) i++;
    return str.slice(0, i);
}

let result = miniParser("[123,[456,[789]]]");