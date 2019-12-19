function RadToDeg(input){
    let rad = Number(input.shift());
    let deg = rad * 180 / Math.PI;

    console.log(deg.toFixed(0));
}

RadToDeg(["3.1416"]);