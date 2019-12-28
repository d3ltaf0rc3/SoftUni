function leftAndRightSum(input) {
    let n = Number(input.shift());
    let leftSum = 0;
    let rightSum = 0;
    let diff = 0;

    for (let i = 0; i < 2 * n; i++) {
        let num = Number(input.shift());
        if (i < n) {
            leftSum += num;
        }
        else {
            rightSum += num;
        }
    }
    diff = Math.abs(leftSum - rightSum);
    if (leftSum == rightSum) {
        console.log(`Yes, sum = ${leftSum}`);
    }
    else {
        console.log(`No, diff = ${diff}`);
    }
}

leftAndRightSum(["2", "10", "90", "60", "40"]);