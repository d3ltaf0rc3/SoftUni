function Birthday(input){
    let length = Number(input.shift());
    let width = Number(input.shift());
    let height = Number(input.shift());
    let percent = Number(input.shift());

    let volume = length * width * height;
    let availableVolume = volume - (volume * percent/100);
    let liters = availableVolume / 1000;

    console.log(liters.toFixed(3));
}

Birthday(["85", "75", "47", "17"]);