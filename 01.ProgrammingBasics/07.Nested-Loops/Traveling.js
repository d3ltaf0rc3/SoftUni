function traveling(input) {
    let destination = "";
    let budget = 0;
    
    while (destination != "End") {
        let sum = 0;
        destination = input.shift();
        budget = Number(input.shift());
        while (sum < budget) {
            let money = Number(input.shift());
            sum += money;
        }
        if (destination != "End"){
        console.log(`Going to ${destination}!`);
        }
    }
}

traveling(['Greece',
    '1000',
    '200',
    '200',
    '300',
    '100',
    '150',
    '240',
    'Spain',
    '1200',
    '300',
    '500',
    '193',
    '423',
    'End',
    '']);