function EqualWords(input){
    let wordA = input.shift();
    let wordB = input.shift();

    wordA = wordA.toLowerCase();
    wordB = wordB.toLowerCase();

    if (wordA == wordB){
        console.log("yes");
    }
    else{
        console.log("no");
    }
}

EqualWords(["softuni", "SoftUni"]);