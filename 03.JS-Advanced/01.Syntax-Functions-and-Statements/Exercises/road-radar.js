function roadRadar(input) {
    let speed = Number(input.shift());
    let area = input.shift();
    let diff = 0;

    if (area === "motorway" && speed > 130) {
        diff = speed - 130;
    } else if (area === "interstate" && speed > 90) {
        diff = speed - 90;
    } else if (area === "city" && speed > 50) {
        diff = speed - 50;
    } else if (area === "residential" && speed > 20) {
        diff = speed - 20;
    }

    if (diff !== 0) {
        if (diff <= 20) {
            console.log("speeding");
        } else if (diff <= 40) {
            console.log("excessive speeding");
        } else {
            console.log("reckless driving");
        }
    }
}

roadRadar();