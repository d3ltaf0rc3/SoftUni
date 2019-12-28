function sortNums(nums) {
    let num1 = Number(nums.shift());
    let num2 = Number(nums.shift());
    let num3 = Number(nums.shift());

    if (num1 >= num2 && num2 >= num3) {
        console.log(`${num1}\n${num2}\n${num3}`);
    }
    else if (num1 >= num3 && num3 >= num2) {
        console.log(`${num1}\n${num3}\n${num2}`);
    }
    else if (num2 >= num1 && num1 >= num3) {
        console.log(`${num2}\n${num1}\n${num3}`);
    }
    else if (num2 >= num3 && num3 >= num1) {
        console.log(`${num2}\n${num3}\n${num1}`);
    }
    else if (num3 >= num1 && num1 >= num2) {
        console.log(`${num3}\n${num1}\n${num2}`);
    }
    else if (num3 >= num2 && num2 >= num1) {
        console.log(`${num3}\n${num2}\n${num1}`);
    }
}

sortNums(["20", "15", "8"]);