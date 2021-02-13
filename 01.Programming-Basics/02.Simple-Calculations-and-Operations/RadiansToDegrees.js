function radToDeg(input) {
    let rad = Number(input.shift());
    let deg = rad * 180 / Math.PI;

    console.log(parseInt(deg));
}

radToDeg(["3.1416"]);