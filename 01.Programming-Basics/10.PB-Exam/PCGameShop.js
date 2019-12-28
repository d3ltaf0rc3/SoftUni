function pcGameShop(input) {
    let sold = Number(input.shift());
    let hearthstone = 0;
    let fortnite = 0;
    let overwatch = 0;
    let others = 0;

    for (let i = 1; i <= sold; i++) {
        let game = input.shift();
        if (game == "Hearthstone") {
            hearthstone++;
        } else if (game == "Fornite") {
            fortnite++;
        } else if (game == "Overwatch") {
            overwatch++;
        } else {
            others++;
        }
    }

    hearthstone = hearthstone / sold * 100;
    fortnite = fortnite / sold * 100;
    overwatch = overwatch / sold * 100;
    others = others / sold * 100;
    console.log(`Hearthstone - ${hearthstone.toFixed(2)}%`);
    console.log(`Fornite - ${fortnite.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatch.toFixed(2)}%`);
    console.log(`Others - ${others.toFixed(2)}%`);
}

pcGameShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);