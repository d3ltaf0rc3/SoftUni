function cardGame(input) {
    let obj = {};
    let powers = {};
    input.forEach(element => {
        let token = element.split(": ");
        let name = token.shift();
        let cards = token.shift().split(", ");

        if (obj.hasOwnProperty(name)) {
            obj[name].push(cards);
        } else {
            obj[name] = [cards];
        }
    });
    for (const key in obj) {
        powers[key] = 0;
        let unsortedDeck = obj[key].flat();
        let sortedDeck = new Set();
        unsortedDeck.forEach(element => {
            sortedDeck.add(element);
        });
        sortedDeck = Array.from(sortedDeck.values());
        sortedDeck.forEach(element => {
            let power = element[0];
            let type = element[1];
            if (type === "0") {
                type = element[2];
                power += element[1];
            }
            
            if (power === "J") {
                power = 11;
            } else if (power === "Q") {
                power = 12;
            } else if (power === "K") {
                power = 13;
            } else if (power === "A") {
                power = 14;
            }

            if (type === "S") {
                type = 4;
            } else if (type === "H") {
                type = 3;
            } else if (type === "D") {
                type = 2;
            } else if (type === "C") {
                type = 1;
            }

            let total = power * type;
            powers[key] += total;
        });
    }
    for (const key in powers) {
        console.log(`${key}: ${powers[key]}`);
    }
}

cardGame(['Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']);