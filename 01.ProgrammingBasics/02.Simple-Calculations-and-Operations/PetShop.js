function petShop(input) {
    let dogCount = Number(input.shift());
    let animalCount = Number(input.shift());
    
    let dogFoodPrice = dogCount * 2.5;
    let animalFoodPrice = animalCount * 4;
    let sum = dogFoodPrice + animalFoodPrice;

    console.log(`${sum.toFixed(2)} lv.`);
}

petShop([5,4]);