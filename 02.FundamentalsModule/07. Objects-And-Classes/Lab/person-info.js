function personInfo(firstName, lastName, age) {
    const obj = { firstName, lastName, age };
    for (const key in obj) {
        const element = obj[key];
        console.log(`${key}: ${element}`);
    }
}

personInfo("Peter", "Pan", "20");