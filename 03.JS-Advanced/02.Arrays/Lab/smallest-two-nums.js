function smallestTwoNums(inputArr) {
    inputArr.sort((a,b) => a - b);
    console.log(`${inputArr[0]} ${inputArr[1]}`);
}

smallestTwoNums();