function biscuitsFactory(input) {
    let biscuitsPerDay = Number(input.shift());         //per worker
    let workers = Number(input.shift());                //count
    let otherFactoryProduction = Number(input.shift()); //for 30 days
    let factoryProduction = 0;

    for (let i = 1; i <= 30; i++) {
        let dailyProduction = 0;
        if (i % 3 === 0) {
            dailyProduction = 0.75 * (workers * biscuitsPerDay);
        } else {
            dailyProduction = workers * biscuitsPerDay;
        }
        factoryProduction += Math.floor(dailyProduction);
    }

    console.log(`You have produced ${factoryProduction} biscuits for the past month.`);
    
    let diff = Math.abs(factoryProduction - otherFactoryProduction);
    let percentage = diff / otherFactoryProduction * 100;
    
    if (factoryProduction > otherFactoryProduction) {
        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
    } else if (factoryProduction < otherFactoryProduction) {
        console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);
    }
}

biscuitsFactory(['65', '12', '26000']);