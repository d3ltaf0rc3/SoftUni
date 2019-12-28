function seaTrip (input) {
    let foodPerDay = Number(input.shift());         //money
    let souvenirPerDay = Number(input.shift());     //money
    let hotelPerDay = Number(input.shift());        //money

    let fuelConsumption = 420/100 * 7;
    let fuelPrice = fuelConsumption * 1.85;
    let foodAndSouvenirPrice = 3 * (foodPerDay + souvenirPerDay);
    let hotelPrice = (0.9 * hotelPerDay) + (0.85 * hotelPerDay) + (0.8 * hotelPerDay);
    let totalPrice = fuelPrice + foodAndSouvenirPrice + hotelPrice;

    console.log(`Money needed: ${totalPrice.toFixed(2)}`);
}

seaTrip();