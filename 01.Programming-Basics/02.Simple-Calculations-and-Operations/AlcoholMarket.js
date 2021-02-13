function alcoholMarket(input) {
    let whiskeyPrice = Number(input.shift());
    let beerLiters = Number(input.shift());
    let wineLiters = Number(input.shift());
    let rakiaLiters = Number(input.shift());
    let whiskeyLiters = Number(input.shift());

    let rakiaPrice = whiskeyPrice * 0.5;
    let winePrice = rakiaPrice - (rakiaPrice * 0.4);
    let beerPrice = rakiaPrice - (rakiaPrice * 0.8);

    let rakia = rakiaPrice * rakiaLiters;
    let wine = winePrice * wineLiters;
    let whiskey = whiskeyPrice * whiskeyLiters;
    let beer = beerPrice * beerLiters;

    let sum = rakia + wine + whiskey + beer;

    console.log(sum.toFixed(2));
}

alcoholMarket(["50", "10", "3.5", "6.5", "1"]);