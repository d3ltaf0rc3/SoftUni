function dayOfTheWeek(number) {
    let arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (number < 1 || number > 7) {
        console.log("Invalid day!");
    } else {
        console.log(arr[number - 1]);
    }
}

dayOfTheWeek(-1);