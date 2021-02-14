function journey(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let location;
    let price = 0;
    let place;

    if (budget <= 100) {
        location = "Bulgaria";

        if (season === "summer") {
            price = budget * 0.3;
            place = "Camp"
        } else if (season === "winter") {
            price = budget * 0.7;
            place = "Hotel";
        }
    } else if (budget <= 1000) {
        location = "Balkans";

        if (season === "summer") {
            price = budget * 0.4;
            place = "Camp";
        } else if (season === "winter") {
            price = budget * 0.8;
            place = "Hotel";
        }
    } else if (budget > 1000) {
        location = "Europe";
        price = 0.9 * budget;
        place = "Hotel";
    }

    console.log(`Somewhere in ${location}\n${place} - ${price.toFixed(2)}`);
}

journey();