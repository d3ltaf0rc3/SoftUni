function tseamAccount(input) {
    let games = input[0].split(' ');

    for (let i = 1; i < input.length; i++) {
        let currentEl = input[i].split(' ');
        let command = currentEl[0];
        let newGame = currentEl[1];

        if (command === 'Play') {
            break;

        } else if (command === "Install") {
            if (!games.includes(newGame)) {
                games.push(newGame);
            }
        } else if (command === 'Uninstall') {
            if (games.includes(newGame)) {
                let i = games.indexOf(newGame);
                games.splice(i, 1);

            }
        } else if (command === 'Update') {
            if (games.includes(newGame)) {
                let i = games.indexOf(newGame);
                games.splice(i, 1);
                games.push(newGame);
            }
        } else if (command === 'Expansion') {
            let expansion = newGame.split('-');
            let game = expansion[0];

            if (games.includes(game)) {
                let i = games.indexOf(game);
                let expandedGame = expansion.join(':');
                games.splice(i + 1, 0, expandedGame);
            }
        }
    }
    console.log(games.join(' '));
}

tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);