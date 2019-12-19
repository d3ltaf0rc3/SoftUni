function reverseString(word) {
    let reverse = "";
    for (let index = word.length - 1; index >= 0; index--) {
        const element = word[index];
        reverse += element;
    }
    console.log(reverse);
}

reverseString("Hello");