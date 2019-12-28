function demo(arr) {
    let first = Number(arr.shift());
    let last = Number(arr.pop());

    console.log(first + last);
}

demo(['20', '30', '40']);