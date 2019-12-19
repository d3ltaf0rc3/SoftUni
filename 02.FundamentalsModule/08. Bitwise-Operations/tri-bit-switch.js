function triBitSwitch(n, p) {
    let mask = 7 << p;
    let result = n ^ mask;
    console.log(result);
}

triBitSwitch(44444,4);