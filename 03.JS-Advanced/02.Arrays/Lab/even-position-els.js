function evenPosEls(arr) {
    let output = "";
    arr.forEach((element,index) => {
        if (index % 2 === 0) {
            output += `${element} `;
        }
    });
    console.log(output);
}