function personalTitles (input) {
    let age = Number(input.shift());
    let gender = input.shift();

    if (age >= 16){
        if (gender == "m"){
            console.log("Mr.");
        }
        else{
            console.log("Ms.")
        }
    }
    else{
        if (gender == "m"){
            console.log("Master");
        }
        else{
            console.log("Miss")
        }
    }
}

personalTitles([16,"f"]);