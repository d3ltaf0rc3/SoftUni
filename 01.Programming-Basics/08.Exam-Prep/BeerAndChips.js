function beerAndChips(input) {
    let name = input.shift();
    let budget = Number(input.shift());
    let beerBottles = Number(input.shift());
    let chipsPackets = Number(input.shift());

    let beerPrice = beerBottles * 1.2;
    let chipsPrice = Math.ceil((0.45 * beerPrice) * chipsPackets);
    let totalPrice = beerPrice + chipsPrice;
    let diff = Math.abs(budget - totalPrice);

    if (totalPrice <= budget) {
        console.log(`${name} bought a snack and has ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`${name} needs ${diff.toFixed(2)} more leva!`);
    }
}

beerAndChips();