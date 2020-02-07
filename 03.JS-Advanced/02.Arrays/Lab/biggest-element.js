function biggestElement(inputArr) {
    let flatted = inputArr.flat().sort((a, b) => b - a);
    console.log(flatted[0]);
}

biggestElement();