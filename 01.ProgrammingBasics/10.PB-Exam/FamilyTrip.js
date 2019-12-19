function familyTrip(input) {
    let budget = Number(input.shift());
    let nights = Number(input.shift());
    let nightPrice = Number(input.shift());
    let additionalExpenses = Number(input.shift()); //percent
    let nightsPrice = 0;
    let addPrice = (additionalExpenses / 100) * budget;

    if (nights > 7) {
        nightsPrice = 0.95 * (nightPrice * nights);
    } else {
        nightsPrice = nightPrice * nights;
    }
    nightsPrice += addPrice;
    let diff = Math.abs(budget - nightsPrice);
    if (nightsPrice <= budget){
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${diff.toFixed(2)} leva needed.`);
    }

}

familyTrip(["800.50", "8", "100", "2"]);