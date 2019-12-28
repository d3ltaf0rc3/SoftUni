function radioCrystals(thicknesses) {
    function transportingAndWashing(thickness) {
        return Math.floor(thickness);
    }

    let desiredThickness = thicknesses[0];
    let counter = 0;

    for (let i = 1; i < thicknesses.length; i++) {
        let currentThickness = thicknesses[i];

        console.log(`Processing chunk ${currentThickness} microns`);

        while (currentThickness >= desiredThickness) {
            if (currentThickness / 4 >= desiredThickness) {
                counter++;
                currentThickness /= 4;
            } else {
                break;
            }
        }

        if (counter > 0) {
            console.log(`Cut x${counter}`);
            currentThickness = transportingAndWashing(currentThickness);
            console.log("Transporting and washing");
        }
        counter = 0;

        while (currentThickness >= desiredThickness) {
            if (currentThickness - 0.2 * currentThickness >= desiredThickness) {
                counter++;
                currentThickness -= 0.2 * currentThickness;
            } else {
                break;
            }
        }

        if (counter > 0) {
            console.log(`Lap x${counter}`);
            currentThickness = transportingAndWashing(currentThickness);
            console.log("Transporting and washing");
        }
        counter = 0;

        while (currentThickness >= desiredThickness) {
            if (currentThickness - 20 >= desiredThickness) {
                counter++;
                currentThickness -= 20;
            } else {
                break;
            }
        }

        if (counter > 0) {
            console.log(`Grind x${counter}`);
            currentThickness = transportingAndWashing(currentThickness);
            console.log("Transporting and washing");
        }
        counter = 0;

        while (currentThickness >= desiredThickness) {
            if (currentThickness - 2 >= desiredThickness - 1) {
                counter++;
                currentThickness -= 2;
            } else {
                break;
            }
        }

        if (counter > 0) {
            console.log(`Etch x${counter}`);
            currentThickness = transportingAndWashing(currentThickness);
            console.log("Transporting and washing");
        }
        counter = 0;
        if (currentThickness < desiredThickness) {
            console.log(`X-ray x1`);
            currentThickness += 1;
        }
        console.log(`Finished crystal ${currentThickness} microns`);
    }
}

radioCrystals([1375, 50000]);