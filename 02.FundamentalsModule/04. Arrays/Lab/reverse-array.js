function reverseArr(num, arr) {
    arr.length = num;
    console.log(arr.reverse().join(" "));
}

reverseArr(3, [10, 20, 30, 40, 50]);