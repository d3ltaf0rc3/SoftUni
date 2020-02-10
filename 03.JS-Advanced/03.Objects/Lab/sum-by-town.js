function sumByTown(input) {
    let townSum = {};

    for (let i = 0; i < input.length; i += 2) {
        let town = input[i];
        let income = Number(input[i + 1]);

        if (townSum.hasOwnProperty(town)) {
            townSum[town] += income;
        } else {
            townSum[town] = income;
        }
    }
    console.log(JSON.stringify(townSum));
}

sumByTown(['Sofia',
'20',
'Varna',
'3',
'sofia',
'5',
'varna',
'4']
);