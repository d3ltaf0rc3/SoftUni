function metricConverter(input) {
    let length = Number(input.shift());
    let inputMetric = input.shift();
    let outputMetric = input.shift();

    switch (inputMetric) {
        case "mm": length = length / 1000; break;
        case "cm": length = length / 100; break;
    }
    switch (outputMetric) {
        case "mm": length = length * 1000; break;
        case "cm": length = length * 100; break;
    }
    console.log(length.toFixed(3));
}

metricConverter([150, "m", "cm"]);