function figureArea(input) {
    let figure = input.shift();

    switch (figure) {
        case "rectangle": {
            let a = Number(input.shift());
            let b = Number(input.shift());
            let sum = a * b;
            console.log(sum); break;
        }
        case "square": {
            let a = Number(input.shift());
            let sum = a ** 2;
            console.log(sum); break;
        }
        case "circle": {
            let r = Number(input.shift());
            let sum = Math.PI * r ** 2;
            console.log(sum); break;
        }
        case "triangle": {
            let a = Number(input.shift());
            let b = Number(input.shift());
            let sum = a * b / 2;
            console.log(sum); break;
        }
    }
}

figureArea(["square", "5"]);