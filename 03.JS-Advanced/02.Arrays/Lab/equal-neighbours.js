function equalNeighbors(input) {
    let equalPairs = 0;

    for (let i = 0; i < input.length; i++) {
        let arr1 = input[i];
        let arr2 = input[i + 1];
        
        if (arr2 === undefined) {
            arr2 = 0;
        }

        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] === arr2[j]) {
                equalPairs++;
            }
            if (arr1[j] === arr1[j + 1]) {
                equalPairs++;
            }
        }
    }
    console.log(equalPairs);
}

equalNeighbors([[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]]
);