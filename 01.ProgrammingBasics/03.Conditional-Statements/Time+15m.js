function timePlus15(input){
    let hour = Number(input.shift());
    let minutes = Number(input.shift());
    
    let totalMinutes = minutes + 15;

    if (totalMinutes <= 59){
        console.log(`${hour}:${totalMinutes}`);  
    }
    else if(totalMinutes >= 60){
        let mins = totalMinutes - 60;
        
        if (mins <= 9){
        console.log(`${hour + 1}:0${mins}`);
        }
        else {
            console.log(`${hour + 1}:${mins}`);
        }
    }
}

timePlus15(["23", "59"]);