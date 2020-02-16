class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(rat) {
        if (typeof rat === "object"){
            this.unitedRats.push(rat);
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        let result = `${this.name}\n`;
        this.unitedRats.forEach(element => {
            result += `##${element.name}\n`;
        });
        return result;
    }
}

let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter

console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex
