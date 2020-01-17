function circleArea(arg) {
    if (typeof arg !== "number") {
        console.log(`We can not calculate the circle area, because we receive a ${typeof arg}.`);
    } else {
        let area = Math.PI * arg ** 2;
        console.log(area.toFixed(2));
    }
}

circleArea("5");