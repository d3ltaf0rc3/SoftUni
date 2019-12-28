function fishing(input) {
    let quota = Number(input.shift());  //3
    let fish = input.shift();           //catfish
    let kgs = Number(input.shift());    //70
    let sum = 0;
    let counter = 0;

    while (fish != "Stop" && counter < quota) {
        let currentSum = 0;
        counter++;
        for (let i = 0; i < fish.length; i++) {
            let symbol = fish[i];
            currentSum += symbol.charCodeAt(0);
        }
        let toFixedSum = (currentSum / kgs);
        if (counter % 3 === 0) {
            sum += Number(toFixedSum);
        } else {
            sum -= Number(toFixedSum);
        }
        fish = input.shift();
        kgs = Number(input.shift());
    }

    if (counter == quota) {
        console.log(`Lyubo fulfilled the quota!`);
    }
    if (sum < 0) {
        let diff = Math.abs(sum);
        console.log(`Lyubo lost ${diff.toFixed(2)} leva today.`);
    } else {
        console.log(`Lyubo's profit from ${counter} fishes is ${sum.toFixed(2)} leva.`);
    }

}

fishing(["3",
    "catfish",
    "70",
    "carp",
    "20",
    "tench",
    "14"
]);