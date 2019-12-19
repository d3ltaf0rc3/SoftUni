function sortBy2(strings) {
    strings.sort((a, b) => {
        let result = a.length - b.length;
        if (result === 0) {
            return a.localeCompare(b);
        } else {
            return result;
        }
    });

    strings.forEach(element => {
        console.log(element);
    });
}

sortBy2(["test", "Deny", "omen", "Default"]);