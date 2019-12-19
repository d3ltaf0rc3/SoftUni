function neighborhoods(input) {
    let list = input.shift().split(", ");
    let neighborhoods = {};
    list.forEach(element => {
        neighborhoods[element] = [];
    });
    input.forEach(el => {
        let [neighborhood, name] = el.split(" - ");
        if (neighborhoods.hasOwnProperty(neighborhood)) {
            neighborhoods[neighborhood].push(name);
        }
    });
    let sorted = Array.from(Object.entries(neighborhoods))
        .sort((a, b) => b[1].length - a[1].length);
    for (const iterator of sorted) {
        let [street, inhabitants] = iterator;
        console.log(`${street}: ${inhabitants.length}`);
        inhabitants.forEach(el => console.log(`--${el}`));
    }
}

neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']);