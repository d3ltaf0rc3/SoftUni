function skiTrip(input) {
    let days = Number(input.shift());
    let room = input.shift();
    let opinion = input.shift();
    let nights = days - 1;
    let price = 0;

    if (room === "room for one person") {
        price = 18 * nights;
    } else if (room === "apartment") {
        if (nights < 10) {
            price = 0.7 * (25 * nights);
        } else if (nights >= 10 && days <= 15) {
            price = 0.65 * (25 * nights);
        } else if (nights > 15) {
            price = 0.5 * (25 * nights);
        }
    } else if (room === "president apartment") {
        if (nights < 10) {
            price = 0.9 * (35 * nights);
        } else if (nights >= 10 && days <= 15) {
            price = 0.85 * (35 * nights);
        } else if (nights > 15) {
            price = 0.8 * (35 * nights);
        }
    }

    if (opinion === "positive") {
        price *= 1.25;
    } else if (opinion === "negative") {
        price *= 0.9;
    }

    console.log(price.toFixed(2))
}

skiTrip([30, "president apartment", "negative"]);