function tailoringShop(input) {
    let tables = Number(input.shift());
    let length = Number(input.shift());
    let width = Number(input.shift());

    let coverArea = tables * (length + 2 * 0.30) * (width + 2 * 0.30);
    let squareArea = tables * (length / 2) ** 2;

    let priceUSD = coverArea * 7 + squareArea * 9;

    let priceBGN = priceUSD * 1.85;

    console.log(`${priceUSD.toFixed(2)} USD`);
    console.log(`${priceBGN.toFixed(2)} BGN`);
}

tailoringShop(["5", "1.00", "0.50"]);