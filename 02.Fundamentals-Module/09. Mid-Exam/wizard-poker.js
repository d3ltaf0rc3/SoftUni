function wizardPoker(input) {
    let cards = input.shift().split(":");
    let newDeck = [];

    while (input.length > 0) {
        let token = input.shift().split(" ");
        let command = token.shift();

        if (command === "Ready") {
            console.log(newDeck.join(" "));
            break;
        } else if (command === "Add") {
            let card = token.shift();
            
            if (cards.includes(card)) {
                newDeck.push(card);
            } else {
                console.log("Card not found.");
            }
        } else if (command === "Insert") {
            let card = token.shift();
            let index = Number(token.shift());

            if (cards.includes(card) && index >= 0 && index < newDeck.length) {
                newDeck.splice(index, 0, card);
            } else {
                console.log("Error!");
            }
        } else if (command === "Remove") {
            let card = token.shift();
            let index = newDeck.indexOf(card);

            if (index >= 0 && index < newDeck.length) {
                newDeck.splice(index, 1);
            } else {
                console.log("Card not found.");
            }
        } else if (command === "Swap") {
            let cardOne = token.shift();
            let cardTwo = token.shift();
            let indexOne = newDeck.indexOf(cardOne);
            let indexTwo = newDeck.indexOf(cardTwo);

            let temp = newDeck[indexOne];
            newDeck[indexOne] = newDeck[indexTwo];
            newDeck[indexTwo] = temp;
        } else if (command === "Shuffle") {
            newDeck.reverse();
        }
    }
}

wizardPoker(['Innervate:Moonfire:Pounce:Claw:Wrath:Bite',
    'Add Moonfire',
    'Add Pounce',
    'Add Bite',
    'Add Wrath',
    'Insert Claw 0',
    'Swap Claw Moonfire',
    'Remove Bite',
    'Shuffle deck',
    'Ready']);