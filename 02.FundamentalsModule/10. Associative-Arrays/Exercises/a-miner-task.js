function aMinerTask(input) {
    let resources = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = +input[i + 1];

        if (resources.hasOwnProperty(resource)) {
            resources[resource] += quantity;
        } else {
            resources[resource] = quantity;
        }
    }
    
    for (const key in resources) {
        console.log(`${key} -> ${resources[key]}`);
    }
}

aMinerTask(['gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15']);