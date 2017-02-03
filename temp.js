let i = 0;
while (i < 3) {

    for (i = 0; i < 3; i++) {
        if (i === 1) break;
        console.log(i);
    }
    console.log(i);
    i++;
}