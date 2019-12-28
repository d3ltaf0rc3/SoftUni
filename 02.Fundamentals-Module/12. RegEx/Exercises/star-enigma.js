function starEnigma(input) {
    let planets = { "Attacked planets": [], "Destroyed planets": [] };

    for (let i = 1; i <= input[0]; i++) {
        let encrypted = input[i];
        let decrypted = "";
        let count = 0;
        let enigma = ["s", "t", "a", "r"];
        let pattern = /@(?<name>[A-za-z]+)(?:[^@\-!:>]+)?:(?<population>[\d]+)(?:[^@\-!:>]+)?!(?<attack>[AD])!(?:[^@\-!:>]+)?->(?<count>[\d]+)/g;

        for (const index of encrypted) {
            if (enigma.includes(index.toLowerCase())) {
                count++;
            }
        }

        for (const letter of encrypted) {
            let ascii = letter.charCodeAt(0);
            ascii -= count;
            ascii = String.fromCharCode(ascii);
            decrypted += ascii;
        }

        if (pattern.exec(decrypted)) {
            let planet = decrypted.match(/(?<=@)[A-Za-z]+/);
            if (/!A!/.test(decrypted)) {
                planets["Attacked planets"].push(planet[0]);
            } else {
                planets["Destroyed planets"].push(planet[0]);
            }
        }
    }
    console.log(`Attacked planets: ${planets["Attacked planets"].length}`);
    planets["Attacked planets"].sort().forEach((element) => { console.log(`-> ${element}`); });
    console.log(`Destroyed planets: ${planets["Destroyed planets"].length}`);
    planets["Destroyed planets"].sort().forEach((element) => { console.log(`-> ${element}`); });
}

starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);