function inchesToCms(input) {
    let inches = Number(input.shift());
    let cms = inches * 2.54;

    console.log(cms.toFixed(2));
}

inchesToCms(["5"]);