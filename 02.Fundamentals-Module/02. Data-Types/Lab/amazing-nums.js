function amazingNums(num) {
    num = String(num);
    let sum = 0;

    for (let index = 0; index < num.length; index++) {
        const element = num[index];
        sum += Number(element)
    }
    let result = sum.toString().includes("9");
    console.log(result ? `${num} Amazing? True`:`${num} Amazing? False`);
}

amazingNums(1233);