function mergeArrays(firstArr, secondArr) {
    let thirdArr = [];
    for (let i = 0; i < firstArr.length; i++) {
        if (i % 2 === 0) {
            let sum = Number(firstArr[i]) + Number(secondArr[i]);
            thirdArr.push(sum);
        } else {
            let concatenation = firstArr[i] + secondArr[i];
            thirdArr.push(concatenation);
        }
    }
    console.log(thirdArr.join(" - "));
}

mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);