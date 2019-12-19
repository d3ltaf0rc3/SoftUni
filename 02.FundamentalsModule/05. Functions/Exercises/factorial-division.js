function factorialDivision(firstInt, secondInt) {
    function rFact(num) {
        if (num === 0) {
            return 1;
        }
        else {
            return num * rFact(num - 1);
        }
    }
    let firstFact = rFact(firstInt);
    let secondFact = rFact(secondInt);
    let division = firstFact / secondFact;
    console.log(division.toFixed(2));
}

factorialDivision(5,2);