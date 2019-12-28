function inventory(input) {
    let heroes = [];
    for (let i = 0; i < input.length; i++) {
        let currentHero = input[i].split(" / ");
        let heroName = currentHero[0];
        let level = Number(currentHero[1]);
        if (currentHero[2] !== undefined) {
            let items = currentHero.slice(2);
            items = items[0].split(", ").sort().join(", ");
            heroes.push({ hero: heroName, level, items });
        } else {
            heroes.push({ hero: heroName, level });
        }
    }
    heroes.sort((a, b) => a.level - b.level);
    heroes.forEach(el => {
        console.log(`Hero: ${el.hero}\nlevel => ${el.level}`);
        if (Object.keys(el).length === 3) {
            console.log(`items => ${el.items}`);
        }
    });
}

inventory(["Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"]);