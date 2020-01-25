function jsonTable(input) {
    console.log("<table>");
    input.forEach(element => {
        let person = JSON.parse(element);
        console.log("\t<tr>");
        for (const key in person) {
            let value = person[key];
            console.log(`\t\t<td>${value}</td>`);
        }
        console.log("\t</tr>");
    });
    console.log("</table>");
}

jsonTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
);