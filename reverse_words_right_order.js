const reverseWords = sentence => {
    let words = [];
    let word = '';
    for (let i = 0; i < sentence.length; i++) {
        let letter = sentence[i];
        if (letter === ' ') {
            words.push(word);
            word = '';
            continue;
        }
        word += letter;
    }
    words.push(word);

    let reversedArr = words.reverse();
    
    return reversedArr.reduce((a, b) => {
        if (b === '') return a;
        return (a + ' ' + b);

    }, '');
};

let result = reverseWords('hello rob youre cool');
console.log('result: ', 'hi');