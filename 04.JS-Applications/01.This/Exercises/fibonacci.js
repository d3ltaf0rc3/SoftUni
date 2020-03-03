function getFibonator () {
    let firstNum = 0;
    let secondNum = 1;
    
    function returnFibonacci() {
        let fibonacci = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = fibonacci;
        return firstNum;
    }
    return returnFibonacci;
}

let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
