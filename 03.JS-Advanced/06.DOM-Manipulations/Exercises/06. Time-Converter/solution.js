function attachEventsListeners() {
    let daysBtn = document.getElementById("daysBtn");
    let hoursBtn = document.getElementById("hoursBtn");
    let minutesBtn = document.getElementById("minutesBtn");
    let secondsBtn = document.getElementById("secondsBtn");

    daysBtn.addEventListener("click", () => {
        let input = document.getElementById("days").value;
        document.getElementById("hours").value = input * 24;
        document.getElementById("minutes").value = input * 1440;
        document.getElementById("seconds").value = input * 86400;
    });

    hoursBtn.addEventListener("click", () => {
        let input = document.getElementById("hours").value;
        document.getElementById("days").value = input / 24;
        document.getElementById("minutes").value = input * 60;
        document.getElementById("seconds").value = input * 3600;
    });

    minutesBtn.addEventListener("click", () => {
        let input = document.getElementById("minutes").value;
        document.getElementById("days").value = input / 1440;
        document.getElementById("hours").value = input / 60;
        document.getElementById("seconds").value = input * 60;
    });

    secondsBtn.addEventListener("click", () => {
        let input = document.getElementById("seconds").value;
        document.getElementById("days").value = input / 86400;
        document.getElementById("hours").value = input / 3600;
        document.getElementById("minutes").value = input / 60;
    });
}