function addOrRemoveEls(arr) {
    let num = 1;
    let nums = [];
    arr.forEach(command => {
        if (command === "add") {
            nums.push(num);
        } else if (command === "remove") {
            nums.pop();
        }
        num++;
    });

    if (nums.length === 0) {
        console.log("Empty");
    } else {
        console.log(nums.join("\n"));
    }
}

addOrRemoveEls(['add',
    'add',
    'add',
    'add']);