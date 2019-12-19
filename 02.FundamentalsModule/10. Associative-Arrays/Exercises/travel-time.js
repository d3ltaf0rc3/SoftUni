function solve(input) {
    let obj = {};
 
    for (let travelInfo of input) {
        let [country, town, cost] = travelInfo.split(" > ");
 
        if (!obj.hasOwnProperty(country)) {
            obj[country] = [];
        }
        let currentTown = obj[country].find(o => o.town === town);
        if (!currentTown) {
            obj[country].push({town, cost: (+cost)});
        } else if ((+cost) < currentTown.cost) {
            currentTown.cost = (+cost);
        }
    }
 
    let output = "";
    Object.keys(obj).sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase())).forEach((country) => {
        output += `${country} -> `;
        obj[country].sort((a, b) => a.cost - b.cost).forEach((town) => {
            output += `${town.town} -> ${town.cost} `;
        });
        output += '\n';
    });
 
    console.log(output);
}

travelTime(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"]);