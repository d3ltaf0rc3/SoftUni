function pyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let counter = 1;

    while (base > 0) {
        let area = base * base * increment;
        let innerArea = (base - 2) * (base - 2) * increment;
        let outerArea = area - innerArea;

        if (base == 1 || base == 2) {
            gold += area;
            break;
        }

        stone += innerArea;

        if (counter % 5 == 0) {
            lapisLazuli += outerArea;
        } else {
            marble += outerArea;
        }

        base -= 2;
        counter++;
    }
    let height = counter * increment;
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}

pyramid(12, 1);