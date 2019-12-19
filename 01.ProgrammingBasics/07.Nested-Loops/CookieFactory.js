function cookieFactory(input) {
    let batchCount = Number(input.shift());

    for (let i = 1; i <= batchCount; i++)
    {
        let isFlourPresent = false;
        let isSugarPresent = false;
        let isEggsPresent = false;

        let productName = input.shift();

        while (true) {
            if (productName == "flour") {
                isFlourPresent = true;
            }
            else if (productName == "sugar") {
                isSugarPresent = true;
            }
            else if (productName == "eggs") {
                isEggsPresent = true;
            }
            else if (productName == "Bake!") {
                if (isFlourPresent == true && isSugarPresent == true && isEggsPresent == true) {
                    break;
                }
                else {
                    console.log("The batter should contain flour, eggs and sugar!");
                }
            }
            productName = input.shift();
        }
        console.log(`Baking batch number ${i}...`);


    }
}

cookieFactory([]);
    
