function assembleCar(requirements) {
    const car = {};
    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];

    const carriages = [
        { type: 'hatchback', color: requirements.color },
        { type: 'coupe', color: requirements.color }
    ];

    const wheelsize = [];
    if (Math.floor(requirements.wheelsize) % 2 !== 0) {
        for (let i = 0; i < 4; i++) {
            wheelsize.push(Math.floor(requirements.wheelsize));
        }
    } else {
        const req = 2 * Math.floor(requirements.wheelsize / 2) - 1;
        for (let i = 0; i < 4; i++) {
            wheelsize.push(req);
        }
    }


    let engine = engines.find(e => e.power === requirements.power);
    if (engine) {
        car.engine = engine;
    } else {
        car.engine = engines[0];
        engines.forEach(engn => {
            if (Math.abs(requirements.power - engn.power) < Math.abs(requirements.power - car.engine.power)) {
                car.engine = engn;
            }
        });
    }

    const carriage = carriages.find(e => e.type === requirements.carriage);

    car.model = requirements.model;
    car.carriage = carriage;
    car.wheels = wheelsize;

    return car;
}

console.log(assembleCar({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));