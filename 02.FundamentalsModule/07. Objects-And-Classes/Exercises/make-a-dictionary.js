function makeADictionary(input) {
    const dictionary = {};
    const ordered = {};
    for (let i = 0; i < input.length; i++) {
        let word = JSON.parse(input[i]);
        let key = Object.keys(word);
        let value = Object.values(word);
        dictionary[key[0]] = value[0];
    }
    Object.keys(dictionary).sort().forEach(function (key) {
        ordered[key] = dictionary[key];
    });
    for (let [key, value] of Object.entries(ordered)) {
        Object.entries(ordered);
        console.log(`Term: ${key} => Definition: ${value}`);
    }
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);
