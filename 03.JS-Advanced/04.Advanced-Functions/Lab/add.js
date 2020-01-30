function solution (num) {
    let digit = num;
    
    function add(num) {
        return digit + num;
    }

    return add;
}