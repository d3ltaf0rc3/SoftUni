function towns(strings) {
    for (let i = 0; i < strings.length; i++) {
        let current = strings[i].split(" | ");
        current[1] = Number(current[1]).toFixed(2);
        current[2] = Number(current[2]).toFixed(2);
        let town = {
            town:current[0],
            latitude:current[1],
            longitude:current[2]
        };
        console.log(town);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);