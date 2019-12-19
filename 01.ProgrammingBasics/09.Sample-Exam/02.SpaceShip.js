function spaceShip(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());
    let averageAstronautHeight = Number(input.shift());

    let shipVolume = width * length * height;
    let roomVolume = 2 * 2 * (averageAstronautHeight + 0.4);
    let astronauts = Math.floor(shipVolume / roomVolume);

    if (astronauts >= 3 && astronauts <= 10) {
        console.log(`The spacecraft holds ${astronauts} astronauts.`);
    } else if (astronauts < 3) {
        console.log("The spacecraft is too small.");
    } else {
        console.log("The spacecraft is too big.");
    }
}

spaceShip(["3.5", "4", "5", "1.7"]);