function repainting (input) {
    let nylon = Number(input.shift());  //square meters
    let paint = Number(input.shift());  //liters
    let paintThinner = Number(input.shift());   //liters
    let time = Number(input.shift());   //hours

    let nylonPrice = (nylon + 2) * 1.5;
    let paintPrice = (paint * 1.1) * 14.5;
    let thinnerPrice = paintThinner * 5;

    let totalPrice = nylonPrice + paintPrice + thinnerPrice + 0.4;
    let workersPrice = (0.3 * totalPrice) * time;
    totalPrice += workersPrice;

    console.log(`Total expenses: ${totalPrice.toFixed(2)} lv.`);
}

repainting(["10", "11", "4", "8"]);