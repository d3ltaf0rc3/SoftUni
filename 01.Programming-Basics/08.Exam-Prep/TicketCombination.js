function ticketCombination(input) {
    let number = Number(input.shift());
    let ticket = "";
    let prize = 0;
    let counter = 1;

    for (let i = "B".charCodeAt(0); i <= "L".charCodeAt(0); i += 2) {
        for (let j = "f".charCodeAt(0); j >= "a".charCodeAt(0); j--) {
            for (let k = "A".charCodeAt(0); k <= "C".charCodeAt(0); k++) {
                for (let l = 1; l <= 10; l++) {
                    for (let m = 10; m >= 1; m--) {
                        if (counter == number) {
                            ticket = "" + String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k) + l + m;
                            prize = i + j + k + l + m;
                            console.log(`Ticket combination: ${ticket}`);
                            console.log(`Prize: ${prize} lv.`);
                        }
                        counter++;
                    }
                }
            }
        }
    } 
}

ticketCombination(["17"]);