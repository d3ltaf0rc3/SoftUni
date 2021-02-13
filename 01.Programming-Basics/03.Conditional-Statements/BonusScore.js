function bonusScore(input) {
    let points = Number(input.shift());
    let bonus = null;

    if (points <= 100) {
        bonus = 5;
    } else if (points > 100 && points < 1000) {
        bonus = points * 0.2;
    } else if (points > 1000) {
        bonus = points * 0.1;
    }

    if (points % 2 == 0) {
        bonus += 1;
    } else if (points % 5 == 0) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(bonus + points);
}

bonusScore([15875]);