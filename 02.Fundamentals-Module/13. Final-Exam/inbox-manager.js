function inboxManager(input) {
    let emailData = {};

    while (input.length > 0) {
        let token = input.shift().split("->");
        let command = token.shift();
        if (command === "Add") {
            let user = token.shift();
            if (emailData.hasOwnProperty(user)) {
                console.log(`${user} is already registered`);
            } else {
                emailData[user] = [];
            }
        } else if (command === "Send") {
            let user = token.shift();
            let email = token.shift();

            emailData[user].push(email);
        } else if (command === "Delete") {
            let user = token.shift();
            if (emailData.hasOwnProperty(user)) {
                delete emailData[user];
            } else {
                console.log(`${user} not found!`);
            }
        }
    }

    let sorted = Object.keys(emailData).sort((a,b) => emailData[b].length - emailData[a].length || a.localeCompare(b));
    console.log(`Users count: ${Object.keys(emailData).length}`);
    for (const user of sorted) {
        console.log(user);
        for (const email of emailData[user]) {
            console.log(` - ${email}`);
        }
    }
}

inboxManager(['Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Mike->Another random test mail',
    'Statistics']);

