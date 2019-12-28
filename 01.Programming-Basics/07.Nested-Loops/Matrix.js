function matrix(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());
    let d = Number(input.shift());

    for (let firstNumAB = a; firstNumAB <= b; firstNumAB++) {
        for (let secondNumAB = a; secondNumAB <= b; secondNumAB++) {
            for (let firstNumCD = c; firstNumCD <= d; firstNumCD++) {
                for (let secondNumCD = c; secondNumCD <= d; secondNumCD++) {
                    if (firstNumAB + secondNumCD == secondNumAB + firstNumCD){
                        if (firstNumAB != secondNumAB && firstNumCD != secondNumCD){
                            console.log(`${firstNumAB}${secondNumAB}\n${firstNumCD}${secondNumCD}\n`);
                        }
                    }
                }
            }  
        }
    }
}

matrix(["2", "4", "4", "5"]);