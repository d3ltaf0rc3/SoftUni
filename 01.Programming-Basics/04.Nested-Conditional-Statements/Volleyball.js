function volleyball(input) {
    let yearType = input.shift();
    let numberOfHolidays = Number(input.shift());
    let numberOfWeekends = Number(input.shift());

    let weekendsInSofia = 48 - numberOfWeekends;
    let gamesInSofia = weekendsInSofia * 3.0 / 4;
    let gamesInBirthPlace = numberOfWeekends;
    let gamesOnHolidays = numberOfHolidays * 2.0 / 3;
    let totalGames = gamesInSofia + gamesInBirthPlace + gamesOnHolidays;

    if (yearType == "leap") {
        let additionalGames = totalGames * 0.15;
        let totalLeapGames = totalGames + additionalGames;
        console.log(Math.trunc(totalLeapGames));
    }
    else {
        console.log(Math.trunc(totalGames));
    }
}

volleyball();