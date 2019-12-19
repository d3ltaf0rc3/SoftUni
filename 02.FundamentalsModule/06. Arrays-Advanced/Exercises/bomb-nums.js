function bombNums(nums, bombNums) {
    let bombNum = bombNums[0];
    let power = bombNums[1];
    let sum = 0;
    while (nums.includes(bombNum)) {
        let index = nums.indexOf(bombNum);
        let bombStart = Math.max((index - power), 0);
        nums.splice(bombStart, power * 2 + 1);
    }

    nums.forEach(element => {
        sum += element;
    });
    console.log(sum);
}

bombNums([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);