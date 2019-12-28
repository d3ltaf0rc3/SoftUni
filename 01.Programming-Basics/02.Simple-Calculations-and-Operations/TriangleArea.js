function TriangleArea(input){
    let a = Number(input.shift());
    let h = Number(input.shift());

    let area = a * h / 2;

    console.log(area.toFixed(2));
}

TriangleArea(["20", "30"]);