// Given n = 3. 

// At first, the three bulbs are [off, off, off].
// After first round, the three bulbs are [on, on, on].
// After second round, the three bulbs are [on, off, on].
// After third round, the three bulbs are [on, off, off]. 

// So you should return 1, because there is only one bulb is on.

// [on, off, off, on, off]

const bulbSwitch = (n) => {
    let bulbs = [];
    for (i = 0; i < n; i++) {
        bulbs.push(true);
    }

    for (toggleIdx = 2; toggleIdx <= n; toggleIdx++) {
        for (i = 0; i < n; i++) {
            if ((i+1) % toggleIdx === 0) bulbs[i] = !bulbs[i];
        }
    }

    let count = 0;
    bulbs.forEach(bulb => {
        if (bulb) count++;
    })

    return count;
};

let result = bulbSwitch(3);
console.log('result: ', result);