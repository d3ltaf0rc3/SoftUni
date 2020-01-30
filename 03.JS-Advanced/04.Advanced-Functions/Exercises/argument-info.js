function displayInfo(...args) {
    let info = {};
    
    args.forEach(element => {
        let type = typeof element;
        
        if (info.hasOwnProperty(type)){
            info[type].push(element);
        } else {
            info[type] = [element];
        }
        console.log(`${type}: ${element}`);
    });
    
    let keys = Object.keys(info);
    keys.sort((a,b) => info[b].length - info[a].length);
    
    for (const iterator of keys) {
        console.log(`${iterator} = ${info[iterator].length}`);
    }
}

displayInfo(42, 'cat', 15, 'kitten', 'tomcat');
