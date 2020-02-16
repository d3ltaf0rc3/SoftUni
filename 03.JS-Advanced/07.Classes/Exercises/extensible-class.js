let Extensible = (function () {
    let id = 0;
    return class {
        constructor() {
            this.id = id;
            id++;
        }

        extend(template) {
            for (const key in template) {
                if (typeof template[key] === "function") {
                    this.__proto__[key] = template[key];
                } else {
                    this[key] = template[key];
                }
            }
        }
    };
})();

let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
