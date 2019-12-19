function biggestNum(num1, num2, num3) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    let nums = [num1, num2, num3];

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (element > maxNum) {
            maxNum = element;
        }
    }
    console.log(maxNum);
}

biggestNum(2,-18,8);