function metricConverter(input) {
    let length = Number(input.shift()); //45 (m)
    let inputMetric = input.shift(); //cm
    let outputMetric = input.shift(); //mm

    switch (inputMetric) {
        case "mm":
            length = length / 1000; break;
        case "cm":
            length = length / 100; break;
    }
    switch (outputMetric) {
        case "mm":
            length = length * 1000; break;
        case "cm":
            length = length * 100; break;
    }
    console.log(length.toFixed(3));
}

metricConverter([150, "m", "cm"]);