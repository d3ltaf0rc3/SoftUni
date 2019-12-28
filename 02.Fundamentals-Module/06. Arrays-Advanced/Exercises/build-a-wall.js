function buildAWall(input) {
    let sections = input.map(el => Number(el));
    let concrete = [];
    let index = 0;
    let totalCost = 0;

    while (!sections.every(el => el === 30)) {
        let dailyConcrete = 0;
        for (let i = 0; i < sections.length; i++) {
            if (sections[i] < 30) {
                sections[i] = sections[i] + 1;
                dailyConcrete += 195;
            }
        }
        concrete.splice(index, 0, dailyConcrete);
        index++;
    }
    console.log(concrete.join(", "));
    concrete.forEach(el => {
        totalCost += el;
    });
    totalCost *= 1900;
    console.log(`${totalCost} pesos`);
}

buildAWall([17, 22, 17, 19, 17]);