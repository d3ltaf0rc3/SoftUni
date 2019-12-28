function stadiumIncome (input) {
    let sectors = Number(input.shift());
    let capacity = Number(input.shift());
    let ticketPrice = Number(input.shift());

    let income = capacity * ticketPrice;
    let sectorIncome = income / sectors;
    let charity = (income - 0.75 * sectorIncome) / 8;

    console.log(`Total income - ${income.toFixed(2)} BGN\nMoney for charity - ${charity.toFixed(2)} BGN`);
}

stadiumIncome(["4", "5000", "5"]);