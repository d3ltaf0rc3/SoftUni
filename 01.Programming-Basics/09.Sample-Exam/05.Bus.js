function bus(input) {
    let firstPassengers = Number(input.shift());
    let busStops = Number(input.shift());
    let currentPassengers = 0;

    for (let i = 1; i <= busStops; i++) {
        let offBoard = Number(input.shift());
        let onBoard = Number(input.shift());
        if (i == 1){
            currentPassengers = firstPassengers - offBoard + onBoard + 2;

            continue;
        }
        if (i % 2 == 1) {
            currentPassengers = currentPassengers - offBoard + onBoard + 2;
        } else {
            currentPassengers = currentPassengers - offBoard + onBoard - 2;
        }
    }
    console.log(`The final number of passengers is : ${currentPassengers}`);
}

bus([25,
    5,
    14,
    15,
    9,
    11,
    10,
    13,
    6,
    7,
    10,
    8]);