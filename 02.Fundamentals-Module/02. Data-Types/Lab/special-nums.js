function specialNums(num) {
    for (let i = 1; i <= num; i++) {
        let sum = 0;
        i = String(i);
        
        for (let j = 0; j < i.length; j++) {
            let symbol = i[j];
            sum += Number(symbol);
        }
        
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

specialNums(15);