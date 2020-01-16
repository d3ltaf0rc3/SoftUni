function cookingByNums(input) {
    let number = Number(input.shift());
    input.forEach(command => {
        if (command === "chop") {
            number /= 2;
        } else if (command === "dice") {
            number = Math.sqrt(number);
        } else if (command === "spice") {
            number++;
        } else if (command === "bake") {
            number *= 3;
        } else if (command === "fillet") {
            number -= number * 0.2;
        }
        console.log(number);
    });
}

cookingByNums(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);