function pthBit(num, p) {
    num = num >> p;
    console.log(num & 1);
}

pthBit(255, 7);