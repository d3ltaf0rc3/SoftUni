function city(name, area, population, country, postCode) {
    let city = { name, area, population, country, postCode };
    for (const key in city) {
        const element = city[key];
        console.log(`${key} -> ${element}`);
    }
}

city("Sofia", " 492", "1238438", "Bulgaria", "1000");