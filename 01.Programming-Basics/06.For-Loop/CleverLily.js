function cleverLily(input) {
    let age = Number(input.shift());
    let washingMachinePrice = Number(input.shift());
    let toyPrice = Number(input.shift());
    let sum = 0;
    let toys = 0;
    let countSteals = 0;
    let toyMoney = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            sum += i * 5;
            countSteals++;
        }
        else {
            toys++;
        }
    }
    toyMoney = toyPrice * toys;
    sum = sum + toyMoney - countSteals
    let diff = Math.abs(sum - washingMachinePrice);
    if (sum >= washingMachinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    }
    else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}

cleverLily(["21", "1570.98", "3"]);