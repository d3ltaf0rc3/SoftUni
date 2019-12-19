function login(input) {
    let user = input.shift();
    let pass = input.shift();
    let password = "";
    let counter = 1;

    for (let i = user.length - 1; i >= 0; i--) {
        password += user[i];
    }

    while (pass != password) {
        if (counter >= 4) {
            console.log(`User ${user} blocked!`);
            break;
        } else {
            console.log("Incorrect password. Try again.");
        }
        
        pass = input.shift();
        counter++;
    }

    if (pass == password) {
        console.log(`User ${user} logged in.`);
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);