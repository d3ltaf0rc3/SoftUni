function diagonalSums(input) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < input.length; i++) {
        let innerArr = input[i];
        sum1 += innerArr[i];
        sum2 += innerArr[innerArr.length - 1 - i];
    }
    console.log(sum1, sum2);
}

diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]   
);