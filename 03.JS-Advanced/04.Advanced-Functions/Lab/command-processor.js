function solve() {
    let string = "";

    function append(str) {
        string += str; 
    }
    function removeStart(num) {
        string = string.substring(num);
    }
    function removeEnd(num) {
        string = string.substring(0, string.length - num);
    }
    function print() {
        console.log(string);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    };
}