function townsToJSON(input) {
    let info = [];
    let regExp = /\| (?<town>.+) \| (?<latitude>\s*-*\d+\.\d+) \| (?<longitude>-*\d+\.\d+) \|/;
    for (let i = 1; i < input.length; i++) {
        let matches = regExp.exec(input[i]);
        let town = matches.groups.town;
        let latitude = Number(matches.groups.latitude).toFixed(2);
        let longitude = Number(matches.groups.longitude).toFixed(2);
        
        let townInfo = {
            "Town": matches.groups.town,
            "Latitude": Number(latitude),
            "Longitude": Number(longitude)
        };
        info.push(townInfo);
    }
    console.log(JSON.stringify(info));
}

townsToJSON(['| Town | Latitude | Longitude |', '| Random Town | 0.00 | 0.00 |']
);