function equalSums(numbers) {
    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;
    for (let i = 0; i < numbers.length; i++) {
        let rightArr = numbers.slice(i + 1);
        for (let j = 0; j < rightArr.length; j++) {
            rightSum += rightArr[j];
        }
        if (leftSum === rightSum) {
            console.log(i);
            isEqual = true;
        }
        leftSum += numbers[i];
        rightSum = 0;
    }

    if (!isEqual) {
        console.log("no");
    }
}

equalSums([1, 2, 3, 3]);