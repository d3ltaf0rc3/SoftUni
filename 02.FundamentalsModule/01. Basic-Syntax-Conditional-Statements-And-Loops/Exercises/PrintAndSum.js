function printAndSum(num1, num2) {
    let sum = 0;
    let nums = "";
    for (let i = num1; i <= num2; i++) {
        sum += i;
        nums += i + " ";
    }
    console.log(nums);
    console.log(`Sum: ${sum}`);
}

printAndSum(5,10);