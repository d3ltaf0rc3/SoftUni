let sum = (function () {
    let sum = 0;

    function add(num) {
        sum += num;
        
        return add;
    }

    add.toString = function () {
        return sum;
    };

    return add;
})();

console.log(sum(1)(2)(3).toString());