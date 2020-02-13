function fuelMoney(distance, passengers, fuelPricePerLiter) {
    let fuel = (distance / 100) * 7;
    fuel += (passengers * 0.1);
    let fuelPrice = fuelPricePerLiter * fuel;
    console.log(`Needed money for that trip is ${fuelPrice}lv.`);
}

fuelMoney(260, 9, 2.49);