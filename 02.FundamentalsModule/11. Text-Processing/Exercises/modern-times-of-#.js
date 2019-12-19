function modernTimes(sentence) {
    let regexp = /#[a-zA-Z]/;
    let special = sentence.split(" ").filter(x => regexp.test(x));
    
    special.forEach(element => {
        let noHash = element.substr(1);
        console.log(noHash);
    });
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');