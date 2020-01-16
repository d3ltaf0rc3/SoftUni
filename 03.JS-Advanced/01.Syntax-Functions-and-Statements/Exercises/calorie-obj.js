function calorieObj(arr) {
    let products = {};
    for (let i = 0; i < arr.length; i += 2) {
        let product = arr[i];
        let calories = arr[i + 1];
        products[product] = Number(calories);
    }
    console.log(products);
}

calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);