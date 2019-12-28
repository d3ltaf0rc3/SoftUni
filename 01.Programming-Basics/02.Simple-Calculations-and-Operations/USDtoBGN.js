function USDtoBGN(input){
    let USD = Number(input.shift());

    let BGN =  USD * 1.79549;

    console.log(BGN.toFixed(2));
}

USDtoBGN(["20"]);