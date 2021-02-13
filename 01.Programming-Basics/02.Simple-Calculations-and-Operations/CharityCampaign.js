function charityCampaign(input) {
    let days = Number(input.shift());
    let cooks = Number(input.shift());
    let cakes = Number(input.shift());
    let waffles = Number(input.shift());
    let pancakes = Number(input.shift());

    let cakesPrice = days * (cooks * (cakes * 45));
    let wafflesPrice = days * (cooks * (waffles * 5.80));
    let pancakesPrice = days * (cooks * (pancakes * 3.20));

    let sum = cakesPrice + wafflesPrice + pancakesPrice;
    let profit = sum - (sum / 8);

    console.log(profit.toFixed(2));
}

charityCampaign(["20", "8", "14", "30", "16"]);