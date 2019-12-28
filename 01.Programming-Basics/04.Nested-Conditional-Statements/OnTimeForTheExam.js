function onTime(input) {
    let examHour = Number(input.shift());
    let examMinutes = Number(input.shift());
    let studentHour = Number(input.shift());
    let studentMinutes = Number(input.shift());

    let examHoursInMins = examHour * 60;
    let studentHoursInMins = studentHour * 60;
    let examTotalMins = examHoursInMins + examMinutes;
    let studentTotalMins = studentHoursInMins + studentMinutes;
    let differenceMins = examTotalMins - studentTotalMins;

    if (differenceMins >= 0 && differenceMins <= 30) {
        console.log(`On time`);
    } else if (differenceMins > 30) {
        console.log(`Early`);
    } else if (differenceMins < 0) {
        console.log(`Late`);
    }

    if (differenceMins > 0 && differenceMins < 60) {
        console.log(`${differenceMins} minutes before the start`);
    } else if (differenceMins >= 60) {
        let hour = Math.trunc(differenceMins / 60);
        let min = differenceMins % 60;
        if (min < 10) {
            console.log(`${hour}:0${min} hours before the start`);
        } else {
            console.log(`${hour}:${min} hours before the start`);
        }
    } else if (differenceMins < 0 && differenceMins > -60) {
        console.log(`${Math.abs(differenceMins)} minutes after the start`);
    } else if (differenceMins <= -60) {
        let hour = Math.trunc(Math.abs(differenceMins / 60));
        let min = Math.abs(differenceMins % 60);
        if (min < 10) {
            console.log(`${hour}:0${min} hours after the start`);
        } else {
            console.log(`${hour}:${min} hours after the start`);
        }
    } else {

    }
}

onTime([11, 30, 12, 29]);