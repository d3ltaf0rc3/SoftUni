let extendString = (function () {
    String.prototype.ensureStart = function (str) {
        let result = "" + this;
        if (this.slice(0, str.length) !== str) {
            result = str + this;
        }
        return result;
    };
    String.prototype.ensureEnd = function (str) {
        let result = "" + this;
        if (this.slice(this.length - str.length) !== str) {
            result = this + str;
        }
        return result;
    };
    String.prototype.isEmpty = function () {
        return "" + this === "" ? true : false;
    };
    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        } else if (n >= this.length) {
            return this.toString();
        } else if (n < this.length) {
            let lastSpace = this.substr(0, n - 2).lastIndexOf(' ');
            if (lastSpace !== -1) {
                return this.substr(0, lastSpace).concat('...');
            } else {
                return this.substr(0, n - 3).concat('...');
            }
        }
    };
    String.format = function (string, ...params) {
        return params
            .reduce((str, param, i) => {
                return str.replace(`{${i}}`, param);
            }, string);
    };
})();

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');


