function aggregateElements(arr) {
    function sum(arr) {
        let sum = 0;
        arr.forEach(element => {
            sum += Number(element);
        });
        return sum;
    }
    function invSum(arr) {
        let sum = 0;
        arr.forEach(element => {
            sum += 1 / Number(element);
        });
        return sum;
    }
    function concat(arr) {
        let result = "";
        arr.forEach(element => {
           result += element.toString(); 
        });
        return result;
    }
    console.log(`${sum(arr)}\n${invSum(arr)}\n${concat(arr)}`);
}

aggregateElements([1, 2, 3]);