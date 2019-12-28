function registration(input) {
    let count = Number(input.shift());
    let regExp = /U\$(?<user>[A-Z][a-z]{2,})U\$P@\$(?<password>[A-Za-z]{5,}\d+)P@\$/;
    let counter = 0;
   
    for (let i = 1; i <= count; i++) {
        let token = input.shift();
        const matches = regExp.exec(token);
        if (matches) {
            const {user, password} = matches.groups;
            console.log("Registration was successful");
            console.log(`Username: ${user}, Password: ${password}`);
            counter++;
        } else {
            console.log("Invalid username or password");
        }
    }
    console.log(`Successful registrations: ${counter}`);
}

registration(['3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$NameU$P@$PasswordP@$',
    'U$UserU$P@$ad2P@$']);