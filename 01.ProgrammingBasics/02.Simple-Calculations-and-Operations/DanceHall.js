function DanceHall(input){
    let length = Number(input.shift());
    let width = Number(input.shift());
    let wardrobeSide = Number(input.shift());

    let hallArea = length * width;
    let benchArea = hallArea / 10;
    let wardrobeArea = wardrobeSide * wardrobeSide;
    let availableArea = hallArea - (benchArea + wardrobeArea);

    let people = availableArea / 0.704;

    console.log(Math.floor(people));
}

DanceHall(["50", "25", "2"]);