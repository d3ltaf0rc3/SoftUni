function timeToWalk(steps, length, speed) {
    steps = Number(steps);
    length = Number(length);
    speed = Number(speed) / 3.6;
    
    let distance = steps * length;
    let time = distance / speed;
    let rest = Math.floor(distance / 500);
    
    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);
    
    console.log(`${timeHr < 10 ? 0 : ""}${timeHr}:${timeMin + rest < 10 ? 0 : ""}${timeMin + rest}:${timeSec < 10 ? 0 : ""}${timeSec}`);
}

timeToWalk(2564, 0.70, 5.5);