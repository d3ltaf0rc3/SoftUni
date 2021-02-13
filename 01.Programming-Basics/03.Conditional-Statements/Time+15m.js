function timePlus15(input) {
    let hour = Number(input.shift());
    let minutes = Number(input.shift());

    let totalMinutes = minutes + 15;

    if (totalMinutes <= 59) {
        console.log(`${hour}:${totalMinutes}`);
    } else if (totalMinutes >= 60) {
        if (totalMinutes - 60 <= 9) {
            console.log(`${hour + 1}:0${totalMinutes - 60}`);
        } else {
            console.log(`${hour + 1}:${totalMinutes - 60}`);
        }
    }
}

timePlus15(["13", "49"]);