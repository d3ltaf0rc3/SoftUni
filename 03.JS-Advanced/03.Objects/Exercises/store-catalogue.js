function catalogue(inputArr) {
    const arrCatalog = [];
    inputArr.forEach(element => {
        const workingArr = element.split(" : ");
        let [nameEl, priceEl] = workingArr;
        arrCatalog.push({ name: nameEl, price: priceEl });
    });

    arrCatalog.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    let firstLetter = '';
    for (let element of arrCatalog) {
        if (firstLetter !== element.name.charAt(0)) {
            firstLetter = element.name.charAt(0);
            console.log(firstLetter);
        }
        console.log(`  ${element.name}: ${element.price}`);
    }

}

catalogue();