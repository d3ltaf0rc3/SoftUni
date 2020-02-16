class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
        this.initial = string;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.initial.length > this.innerLength) {
            this.initial = this.innerString.substring(0, this.innerLength) + "...";
            return this.initial;
        } else if (this.innerLength === 0) {
            return "...";
        }
        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
