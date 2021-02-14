function coins(input) {
    let change = Number(input.shift());
    let lv = parseInt(change);
    let st = Math.round((change - lv) * 100);
    let count = 0;

    while (lv > 0) {
        if (lv >= 2) {
            lv -= 2;
        } else if (lv === 1) {
            lv -= 1;
        }

        count++;
    }

    while (st > 0) {
        if (st >= 50) {
            st -= 50;
        } else if (st >= 20) {
            st -= 20;
        } else if (st >= 10) {
            st -= 10;
        } else if (st >= 5) {
            st -= 5;
        } else if (st >= 2) {
            st -= 2;
        } else if (st >= 1) {
            st -= 1;
        }

        count++;
    }
    
    console.log(count);
}

coins();