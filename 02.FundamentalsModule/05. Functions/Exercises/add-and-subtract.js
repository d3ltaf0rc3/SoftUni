function sumAndSubtract(firstInt, secondInt, thirdInt) {
    let total;
    function sum(firstInt, secondInt) {
        total = firstInt + secondInt;
    }
    function subtract(total, thirdInt) {
        total -= thirdInt;
        console.log(total);
    }

    sum(firstInt, secondInt);
    subtract(total, thirdInt);
}

sumAndSubtract(23, 6, 10);