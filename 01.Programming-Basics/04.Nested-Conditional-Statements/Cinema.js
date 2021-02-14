function cinema(input) {
    let type = input.shift();
    let rows = Number(input.shift());
    let columns = Number(input.shift());

    let seats = rows * columns;
    let price = 0;

    if (type === "Premiere") {
        price = seats * 12;
    } else if (type === "Normal") {
        price = seats * 7.5;
    } else if (type === "Discount") {
        price = seats * 5;
    }

    console.log(price.toFixed(2));
}

cinema(["Premiere", 7, 8]);