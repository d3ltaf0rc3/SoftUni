function cake(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let cake = length * width;
    let difference = 0;

    while (cake >= 0){
        let pieces = input.shift();
        if (pieces == "STOP"){
            break;
        }
        else {
            cake -= pieces;
        }
    }
    difference = Math.abs(0 - cake);
    if (cake <= 0){
        console.log(`No more cake left! You need ${difference} pieces more.`);
    }
    else {
        console.log(`${difference} pieces are left.`) 
    }
}

cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"
    ]);