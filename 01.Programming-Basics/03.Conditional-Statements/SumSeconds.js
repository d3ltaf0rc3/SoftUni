function sumSeconds(input) {
    let firstAthlete = Number(input.shift());
    let secondAthlete = Number(input.shift());
    let thirdAthlete = Number(input.shift());

    let totalTime = firstAthlete + secondAthlete + thirdAthlete;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`)
    }
}

sumSeconds([35, 45, 44]);