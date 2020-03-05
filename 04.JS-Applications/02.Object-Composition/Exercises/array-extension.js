let arrayExtension = (function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        return this.slice(n);
    };
    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };
    Array.prototype.sum = function () {
        return this.reduce((total, curr) => total += curr);
    };
    Array.prototype.average = function () {
        return this.reduce((total, curr, index, arr) => {
            total += curr;
            if (index === arr.length - 1) {
                return total / arr.length;
            } else {
                return total;
            }
        });
    };
})();