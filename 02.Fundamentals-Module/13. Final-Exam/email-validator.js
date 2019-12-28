function emailValidator(input) {
    let email = input.shift();

    while (input.length > 0) {
        let token = input.shift().split(" ");
        let command = token.shift();

        if (command === "Make") {
            let addition = token.shift();
            if (addition === "Upper") {
                email = email.toUpperCase();
                console.log(email);
            } else if (addition === "Lower") {
                email = email.toLowerCase();
                console.log(email);
            }
        } else if (command === "GetDomain") {
            let count = Number(token.shift());

            let domain = email.substr(email.length - count);
            console.log(domain);
        } else if (command === "GetUsername") {
            if (email.includes("@")) {
                let user = /(?<user>^\w+)@/.exec(email);
                console.log(user.groups.user);
            } else {
                console.log(`The email ${email} doesn't contain the @ symbol.`);
            }
        } else if (command === "Replace") {
            let char = token.shift();
            while (email.includes(char)) {
                email = email.replace(char,"-");
            }
            console.log(email);
        } else if (command === "Encrypt") {
            let output = "";
            for (const letter of email) {
                let ascii = letter.charCodeAt(0);
                output += ` ${ascii}`;
            }
            console.log(output.trimStart());
        }
    }
}

emailValidator([
    'AnotherMail.com',
    'Make Lower',
    'GetUsername',
    'Replace a',
    'Complete',
    ''
  ]);