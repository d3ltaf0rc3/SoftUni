function salary(input) {
    let openTabs = Number(input.shift());
    let salary = Number(input.shift());

    for (let i = 0; i < openTabs; i++) {
        let website = input.shift();
        if (website == "Facebook") {
            salary -= 150;
        }
        else if (website == "Instagram") {
            salary -= 100;
        }
        else if (website == "Reddit") {
            salary -= 50;
        }
        if (salary <= 0) {
            console.log(`You have lost your salary.`)
            break;
        }
    }
    if (salary > 0) {
        console.log(salary);
    }
}

salary();