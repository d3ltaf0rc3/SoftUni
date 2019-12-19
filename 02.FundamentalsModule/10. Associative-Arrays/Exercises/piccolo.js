function piccolo(input) {
    let parking = new Set();

    input.forEach((element) => {
        let token = element.split(", ");
        let command = token[0];
        let carNum = token[1];

        if (command === "IN") {
            parking.add(carNum);
        } else if (command === "OUT") {
            parking.delete(carNum);
        }
    });

    if (parking.size === 0) {
        return "Parking Lot is Empty";
    }

    let sorted = Array.from(parking.values())
        .sort()
        .forEach(el => console.log(el));
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);