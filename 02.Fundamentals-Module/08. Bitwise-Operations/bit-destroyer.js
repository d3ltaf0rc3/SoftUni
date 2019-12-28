function bitDestroyer(n, p) {
    let mask = ~(1 << p);
    let result = n & mask;
    console.log(result);
}

bitDestroyer(1313,5);