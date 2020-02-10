function population(input) {
    let register = {};

    input.forEach(element => {
        let [town, population] = element.split(" <-> ");
        if (register.hasOwnProperty(town)) {
            register[town] += Number(population);
        } else {
            register[town] = Number(population);
        }
    });

    for (const town in register) {
        console.log(`${town} : ${register[town]}`);
    }
}

population(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);