function cats(input) {
    let cats = [];
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.meow = function () {
                console.log(`${this.name}, age ${this.age} says Meow`);
            };
        }
    }
    for (let i = 0; i < input.length; i++) {
        let cat = input[i].split(" ");
        let [name, age] = cat;
        cats.push(new Cat(name, age));
    }
    for (const iterator of cats) {
        iterator.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);