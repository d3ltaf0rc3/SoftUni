function account (input) {
    let n = Number(input.shift());
    let counter = 1;
    let money = 0;

    while (counter <= n){
        let amount = Number(input.shift());
        if(amount < 0){
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${amount.toFixed(2)}`);
        money += amount;
        counter++;
    }
    console.log(`Total: ${money.toFixed(2)}`);
}

account();