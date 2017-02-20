// Given a str determine whether the chars can be rearraned to be a palindrome

'';
'a';
'aa';
'aba';
'abda';

const rearrangeToPalindrome = str => {
    let charCount = getCharacterCounts(str);
    let odds = 0;
    let strLength = str.length;

    for (let i = 0; i < Object.keys(charCount).length; i++) {
        let key = Object.keys(charCount)[i];
        let count = charCount[key];
        if (count % 2 !== 0) odds++;
        if (odds > 1) return false; 
    } 
    return true;
};


const getCharacterCounts = str => {
    let hash = {};
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char.acii < 57 || char.acii > 120) next;
        
        if (!hash[char]) {
            hash[char] = 1;
        } else {
            hash[char]++;
        }
     }
    return hash;
};

let result = rearrangeToPalindrome('aaaabbbb');
console.log('result: ', result);